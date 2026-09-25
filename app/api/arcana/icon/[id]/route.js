export const revalidate=86400;

export async function GET(_request,{params}){
  const {id}=await params;
  if(!/^\d{8,12}$/.test(id||""))return new Response("Not found",{status:404});
  try{
    const response=await fetch(`https://aion2hub.com/api/icon/items/${id}`,{next:{revalidate:86400},signal:AbortSignal.timeout(10000)});
    if(!response.ok)return new Response("Not found",{status:404});
    const contentType=response.headers.get("content-type")||"image/webp";
    return new Response(response.body,{headers:{"Content-Type":contentType,"Cache-Control":"public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000"}});
  }catch(_error){
    return new Response("Icon unavailable",{status:502});
  }
}
