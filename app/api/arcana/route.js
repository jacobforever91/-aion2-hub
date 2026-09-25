import catalog from "../../arcana/arcana-data.json";

export function GET(request){
  const itemId=new URL(request.url).searchParams.get("item");
  if(itemId){
    const item=catalog.items.find((entry)=>entry.id===itemId);
    if(!item)return Response.json({error:"Arcana card not found."},{status:404});
    return Response.json(item,{headers:{"Cache-Control":"public, s-maxage=86400, stale-while-revalidate=604800"}});
  }
  const {items,snapshot,region}=catalog;
  return Response.json({items,total:items.length,region,snapshot,rarities:[...new Set(items.map((item)=>item.rarity))]},{headers:{"Cache-Control":"public, s-maxage=86400, stale-while-revalidate=604800"}});
}
