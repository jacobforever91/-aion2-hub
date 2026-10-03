import {REGIONS,parseProfileUrl,normalizeCharacter,normalizeSearchRow,exactCharacterName,resolveOfficialLevel,normalizeEquippedItemDetail,normalizeDaevanionDetail,weaponDamageFromEquipment} from "../../my-character/character-model.mjs";
export const dynamic="force-dynamic";
const json=(body,status=200)=>Response.json(body,{status,headers:{"Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
async function officialJson(url,cfg,timeout=12000){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeout);
  try{
    const res=await fetch(url,{cache:"no-store",redirect:"follow",signal:controller.signal,headers:{"Accept":"application/json","User-Agent":"Mozilla/5.0 (compatible; DAEVEXUS-Character-Lab/1.1)","Referer":cfg.referer}});
    if(!res.ok)throw new Error("Official character service returned "+res.status+".");
    const type=res.headers.get("content-type")||"";if(!type.includes("json"))throw new Error("Official character service did not return JSON.");
    return await res.json();
  }finally{clearTimeout(timer);}
}
const decoded=value=>{try{return decodeURIComponent(String(value||""));}catch{return String(value||"");}};
async function mapLimit(items,limit,worker){
  const out=new Array(items.length);let cursor=0;
  async function run(){while(true){const index=cursor++;if(index>=items.length)return;out[index]=await worker(items[index],index);}}
  await Promise.all(Array.from({length:Math.min(limit,items.length)},run));return out;
}
async function exactSearchReading(cfg,character){
  if(!character.profile.name)return {row:null,error:"Character name missing; level cross-check skipped."};
  const params=new URLSearchParams({keyword:character.profile.name,page:"1",size:"40",serverId:String(character.serverId)});
  if(cfg.kind==="global"){params.set("region",cfg.shard);params.set("localeInfo",cfg.lang);}
  else if(character.profile.raceId===1||character.profile.raceId===2)params.set("race",String(character.profile.raceId));
  try{
    const body=await officialJson(cfg.searchBase+"?"+params,cfg,9000),rows=Array.isArray(body?.list)?body.list:[];
    const normalized=rows.map(row=>normalizeSearchRow(row,character.region)).filter(Boolean);
    const row=normalized.find(row=>row.serverId===character.serverId&&row.characterId===character.characterId&&exactCharacterName(row.name,character.profile.name))
      || normalized.find(row=>row.serverId===character.serverId&&exactCharacterName(row.name,character.profile.name))
      || null;
    return {row,error:null};
  }catch(error){return {row:null,error:"Search level cross-check unavailable: "+(error?.message||"unknown error")};}
}
async function equipmentDetails(cfg,ref,rawSlots){
  const errors=[];
  const rows=await mapLimit(rawSlots.slice(0,30),5,async slot=>{
    try{
      const params=new URLSearchParams({lang:cfg.lang,serverId:String(ref.serverId),characterId:ref.characterId,id:String(slot.id||0),enchantLevel:String(slot.enchantLevel||0),slotPos:String(slot.slotPos||0)});
      if(cfg.kind==="global")params.set("region",cfg.shard);
      const raw=await officialJson(cfg.apiBase+"/api/character/equipment/item?"+params,cfg,8000);
      return {key:String(slot.slotPos)+":"+String(slot.id),detail:normalizeEquippedItemDetail(raw)};
    }catch(error){errors.push("Item detail "+(slot.name||slot.id||slot.slotPos)+": "+(error?.message||"unavailable"));return null;}
  });
  return {map:new Map(rows.filter(Boolean).map(row=>[row.key,row.detail])),errors};
}
async function boardDetails(cfg,ref,rawBoards){
  const errors=[];
  const rows=await mapLimit(rawBoards.slice(0,12),4,async board=>{
    try{
      const params=new URLSearchParams({lang:cfg.lang,serverId:String(ref.serverId),characterId:ref.characterId,boardId:String(board.id||0)});
      if(cfg.kind==="global")params.set("region",cfg.shard);
      const raw=await officialJson(cfg.apiBase+"/api/character/daevanion/detail?"+params,cfg,8000);
      return {id:Number(board.id),detail:normalizeDaevanionDetail(raw,board)};
    }catch(error){errors.push("Daevanion "+(board.name||board.id)+": "+(error?.message||"unavailable"));return null;}
  });
  return {map:new Map(rows.filter(Boolean).map(row=>[row.id,row.detail])),errors};
}
export async function GET(request){
  try{
    const q=new URL(request.url).searchParams;
    let ref;
    if(q.get("profileUrl"))ref=parseProfileUrl(q.get("profileUrl"));
    else{
      const region=q.get("region")||"",serverId=Number(q.get("serverId")),characterId=decoded(q.get("characterId")||"");
      if(!REGIONS[region]||!serverId||!characterId)return json({ok:false,error:"Region, server and character ID are required."},400);
      ref={region,serverId,characterId};
    }
    const cfg=REGIONS[ref.region],params=new URLSearchParams({lang:cfg.lang,serverId:String(ref.serverId),characterId:ref.characterId});
    if(cfg.kind==="global")params.set("region",cfg.shard);
    const [info,equipment]=await Promise.all([
      officialJson(cfg.apiBase+"/api/character/info?"+params,cfg),
      officialJson(cfg.apiBase+"/api/character/equipment?"+params,cfg)
    ]);
    const character=normalizeCharacter(info,equipment,ref);
    if(!character.profile.name)return json({ok:false,error:"The official service returned no character profile."},404);

    const rawSlots=Array.isArray(equipment?.equipment?.equipmentList)?equipment.equipment.equipmentList:[];
    const rawBoards=Array.isArray(character.daevanion)?character.daevanion:[];
    const unlockedBoards=rawBoards.filter(board=>board.unlocked||board.open||Number(board.openNodes)>0||Number(board.openPercent)>0);
    const detailBoards=unlockedBoards.length?unlockedBoards:rawBoards;
    const [searchReading,itemPack,boardPack]=await Promise.all([
      exactSearchReading(cfg,character),
      equipmentDetails(cfg,ref,rawSlots),
      boardDetails(cfg,ref,detailBoards)
    ]);

    const level=resolveOfficialLevel(character.profile.level,searchReading.row?.level);
    character.profile.level=level.level||character.profile.level;
    character.levelSources=level;
    character.equipment=character.equipment.map(item=>({...item,detail:itemPack.map.get(String(item.slotPos)+":"+String(item.id))||null}));
    character.daevanion=character.daevanion.map(board=>({...board,detail:boardPack.map.get(Number(board.id))||null}));
    character.weaponDamage=weaponDamageFromEquipment(character.equipment);
    const warnings=[searchReading.error,...itemPack.errors,...boardPack.errors].filter(Boolean);
    if(level.mismatch)warnings.unshift("Official level readings disagree: profile "+level.profile+", exact search "+level.search+". DAEVEXUS shows the higher official reading and keeps both values visible.");
    character.sync={
      mode:"deep-public-snapshot",
      official:true,
      levelCrossChecked:!!searchReading.row,
      equipmentDetails:{loaded:character.equipment.filter(item=>item.detail).length,total:character.equipment.length},
      daevanionBoards:{known:rawBoards.length,unlocked:unlockedBoards.length||rawBoards.length},
      daevanionDetails:{loaded:detailBoards.filter(board=>boardPack.map.get(Number(board.id))).length,total:detailBoards.length},
      warnings
    };
    return json({ok:true,character,syncedAt:new Date().toISOString()});
  }catch(error){
    const message=error?.name==="AbortError"?"Official character service timed out.":(error?.message||"Character sync failed.");
    return json({ok:false,error:message},502);
  }
}
