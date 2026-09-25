"use client";

import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, ArrowRight, Search, Sparkles} from "lucide-react";
import styles from "./arcana.module.css";

const rarityOrder={Common:0,Rare:1,Epic:2,Unique:3,Heroic:4,Special:5};

function cardType(name){
  return String(name||"").replace(/^Arcana\s*:\s*/i,"").trim().split(/\s+/)[0]||"Other";
}

function ArcanaCard({card}){
  const [open,setOpen]=useState(false);
  const [details,setDetails]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);

  useEffect(()=>{
    if(!open||details)return;
    const controller=new AbortController();
    setLoading(true);
    fetch("/api/arcana?item="+encodeURIComponent(card.id),{signal:controller.signal})
      .then(async(response)=>{const data=await response.json();if(!response.ok)throw new Error(data.error||"Could not load card details.");return data})
      .then(setDetails)
      .catch((reason)=>{if(reason.name!=="AbortError")setError(true)})
      .finally(()=>setLoading(false));
    return()=>controller.abort();
  },[open,details,card.id]);

  const mainStats=details?.stats||[];
  const imprintRows=details?.imprints||[];
  const snapshot=details?.snapshot?new Date(`${details.snapshot}T00:00:00Z`).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}):"Global reference";
  return <details className={styles.card} style={{"--rarity-color":({Common:"#b7c6cf",Rare:"#55b8ff",Epic:"#c17cff",Unique:"#e5c36e",Heroic:"#ff806c",Special:"#ff806c"}[card.grade]||"#8ccddd")}} open={open} onToggle={(event)=>setOpen(event.currentTarget.open)}>
    <summary>
      <span className={styles.cardMark}><img src={card.icon} alt="" loading="lazy" decoding="async" onError={(event)=>{event.currentTarget.style.display="none"}}/></span>
      <span className={styles.cardCopy}><small>{cardType(card.name)} · {card.grade||"GRADE UNKNOWN"}</small><strong>{card.name}</strong><em>{details?.itemLevel?"Item Lv. "+details.itemLevel:"Tap to view stats"}{details?.requiredLevel?" · Requires Lv. "+details.requiredLevel:""}</em></span>
      <span className={styles.expand} aria-hidden="true">+</span>
    </summary>
    <div className={styles.cardDetails}>
      {loading&&<p>Loading Arcana stats…</p>}
      {error&&<p>Card details are temporarily unavailable.</p>}
      {!loading&&!error&&details&&<>
        {mainStats.length?mainStats.map((stat,index)=><div key={stat.label+index}><span>{stat.label}</span><b>{stat.value}</b></div>):<p>No base stats were listed for this card in the current snapshot.</p>}
        {details.requiredLevel&&<div><span>Required character level</span><b>{details.requiredLevel}</b></div>}
        {!!details.setPieces&&<div><span>Related set pieces</span><b>{details.setPieces}</b></div>}
        {imprintRows.length>0&&<div className={styles.imprintBlock}><span>Skill imprint pools</span>{imprintRows.map((row,index)=><p key={row.label+index}><b>{row.label}</b><br/>{row.value}</p>)}</div>}
        {!mainStats.length&&!imprintRows.length&&<p>No detailed stats were listed for this card in the current snapshot.</p>}
        <small className={styles.itemId}>Item ID {card.id} · Global reference · {snapshot}</small>
      </>}
    </div>
  </details>;
}

export default function ArcanaCatalog(){
  const [query,setQuery]=useState("");
  const [type,setType]=useState("All");
  const [rarity,setRarity]=useState("All rarities");
  const [cards,setCards]=useState([]);
  const [rarities,setRarities]=useState([]);
  const [snapshot,setSnapshot]=useState("");
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);

  useEffect(()=>{
    const controller=new AbortController();
    fetch("/api/arcana",{signal:controller.signal})
      .then(async(response)=>{const data=await response.json();if(!response.ok)throw new Error(data.error||"Could not load Arcana catalog.");return data})
      .then((data)=>{setCards(data.items||[]);setRarities(data.rarities||[]);setSnapshot(data.snapshot||"")})
      .catch((reason)=>{if(reason.name!=="AbortError")setError(true)})
      .finally(()=>setLoading(false));
    return()=>controller.abort();
  },[]);

  const types=useMemo(()=>["All",...new Set(cards.map((card)=>cardType(card.name)))],[cards]);
  const visibleCards=useMemo(()=>cards.filter((card)=>{
    const matchesType=type==="All"||cardType(card.name)===type;
    const matchesRarity=rarity==="All rarities"||card.grade===rarity;
    const matchesQuery=(card.name+" "+card.grade+" "+cardType(card.name)).toLowerCase().includes(query.trim().toLowerCase());
    return matchesType&&matchesRarity&&matchesQuery;
  }).sort((a,b)=>(rarityOrder[b.grade]??-1)-(rarityOrder[a.grade]??-1)||a.name.localeCompare(b.name)),[cards,query,rarity,type]);

  return <main className={styles.page}>
    <Link className={styles.back} href="/?menu=open" aria-label="Back to the Game menu"><ArrowLeft/></Link>
    <div className={styles.content}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}><Sparkles/> GAME · CHARACTER SYSTEM</span>
        <h1>Arcana</h1>
        <p>Search Arcana cards by name, type, or rarity. Open any card to see its icon, stats, and skill imprints.</p>
      </header>

      <section className={styles.catalog} aria-labelledby="catalogTitle">
        <div className={styles.catalogHead}>
          <div><span className={styles.sectionLabel}>CARD CATALOG</span><h2 id="catalogTitle">Arcana cards</h2></div>
          <span className={styles.count}>{loading?"Loading…":`${visibleCards.length} / ${cards.length}`}</span>
        </div>
        <label className={styles.search}><Search/><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search by card or rarity" aria-label="Search Arcana cards"/></label>
        <div className={styles.filterBar}>
          <div className={styles.filters} aria-label="Filter by card type">{types.map((item)=><button key={item} type="button" className={type===item?styles.filterActive:styles.filter} aria-pressed={type===item} onClick={()=>setType(item)}>{item}</button>)}</div>
          <select className={styles.raritySelect} value={rarity} onChange={(event)=>setRarity(event.target.value)} aria-label="Filter by rarity"><option>All rarities</option>{rarities.map((grade)=><option key={grade}>{grade}</option>)}</select>
        </div>

        <div className={styles.cardList}>
          {loading&&<p className={styles.empty}>Loading the Arcana catalog…</p>}
          {error&&<p className={styles.empty}>The Arcana reference is temporarily unavailable. Please try again shortly.</p>}
          {!loading&&!error&&visibleCards.map((card)=><ArcanaCard card={card} key={card.id}/>) }
          {!loading&&!error&&!visibleCards.length&&<p className={styles.empty}>No Arcana cards match these filters.</p>}
        </div>
      </section>

      <aside className={styles.dataNote}>
        <strong>Reference data · Global</strong>
        <p>Community reference · Global{snapshot?` · checked ${new Date(`${snapshot}T00:00:00Z`).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"})}`:""}. The current catalog contains Common, Rare, Epic, and Unique Arcana. Values may change with game updates.</p>
      </aside>

      <Link className={styles.buildLink} href="/builds?tab=arcana#arcana-setup">
        <span><small>BUILD CREATOR</small><strong>Record Arcana in a build</strong></span><ArrowRight/>
      </Link>
    </div>
  </main>;
}
