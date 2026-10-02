import {REGIONS,normalizeSearchRow,exactCharacterName} from "../../my-character/character-model.mjs";
export const dynamic="force-dynamic";
const json=(body,status=200)=>Response.json(body,{status,headers:{"Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
async function requestRows(cfg,params){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),10000);
  try{
    const res=await fetch(cfg.searchBase+"?"+params,{cache:"no-store",signal:controller.signal,headers:{"Accept":"application/json","User-Agent":"Mozilla/5.0 (compatible; DAEVEXUS-Character-Lab/1.0)","Referer":cfg.referer}});
    if(!res.ok)throw new Error("Official search returned "+res.status+".");
    const body=await res.json();return Array.isArray(body?.list)?body.list:[];
  }finally{clearTimeout(timer);}
}
export async function GET(request){
  try{
    const q=new URL(request.url).searchParams,region=q.get("region")||"naw",cfg=REGIONS[region],keyword=(q.get("keyword")||"").trim().slice(0,80);
    if(!cfg)return json({ok:false,error:"Unsupported region."},400);
    if(keyword.length<2)return json({ok:false,error:"Enter at least 2 characters."},400);
    const base=new URLSearchParams({keyword,page:"1",size:"20"});
    const serverId=Number(q.get("serverId")||0);if(serverId>0)base.set("serverId",String(serverId));
    let rows=[];
    if(cfg.kind==="global"){base.set("region",cfg.shard);base.set("localeInfo",cfg.lang);const race=Number(q.get("race")||0);if(race===1||race===2)base.set("race",String(race));rows=await requestRows(cfg,base);}
    else{
      const race=Number(q.get("race")||0);
      if(race===1||race===2){base.set("race",String(race));rows=await requestRows(cfg,base);}
      else{
        const one=new URLSearchParams(base),two=new URLSearchParams(base);one.set("race","1");two.set("race","2");
        const both=await Promise.all([requestRows(cfg,one),requestRows(cfg,two)]);rows=[...both[0],...both[1]];
      }
    }
    const seen=new Set(),results=[];
    for(const row of rows){const item=normalizeSearchRow(row,region);if(!item||!exactCharacterName(item.name,keyword))continue;const key=item.serverId+":"+item.characterId;if(seen.has(key))continue;seen.add(key);results.push(item);}
    return json({ok:true,results:results.slice(0,10),exact:true});
  }catch(error){return json({ok:false,error:error?.name==="AbortError"?"Official character search timed out.":(error?.message||"Character search failed.")},502);}
}
