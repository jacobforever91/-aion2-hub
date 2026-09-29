"use client";
import {useMemo,useState} from "react";
import {Minus,Plus,Search} from "lucide-react";
import catalogData from "../progression/catalogData.json";
import styles from "./wings-gallery.module.css";
const grades=["Common","Rare","Epic","Unique","Special"];
const colors={Common:"#dce7ee",Rare:"#7ab9dc",Epic:"#b69ad0",Unique:"#d0c39d",Special:"#c7a29e"};
const order=Object.fromEntries(grades.map((g,i)=>[g,i]));
const wings=catalogData.wings.map(x=>({...x,...(catalogData.wingDetails?.[x.id]||{stats:[]})})).sort((a,b)=>order[a.grade]-order[b.grade]||a.name.localeCompare(b.name)||a.faction.localeCompare(b.faction));
const PAGE=9,statNames=new Set(["HP","MP","Flight Power","Attack","Defense","Accuracy","Evasion","Crit","Critical Hit","Block","Parry"]);
export default function WingsPage(){
 const [query,setQuery]=useState(""),[grade,setGrade]=useState("All"),[faction,setFaction]=useState("All"),[selected,setSelected]=useState(null),[level,setLevel]=useState(0),[page,setPage]=useState(1);
 const visible=useMemo(()=>wings.filter(w=>(grade==="All"||w.grade===grade)&&(faction==="All"||w.faction===faction)&&(!query||w.name.toLowerCase().includes(query.toLowerCase()))),[query,grade,faction]);
 const pages=Math.max(1,Math.ceil(visible.length/PAGE)),shown=visible.slice((page-1)*PAGE,page*PAGE);
 const filter=(f,g)=>{setFaction(f);setGrade(g);setPage(1)};
 const choose=w=>{setSelected(w);setLevel(0)};
 const cap=selected?.enhancementCap??0,canEnhance=!!selected&&!selected.cosmetic&&cap>0;
 const malformed=!!selected?.stats?.some(([k,v])=>statNames.has(String(k))&&statNames.has(String(v)));
 return <main className={styles.page}>
  <header className={styles.header}><div><span>DAEVEXUS</span><h1>Wings</h1><small>ASCEND BEYOND LIMITS</small></div><div className={styles.filters}><label><Search/><input value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} placeholder="Search wings..."/></label><select value={faction} onChange={e=>filter(e.target.value,grade)}><option value="All">All factions</option><option>Elyos</option><option>Asmodians</option></select><select value={grade} onChange={e=>filter(faction,e.target.value)}><option value="All">All rarities</option>{grades.map(g=><option key={g}>{g}</option>)}</select></div></header>
  <section className={styles.workspace}>
   <nav className={styles.side}><button className={faction==="All"&&grade==="All"?styles.sideActive:""} onClick={()=>filter("All","All")}>✦ <span>All Wings</span></button><button className={faction==="Elyos"?styles.sideActive:""} onClick={()=>filter("Elyos","All")}>◇ <span>Elyos</span></button><button className={faction==="Asmodians"?styles.sideActive:""} onClick={()=>filter("Asmodians","All")}>◆ <span>Asmodians</span></button><i/>{grades.map(g=><button key={g} className={grade===g?styles.sideActive:""} onClick={()=>filter("All",g)}><b style={{"--tier":colors[g]}}/><span>{g}</span></button>)}</nav>
   <div className={styles.center}><div className={styles.gallery}>{shown.map(w=><button key={w.id} className={selected?.id===w.id?styles.active:""} style={{"--tier":colors[w.grade],"--x":`${-w.iconPosition[0]*58}px`,"--y":`${-w.iconPosition[1]*58}px`}} onClick={()=>choose(w)}><i/><strong>{w.name}</strong><small>{w.faction} · {w.grade}</small></button>)}</div>{pages>1&&<div className={styles.pagination}><button disabled={page===1} onClick={()=>setPage(page-1)}>‹</button><span>{page} / {pages}</span><button disabled={page===pages} onClick={()=>setPage(page+1)}>›</button></div>}</div>
   <aside className={styles.detail}>{!selected?<div className={styles.empty}><b>Select a wing</b><span>Choose a wing from the gallery to inspect its verified information.</span></div>:<><div className={styles.title} style={{"--tier":colors[selected.grade],"--x":`${-selected.iconPosition[0]*58}px`,"--y":`${-selected.iconPosition[1]*58}px`}}><div><small>{selected.grade} · {selected.faction}</small><h2>{selected.name}</h2></div><i/></div>{canEnhance&&<div className={styles.levelBox}><div className={styles.levelHead}><span>Enhancement Level</span><strong>+{level}</strong></div><div className={styles.levelControls}><button onClick={()=>setLevel(Math.max(0,level-1))}><Minus/></button><input type="range" min="0" max={cap} value={level} onChange={e=>setLevel(+e.target.value)}/><button onClick={()=>setLevel(Math.min(cap,level+1))}><Plus/></button></div><small>{level} / {cap}</small></div>}<div className={styles.stats}><h3>Recorded Stats</h3>{malformed?<p>Values pending verified Global data.</p>:selected.stats?.length?selected.stats.map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>):<p>No verified individual stats documented yet.</p>}</div>{canEnhance&&<div className={styles.note}>Enhancement cap: +{cap}. Per-level values remain hidden until verified.</div>}</>}</aside>
  </section>
 </main>
}