"use client";

import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Copy, Feather, PawPrint, Save, Search, Shield, Sparkles, Sword, X} from "lucide-react";
import {classData, classList} from "../classes/classData";
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
const emptyBuild=()=>({title:"",classSlug:"templar",level:45,region:"GLOBAL",goal:"PvE · Group",skills:[],gear:{},wingId:"",petId:"",petLevel:1,advanced:emptyAdvanced()});
const currentClasses=classList;
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
  const stigma=region==="KR_TW"?(stigmaCatalog[slug]||[]):data.active.slice(13).map((name,index)=>({name,id:"global-stigma-"+index}));
  return [
    {id:"active",label:"Active skills",items:data.active.slice(0,13).map((name)=>({name}))},
    {id:"passive",label:"Passive skills",items:data.passive.map((name)=>({name}))},
    {id:"stigma",label:"Stigmas",items:stigma}
  ];
}

export default function BuildCreator(){
  const [build,setBuild]=useState(emptyBuild);
  const [tab,setTab]=useState("overview");
  const [pickerSlot,setPickerSlot]=useState(null);
  const [pickerItems,setPickerItems]=useState([]);
  const [pickerSearch,setPickerSearch]=useState("");
  const [pickerState,setPickerState]=useState("idle");
  const [notice,setNotice]=useState("");
  const [savedAt,setSavedAt]=useState("");

  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    const shared=params.get("share");
    if(shared){
      try{
        const restored=decodeShare(shared);
        setBuild({...emptyBuild(),...restored,advanced:{...emptyAdvanced(),...(restored.advanced||{})}});
        setNotice("Shared build loaded.");
        return;
      }catch(_error){setNotice("This share link could not be read.");}
    }
    try{
      const saved=window.localStorage.getItem("aion2-vision-build-v1");
      if(saved){
        const restored=JSON.parse(saved);
        setBuild({...emptyBuild(),...restored,advanced:{...emptyAdvanced(),...(restored.advanced||{})}});
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
        if(pickerSlot.role)items=items.filter((item)=>item.equipType===pickerSlot.role);
        setPickerItems(items);
        setPickerState(items.length?"ready":"empty");
      })
      .catch((error)=>{if(error.name!=="AbortError")setPickerState("error")});
    return()=>controller.abort();
  },[pickerSlot,build.region]);

  const classInfo=classData[build.classSlug];
  const skills=useMemo(()=>classSkillGroups(build.classSlug,build.region),[build.classSlug,build.region]);
  const selectedWing=catalogData.wings.find((item)=>item.id===build.wingId);
  const wingDetails=selectedWing?catalogData.wingDetails[selectedWing.id]:null;
  const selectedPet=catalogData.pets.find((item)=>item.id===build.petId);
  const petDetails=selectedPet?catalogData.petDetails[selectedPet.id]:null;
  const petLevelRow=petDetails?.baseStats?.rows?.find((row)=>String(row[0])===String(build.petLevel));
  const gearCount=Object.values(build.gear).filter(Boolean).length;
  const skillTotals=useMemo(()=>({
    active:build.skills.filter((key)=>key.startsWith("active:")).length,
    passive:build.skills.filter((key)=>key.startsWith("passive:")).length,
    stigma:build.skills.filter((key)=>key.startsWith("stigma:")).length
  }),[build.skills]);
  const totals=useMemo(()=>statSummary(build.gear),[build.gear]);
  const visiblePickerItems=useMemo(()=>pickerItems.filter((item)=>item.name.toLowerCase().includes(pickerSearch.trim().toLowerCase())),[pickerItems,pickerSearch]);

  const patch=(key,value)=>setBuild((current)=>({...current,[key]:value}));
  const toggleSkill=(type,name)=>{
    const key=type+":"+name;
    setBuild((current)=>({...current,skills:current.skills.includes(key)?current.skills.filter((entry)=>entry!==key):[...current.skills,key]}));
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
              <label className={styles.field}><span>CLASS</span><select value={build.classSlug} onChange={(event)=>{patch("classSlug",event.target.value);patch("skills",[])}}>{currentClasses.map((item)=><option key={item.slug} value={item.slug}>{item.name}</option>)}<option value="brawler" disabled>Brawler · data sync pending</option></select></label>
              <label className={styles.field}><span>LEVEL</span><input type="number" min="1" max="50" value={build.level} onChange={(event)=>patch("level",Math.max(1,Math.min(50,Number(event.target.value)||1)))}/></label>
              <label className={styles.field}><span>REGION DATA</span><select value={build.region} onChange={(event)=>{patch("region",event.target.value);patch("skills",[])}}><option value="GLOBAL">Global</option><option value="KR_TW">Korea / Taiwan</option></select></label>
              <label className={styles.field}><span>BUILD GOAL</span><select value={build.goal} onChange={(event)=>patch("goal",event.target.value)}>{goals.map((goal)=><option key={goal}>{goal}</option>)}</select></label>
            </div>
            <div className={styles.classBanner}><div className={styles.classMark}>{classInfo?.name?.slice(0,1)||"A"}</div><div><span>{classInfo?.role||"Choose a class"}</span><strong>{classInfo?.name||"Class data is not available"}</strong><small>{classInfo?.weapon?("Recommended weapon: "+classInfo.weapon):"The current local class catalog has no Brawler skills yet."}</small></div></div>
            <div className={styles.noticeBox}><strong>Data version matters</strong><span>Global and KR/TW catalogs stay separate. Skill and item records can differ by region and patch.</span></div>
          </section>}

          {tab==="skills"&&<section className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelIcon}><Sparkles size={19}/></span><div><h2>Skills &amp; Stigmas</h2><p>Choose the abilities you plan to use for this setup.</p></div></div>
            {!classInfo?<div className={styles.emptyState}>Skill data for this class has not been synced yet.</div>:<div className={styles.skillGroups}>{skills.map((group)=><section key={group.id} className={styles.skillGroup}><div className={styles.groupHeading}><h3>{group.label}</h3><span>{group.items.filter((item)=>build.skills.includes(group.id+":"+item.name)).length} selected</span></div><div className={styles.skillList}>{group.items.map((item)=><button key={item.name} type="button" className={build.skills.includes(group.id+":"+item.name)?styles.skillSelected:styles.skill} onClick={()=>toggleSkill(group.id,item.name)} aria-pressed={build.skills.includes(group.id+":"+item.name)}><span className={styles.skillDot}>{build.skills.includes(group.id+":"+item.name)?"✓":"+"}</span>{item.name}</button>)}</div></section>)}</div>}
            <div className={styles.dataFootnote}>{build.region==="KR_TW"?"KR/TW Stigma names use a provisional community-translated catalog.":"Global skill names come from the current local class catalog."} Selected skills are saved with the build; damage simulation is not included in this prototype.</div>
          </section>}

          {tab==="equipment"&&<section className={styles.panel}>
            <div className={styles.panelHeading}><span className={styles.panelIcon}><Sword size={19}/></span><div><h2>Equipment</h2><p>Pick items by slot. Repeated accessories have separate slots.</p></div></div>
            <div className={styles.gearGrid}>{slotDefs.map((slot)=><div key={slot.id} className={styles.gearSlot}><span className={styles.slotGlyph}><Shield size={15}/></span><div className={styles.slotCopy}><small>{slot.label.toUpperCase()}</small><strong>{build.gear[slot.id]?.name||"Empty slot"}</strong>{build.gear[slot.id]?.grade&&<em>{build.gear[slot.id].grade}</em>}</div><button type="button" className={styles.pickButton} onClick={()=>setPickerSlot(slot)}>{build.gear[slot.id]?"Change":"Choose"}</button>{build.gear[slot.id]&&<button type="button" className={styles.clearSlot} onClick={()=>setBuild((current)=>{const next={...current.gear};delete next[slot.id];return {...current,gear:next}})} aria-label={"Clear "+slot.label}>×</button>}</div>)}</div>
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
          <div className={styles.summaryCounts}><div><strong>{skillTotals.active+skillTotals.passive+skillTotals.stigma}</strong><small>skills</small></div><div><strong>{gearCount}/16</strong><small>gear slots</small></div><div><strong>{selectedWing?1:0}</strong><small>wings</small></div><div><strong>{selectedPet?1:0}</strong><small>pet</small></div></div>
          <div className={styles.summarySection}><h3>Known base stats</h3>{totals.length?totals.map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>):<p>Select items with exact base stats to see a limited preview.</p>}</div>
          <div className={styles.summarySection}><h3>Selected skills</h3><p>{skillTotals.active} active · {skillTotals.passive} passive · {skillTotals.stigma} Stigma</p></div>
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
