export async function GET(_request,{params}){
  const {id}=await params;
  if(!/^\d{8,12}$/.test(id||""))return new Response("Not found",{status:404});
  return Response.redirect(`https://aion2hub.com/api/icon/items/${id}`,307);
}
