"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Search, Feather, Sparkles} from "lucide-react";
import styles from "./progression.module.css";
import catalogData from "./catalogData.json";
import petIcons from "./petIcons.json";

const tierColors = {Common:"#e8eef3",Rare:"#50baff",Epic:"#c579ff",Unique:"#ffd45b",Special:"#ff665f",Heroic:"#ff665f"};
const wingGrades = ["Common","Rare","Epic","Unique","Special"];
const wingGradeOrder = Object.fromEntries(wingGrades.map((grade,index)=>[grade,index]));
const wingFactionOrder = {Elyos:0,Asmodians:1};
const genusColors = {Fera:"#91d679",Cogni:"#65d9f4",Natura:"#8fe0b4",Varian:"#bd9aff",Special:"#ffc76c"};
const wingItems = catalogData.wings.map((item) => ({
  ...item,
  ...(catalogData.wingDetails[item.id] || {stats: []}),
})).sort((a,b)=>wingGradeOrder[a.grade]-wingGradeOrder[b.grade]||a.name.localeCompare(b.name)||(wingFactionOrder[a.faction]??99)-(wingFactionOrder[b.faction]??99));

const feraChances = [
  [1,"90%","10%","—","—","—"],[2,"70%","30%","—","—","—"],[3,"55%","45%","—","—","—"],
  [4,"50%","45%","5%","—","—"],[5,"45%","45%","10%","—","—"],[6,"40%","40%","20%","—","—"],
  [7,"35%","34%","30%","1%","—"],[8,"30%","30%","35%","5%","—"],[9,"25%","25%","39%","10%","1%"],[10,"20%","30%","30%","15%","5%"],
];

const standardPools = {
  Common:[["Defense","40–80","16.67%"],["Critical Hit Resist","2–4","16.67%"],["Evasion","5–10","16.67%"],["Block","7–14","16.67%"],["HP","10–20","16.66%"],["MP","5–10","16.66%"]],
  Rare:[["Attack","5–10","11.12%"],["Defense","50–100","11.11%"],["Accuracy","7–14","11.11%"],["Evasion","7–14","11.11%"],["Critical Hit","5–10","11.11%"],["Critical Hit Resist","5–10","11.11%"],["Block","10–20","11.11%"],["HP","20–40","11.11%"],["MP","10–20","11.11%"]],
  Epic:[["Front Attack","6–12","16.67%"],["Back Attack","6–12","16.67%"],["PvE Attack","6–12","16.67%"],["Boss Attack","6–12","16.67%"],["HP","30–60","16.66%"],["MP","15–30","16.66%"]],
  Unique:[["Attack Bonus","6–12","10%"],["Max Attack","8–16","10%"],["Penetration","80–160","10%"],["Critical Attack","8–16","10%"],["Front Attack","8–16","10%"],["Back Attack","8–16","10%"],["PvE Attack","8–16","10%"],["Boss Attack","8–16","10%"],["HP","40–80","10%"],["MP","20–40","10%"]],
  Heroic:[["Attack Bonus","8–16","10%"],["Max Attack","10–20","10%"],["Penetration","100–200","10%"],["Critical Attack","10–20","10%"],["Front Attack","10–20","10%"],["Back Attack","10–20","10%"],["PvE Attack","10–20","10%"],["Boss Attack","10–20","10%"],["HP","50–100","10%"],["MP","25–50","10%"]],
};
const specialPools = {
  Common:[["Attack Bonus","2–4"],["Max Attack","3–6"],["Penetration","30–60"],["Critical Attack","4–8"],["Front Attack","4–8"],["Back Attack","4–8"],["PvE Attack","4–8"],["Boss Attack","4–8"],["HP","10–20"],["MP","5–10"]],
  Rare:[["Attack Bonus","3–6"],["Max Attack","5–10"],["Penetration","50–100"],["Critical Attack","5–10"],["Front Attack","5–10"],["Back Attack","5–10"],["PvE Attack","5–10"],["Boss Attack","5–10"],["HP","20–40"],["MP","10–20"]],
  Epic:[["Attack Bonus","4–8"],["Max Attack","6–12"],["Penetration","60–120"],["Critical Attack","6–12"],["Front Attack","6–12"],["Back Attack","6–12"],["PvE Attack","6–12"],["Boss Attack","6–12"],["HP","30–60"],["MP","15–30"]],
};
for (const grade of ["Unique","Heroic"]) specialPools[grade]=standardPools[grade].map(([name,range])=>[name,range]);

function SourceNote({children}) {
  return <aside className={styles.source}><Sparkles aria-hidden="true"/><p>{children} Source: AION2.app community reference, game client snapshot 2026-09-18. Not an official VISION or NCSOFT page; Global values may change.</p></aside>;
}

function WingsCatalog() {
  const [query,setQuery]=useState("");
  const [selectedGrades,setSelectedGrades]=useState([]);
  const [faction,setFaction]=useState("All factions");
  const [selected,setSelected]=useState(wingItems[0]);
  const visible=useMemo(()=>wingItems.filter(item=>(!query||`${item.name} ${item.grade} ${item.faction}`.toLowerCase().includes(query.toLowerCase()))&&(!selectedGrades.length||selectedGrades.includes(item.grade))&&(faction==="All factions"||item.faction===faction)),[query,selectedGrades,faction]);
  const selectedVisible=visible.find((item)=>item.id===selected.id)||visible[0]||selected;
  const toggleGrade=(grade)=>setSelectedGrades((current)=>current.includes(grade)?current.filter((value)=>value!==grade):[...current,grade]);
  return <main className={styles.page}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/pets">Pets</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <header className={styles.header}><span className={styles.eyebrow}><Feather/> GAME · COSMETICS</span><h1>Wings</h1><p>Filter by rarity and faction. Equipment wings show their recorded stats; Special wings are listed as cosmetics in the KR reference.</p></header>
      <div className={styles.layout}>
        <section className={styles.catalog}>
          <div className={styles.toolbar}><label className={styles.search}><Search/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search wings…"/></label><select aria-label="Filter by faction" value={faction} onChange={event=>setFaction(event.target.value)}><option>All factions</option><option>Elyos</option><option>Asmodians</option></select></div>
          <div className={styles.count}>Showing {visible.length} of {wingItems.length} wings · 45 Elyos · 45 Asmodians</div>
          <div className={styles.tierLegend} role="group" aria-label="Filter wings by rarity">
            <button type="button" className={`${styles.tierBadge} ${styles.tierFilter} ${selectedGrades.length===0?styles.tierFilterActive:""}`} style={{"--tier-color":"#8ca8b7"}} aria-pressed={selectedGrades.length===0} onClick={()=>setSelectedGrades([])}>All rarities</button>
            {wingGrades.map(value=><button type="button" key={value} className={`${styles.tierBadge} ${styles.tierFilter} ${selectedGrades.includes(value)?styles.tierFilterActive:""}`} style={{"--tier-color":tierColors[value]}} aria-pressed={selectedGrades.includes(value)} onClick={()=>toggleGrade(value)}>{value}</button>)}
          </div>
          <div className={styles.list}>{visible.map(item=><button id={`wing-${item.id}`} key={item.id} className={`${styles.item} ${styles.tierItem} ${selectedVisible.id===item.id?styles.selected:""}`} style={{"--tier-color":tierColors[item.grade],"--ix38":`${-item.iconPosition[0]*38}px`,"--iy38":`${-item.iconPosition[1]*38}px`,"--ix58":`${-item.iconPosition[0]*58}px`,"--iy58":`${-item.iconPosition[1]*58}px`}} onClick={()=>setSelected(item)}><span className={`${styles.itemIcon} ${styles.artIcon} ${styles.wingArtIcon}`} aria-hidden="true"/><span className={styles.itemCopy}><strong>{item.name}</strong><small>{item.faction}</small></span><span className={styles.tierBadge} style={{"--tier-color":tierColors[item.grade]}}>{item.grade}</span></button>)}</div>
          {!visible.length&&<p className={styles.empty}>No wings match this search.</p>}
        </section>
        <aside className={styles.detail}>{visible.length>0?<><div className={styles.detailHeading}><span className={`${styles.detailIcon} ${styles.artIcon} ${styles.wingArtIcon}`} style={{"--tier-color":tierColors[selectedVisible.grade],"--ix38":`${-selectedVisible.iconPosition[0]*38}px`,"--iy38":`${-selectedVisible.iconPosition[1]*38}px`,"--ix58":`${-selectedVisible.iconPosition[0]*58}px`,"--iy58":`${-selectedVisible.iconPosition[1]*58}px`}} aria-hidden="true"/><div><span className={styles.kicker}>SELECTED WING</span><h2>{selectedVisible.name}</h2></div></div><p className={styles.meta}><span className={styles.tierBadge} style={{"--tier-color":tierColors[selectedVisible.grade]}}>{selectedVisible.grade}</span> · {selectedVisible.faction}</p>
          {selectedVisible.cosmetic?<div className={styles.hint}><strong>Cosmetic wing</strong><br/>The KR reference lists this Special wing with no collection effects and no enhancement. This is community-presented KR data; Global may differ.</div>:selectedVisible.stats.length>0?<><h3>Recorded stats</h3><div className={styles.stats}>{selectedVisible.stats.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><small className={styles.caption}>Values are transcribed from this item record. The reference does not provide a stat breakdown for every enchant step.</small></>:<p className={styles.hint}>This reference lists the wing’s name, faction, and grade, but does not include individual stats for this item.</p>}</>:<p className={styles.empty}>No wings match the selected rarity, faction, and search.</p>}
        </aside>
      </div>
      <SourceNote>Item records and equipment stats: independent AION 2 reference snapshots. Special-wing cosmetic classification: KR collection data, table snapshot 2026-09-22, based on NCSOFT’s Korean disclosure and item dictionary. These are reference sources, not Global confirmation; Global data may differ.</SourceNote>
    </div>
  </main>;
}

function PetsCatalog() {
  const [level,setLevel]=useState(1);
  const [query,setQuery]=useState("");
  const [genus,setGenus]=useState("All groups");
  const [grade,setGrade]=useState("Common");
  const [selected,setSelected]=useState(catalogData.pets.find(pet=>pet.id==="1008"));
  const selectedDetails=catalogData.petDetails[selected.id];
  const visible=useMemo(()=>catalogData.pets.filter(pet=>(!query||`${pet.name} ${pet.genus}`.toLowerCase().includes(query.toLowerCase()))&&(genus==="All groups"||pet.genus===genus)),[query,genus]);
  const genusStats=["Attack","Defense","Accuracy","Evasion","Critical Hit","Critical Hit Resist","Block"];
  const normalPool=(standardPools[grade]||[]).map(([name,range,chance])=>[genusStats.includes(name)?`${selected.genus} ${name}`:name,range,chance]);
  const pool=selected.genus==="Special"?(specialPools[grade]||[]).map(([name,range])=>[name,range,"10%"]):normalPool;
  return <main className={styles.page}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/wings">Wings</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <section className={styles.catalog} style={{marginTop:20}} aria-label="Pets"><div className={styles.toolbar}><label className={styles.search}><Search/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search 208 pets…"/></label><select aria-label="Filter by pet group" value={genus} onChange={event=>setGenus(event.target.value)}><option>All groups</option>{["Fera","Cogni","Natura","Varian","Special"].map(value=><option key={value}>{value}</option>)}</select></div><div className={styles.count}>{visible.length} of {catalogData.pets.length} pets</div><div className={styles.petList}>{visible.map(pet=><button key={pet.id} className={`${styles.item} ${styles.tierItem} ${selected.id===pet.id?styles.selected:""}`} style={{"--tier-color":genusColors[pet.genus],"--ix38":`${-pet.iconPosition[0]*38}px`,"--iy38":`${-pet.iconPosition[1]*38}px`,"--ix58":`${-pet.iconPosition[0]*58}px`,"--iy58":`${-pet.iconPosition[1]*58}px`}} onClick={()=>{setSelected(pet);setLevel(1)}}><span className={`${styles.itemIcon} ${styles.artIcon}`} aria-hidden="true"><img src={petIcons[pet.id]} alt="" loading="lazy" decoding="async"/></span><span className={styles.itemCopy}><strong>{pet.name}</strong><small>{pet.genus}</small></span></button>)}</div>{!visible.length&&<p className={styles.empty}>No pets match this search.</p>}</section>
      <section className={styles.progressCard}><div className={styles.progressHeading}><div className={styles.detailHeading}><span className={`${styles.detailIcon} ${styles.artIcon}`} style={{"--tier-color":genusColors[selected.genus]}} aria-hidden="true"><img src={petIcons[selected.id]} alt="" decoding="async"/></span><div><span className={styles.kicker}>GROWTH LEVEL · {selected.genus.toUpperCase()}</span><h2>{selected.name}</h2></div></div><strong>Lv. {level}<small> / 10</small></strong></div><input aria-label="Pet growth level" type="range" min="1" max="10" value={level} onChange={event=>setLevel(Number(event.target.value))}/><div className={styles.scale}><span>Level 1</span><span>Level 5</span><span>Level 10</span></div><div className={styles.chanceCallout}><span>Bonus grade chance at level {level}</span><strong>{feraChances[level-1][1]} Common · {feraChances[level-1][2]} Rare · {feraChances[level-1][3]} Epic · {feraChances[level-1][4]} Unique · {feraChances[level-1][5]} Heroic</strong></div>
        {selectedDetails?.fields?.length>0&&<><h3>Pet record</h3><div className={styles.stats}>{selectedDetails.fields.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></>}
        {selectedDetails?.tameFrom?.length>0&&<details className={styles.sourcesDetails}><summary>Known tame sources · {selectedDetails.tameFrom.length}</summary><ul>{selectedDetails.tameFrom.map((source,index)=><li key={`${source}-${index}`}>{source}</li>)}</ul></details>}
        {selectedDetails?.baseStats?<><h3>Pet-specific base stats</h3><div className={styles.tableWrap}><table><thead><tr>{selectedDetails.baseStats.columns.map((column,index)=><th key={`${column}-${index}`}>{column}</th>)}</tr></thead><tbody>{selectedDetails.baseStats.rows.map((row,index)=><tr className={Number(row[0])===level?styles.activeRow:""} key={`${row[0]}-${index}`}>{row.map((cell,cellIndex)=><td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div></>:<p className={styles.hint}>This pet’s source record does not include an individual level table. Its genus growth chances and stat pool are shown below.</p>}
      </section>
      <section className={styles.bonusCard} style={{"--tier-color":tierColors[grade]}}><div className={styles.sectionHead}><div><span className={styles.kicker}>{selected.genus.toUpperCase()} · BONUS POOL</span><h2>Possible stat rolls <span className={styles.tierBadge}>{grade} tier</span></h2><p>Shared by pets in this genus. Each slot rolls from the selected grade’s pool.</p></div><select aria-label="Bonus grade" value={grade} onChange={event=>setGrade(event.target.value)}>{["Common","Rare","Epic","Unique","Heroic"].map(value=><option key={value}>{value}</option>)}</select></div><div className={styles.tierLegend}>{["Common","Rare","Epic","Unique","Heroic"].map(value=><span key={value} className={styles.tierBadge} style={{"--tier-color":tierColors[value]}}>{value}</span>)}</div><div className={styles.bonusGrid}>{pool.map(([name,value,chance])=><div key={name}><span>{name}</span><strong>{value}</strong><small>{chance} chance</small></div>)}</div></section>
      <SourceNote>All {catalogData.pets.length} pet records are indexed locally, including summon costs, movement speed, summon items, tame sources, and level tables when published in the source snapshot. Genus growth pools remain available for every listed group.</SourceNote>
    </div>
  </main>;
}

export default function ProgressionCatalog({kind}) {
  return kind === "wings" ? <WingsCatalog/> : <PetsCatalog/>;
}
