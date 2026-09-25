const source="https://aion2hub.com";
export const maxDuration=30;

async function readSource(path){
  const response=await fetch(`${source}${path}`,{headers:{"user-agent":"Mozilla/5.0 (compatible; AION2Vision/1.0)",accept:"text/html"},next:{revalidate:900},signal:AbortSignal.timeout(12000)});
  if(!response.ok)throw new Error(`Arcana reference returned ${response.status}`);
  return response.text();
}

function plain(value){
  return (value||"").replace(/<!--\s*-->/g," ").replace(/<br\s*\/?>/gi," ").replace(/<[^>]*>/g," ")
    .replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')
    .replace(/&#39;|&#x27;/gi,"'").replace(/&nbsp;/g," ").replace(/&#(\d+);/g,(_match,code)=>String.fromCodePoint(Number(code))).replace(/\s+/g," ").trim();
}

function pageInfo(html){
  const pages=[...html.matchAll(/href="[^"]*cat=Arcana[^\"]*page=(\d+)[^\"]*"/gi)].map(([,page])=>Number(page));
  return {pages:Math.max(1,...pages)};
}

function getItems(html){
  const items=[];
  for(const [,attributes,id,anchor] of html.matchAll(/<a\b([^>]*href="\/database\/items\/(\d+)"[^>]*)>([\s\S]*?)<\/a>/gi)){
    const title=attributes.match(/\btitle="([^"]+)"/i)?.[1];
    const labels=[...anchor.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([,value])=>plain(value)).filter(Boolean);
    const grade=labels.find((label)=>["Common","Rare","Epic","Unique","Heroic","Special"].includes(label))||"";
    const name=title||labels.find((label)=>!["Common","Rare","Epic","Unique","Heroic","Special","GLOBAL","KR/TW"].includes(label))||plain(anchor);
    const icon=anchor.match(/<img\b[^>]*src="([^"]+)"/i)?.[1]||`/api/icon/items/${id}`;
    items.push({id,name,grade,icon:icon.startsWith("http")?icon:`${source}${icon}`});
  }
  return items;
}

function listPairs(listHtml){
  const pairs=[];
  for(const [,row] of (listHtml||"").matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)){
    const values=[...row.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([,value])=>plain(value)).filter(Boolean);
    if(values.length>1)pairs.push({label:values[0],value:values.slice(1).join(" · ")});
  }
  return pairs;
}

function getItemInfo(html,id){
  const name=plain(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
  const headerStart=html.indexOf("<h1"),statsEnd=html.indexOf(">Stats</div>");
  const header=headerStart>=0&&statsEnd>headerStart?html.slice(headerStart,statsEnd):"";
  const properties=[...header.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([,value])=>plain(value)).filter(Boolean);
  const read=(title)=>{
    const imprint=title==="Soul Imprint";
    const pattern=imprint
      ?/>Soul Imprint\s*(?:<span\b[^>]*>[\s\S]*?<\/span>)?<\/div>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i
      :/>Stats<\/div>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i;
    const match=html.match(pattern);
    return listPairs(match?.[1]);
  };
  const itemLevel=properties.find((value)=>/^Item Lv\s*\d+/i.test(value))?.match(/\d+/)?.[0]||"";
  const requiredLevel=properties.find((value)=>/^Requires Lv\s*\d+/i.test(value))?.match(/\d+/)?.[0]||"";
  const rarity=properties.find((value)=>["Common","Rare","Epic","Unique","Heroic","Special"].includes(value))||"";
  const setMatch=plain(html.match(/Set pieces\s*\(([\s\S]*?)\)/i)?.[0]||"").match(/Set pieces\s*\((\d+)\)/i);
  const imprints=read("Soul Imprint");
  const info={id,name,rarity,itemLevel,requiredLevel,stats:read("Stats"),imprints,setPieces:setMatch?.[1]||""};
  return info;
}

function isArcanaCard(item){
  return !/^Arcana\s*:/i.test(item.name)&&!/\(Bound\)/i.test(item.name)&&!/\bTraining Arcana\b/i.test(item.name);
}

export async function GET(request){
  const params=new URL(request.url).searchParams;
  const itemId=params.get("item");
  try{
    if(itemId){
      if(!/^\d{8,12}$/.test(itemId))return Response.json({error:"Invalid Arcana card."},{status:400});
      const html=await readSource(`/database/items/${itemId}`);
      const item=getItemInfo(html,itemId);
      if(!item.name)return Response.json({error:"Arcana card not found."},{status:404});
      return Response.json({...item,icon:`/api/arcana/icon/${itemId}`,region:"GLOBAL",snapshot:"2026-09-25",official:false},{headers:{"Cache-Control":"public, s-maxage=900, stale-while-revalidate=3600"}});
    }
    const firstHtml=await readSource("/database?cat=Arcana&region=global&page=1");
    const info=pageInfo(firstHtml);
    const pages=Math.max(1,Math.min(info.pages,10));
    const pageNumbers=Array.from({length:pages},(_,index)=>index+1);
    const htmlPages=await Promise.all(pageNumbers.map((page)=>page===1?Promise.resolve(firstHtml):readSource(`/database?cat=Arcana&region=global&page=${page}`)));
    const cards=htmlPages.flatMap(getItems).filter(isArcanaCard).map((card)=>({...card,icon:`/api/arcana/icon/${card.id}`,region:"GLOBAL"}));
    const unique=[...new Map(cards.map((card)=>[card.id,card])).values()];
    return Response.json({items:unique,total:unique.length,pages,region:"GLOBAL",snapshot:"2026-09-25",rarities:[...new Set(unique.map((card)=>card.grade).filter(Boolean))]},{headers:{"Cache-Control":"public, s-maxage=900, stale-while-revalidate=3600"}});
  }catch(error){
    console.error("Arcana lookup failed:",error);
    return Response.json({error:"The Arcana reference is temporarily unavailable."},{status:502});
  }
}
