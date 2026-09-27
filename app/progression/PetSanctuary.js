"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Check, ChevronLeft, ChevronRight, Heart, Minus, PawPrint, Plus, Search, X} from "lucide-react";
import catalog from "./catalogData.json";
import icons from "./petIcons.json";
import petScenes from "./petScenes";
import styles from "./petSanctuary.module.css";

export default function PetSanctuary() {
  const [query,setQuery]=useState("");
  const [group,setGroup]=useState("");
  const [selectedId,setSelectedId]=useState("1004");
  const [activeId,setActiveId]=useState("");
  const [level,setLevel]=useState("3");
  const [expanded,setExpanded]=useState(true);
  const [sourceOpen,setSourceOpen]=useState(false);
  const [scenesOnly,setScenesOnly]=useState(false);
  const readyPets=catalog.pets.filter(p=>petScenes[p.id]);
  const rail=useRef(null);
  const dialog=useRef(null);
  const visible=useMemo(()=>catalog.pets.filter(p=>(!scenesOnly||petScenes[p.id])&&(!group||p.genus===group)&&(!query||`${p.name} ${p.genus}`.toLowerCase().includes(query.toLowerCase()))),[group,query,scenesOnly]);
  const selected=catalog.pets.find(p=>p.id===selectedId)||catalog.pets[0];
  const details=catalog.petDetails[selected.id];
  const scene=petScenes[selected.id];
  const row=details?.baseStats?.rows?.find(r=>String(r[0])===level);
  const stats=row?details.baseStats.columns.slice(1).map((label,i)=>[label,row[i+1]]).filter(([,value])=>value&&value!=="—"&&value!=="-"):[];
  const summon=details?.fields?.find(([label])=>label==="Souls to summon")?.[1];
  useEffect(()=>{try{setActiveId(localStorage.getItem("daevexus-pets-active")||"")}catch{}},[]);
  useEffect(()=>{rail.current?.scrollTo({left:0});},[query,group,scenesOnly]);
  useEffect(()=>{if(sourceOpen)dialog.current?.showModal();else dialog.current?.close();},[sourceOpen]);
  function activate(){setActiveId(selected.id);try{localStorage.setItem("daevexus-pets-active",selected.id)}catch{}}
  function reviewScene(direction){const index=readyPets.findIndex(p=>p.id===selectedId);const next=index<0?(direction>0?0:readyPets.length-1):(index+direction+readyPets.length)%readyPets.length;setSelectedId(readyPets[next].id);}
  function scroll(direction){rail.current?.scrollBy({left:direction*rail.current.clientWidth*.75,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});}
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/?menu=open" className={styles.back} aria-label="Back to menu"><ArrowLeft size={18}/></Link>
      <Link href="/" className={styles.brand}>DAEVEXUS</Link>
      <h1>Bond Sanctuary <span>· PETS</span></h1>
      <button className={styles.reference} onClick={()=>setSourceOpen(true)}>Reference info</button>
    </header>
    <section className={styles.scene} aria-label="Pet sanctuary">
      <div role="group" className={styles.sceneReview} aria-label="Review sanctuary scenes">
        <button onClick={()=>reviewScene(-1)} aria-label="Previous scene"><ChevronLeft size={16}/></button>
        <span aria-live="polite">{scene?`${readyPets.findIndex(p=>p.id===selectedId)+1} / ${readyPets.length} scenes`:"Scene coming soon"}</span>
        <button onClick={()=>reviewScene(1)} aria-label="Next scene"><ChevronRight size={16}/></button>
        <button className={styles.readyFilter} aria-pressed={scenesOnly} onClick={()=>setScenesOnly(!scenesOnly)}>Scenes ready · {readyPets.length}</button>
      </div>
      <div className={styles.artwork}>
        {scene?<img key={scene.src} className={styles.panorama} src={scene.src} style={{"--scene-position":scene.position,"--scene-mobile-position":scene.mobilePosition||"center 35%"}} fetchPriority="high" alt={scene.alt}/>:<div className={styles.otherPet}>{icons[selected.id]?<img src={icons[selected.id]} alt={selected.name+" companion"}/>:<PawPrint size={100}/>}</div>}
      </div>
      <div className={styles.content}>
        <div className={styles.identity} aria-live="polite">
          <span className={styles.eyebrow}>{selected.genus} · COMPANION</span>
          <h2>{selected.name}</h2>
          <p>{summon?`${summon} souls to summon`:"Summon cost not listed"}</p>
          <button className={styles.activate} onClick={activate} aria-pressed={activeId===selected.id}>{activeId===selected.id?<Check size={16}/>:<Heart size={16}/>} {activeId===selected.id?"Active companion":"Set as Active"}</button>
        </div>
        <section className={styles.stats} aria-label="Companion growth details">
          <div className={styles.statsHeading}><h3>Growth & traits</h3><button aria-label={expanded?"Collapse growth details":"Expand growth details"} aria-expanded={expanded} aria-controls="pet-growth" onClick={()=>setExpanded(!expanded)}>{expanded?<Minus size={16}/>:<Plus size={16}/>}</button></div>
          <div id="pet-growth" hidden={!expanded}>
            <div className={styles.levels} role="group" aria-label="Select recorded level">{["1","2","3"].map(value=><button key={value} aria-pressed={level===value} onClick={()=>setLevel(value)}>Lv. {value}</button>)}</div>
            <div className={styles.statList} aria-live="polite">{stats.length?stats.map(([label,value])=><div key={label}><span>{label.replace(/^🔮\s*/,"")}</span><strong>{value}</strong></div>):<p>No recorded stats for this level.</p>}</div>
            <button className={styles.sourceButton} onClick={()=>setSourceOpen(true)}>Sources & record</button>
          </div>
        </section>
      </div>
    </section>
    <section className={styles.dock} aria-label="Companion roster">
      <div className={styles.dockHeading}>
        <div><h3>Companion roster</h3><span aria-live="polite">{visible.length} / {catalog.pets.length} pets</span></div>
        <div className={styles.filters}>
          <label className={styles.search}><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search companions…" aria-label="Search companions by name or group"/></label>
          <select value={group} onChange={e=>setGroup(e.target.value)} aria-label="Filter companions by group"><option value="">All groups</option>{["Fera","Cogni","Natura","Varian","Special"].map(g=><option key={g}>{g}</option>)}</select>
          <div className={styles.arrows}><button aria-label="Previous companions" onClick={()=>scroll(-1)}><ChevronLeft size={18}/></button><button aria-label="Next companions" onClick={()=>scroll(1)}><ChevronRight size={18}/></button></div>
        </div>
      </div>
      <div className={styles.rail} ref={rail}>{visible.map(p=><button key={p.id} className={styles.pet} aria-pressed={selectedId===p.id} onClick={()=>setSelectedId(p.id)}><span className={styles.portrait}>{icons[p.id]?<img src={icons[p.id]} alt="" loading="lazy"/>:<PawPrint size={28}/>} {activeId===p.id&&<Check className={styles.featured} size={14} aria-label="Featured companion"/>}</span><strong>{p.name}</strong><small>{p.genus}</small></button>)}</div>
      {!visible.length&&<div className={styles.empty}>No companions match. <button onClick={()=>{setQuery("");setGroup("");setScenesOnly(false)}}>Clear filters</button></div>}
    </section>
    <dialog ref={dialog} className={styles.dialog} onCancel={()=>setSourceOpen(false)} onClose={()=>setSourceOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setSourceOpen(false)}}>
      <div className={styles.dialogHeading}><h2>{selected.name} · record</h2><button aria-label="Close reference info" onClick={()=>setSourceOpen(false)}><X size={20}/></button></div>
      {scene&&<p>Sanctuary artwork: a creative recreation inspired by the companion reference icon.</p>}
      {details?.fields?.length>0&&<dl>{details.fields.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
      {details?.tameFrom?.length>0&&<><h3>Recorded sources</h3><ul>{details.tameFrom.map((source,i)=><li key={i}>{source}</li>)}</ul></>}
      <p>Pet names, groups and growth values come from the AION2.app community reference, game client snapshot 2026-09-18. This is not an official DAEVEXUS or NCSOFT source; Global values may differ.</p>
    </dialog>
  </main>;
}
