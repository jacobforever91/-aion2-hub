import {classifyCharacterSkill} from "../my-character/character-model.mjs";

const text=value=>String(value??"").trim();
const normalized=value=>text(value).normalize("NFKC").toLowerCase().replace(/[^a-z0-9]+/g,"");

const classAliases=new Map([
  ["templar","templar"],
  ["gladiator","gladiator"],
  ["assassin","assassin"],
  ["ranger","ranger"],
  ["sorcerer","sorcerer"],
  ["spiritmaster","spiritmaster"],
  ["elementalist","spiritmaster"],
  ["cleric","cleric"],
  ["chanter","chanter"],
  ["brawler","brawler"],
]);

export function classSlugFromOfficial(value){
  return classAliases.get(normalized(value))||"";
}

const directSlots=new Map([
  ["weapon","mainHand"],["weapons","mainHand"],["mainhand","mainHand"],["mainweapon","mainHand"],["primaryweapon","mainHand"],
  ["guard","offHand"],["offhand","offHand"],["subhand","offHand"],["shield","offHand"],
  ["helmet","helmet"],["head","helmet"],
  ["pauldrons","shoulders"],["pauldron","shoulders"],["shoulders","shoulders"],["shoulder","shoulders"],
  ["top","chest"],["chest","chest"],["torso","chest"],["breastplate","chest"],
  ["belt","belt"],
  ["legs","pants"],["leg","pants"],["pants","pants"],["greaves","pants"],["leggings","pants"],
  ["gloves","gloves"],["glove","gloves"],["gauntlets","gloves"],
  ["cloak","cloak"],["cape","cloak"],
  ["shoes","boots"],["shoe","boots"],["boots","boots"],["boot","boots"],
  ["necklace","necklace"],
  ["amulet","amulet"],
  ["brooch","brooch"],
]);

const repeatedSlotBases=new Map([
  ["earring",["earring1","earring2"]],["earrings",["earring1","earring2"]],
  ["bracelet",["bracelet","bracelet2"]],["bracelets",["bracelet","bracelet2"]],
  ["ring",["ring1","ring2"]],["rings",["ring1","ring2"]],
  ["rune",["rune1","rune2"]],["runes",["rune1","rune2"]],
]);

function explicitRepeatSlot(raw){
  const key=normalized(raw);
  for(const [base,ids] of repeatedSlotBases){
    if(key===base+"1"||key==="first"+base)return ids[0];
    if(key===base+"2"||key==="second"+base)return ids[1];
  }
  return "";
}

function resolveSlot(item,counters){
  const candidates=[item?.slotName,item?.detail?.categoryName,item?.detail?.type].filter(Boolean);
  for(const candidate of candidates){
    const explicit=explicitRepeatSlot(candidate);
    if(explicit)return explicit;
    const key=normalized(candidate);
    const direct=directSlots.get(key);
    if(direct)return direct;
    const pair=repeatedSlotBases.get(key);
    if(pair){
      const count=counters.get(key)||0;
      counters.set(key,count+1);
      return pair[Math.min(count,pair.length-1)];
    }
  }
  return "";
}

function statValue(row){
  const min=text(row?.minValue),value=text(row?.value);
  if(min&&value&&min!==value)return min+" – "+value;
  return value||min||text(row?.extra);
}

function importedStats(detail){
  const rows=[...(Array.isArray(detail?.mainStats)?detail.mainStats:[]),...(Array.isArray(detail?.subStats)?detail.subStats:[])];
  const seen=new Set();
  return rows.map(row=>({label:text(row?.name)||text(row?.id)||"Stat",value:statValue(row)}))
    .filter(row=>row.value)
    .filter(row=>{const key=row.label+"\u0000"+row.value;if(seen.has(key))return false;seen.add(key);return true;});
}

function buildGearItem(item,slotId){
  const detail=item?.detail||null;
  return {
    id:text(item?.id),
    name:text(item?.name)||("Item "+text(item?.id)),
    grade:text(item?.grade)||text(detail?.gradeName)||text(detail?.grade),
    family:["mainHand","offHand"].includes(slotId)?"Weapons":(["helmet","shoulders","chest","belt","pants","gloves","cloak","boots"].includes(slotId)?"Armor":"Accessories"),
    category:text(detail?.categoryName)||text(item?.slotName),
    itemType:text(detail?.type)||text(detail?.categoryName)||text(item?.slotName),
    equipType:slotId==="mainHand"?"MainHand":slotId==="offHand"?"SubHand":"",
    icon:text(item?.icon)||text(detail?.icon),
    stats:importedStats(detail),
    slotPos:Number(item?.slotPos)||0,
    slotName:text(item?.slotName),
    enchantLevel:Number(item?.enchantLevel)||0,
    exceedLevel:Number(item?.exceedLevel)||0,
    detail,
    source:{name:"NC public character API",official:true,kind:"synced-character"},
  };
}

export function equipmentFromCharacter(items=[]){
  const counters=new Map(),gear={},unknown=[];
  const ordered=[...(Array.isArray(items)?items:[])].map((item,index)=>({item,index}))
    .sort((a,b)=>(Number(a.item?.slotPos)||999)-(Number(b.item?.slotPos)||999)||a.index-b.index);
  for(const {item} of ordered){
    const slotId=resolveSlot(item,counters);
    if(!slotId){
      unknown.push({slotPos:Number(item?.slotPos)||0,slotName:text(item?.slotName),id:text(item?.id),name:text(item?.name)});
      continue;
    }
    if(gear[slotId]){
      unknown.push({slotPos:Number(item?.slotPos)||0,slotName:text(item?.slotName),id:text(item?.id),name:text(item?.name),reason:"duplicate-mapped-slot",mappedSlot:slotId});
      continue;
    }
    gear[slotId]=buildGearItem(item,slotId);
  }
  return {gear,unknown};
}

function selectedSkillsFromCharacter(skills=[]){
  const selected=[],levels={};
  for(const skill of Array.isArray(skills)?skills:[]){
    const type=classifyCharacterSkill(skill?.category);
    const acquired=skill?.acquired===true,equipped=skill?.equipped===true;
    const shouldImport=type==="stigma"?equipped:acquired;
    if(!shouldImport||Number(skill?.level)<=0)continue;
    const name=text(skill?.name)||("Skill "+text(skill?.id));
    const selectionKey=type+":"+name;
    const levelKey=selectionKey+":"+text(skill?.id);
    if(!selected.includes(selectionKey))selected.push(selectionKey);
    levels[levelKey]=Number(skill.level)||1;
  }
  return {selected,levels};
}

export function createBuildFromCharacter(character){
  if(!character||typeof character!=="object")throw new Error("No synced character snapshot is available.");
  const classSlug=classSlugFromOfficial(character?.profile?.className);
  if(!classSlug)throw new Error("DAEVEXUS cannot map the synced class "+(text(character?.profile?.className)||"yet")+".");
  const equipment=equipmentFromCharacter(character.equipment);
  const skillSelection=selectedSkillsFromCharacter(character.skills);
  const region=character.region==="tw"?"KR_TW":"GLOBAL";
  const pet=character.pet?{...character.pet,id:text(character.pet.id)}:null;
  const wing=character.wing?{...character.wing,id:text(character.wing.id)}:null;
  const stigmaSkills=(Array.isArray(character.skills)?character.skills:[]).filter(skill=>classifyCharacterSkill(skill?.category)==="stigma");
  const selectedStigmas=stigmaSkills.filter(skill=>skill?.equipped===true&&Number(skill?.level)>0);
  const acquiredSkills=(Array.isArray(character.skills)?character.skills:[]).filter(skill=>skill?.acquired===true&&Number(skill?.level)>0);
  return {
    title:(text(character?.profile?.name)||"Synced character")+" · "+(text(character?.profile?.className)||"AION 2"),
    classSlug,
    level:Math.max(1,Number(character?.profile?.level)||1),
    region,
    goal:"PvE · Group",
    skills:skillSelection.selected,
    skillLevels:skillSelection.levels,
    skillSpecializations:{},
    gear:equipment.gear,
    wingId:wing?.id||"",
    petId:pet?.id||"",
    petLevel:Math.max(1,Number(pet?.level)||1),
    advanced:{arcana:Array(10).fill(""),daevanion:Array(8).fill(""),daevanionPaths:Array.from({length:8},()=>[]),pantheon:"",genusInsight:"",rotation:""},
    imported:{
      source:"NC public character API",
      official:true,
      sourceRegion:text(character.region),
      character:{name:text(character?.profile?.name),className:text(character?.profile?.className),serverName:text(character?.profile?.serverName),serverId:Number(character?.serverId)||0,characterId:text(character?.characterId),profileUrl:text(character?.profileUrl)},
      pet,
      wing,
      wingSkin:character.wingSkin?{...character.wingSkin,id:text(character.wingSkin.id)}:null,
      daevanion:Array.isArray(character.daevanion)?character.daevanion:[],
      skills:Array.isArray(character.skills)?character.skills:[],
      equipmentSlots:(Array.isArray(character.equipment)?character.equipment:[]).map(item=>({slotPos:Number(item?.slotPos)||0,slotName:text(item?.slotName),id:text(item?.id),name:text(item?.name)})),
      unknownEquipmentSlots:equipment.unknown,
      counts:{equipment:Object.keys(equipment.gear).length,acquiredSkills:acquiredSkills.length,equippedStigmas:selectedStigmas.length,daevanion:Array.isArray(character.daevanion)?character.daevanion.length:0},
    },
  };
}
