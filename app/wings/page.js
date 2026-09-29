"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowLeft,Minus,Plus,Search} from "lucide-react";
import catalogData from "../progression/catalogData.json";
import styles from "./wings-gallery.module.css";

const grades=["Common","Rare","Epic","Unique","Special"];
const colors={Common:"#dce7ee",Rare:"#55bfff",Epic:"#c982ff",Unique:"#e8c467",Special:"#ff8178"};
const order=Object.fromEntries(grades.map((g,i)=>[g,i]));
const wings=catalogData.wings.map(item=>({...item,...(catalogData.wingDetails?.[item.id]||{stats:[]})}))
 .sort((a,b)=>order[a.grade]-order[b.grade]||a.name.localeCompare(b.name)||a.faction.localeCompare(b.faction));

export default function WingsPage(){
 const [query,setQuery]=useState("");
 const [grade,setGrade]=useState("All");
 const [faction,setFaction]=useState("All");
 const [selected,setSelected]=useState(null);
 const [level,setLevel]=useState(0);
 const visible=useMemo(()=>wings.filter(w=>(grade==="All"||w.grade===grade)&&(faction==="All"||w.faction===faction)&&(!query||w.name.toLowerCase().includes(query.toLowerCase()))),[query,grade,faction]);
 const choose=w=>{setSelected(w);setLevel(0)};
 const cap=selected?.enhancementCap??0;
 const canEnhance=!!selected&&!selected.cosmetic&&cap>0;
 return <main className={styles.page}>
   <Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
   <header className={styles.header}><div><span>DAEVEXUS</span><h1>Wings</h1></div>
     <div className={styles.filters}>
       <label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search wings"/></label>
       <select value={faction} onChange={e=>setFaction(e.target.value)}><option value="All">All factions</option><option>Elyos</option><option>Asmodians</option></select>
       <select value={grade} onChange={e=>setGrade(e.target.value)}><option value="All">All rarities</option>{grades.map(g=><option key={g}>{g}</option>)}</select>
     </div>
   </header>
   <section className={styles.workspace}>
     <div className={styles.gallery}>
       {visible.map(w=><button key={w.id} className={selected?.id===w.id?styles.active:""} style={{"--tier":colors[w.grade],"--x":`${-w.iconPosition[0]*58}px`,"--y":`${-w.iconPosition[1]*58}px`}} onClick={()=>choose(w)}>
         <i/><strong>{w.name}</strong><small>{w.faction} · {w.grade}</small>
       </button>)}
     </div>
     <aside className={styles.detail}>
       {!selected?<div className={styles.empty}><b>Select a wing</b><span>Choose any wing from the gallery to inspect its recorded stats and enhancement levels.</span></div>:<>
         <div className={styles.title} style={{"--tier":colors[selected.grade],"--x":`${-selected.iconPosition[0]*58}px`,"--y":`${-selected.iconPosition[1]*58}px`}}><i/><div><small>{selected.faction} · {selected.grade}</small><h2>{selected.name}</h2></div></div>
         {canEnhance?<div className={styles.levelBox}><div className={styles.levelHead}><span>Enhancement level</span><strong>+{level}</strong></div><div className={styles.levelControls}><button onClick={()=>setLevel(v=>Math.max(0,v-1))} disabled={level===0}><Minus/></button><input type="range" min="0" max={cap} value={level} onChange={e=>setLevel(+e.target.value)}/><button onClick={()=>setLevel(v=>Math.min(cap,v+1))} disabled={level===cap}><Plus/></button></div><small>0 — {cap}</small></div>:<div className={styles.note}>This wing has no documented enhancement progression.</div>}
         <div className={styles.stats}><h3>Recorded stats {canEnhance&&<span>at +{level}</span>}</h3>
           {selected.stats?.length?selected.stats.map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>):<p>No individual stats are documented for this wing.</p>}
         </div>
         {canEnhance&&level>0&&<div className={styles.note}>The source confirms an enhancement cap of +{cap}, but does not provide a verified stat breakdown for every step. DAEVEXUS will not invent level values.</div>}
       </>}
     </aside>
   </section>
 </main>
}