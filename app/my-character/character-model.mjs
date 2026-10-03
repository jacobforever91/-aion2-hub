/** Pure helpers for the public AION 2 character-link lab. No credentials or cookies. */
export const REGIONS = {
  naw:{id:"naw",label:"Global · North America West",kind:"global",shard:"naw",lang:"en-US",apiBase:"https://aion2.plaync.com",searchBase:"https://api-search.plaync.com/aion2global/search/v2/character",profileBase:"https://aion2.plaync.com/en-us/characters",referer:"https://aion2.plaync.com/en-us/characters/index"},
  nae:{id:"nae",label:"Global · North America East",kind:"global",shard:"nae",lang:"en-US",apiBase:"https://aion2.plaync.com",searchBase:"https://api-search.plaync.com/aion2global/search/v2/character",profileBase:"https://aion2.plaync.com/en-us/characters",referer:"https://aion2.plaync.com/en-us/characters/index"},
  eu:{id:"eu",label:"Global · Europe",kind:"global",shard:"eu",lang:"en-US",apiBase:"https://aion2.plaync.com",searchBase:"https://api-search.plaync.com/aion2global/search/v2/character",profileBase:"https://aion2.plaync.com/en-us/characters",referer:"https://aion2.plaync.com/en-us/characters/index"},
  sa:{id:"sa",label:"Global · South America",kind:"global",shard:"la",lang:"en-US",apiBase:"https://aion2.plaync.com",searchBase:"https://api-search.plaync.com/aion2global/search/v2/character",profileBase:"https://aion2.plaync.com/en-us/characters",referer:"https://aion2.plaync.com/en-us/characters/index"},
  asia:{id:"asia",label:"Global · Asia",kind:"global",shard:"as",lang:"en-US",apiBase:"https://aion2.plaync.com",searchBase:"https://api-search.plaync.com/aion2global/search/v2/character",profileBase:"https://aion2.plaync.com/en-us/characters",referer:"https://aion2.plaync.com/en-us/characters/index"},
  tw:{id:"tw",label:"Taiwan · Lab",kind:"tw",shard:"",lang:"zh-TW",apiBase:"https://tw.ncsoft.com/aion2",searchBase:"https://tw.ncsoft.com/aion2/api/search/aion2tw/search/v2/character",profileBase:"https://tw.ncsoft.com/aion2/characters",referer:"https://tw.ncsoft.com/aion2/characters/index"}
};
const safeDecode=value=>{try{return decodeURIComponent(String(value||""));}catch{return String(value||"");}};
const cleanString=(value,max=300)=>typeof value==="string"?value.slice(0,max):"";
const hasCjk=value=>/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/u.test(String(value||""));
const englishText=(value,fallback="",max=300)=>{
  const text=cleanString(value,max).trim();
  return text&&!hasCjk(text)?text:fallback;
};
const englishList=value=>list(value).map(v=>englishText(typeof v==="string"?v:v?.desc,"",500)).filter(Boolean);
const number=value=>Number.isFinite(Number(value))?Number(value):0;
const bool=value=>value===true||value===1||value==="1";
export function regionFromServerId(serverId){
  const n=number(serverId);
  if(n>=1100&&n<1200)return "nae";
  if(n>=1200&&n<1300)return "naw";
  if(n>=1300&&n<1400)return "eu";
  if(n>=1400&&n<1500)return "sa";
  if(n>=1500&&n<1600)return "asia";
  return "";
}
export function parseProfileUrl(input){
  let url;
  try{url=new URL(String(input||"").trim());}catch{throw new Error("Paste a valid official AION 2 character URL.");}
  const parts=url.pathname.split("/").filter(Boolean);
  if(url.hostname==="tw.ncsoft.com"){
    const i=parts.indexOf("characters");
    const serverId=number(parts[i+1]),characterId=safeDecode(parts[i+2]);
    if(i<0||!serverId||!characterId||characterId==="index")throw new Error("This Taiwan URL does not point to a character profile.");
    return {region:"tw",serverId,characterId,profileUrl:buildProfileUrl("tw",serverId,characterId)};
  }
  if(url.hostname==="aion2.plaync.com"){
    const i=parts.indexOf("characters");
    const serverId=number(parts[i+1]),characterId=safeDecode(parts[i+2]);
    if(i<0||!serverId||!characterId||characterId==="index")throw new Error("This Global URL does not point to a character profile.");
    const region=regionFromServerId(serverId);
    if(!region)throw new Error("The profile is valid, but DAEVEXUS cannot map this server to a Global shard yet.");
    return {region,serverId,characterId,profileUrl:buildProfileUrl(region,serverId,characterId)};
  }
  throw new Error("Only official aion2.plaync.com and tw.ncsoft.com profile URLs are accepted.");
}
export function buildProfileUrl(region,serverId,characterId){
  const cfg=REGIONS[region];if(!cfg)throw new Error("Unsupported region.");
  return cfg.profileBase+"/"+Number(serverId)+"/"+encodeURIComponent(safeDecode(characterId));
}
const portrait=value=>{
  const v=cleanString(value,1000);if(!v)return "";
  if(/^https:\/\//i.test(v))return v;
  return "https://profileimg.plaync.com"+(v.startsWith("/")?v:"/"+v);
};
const asset=value=>{
  const v=cleanString(value,1000);if(!v)return "";
  if(/^https:\/\//i.test(v))return v;
  const name=v.replace(/^\/+/, "");
  return "https://assets.playnccdn.com/static-aion2-gamedata/resources/"+name;
};
const list=value=>Array.isArray(value)?value:[];
export function normalizeSearchRow(row,region){
  const serverId=number(row?.serverId);
  const characterId=safeDecode(row?.characterId);
  if(!serverId||!characterId)return null;
  return {region,serverId,characterId,name:cleanString(row?.name||row?.characterName,120).replace(/<[^>]*>/g,""),serverName:cleanString(row?.serverName,120),race:number(row?.race??row?.raceId),level:number(row?.level??row?.characterLevel),profileImage:portrait(row?.profileImageUrl||row?.profileImage),profileUrl:buildProfileUrl(region,serverId,characterId)};
}
export function normalizeCharacter(info,equipment,ref){
  const p=info?.profile||{};
  const stats=list(info?.stat?.statList).map(x=>{
    const type=englishText(x?.type,"Stat",80);
    return {type,name:englishText(x?.name,type,120),value:number(x?.value),effects:englishList(x?.statSecondList)};
  });
  const equipmentList=list(equipment?.equipment?.equipmentList).map(x=>{
    const id=number(x?.id),slotPos=number(x?.slotPos);
    return {slotPos,slotName:englishText(x?.slotPosName,slotPos?("Slot "+slotPos):"Equipment",80),id,name:englishText(x?.name,id?("Item "+id):"Equipment",180),grade:englishText(x?.grade,"",60),enchantLevel:number(x?.enchantLevel),exceedLevel:number(x?.exceedLevel),icon:asset(x?.icon)};
  }).filter(x=>x.id||x.name);
  const skills=list(equipment?.skill?.skillList).map(x=>{
    const id=number(x?.id),category=englishText(x?.category,"Skill",80);
    return {id,name:englishText(x?.name,id?("Skill "+id):"Skill",160),category,level:number(x?.skillLevel),needLevel:number(x?.needLevel),acquired:bool(x?.acquired),equipped:bool(x?.equip),icon:asset(x?.icon)};
  }).filter(x=>x.id||x.name);
  const pet=equipment?.petwing?.pet?{id:number(equipment.petwing.pet.id),name:englishText(equipment.petwing.pet.name,"Pet",160),level:number(equipment.petwing.pet.level),icon:asset(equipment.petwing.pet.icon)}:null;
  const wing=equipment?.petwing?.wing?{id:number(equipment.petwing.wing.id),name:englishText(equipment.petwing.wing.name,"Wings",160),grade:englishText(equipment.petwing.wing.grade,"",60),enchantLevel:number(equipment.petwing.wing.enchantLevel),icon:asset(equipment.petwing.wing.icon)}:null;
  const wingSkin=equipment?.petwing?.wingSkin?{id:number(equipment.petwing.wingSkin.id),name:englishText(equipment.petwing.wingSkin.name,"Wing Skin",160),grade:englishText(equipment.petwing.wingSkin.grade,"",60),enchantLevel:number(equipment.petwing.wingSkin.enchantLevel),icon:asset(equipment.petwing.wingSkin.icon)}:null;
  const boards=list(info?.daevanion?.boardList).map(x=>({id:number(x?.id),name:englishText(x?.name,"Daevanion Board",120),open:bool(x?.open),openNodes:number(x?.openNodeCount),totalNodes:number(x?.totalNodeCount),openPercent:number(x?.openPercent),icon:asset(x?.icon)}));
  const titles=info?.title||{};
  return {
    source:"NC public character API",region:ref.region,serverId:ref.serverId,characterId:ref.characterId,profileUrl:buildProfileUrl(ref.region,ref.serverId,ref.characterId),
    profile:{name:cleanString(p?.characterName||p?.name,120),level:number(p?.characterLevel??p?.level),className:englishText(p?.className,"Class",120),gender:englishText(p?.genderName,"",80),raceId:number(p?.raceId),serverName:englishText(p?.serverName,ref.serverId?("Server "+ref.serverId):"Server",120),guildName:englishText(p?.regionName,"",120),combatPower:number(p?.combatPower),titleName:englishText(p?.titleName,"",180),image:portrait(p?.profileImage)},
    stats,equipment:equipmentList,skins:list(equipment?.equipment?.skinList).map(x=>({slotPos:number(x?.slotPos),slotName:englishText(x?.slotPosName,"Equipment",80),id:number(x?.id),name:englishText(x?.name,number(x?.id)?("Item "+number(x?.id)):"Equipment",180),grade:englishText(x?.grade,"",60),enchantLevel:number(x?.enchantLevel),exceedLevel:number(x?.exceedLevel),icon:asset(x?.icon)})),
    skills,pet,wing,wingSkin,daevanion:boards,
    titles:{owned:number(titles?.ownedCount),total:number(titles?.totalCount)},
    rankings:list(info?.ranking?.rankingList).map(x=>({content:englishText(x?.rankingContentsName,"Ranking",120),rank:number(x?.rank),point:Number(x?.point)||0,grade:englishText(x?.gradeName,"",80)}))
  };
}


export function exactCharacterName(candidate, keyword){
  const norm=value=>String(value||"").normalize("NFKC").trim().toLocaleLowerCase("en-US");
  return !!norm(candidate)&&norm(candidate)===norm(keyword);
}


const lineDescriptions=value=>englishList(value);
const statRows=value=>list(value).map(row=>({
  id:cleanString(row?.id,120),
  name:englishText(row?.name,englishText(row?.id,"Stat",120),160),
  value:cleanString(row?.value,120),
  minValue:cleanString(row?.minValue,120),
  extra:cleanString(row?.extra,120),
  exceed:bool(row?.exceed)
})).filter(row=>row.id||row.name);

export function resolveOfficialLevel(profileLevel,searchLevel){
  const profile=number(profileLevel),search=number(searchLevel);
  const readings=[profile,search].filter(value=>value>0);
  return {
    level:readings.length?Math.max(...readings):0,
    profile:profile||null,
    search:search||null,
    mismatch:profile>0&&search>0&&profile!==search,
    resolution:profile>0&&search>0?(profile===search?"official-agreement":"highest-official-reading"):(search>0?"search-only":profile>0?"profile-only":"missing")
  };
}

export function normalizeEquippedItemDetail(raw){
  if(!raw||typeof raw!=="object")return null;
  return {
    id:number(raw.id),name:englishText(raw.name,number(raw.id)?("Item "+number(raw.id)):"Equipment",180),grade:englishText(raw.grade,"",60),gradeName:englishText(raw.gradeName,"",80),
    categoryName:englishText(raw.categoryName,"Equipment",120),type:englishText(raw.type,"",80),icon:asset(raw.icon),
    itemLevel:number(raw.level),equipLevel:number(raw.equipLevel),enchantLevel:number(raw.enchantLevel),
    maxEnchantLevel:number(raw.maxEnchantLevel),maxExceedLevel:number(raw.maxExceedEnchantLevel),
    raceName:englishText(raw.raceName,"",80),classNames:list(raw.classNames).map(v=>englishText(v,"",100)).filter(Boolean),
    tradable:bool(raw.tradable),soulBindRate:cleanString(raw.soulBindRate,80),
    mainStats:statRows(raw.mainStats),subStats:statRows(raw.subStats),
    subSkills:list(raw.subSkills).map(skill=>({id:number(skill?.id),name:englishText(skill?.name,number(skill?.id)?("Skill "+number(skill?.id)):"Skill",160),level:number(skill?.level),icon:asset(skill?.icon)})).filter(skill=>skill.id||skill.name),
    magicStoneSlots:number(raw.magicStoneSlotCount),
    magicStones:list(raw.magicStoneStat).map(stone=>({slotPos:number(stone?.slotPos),id:cleanString(stone?.id,120),name:englishText(stone?.name,"Magic Stone",120),value:cleanString(stone?.value,120),grade:englishText(stone?.grade,"",60),icon:asset(stone?.icon)})),
    godStoneSlots:number(raw.godStoneSlotCount),
    godStones:list(raw.godStoneStat).map(stone=>({slotPos:number(stone?.slotPos),name:englishText(stone?.name,"Godstone",120),desc:englishText(stone?.desc,"",500),grade:englishText(stone?.grade,"",60),icon:asset(stone?.icon)})),
    costumes:list(raw.costumes).map(v=>englishText(v,"",200)).filter(Boolean),
    sources:list(raw.sources).map(v=>englishText(v,"",200)).filter(Boolean)
  };
}

export function normalizeDaevanionDetail(raw,summary={}){
  if(!raw||typeof raw!=="object")return null;
  return {
    id:number(summary.id),
    name:englishText(summary.name,"Daevanion Board",120),
    nodes:list(raw.nodeList).map(node=>({
      id:number(node?.nodeId),name:englishText(node?.name,"Daevanion Node",160),grade:englishText(node?.grade,"",60),type:englishText(node?.type,"",80),
      row:number(node?.row),col:number(node?.col),open:bool(node?.open),icon:asset(node?.icon),effects:lineDescriptions(node?.effectList)
    })).filter(node=>node.id),
    openSkillEffects:lineDescriptions(raw.openSkillEffectList),
    openStatEffects:lineDescriptions(raw.openStatEffectList)
  };
}

export function weaponDamageFromEquipment(equipment){
  for(const item of list(equipment)){
    for(const stat of list(item?.detail?.mainStats)){
      const key=(stat.id+" "+stat.name).toLowerCase();
      if(key.includes("weaponfixingdamage")||key.includes("weapon damage")||stat.name.toLowerCase()==="attack"){
        return {itemId:item.id,itemName:item.name,min:cleanString(stat.minValue,120),max:cleanString(stat.value,120),extra:cleanString(stat.extra,120)};
      }
    }
  }
  return null;
}


export function classifyCharacterSkill(category){
  const value=String(category||"").normalize("NFKC").trim().toLowerCase();
  const compact=value.replace(/[^a-z0-9]+/g,"");
  if(value.includes("stigma")||compact==="dp")return "stigma";
  if(value.includes("passive"))return "passive";
  return "active";
}

export function buildCharacterResearchSample(character,syncedAt=""){
  const skills=Array.isArray(character?.skills)?character.skills:[];
  const equipment=Array.isArray(character?.equipment)?character.equipment:[];
  const boards=Array.isArray(character?.daevanion)?character.daevanion:[];
  const categories={active:0,passive:0,stigma:0};
  skills.forEach(skill=>{const key=classifyCharacterSkill(skill?.category);categories[key]=(categories[key]||0)+1;});
  return {
    schemaVersion:1,
    source:"NC public character API",
    syncedAt:String(syncedAt||""),
    region:String(character?.region||""),
    serverId:Number(character?.serverId)||0,
    characterId:String(character?.characterId||""),
    className:String(character?.profile?.className||""),
    level:Number(character?.profile?.level)||0,
    equipmentSlots:equipment.map(item=>({slotPos:Number(item?.slotPos)||0,slotName:String(item?.slotName||""),id:Number(item?.id)||0,grade:String(item?.grade||"")})),
    skillCategories:categories,
    skills:skills.map(skill=>({id:Number(skill?.id)||0,category:String(skill?.category||""),normalizedCategory:classifyCharacterSkill(skill?.category),level:Number(skill?.level)||0,needLevel:Number(skill?.needLevel)||0,acquired:skill?.acquired===true,equipped:skill?.equipped===true})),
    pet:character?.pet?{id:Number(character.pet.id)||0,level:Number(character.pet.level)||0}:null,
    wing:character?.wing?{id:Number(character.wing.id)||0,grade:String(character.wing.grade||""),enchantLevel:Number(character.wing.enchantLevel)||0}:null,
    daevanion:boards.map(board=>({id:Number(board?.id)||0,name:String(board?.name||""),openNodes:Number(board?.openNodes)||0,totalNodes:Number(board?.totalNodes)||0,detailNodes:Array.isArray(board?.detail?.nodes)?board.detail.nodes.length:0})),
  };
}
