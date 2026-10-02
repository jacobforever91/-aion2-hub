import {REGIONS,parseProfileUrl,normalizeCharacter} from "../../my-character/character-model.mjs";
export const dynamic="force-dynamic";
const json=(body,status=200)=>Response.json(body,{status,headers:{"Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
async function officialJson(url,cfg){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
  try{
    const res=await fetch(url,{cache:"no-store",redirect:"follow",signal:controller.signal,headers:{"Accept":"application/json","User-Agent":"Mozilla/5.0 (compatible; DAEVEXUS-Character-Lab/1.0)","Referer":cfg.referer}});
    if(!res.ok)throw new Error("Official character service returned "+res.status+".");
    const type=res.headers.get("content-type")||"";if(!type.includes("json"))throw new Error("Official character service did not return JSON.");
    return await res.json();
  }finally{clearTimeout(timer);}
}
export async function GET(request){
  try{
    const q=new URL(request.url).searchParams;
    let ref;
    if(q.get("profileUrl"))ref=parseProfileUrl(q.get("profileUrl"));
    else{
      const region=q.get("region")||"",serverId=Number(q.get("serverId")),characterId=decodeURIComponent(q.get("characterId")||"");
      if(!REGIONS[region]||!serverId||!characterId)return json({ok:false,error:"Region, server and character ID are required."},400);
      ref={region,serverId,characterId};
    }
    const cfg=REGIONS[ref.region],params=new URLSearchParams({lang:cfg.lang,serverId:String(ref.serverId),characterId:ref.characterId});
    if(cfg.kind==="global")params.set("region",cfg.shard);
    const [info,equipment]=await Promise.all([officialJson(cfg.apiBase+"/api/character/info?"+params,cfg),officialJson(cfg.apiBase+"/api/character/equipment?"+params,cfg)]);
    const character=normalizeCharacter(info,equipment,ref);
    if(!character.profile.name)return json({ok:false,error:"The official service returned no character profile."},404);
    return json({ok:true,character,syncedAt:new Date().toISOString()});
  }catch(error){
    const message=error?.name==="AbortError"?"Official character service timed out.":(error?.message||"Character sync failed.");
    return json({ok:false,error:message},502);
  }
}
