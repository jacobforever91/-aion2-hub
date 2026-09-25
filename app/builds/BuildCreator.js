"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Copy, Feather, PawPrint, Save, Search, Shield, Sparkles, Sword, X} from "lucide-react";
import {classData, classList, classWeapons, skillIconIds} from "../classes/classData";
import {stigmaCatalog, stigmaCatalogSource} from "../stigmas/stigmaData";
import catalogData from "../progression/catalogData.json";
import styles from "./builds.module.css";

const goals=["Solo progression","PvE · Group","PvP · Abyss","Support / Healer"];
const slotDefs=[
  {id:"mainHand",label:"Main hand",family:"Weapons",role:"MainHand"},
  {id:"offHand",label:"Off hand / guard",family:"Weapons",role:"SubHand"},
  {id:"helmet",label:"Helmet",family:"Armor",slot:"Helmet"},
  {id:"chest",label:"Chest",family:"Armor",slot:"Torso"},
  {id:"shoulders",label:"Shoulders",family:"Armor",slot:"Shoulder"},
  {id:"gloves",label:"Gloves",family:"Armor",slot:"Gloves"},
  {id:"pants",label:"Pants",family:"Armor",slot:"Pants"},
  {id:"boots",label:"Boots",family:"Armor",slot:"Boots"},
  {id:"cloak",label:"Cloak",family:"Armor",slot:"Cape"},
  {id:"necklace",label:"Necklace",family:"Accessories",slot:"Necklace"},
  {id:"earring1",label:"Earring 1",family:"Accessories",slot:"Earring"},
  {id:"earring2",label:"Earring 2",family:"Accessories",slot:"Earring"},
  {id:"ring1",label:"Ring 1",family:"Accessories",slot:"Ring"},
  {id:"ring2",label:"Ring 2",family:"Accessories",slot:"Ring"},
  {id:"bracelet",label:"Bracelet",family:"Accessories",slot:"Bracelet"},
  {id:"brooch",label:"Brooch",family:"Accessories",slot:"Brooch"}
];
const emptyAdvanced=()=>({arcana:Array(10).fill(""),daevanion:Array(8).fill(""),pantheon:"",genusInsight:"",rotation:""});
const emptyBuild=()=>({title:"",classSlug:"templar",level:45,region:"GLOBAL",goal:"PvE · Group",skills:[],skillLevels:{},skillSpecializations:{},gear:{},wingId:"",petId:"",petLevel:1,advanced:emptyAdvanced()});
const currentClasses=classList;
function skillIconUrl(id){
  if(id==="18790000")return "https://aion2.app/db-item-icons/ICON_GL_SKILL_Passive_009.webp";
  return id?`https://aion2hub.com/api/skill-icon/${id}`:"";
}
const weaponTypeAliases={
  Longsword:["longsword","sword"],
  Greatsword:["greatsword"],
  Daggers:["dagger"],
  Dagger:["dagger"],
  Bow:["bow"],
  Spellbook:["spellbook"],
  Orb:["orb"],
  Mace:["mace"],
  Staff:["staff"],
  Shield:["guard","guarder","shield"],
  Guard:["guard","guarder","shield"],
  Polearm:["polearm"]
};
function normalizeWeaponType(value){return String(value||"").trim().toLowerCase()}
function weaponSlotConfig(classSlug,slotId){
  const weapons=classWeapons[classSlug];
  if(slotId==="mainHand"&&weapons?.main)return {weapon:weapons.main,role:"MainHand"};
  if(slotId==="offHand"&&weapons?.secondary?.kind==="Off-hand")return {weapon:weapons.secondary,role:"SubHand"};
  if(slotId==="offHand"&&weapons?.secondary?.kind==="Alternate main weapon")return {weapon:weapons.secondary,role:"MainHand"};
  return null;
}
function compatibleWeaponTypes(classSlug,slotId){
  const config=weaponSlotConfig(classSlug,slotId);
  return config?(weaponTypeAliases[config.weapon.name]||[normalizeWeaponType(config.weapon.name)]):null;
}
function activeGearSlots(classSlug){
  return slotDefs.filter((slot)=>slot.id!=="offHand"||Boolean(weaponSlotConfig(classSlug,slot.id)));
}
function filterWeaponGear(gear,classSlug){
  const next={...gear};
  for(const slotId of ["mainHand","offHand"]){
    const item=next[slotId];
    if(!item)continue;
    const allowedTypes=compatibleWeaponTypes(classSlug,slotId);
    const itemTypes=[item.category,item.itemType].map(normalizeWeaponType);
    if(!allowedTypes||!itemTypes.some((type)=>allowedTypes.includes(type)))delete next[slotId];
  }
  return next;
}
function decodeShare(value){return JSON.parse(decodeURIComponent(escape(window.atob(value))))}
function encodeShare(value){return window.btoa(unescape(encodeURIComponent(JSON.stringify(value))))}
function normalStats(item){
  return (item?.stats||[]).map((entry)=>Array.isArray(entry)?{label:entry[0],value:entry[1]}:entry).filter((entry)=>entry?.label&&entry?.value!=null);
}
function statSummary(gear){
  const totals={};
  Object.values(gear||{}).filter(Boolean).forEach((item)=>normalStats(item).forEach(({label,value})=>{
    const raw=String(value).replace(/,/g,"").trim();
    const match=raw.match(/^([+-]?\d+(?:\.\d+)?)\s*(%)?$/);
    if(!match)return;
    const unit=match[2]||"";
    const key=label+" "+unit;
    totals[key]=(totals[key]||0)+Number(match[1]);
  }));
  return Object.entries(totals).slice(0,10).map(([label,value])=>[label.trim(),Number(value.toFixed(2))]);
}
function classSkillGroups(slug,region){
  const data=classData[slug];
  if(!data)return [];
  const icons=skillIconIds[slug]||[];
  const stigma=(region==="KR_TW"?(stigmaCatalog[slug]||[]):data.active.slice(13).map((name,index)=>({name,id:icons[13+index]})))
    .map((item,index)=>({...item,id:item.id||icons[13+index]}));
  return [
    {id:"active",label:"Active skills",items:data.active.slice(0,13).map((name,index)=>({name,id:icons[index]}))},
    {id:"passive",label:"Passive skills",items:data.passive.map((name,index)=>({name,id:icons[data.active.length+index]}))},
    {id:"stigma",label:"Stigmas",items:stigma}
  ];
}
function groupSpecialtyTiers(entries=[]){
  const tiers=new Map();
  entries.forEach((entry)=>tiers.set(Number(entry.level),[...(tiers.get(Number(entry.level))||[]),entry.description]));
  return [...tiers.entries()].sort((a,b)=>a[0]-b[0]);
}

function skillLevelEffect(info,level){
  const levels=Array.isArray(info?.levels)?info.levels:[];
  const current=levels.find((entry)=>Number(entry.level)===Number(level))||levels[Number(level)-1];
  if(!current)return {description:"",values:[]};
  const previous=levels.find((entry)=>Number(entry.level)===Number(level)-1)||null;
  const flatten=(value,prefix="",target={})=>{
    if(value==null)return target;
    if(Array.isArray(value)){
      value.forEach((item,index)=>flatten(item,prefix?prefix+" "+(index+1):String(index+1),target));
      return target;
    }
    if(typeof value==="object"){
      if(value.label&&value.value!=null){target[String(value.label)]=value.value;return target;}
      Object.entries(value).forEach(([key,item])=>{
        const normalized=key.toLowerCase().replace(/[ _-]/g,"");
        if(["id","skillid","skill_id","level","name","icon","description","effect","effectdescription","text"].includes(normalized)||normalized.startsWith("tokenvalues"))return;
        flatten(item,prefix?prefix+" "+key:key,target);
      });
      return target;
    }
    if(prefix&&typeof value!=="boolean")target[prefix]=value;
    return target;
  };
  const raw=flatten(current);
  const prior=previous?flatten(previous):{};
  const minKey=Object.keys(raw).find((key)=>/^(minvalue|min value|dmg min|dmgmin|damage min|damagemin)$/i.test(key));
  const maxKey=Object.keys(raw).find((key)=>/^(maxvalue|max value|dmg max|dmgmax|damage max|damagemax)$/i.test(key));
  const skip=new Set([minKey,maxKey].filter(Boolean));
  const labels={damage:"Damage",dmg:"Damage",heal:"Healing",healing:"Healing",cooldown:"Cooldown",cooldownseconds:"Cooldown",cooldowntime:"Cooldown",recasttime:"Cooldown",reusetime:"Cooldown",duration:"Duration",range:"Range",casttime:"Casting time",castingtime:"Casting time",costmp:"MP cost",costhp:"HP cost",costdp:"DP cost",mp:"MP cost",hp:"HP",dp:"DP",chance:"Chance",probability:"Chance",targetcount:"Targets",hitcount:"Hits",stackcount:"Stacks",shield:"Shield",staggergauge:"Stagger gauge"};
  const labelFor=(key)=>{
    const compact=key.replace(/[^a-z0-9]/gi,"").toLowerCase();
    if(labels[compact])return labels[compact];
    return key.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/[_.-]+/g," ").replace(/\b\w/g,(letter)=>letter.toUpperCase());
  };
  const values=[];
  const isZero=(value)=>value!=null&&/^[-+]?0+(?:\.0+)?%?$/.test(String(value).replace(/,/g,"").trim());
  if(minKey||maxKey){
    const average=(source)=>{
      const range=[source[minKey],source[maxKey]].filter((value)=>value!=null).map((value)=>Number(String(value).replace(/,/g,"")));
      if(!range.length||range.some((value)=>!Number.isFinite(value)))return "";
      const value=range.reduce((sum,entry)=>sum+entry,0)/range.length;
      return String(Number(value.toFixed(1)));
    };
    const now=average(raw);
    const before=average(prior);
    if(now&&!isZero(now)||before&&!isZero(before)){
      const label=/^(dmg|damage)/i.test(minKey||maxKey||"")?"Damage per use":"Average effect value";
      values.push({label,current:now||"0",previous:before!==now?before:""});
    }
  }
  Object.entries(raw).forEach(([key,value])=>{
    if(skip.has(key)||isZero(value)&&isZero(prior[key]??0))return;
    const previous=prior[key]==null||String(prior[key])===String(value)?"":String(prior[key]);
    values.push({label:labelFor(key),current:String(value),previous});
  });
  const description=current.description||current.effect||current.effectDescription||current.text||"";
  return {description,values};
}

export default function BuildCreator(){
  const [build,setBuild]=useState(emptyBuild);
  const [tab,setTab]=useState("overview");
  const [pickerSlot,setPickerSlot]=useState(null);
  const [pickerItems,setPickerItems]=useState([]);
  const [pickerSearch,setPickerSearch]=useState("");
  const [pickerState,setPickerState]=useState("idle");
  const [skillSearch,setSkillSearch]=useState("");
  const [skillMaxLevels,setSkillMaxLevels]=useState({});
  const [skillLevelStatus,setSkillLevelStatus]=useState({});
  const [skillSpecialtyData,setSkillSpecialtyData]=useState({});
  const [skillDetailsData,setSkillDetailsData]=useState({});
  const [editingSkillKey,setEditingSkillKey]=useState("");
  const skillLookupCache=useRef({});
  const [notice,setNotice]=useState("");
  const [savedAt,setSavedAt]=useState("");

  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    const shared=params.get("share");
    if(shared){
      try{
        const restored=decodeShare(shared);
        setBuild({...emptyBuild(),...restored,skillLevels:{...(restored.skillLevels||{})},skillSpecializations:{...(restored.skillSpecializations||{})},advanced:{...emptyAdvanced(),...(restored.advanced||{})}});
        setNotice("Shared build loaded.");
        return;
      }catch(_error){setNotice("This share link could not be read.");}
    }
    try{
      const saved=window.localStorage.getItem("aion2-vision-build-v1");
      if(saved){
        const restored=JSON.parse(saved);
        setBuild({...emptyBuild(),...restored,skillLevels:{...(restored.skillLevels||{})},advanced:{...emptyAdvanced(),...(restored.advanced||{})}});
        setSavedAt("Saved draft loaded from this device.");
      }
    }catch(_error){}
    const mode=params.get("mode");
    if(mode==="pve")setBuild((current)=>({...current,goal:"PvE · Group"}));
    if(mode==="pvp")setBuild((current)=>({...current,goal:"PvP · Abyss"}));
  },[]);

  useEffect(()=>{
    if(!pickerSlot)return;
    const controller=new AbortController();
    setPickerState("loading");
    setPickerItems([]);
    setPickerSearch("");
    const params=new URLSearchParams({view:"general",region:build.region,category:pickerSlot.family});
    if(pickerSlot.slot)params.set("slot",pickerSlot.slot);
    fetch("/api/class-equipment?"+params.toString(),{signal:controller.signal})
      .then(async(response)=>{
        const data=await response.json();
        if(!response.ok)throw new Error(data.error||"Could not load item list.");
        return data;
      })
      .then((data)=>{
        let items=data.items||[];
        const slotConfig=weaponSlotConfig(build.classSlug,pickerSlot.id);
        if(slotConfig?.role)items=items.filter((item)=>item.equipType===slotConfig.role);
        const allowedTypes=compatibleWeaponTypes(build.classSlug,pickerSlot.id);
        if(allowedTypes)items=items.filter((item)=>allowedTypes.includes(normalizeWeaponType(item.category))||allowedTypes.includes(normalizeWeaponType(item.itemType)));
        setPickerItems(items);
        setPickerState(items.length?"ready":"empty");
      })
      .catch((error)=>{if(error.name!=="AbortError")setPickerState("error")});
    return()=>controller.abort();
  },[pickerSlot,build.region,build.classSlug]);

  const classInfo=classData[build.classSlug];
  const skills=useMemo(()=>classSkillGroups(build.classSlug,build.region),[build.classSlug,build.region]);
  const visibleSkillGroups=useMemo(()=>skills.map((group)=>({...group,items:group.items.filter((item)=>item.name.toLowerCase().includes(skillSearch.trim().toLowerCase()))})).filter((group)=>group.items.length),[skills,skillSearch]);
  const selectedWing=catalogData.wings.find((item)=>item.id===build.wingId);
  const wingDetails=selectedWing?catalogData.wingDetails[selectedWing.id]:null;
  const selectedPet=catalogData.pets.find((item)=>item.id===build.petId);
  const petDetails=selectedPet?catalogData.petDetails[selectedPet.id]:null;
  const petLevelRow=petDetails?.baseStats?.rows?.find((row)=>String(row[0])===String(build.petLevel));
  const gearCount=Object.values(build.gear).filter(Boolean).length;
  const visibleGearSlots=useMemo(()=>activeGearSlots(build.classSlug),[build.classSlug]);
  const skillTotals=useMemo(()=>({
    active:build.skills.filter((key)=>key.startsWith("active:")).length,
    passive:build.skills.filter((key)=>key.startsWith("passive:")).length,
    stigma:build.skills.filter((key)=>key.startsWith("stigma:")).length
  }),[build.skills]);
  const totals=useMemo(()=>statSummary(build.gear),[build.gear]);
  const visiblePickerItems=useMemo(()=>pickerItems.filter((item)=>item.name.toLowerCase().includes(pickerSearch.trim().toLowerCase())),[pickerItems,pickerSearch]);

  const patch=(key,value)=>setBuild((current)=>({...current,[key]:value}));
  const changeClass=(slug)=>{
    setSkillSearch("");
    const filteredGear=filterWeaponGear(build.gear,slug);
    const removedWeapon=Object.keys(build.gear).some((slotId)=>["mainHand","offHand"].includes(slotId)&&build.gear[slotId]&&!filteredGear[slotId]);
    setBuild((current)=>({...current,classSlug:slug,skills:[],skillLevels:{},skillSpecializations:{},gear:filterWeaponGear(current.gear,slug)}));
    if(removedWeapon)setNotice("Incompatible weapon slots were cleared for the selected class.");
  };
  const loadSkillLevelRange=async(key,id)=>{
    if(!id||skillLookupCache.current[key]==="loading"||skillLookupCache.current[key]==="ready")return;
    const selectionKey=key.slice(0,key.lastIndexOf(":"));
    skillLookupCache.current[key]="loading";
    setSkillLevelStatus((current)=>({...current,[key]:"loading"}));
    try{
      const response=await fetch("/api/skill-description/"+id);
      const info=await response.json();
      if(!response.ok)throw new Error(info.error||"Could not load skill levels.");
      const detailsMax=Number(info.details?.find((entry)=>entry.label==="Max Level")?.value?.match(/\d+/)?.[0]);
      const max=Number(info.levels?.length)||detailsMax;
      if(!max||max<1)throw new Error("The skill level maximum is unavailable.");
      skillLookupCache.current[key]="ready";
      setSkillMaxLevels((current)=>({...current,[key]:max}));
      const specialties=Array.isArray(info.specialties)?info.specialties:[];
      setSkillSpecialtyData((current)=>({...current,[key]:specialties}));
      setSkillDetailsData((current)=>({...current,[key]:info}));
      setSkillLevelStatus((current)=>({...current,[key]:"ready"}));
      setBuild((current)=>{
        if(!current.skills.includes(selectionKey))return current;
        const level=Number(current.skillLevels?.[key])||1;
        const skillSpecializations={...(current.skillSpecializations||{})};
        const tiers=new Map();
        specialties.forEach((entry)=>tiers.set(entry.level,[...(tiers.get(entry.level)||[]),entry.description]));
        tiers.forEach((options,unlock)=>{
          const choiceKey=key+"@"+unlock;
          if(unlock<=level&&options.length===1&&!skillSpecializations[choiceKey])skillSpecializations[choiceKey]=options[0];
        });
        return {...current,skillLevels:{...(current.skillLevels||{}),[key]:Math.min(max,level)},skillSpecializations};
      });
    }catch(_error){
      skillLookupCache.current[key]="error";
      setSkillLevelStatus((current)=>({...current,[key]:"error"}));
    }
  };
  const setSkillLevel=(key,value,max)=>{
    const level=Math.max(1,Math.min(max||1,Number(value)||1));
    const tiers=new Map();
    (skillSpecialtyData[key]||[]).forEach((entry)=>tiers.set(entry.level,[...(tiers.get(entry.level)||[]),entry.description]));
    setBuild((current)=>{
      const skillSpecializations={...(current.skillSpecializations||{})};
      tiers.forEach((options,unlock)=>{
        const choiceKey=key+"@"+unlock;
        if(unlock<=level&&options.length===1&&!skillSpecializations[choiceKey])skillSpecializations[choiceKey]=options[0];
      });
      return {...current,skillLevels:{...(current.skillLevels||{}),[key]:level},skillSpecializations};
    });
  };
  const selectSkill=(type,name,id)=>{
    const key=type+":"+name;
    const levelKey=key+":"+id;
    if(build.skills.includes(key)){
      setEditingSkillKey((current)=>current===levelKey?"":levelKey);
      loadSkillLevelRange(levelKey,id);
      return;
    }
    setBuild((current)=>({...current,skills:[...current.skills,key],skillLevels:{...(current.skillLevels||{}),[levelKey]:Number(current.skillLevels?.[levelKey])||1}}));
    setEditingSkillKey(levelKey);
    loadSkillLevelRange(levelKey,id);
  };
  const removeSkill=(type,name,id)=>{
    const key=type+":"+name;
    const levelKey=key+":"+id;
    setBuild((current)=>{
      const skillLevels={...(current.skillLevels||{})};
      const skillSpecializations={...(current.skillSpecializations||{})};
      delete skillLevels[levelKey];
      Object.keys(skillSpecializations).filter((entry)=>entry.startsWith(levelKey+"@")).forEach((entry)=>delete skillSpecializations[entry]);
      return {...current,skills:current.skills.filter((entry)=>entry!==key),skillLevels,skillSpecializations};
    });
    setEditingSkillKey((current)=>current===levelKey?"":current);
  };
  const selectItem=async(item)=>{
    if(!pickerSlot)return;
    setPickerState("loading");
    try{
      const params=new URLSearchParams({view:"general",region:build.region,item:item.id});
      const response=await fetch("/api/class-equipment?"+params.toString());
      const data=await response.json();
      if(!response.ok)throw new Error(data.error||"Could not load item details.");
      setBuild((current)=>({...current,gear:{...current.gear,[pickerSlot.id]:data}}));
      setPickerSlot(null);
      setNotice(item.name+" added to "+pickerSlot.label+".");
    }catch(_error){setPickerState("error")}
  };
  const saveBuild=()=>{
    try{
      const named={...build,title:build.title.trim()||((classInfo?.name||"AION 2")+" build")};
      setBuild(named);
      window.localStorage.setItem("aion2-vision-build-v1",JSON.stringify(named));
      setSavedAt("Saved on this device.");
      setNotice("Build saved on this device.");
    }catch(_error){setNotice("Could not save this build on this device.")}
  };
  const copyShareLink=async()=>{
    try{
      const encoded=encodeShare({...build,title:build.title.trim()||((classInfo?.name||"AION 2")+" build")});
      const url=new URL(window.location.href);
      url.searchParams.set("share",encoded);
      await navigator.clipboard.writeText(url.toString());
      setNotice("Share link copied.");
    }catch(_error){setNotice("Could not copy the link. Try saving the build first.")}
  };
  const resetBuild=()=>{
    const fresh=emptyBuild();
    setBuild(fresh);
    setEditingSkillKey("");
    setSavedAt("");
    window.localStorage.removeItem("aion2-vision-build-v1");
    window.history.replaceState(null,"",window.location.pathname);
    setNotice("New build started.");
  };
  const updateAdvanced=(key,value)=>setBuild((current)=>({...current,advanced:{...current.advanced,[key]:value}}));
  const updateAdvancedSlot=(key,index,value)=>setBuild((current)=>{
    const next=[...current.advanced[key]];
    next[index]=value;
    return {...current,advanced:{...current.advanced,[key]:next}};
  });

  return <main className={styles.page}>
    <nav className={styles.nav}>
      <Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft aria-hidden="true"/></Link>
      <Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>BUILD CREATOR · PROTOTYPE</small></Link>
      <div className={styles.navLinks}><Link href="/classes">Skills</Link><Link href="/equipment">Equipment</Link><Link href="/wings">Wings</Link><Link href="/pets">Pets</Link></div>
    </nav>

    <div className={styles.wrap}>
      <header className={styles.hero}>
        <div className={styles.eyebrow}><Sparkles size={15}/> BUILD LAB · CHARACTER PLANNER</div>
        <div className={styles.heroRow}><div><h1>Build <em>Creator</em></h1><p>Plan a class setup, add skills and gear, then save it or share it with your party.</p></div><span className={styles.prototypeTag}>PROTOTYPE</span></div>
        <label className={styles.titleField}><span>BUILD NAME</span><input value={build.title} onChange={(event)=>patch("title",event.target.value)} placeholder="Example: Templar PvE tank"/></label>
      </header>

      <div className={styles.actionBar}>
        <div className={styles.actionCopy}><span>{savedAt||"Your draft stays in this browser until you save it."}</span>{notice&&<small>{notice}</small>}</div>
        <div className={styles.actions}><button type="button" className={styles.secondaryButton} onClick={resetBuild}>New build</button><button type="button" className={styles.secondaryButton} onClick={copyShareLink}><Copy size={15}/> Share</button><button type="button" className={styles.primaryButton} onClick={saveBuild}><Save size={15}/> Save draft</button></div>
      </div>

      <div className={styles.workspace}>
        <div className={styles.editor}>
          <div className={styles.tabs} role="tablist" aria-label="Build sections">
            {[["overview","Overview"],["skills","Skills"],["equipment","Equipment"],["progression","Progression"]].map(([id,label])=><button key={id} type="button" role="tab" aria-selected={tab===id} className={tab===id?styles.tabActive:styles.tab} onClick={()=>setTab(id)}>{label}</button>)}
          </div>

          {tab==="overview"&&<section className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelIcon}><Shield size={19}/></span><div><h2>Character setup</h2><p>Choose the class, region and kind of content this build is for.</p></div></div>
            <div className={styles.formGrid}>
              <label className={styles.field}><span>CLASS</span><select value={build.classSlug} onChange={(event)=>{changeClass(event.target.value);setEditingSkillKey("")}}>{currentClasses.map((item)=><option key={item.slug} value={item.slug}>{item.name}</option>)}<option value="brawler" disabled>Brawler · data sync pending</option></select></label>
              <label className={styles.field}><span>LEVEL</span><input type="number" min="1" max="50" value={build.level} onChange={(event)=>patch("level",Math.max(1,Math.min(50,Number(event.target.value)||1)))}/></label>
              <label className={styles.field}><span>REGION DATA</span><select value={build.region} onChange={(event)=>{patch("region",event.target.value);patch("skills",[]);patch("skillLevels",{});patch("skillSpecializations",{});setSkillSearch("");setEditingSkillKey("")}}><option value="GLOBAL">Global</option><option value="KR_TW">Korea / Taiwan</option></select></label>
              <label className={styles.field}><span>BUILD GOAL</span><select value={build.goal} onChange={(event)=>patch("goal",event.target.value)}>{goals.map((goal)=><option key={goal}>{goal}</option>)}</select></label>
            </div>
            <div className={styles.classBanner}><div className={styles.classMark}>{classInfo?.name?.slice(0,1)||"A"}</div><div><span>{classInfo?.role||"Choose a class"}</span><strong>{classInfo?.name||"Class data is not available"}</strong><small>{classInfo?.weapon?("Recommended weapon: "+classInfo.weapon):"The current local class catalog has no Brawler skills yet."}</small></div></div>
            <div className={styles.noticeBox}><strong>Data version matters</strong><span>Global and KR/TW catalogs stay separate. Skill and item records can differ by region and patch.</span></div>
          </section>}

          {tab==="skills"&&<section className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelIcon}><Sparkles size={19}/></span><div><h2>Skills &amp; Stigmas</h2><p>Select a skill to set its level. Only one level control stays open at a time.</p></div></div>
            {!classInfo?<div className={styles.emptyState}>Skill data for this class has not been synced yet.</div>:<>
              <label className={styles.skillSearch}><Search size={16}/><input type="search" value={skillSearch} onChange={(event)=>setSkillSearch(event.target.value)} placeholder="Search skills by name…"/></label>
              {visibleSkillGroups.length?<div className={styles.skillGroups}>{visibleSkillGroups.map((group)=><section key={group.id} className={styles.skillGroup}><div className={styles.groupHeading}><h3>{group.label}</h3><span>{build.skills.filter((key)=>key.startsWith(group.id+":")).length} selected</span></div><div className={styles.skillList}>{group.items.map((item)=>{
                  const key=group.id+":"+item.name;
                  const levelKey=key+":"+item.id;
                  const selected=build.skills.includes(key);
                  const max=skillMaxLevels[levelKey];
                  const level=Math.min(max||Number.MAX_SAFE_INTEGER,Number(build.skillLevels?.[levelKey])||1);
                  const isEditing=editingSkillKey===levelKey;
                  const specialtyTiers=groupSpecialtyTiers(skillSpecialtyData[levelKey]);
                  const levelEffect=skillLevelEffect(skillDetailsData[levelKey],level);
                  return <div key={item.name} className={selected&&isEditing?styles.skillCard+" "+styles.skillCardEditing:styles.skillCard}>
                    <div className={styles.skillCardHeader}>
                      <button type="button" className={selected?styles.skillSelected:styles.skill} onClick={()=>selectSkill(group.id,item.name,item.id)} aria-pressed={selected}>
                        <span className={styles.skillIconWrap}>{item.id&&<img className={styles.skillIcon} src={skillIconUrl(item.id)} alt="" loading="lazy"/>}</span>
                        <span className={styles.skillName}>{item.name}</span>
                        {selected&&<span className={styles.skillLevelBadge}>{max?"Lv. "+level+" / "+max:"Lv. "+level}</span>}
                        <span className={styles.skillDot}>{selected?"✓":"+"}</span>
                      </button>
                      {selected&&<button type="button" className={styles.skillRemove} onClick={()=>removeSkill(group.id,item.name,item.id)} aria-label={"Remove "+item.name+" from build"}><X size={14}/></button>}
                    </div>
                    {selected&&isEditing&&<div className={styles.skillLevelControls}>
                      <div className={styles.skillLevelHeading}>
                        <span>Skill level</span>
                        {max?<b>Lv. {level} / {max}</b>:skillLevelStatus[levelKey]==="loading"?<b>Checking…</b>:skillLevelStatus[levelKey]==="error"?<b>Unavailable</b>:<b>Min · Lv. {level}</b>}
                      </div>
                      {max?<div className={styles.skillLevelRow}>
                        <button type="button" onClick={()=>setSkillLevel(levelKey,1,max)}>Min</button>
                        <button className={styles.skillLevelStep} type="button" aria-label={"Decrease "+item.name+" by one level"} disabled={level<=1} onClick={()=>setSkillLevel(levelKey,level-1,max)}>−</button>
                        <input aria-label={item.name+" level"} type="range" min="1" max={max} step="1" value={level} disabled={max===1} onChange={(event)=>setSkillLevel(levelKey,event.target.value,max)}/>
                        <button className={styles.skillLevelStep} type="button" aria-label={"Increase "+item.name+" by one level"} disabled={level>=max} onClick={()=>setSkillLevel(levelKey,level+1,max)}>+</button>
                        <button type="button" onClick={()=>setSkillLevel(levelKey,max,max)}>Max</button>
                      </div>:skillLevelStatus[levelKey]==="error"?<button className={styles.levelRetry} type="button" onClick={()=>loadSkillLevelRange(levelKey,item.id)}>Retry level data</button>:skillLevelStatus[levelKey]!=="loading"&&<button className={styles.levelRetry} type="button" onClick={()=>loadSkillLevelRange(levelKey,item.id)}>Check level range</button>}
                    </div>}
                    {selected&&isEditing&&skillLevelStatus[levelKey]==="ready"&&<div className={styles.levelEffect}>
                      <div className={styles.levelEffectHeading}><strong>What changes at this level</strong><span>Lv. {level}</span></div>
                      {levelEffect.description&&<p className={styles.levelEffectDescription}>{levelEffect.description}</p>}
                      {levelEffect.values.length>0?<div className={styles.levelEffectRows}>{levelEffect.values.map((row,index)=><div className={styles.levelEffectRow} key={row.label+index}><span>{row.label}</span><b>{row.current}</b>{row.previous&&row.previous!==row.current&&<small>Previous level: {row.previous}</small>}</div>)}</div>:<p className={styles.levelEffectEmpty}>The source has no per-level effect values for this skill yet.</p>}
                    </div>}
                    {selected&&isEditing&&specialtyTiers.length>0&&<div className={styles.specialtyControls}>
                      <div className={styles.specialtyHeading}><strong>Specializations</strong><small>{group.id==="stigma"?"Stigma effects activate automatically at each unlock.":"Choose one option in each unlocked slot."}</small></div>
                      {specialtyTiers.map(([unlock,options])=>{
                        const choiceKey=levelKey+"@"+unlock;
                        const chosen=build.skillSpecializations?.[choiceKey]||"";
                        const unlocked=level>=Number(unlock);
                        if(group.id==="stigma")return <div key={unlock+"stigma"} className={unlocked?styles.specialtyTierActive:styles.specialtyTier}><div className={styles.specialtyTierHeading}><span>Lv. {unlock}</span><b className={unlocked?styles.specialtyActive:styles.specialtyLocked}>{unlocked?"✓ Active":"Locked"}</b></div><p>{options.join(" · ")}</p></div>;
                        return <fieldset key={unlock} className={unlocked?styles.specialtyTierActive:styles.specialtyTier} disabled={!unlocked}><legend>Slot · Lv. {unlock}{!unlocked?" · Locked":""}</legend>{options.length===1?<div className={unlocked?styles.specialtyAutoEffect:styles.specialtyLockedEffect}><p>{options[0]}</p><b>{unlocked?"✓ Active · automatic":"Unlocks later"}</b></div>:<>{unlocked&&!chosen&&<small className={styles.specialtyChooseHint}>Choose one option for this unlocked slot.</small>}<div className={styles.specialtyOptions}>{options.map((option,index)=><button key={index} type="button" className={chosen===option?styles.specialtyOptionActive:styles.specialtyOption} aria-pressed={chosen===option} onClick={()=>setBuild((current)=>({...current,skillSpecializations:{...(current.skillSpecializations||{}),[choiceKey]:option}}))}>{option}</button>)}</div></>}</fieldset>;
                      })}
                    </div>}
                  </div>
                })}</div></section>)}</div>:<div className={styles.emptyState}>No skills match your search.</div>}
            </>}
            <div className={styles.dataFootnote}>{build.region==="KR_TW"?"KR/TW Stigma names use a provisional community-translated catalog.":"Global skill names come from the current local class catalog."} Selected skills are saved with the build; damage simulation is not included in this prototype.</div>
          </section>}

          {tab==="equipment"&&<section className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelIcon}><Sword size={19}/></span><div><h2>Equipment</h2><p>Pick items by slot. Repeated accessories have separate slots.</p></div></div>
            <div className={styles.gearGrid}>{visibleGearSlots.map((slot)=>{const slotConfig=weaponSlotConfig(build.classSlug,slot.id);const slotLabel=slot.id==="offHand"&&slotConfig?.weapon?.kind==="Alternate main weapon"?"Alternate weapon":slot.label;return <div key={slot.id} className={styles.gearSlot}><span className={styles.slotGlyph}><Shield size={15}/></span><div className={styles.slotCopy}><small>{slotLabel.toUpperCase()}</small><strong>{build.gear[slot.id]?.name||"Empty slot"}</strong>{build.gear[slot.id]?.grade&&<em>{build.gear[slot.id].grade}</em>}</div><button type="button" className={styles.pickButton} onClick={()=>setPickerSlot({...slot,label:slotLabel})}>{build.gear[slot.id]?"Change":"Choose"}</button>{build.gear[slot.id]&&<button type="button" className={styles.clearSlot} onClick={()=>setBuild((current)=>{const next={...current.gear};delete next[slot.id];return {...current,gear:next}})} aria-label={"Clear "+slotLabel}>×</button>}</div>})}</div>
            <div className={styles.noticeBox}><strong>What the totals include</strong><span>Only exact base-stat values from selected catalog items are summed. Enhancement, random sub-stats, manastones, buffs and advanced systems are not included yet.</span></div>
          </section>}

          {tab==="progression"&&<section className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelIcon}><Feather size={19}/></span><div><h2>Progression &amp; advanced systems</h2><p>Add the pieces that complete a character build.</p></div></div>
            <div className={styles.formGrid}>
              <label className={styles.field}><span>WINGS</span><select value={build.wingId} onChange={(event)=>patch("wingId",event.target.value)}><option value="">Choose wings</option>{catalogData.wings.map((wing)=><option key={wing.id} value={wing.id}>{wing.name} · {wing.grade} · {wing.faction}</option>)}</select></label>
              <label className={styles.field}><span>PET</span><select value={build.petId} onChange={(event)=>patch("petId",event.target.value)}><option value="">Choose a pet</option>{catalogData.pets.map((pet)=><option key={pet.id} value={pet.id}>{pet.name} · {pet.genus}</option>)}</select></label>
              <label className={styles.field}><span>PET LEVEL</span><select value={build.petLevel} onChange={(event)=>patch("petLevel",Number(event.target.value))}><option value="1">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option></select></label>
            </div>
            {selectedWing&&<div className={styles.selectedInfo}><Feather size={16}/><span><strong>{selectedWing.name}</strong><small>{selectedWing.grade} · {selectedWing.faction} · {selectedWing.enhancementCap?("Enhancement cap +"+selectedWing.enhancementCap):"Cosmetic/reference record"}</small></span></div>}
            {selectedPet&&<div className={styles.selectedInfo}><PawPrint size={16}/><span><strong>{selectedPet.name}</strong><small>{selectedPet.genus} · Level {build.petLevel} pet reference</small></span></div>}
            {petLevelRow&&<div className={styles.petStats}>{petDetails.baseStats.columns.slice(1).map((column,index)=><div key={column}><small>{column}</small><strong>{petLevelRow[index+1]}</strong></div>)}</div>}
            <details className={styles.advanced}>
              <summary><span><Sparkles size={16}/> Advanced setup</span><small>Reference fields · saved and shared, not included in stat totals</small></summary>
              <div className={styles.advancedBody}>
                <div className={styles.fieldBlock}><h3>Arcana · 10 cards</h3><p>Record the card or set in each slot.</p><div className={styles.advancedGrid}>{build.advanced.arcana.map((value,index)=><label key={index}><small>CARD {index+1}</small><input value={value} onChange={(event)=>updateAdvancedSlot("arcana",index,event.target.value)} placeholder={"Arcana "+(index+1)}/></label>)}</div></div>
                <div className={styles.fieldBlock}><h3>Daevanion boards</h3><p>Note selected nodes or the path you want to follow.</p><div className={styles.advancedGrid}>{build.advanced.daevanion.map((value,index)=><label key={index}><small>BOARD {index+1}</small><input value={value} onChange={(event)=>updateAdvancedSlot("daevanion",index,event.target.value)} placeholder={"Board "+(index+1)}/></label>)}</div></div>
                <label className={styles.field}><span>PANTHEON SETUP</span><textarea rows="3" value={build.advanced.pantheon} onChange={(event)=>updateAdvanced("pantheon",event.target.value)} placeholder="Decorations and effects shown in game…"/></label>
                <label className={styles.field}><span>PET GENUS INSIGHT</span><textarea rows="3" value={build.advanced.genusInsight} onChange={(event)=>updateAdvanced("genusInsight",event.target.value)} placeholder="Record chosen genus options…"/></label>
                <label className={styles.field}><span>ROTATION / MACRO NOTES</span><textarea rows="4" value={build.advanced.rotation} onChange={(event)=>updateAdvanced("rotation",event.target.value)} placeholder="Opening, skill order, and anything you keep manual…"/></label>
              </div>
            </details>
            <div className={styles.dataFootnote}>Wings and pet entries come from local community-reference snapshots. Pet Genus Insight rolls, Arcana effects and Daevanion/Pantheon totals still need a validated structured dataset.</div>
          </section>}
        </div>

        <aside className={styles.summary}>
          <div className={styles.summaryHead}><span>BUILD SUMMARY</span><strong>{build.title||"Untitled build"}</strong><small>{classInfo?.name||"Class"} · {build.goal} · Lv. {build.level}</small><em>{build.region==="KR_TW"?"KOREA / TAIWAN DATA":"GLOBAL DATA"}</em></div>
          <div className={styles.summaryCounts}><div><strong>{skillTotals.active+skillTotals.passive+skillTotals.stigma}</strong><small>skills</small></div><div><strong>{gearCount}/{visibleGearSlots.length}</strong><small>gear slots</small></div><div><strong>{selectedWing?1:0}</strong><small>wings</small></div><div><strong>{selectedPet?1:0}</strong><small>pet</small></div></div>
          <div className={styles.summarySection}><h3>Known base stats</h3>{totals.length?totals.map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>):<p>Select items with exact base stats to see a limited preview.</p>}</div>
          <div className={styles.summarySection}><h3>Selected skills</h3><p>{skillTotals.active} active · {skillTotals.passive} passive · {skillTotals.stigma} Stigma</p></div>
          {Object.entries(build.skillSpecializations||{}).length>0&&<div className={styles.summarySection}><h3>Specializations</h3>{Object.entries(build.skillSpecializations||{}).map(([key,value])=>{const skillName=key.split(":")[1]||"Skill";const unlock=key.split("@").pop();return <div key={key}><span>{skillName} · Lv. {unlock}</span><b title={value}>✓</b></div>})}</div>}
          <div className={styles.summaryFoot}>Prototype preview. No DPS ranking or full combat formula is applied.</div>
        </aside>
      </div>
    </div>

    {pickerSlot&&<div className={styles.modalBackdrop} onMouseDown={(event)=>{if(event.target===event.currentTarget)setPickerSlot(null)}}><section className={styles.itemModal} role="dialog" aria-modal="true" aria-labelledby="itemPickerTitle">
      <button className={styles.modalClose} type="button" onClick={()=>setPickerSlot(null)} aria-label="Close item picker"><X/></button>
      <span className={styles.eyebrow}>EQUIPMENT PICKER · {build.region==="KR_TW"?"KR / TW":"GLOBAL"}</span><h2 id="itemPickerTitle">Choose {pickerSlot.label}</h2>
      <label className={styles.search}><Search size={17}/><input value={pickerSearch} onChange={(event)=>setPickerSearch(event.target.value)} placeholder="Search by item name…"/></label>
      {pickerState==="loading"?<p className={styles.emptyState}>Loading catalog…</p>:pickerState==="error"?<p className={styles.emptyState}>This catalog could not be loaded for the selected region.</p>:pickerState==="empty"?<p className={styles.emptyState}>No reviewed items are available for this slot in this region yet.</p>:<div className={styles.itemResults}>{visiblePickerItems.slice(0,100).map((item)=><button type="button" key={item.id} onClick={()=>selectItem(item)}><span className={styles.itemIcon}><img src={item.icon||"/equipment-art/accessory.webp"} alt="" loading="lazy"/></span><span><strong>{item.name}</strong><small>{item.grade} · {item.category}</small></span><b>+</b></button>)}</div>}
      {visiblePickerItems.length>100&&<small className={styles.resultNote}>Showing the first 100 matches. Narrow your search to find another item.</small>}
    </section></div>}
  </main>;
}
