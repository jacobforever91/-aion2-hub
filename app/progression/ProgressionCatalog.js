"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Search, Feather, PawPrint, Sparkles} from "lucide-react";
import styles from "./progression.module.css";
import catalogData from "./catalogData.json";

const wingItems = catalogData.wings.map((item) => ({
  ...item,
  stats: item.id === "30101000" ? [["Flight Power","200"],["Penetration","100"],["Damage Tolerance","3.5% + 100"],["Boss Attack","125 + 30"]] : null,
}));

const petLevels = [
  {level:1, souls:"25", groundSpeed:"1", accuracy:"—", dex:"—"},
  {level:2, souls:"75", groundSpeed:"2", accuracy:"1", dex:"—"},
  {level:3, souls:"—", groundSpeed:"3", accuracy:"2", dex:"1"},
];
const petRecordExtras = {summonSouls:"5",runSpeed:"900",sprintSpeed:"1200",summonItem:"534660007",tameFrom:"Coastal Odyle Spider · Lv. 16"};

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
  const [grade,setGrade]=useState("All grades");
  const [faction,setFaction]=useState("All factions");
  const [enchant,setEnchant]=useState(0);
  const [selected,setSelected]=useState(wingItems.find(item=>item.id==="30101000"));
  const visible=useMemo(()=>wingItems.filter(item=>(!query||`${item.name} ${item.grade} ${item.faction}`.toLowerCase().includes(query.toLowerCase()))&&(grade==="All grades"||item.grade===grade)&&(faction==="All factions"||item.faction===faction)),[query,grade,faction]);
  return <main className={styles.page}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/pets">Pets</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <header className={styles.header}><span className={styles.eyebrow}><Feather/> GAME · COSMETICS</span><h1>Wings</h1><p>Search the wings catalog and inspect enchantment information and documented stat bonuses.</p></header>
      <section className={styles.progressCard}>
        <div className={styles.progressHeading}><div><span className={styles.kicker}>ENCHANTMENT</span><h2>Progression to <em>+10</em></h2></div><strong>+{enchant}<small> / +10</small></strong></div>
        <input aria-label="Preview enchantment level" type="range" min="0" max="10" value={enchant} onChange={event=>setEnchant(Number(event.target.value))}/>
        <div className={styles.scale}><span>+0</span><span>+5</span><span>+10</span></div>
        <p className={styles.hint}>The source confirms enchantment levels up to +10. Stat changes at each intermediate level are not available in this reference, so this control marks the level without estimating values.</p>
      </section>
      <div className={styles.layout}>
        <section className={styles.catalog}>
          <div className={styles.toolbar}><label className={styles.search}><Search/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search wings…"/></label><select aria-label="Filter by grade" value={grade} onChange={event=>setGrade(event.target.value)}><option>All grades</option>{["Common","Rare","Special","Epic","Unique"].map(value=><option key={value}>{value}</option>)}</select><select aria-label="Filter by faction" value={faction} onChange={event=>setFaction(event.target.value)}><option>All factions</option><option>Elyos</option><option>Asmodians</option></select></div>
          <div className={styles.count}>{visible.length} of {wingItems.length} wings · 45 Elyos · 45 Asmodians</div>
          <div className={styles.list}>{visible.map(item=><button id={`wing-${item.id}`} key={item.id} className={`${styles.item} ${selected.id===item.id?styles.selected:""}`} onClick={()=>setSelected(item)}><span className={styles.itemIcon}><Feather/></span><span className={styles.itemCopy}><strong>{item.name}</strong><small>{item.grade} · {item.faction}</small></span>{item.enhancementCap&&<span className={styles.levelPill}>+{item.enhancementCap}</span>}</button>)}</div>
          {!visible.length&&<p className={styles.empty}>No wings match this search.</p>}
        </section>
        <aside className={styles.detail}><span className={styles.kicker}>SELECTED WING</span><h2>{selected.name}</h2><p className={styles.meta}>{selected.grade} · {selected.faction}{selected.enhancementCap?` · Enchantable to +${selected.enhancementCap}`:" · Special grade"}</p>
          {selected.stats?<><h3>Recorded stats</h3><div className={styles.stats}>{selected.stats.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><small className={styles.caption}>Forest Spirit Wings · the source lists these stats alongside a +10 enchant cap. Values for each individual enchant step were not available.</small></>:<p className={styles.hint}>The catalog includes this wing’s name, faction, grade, and listed enchant cap. Detailed stats for this item are not in the local reference yet.</p>}
        </aside>
      </div>
      <SourceNote>Reference catalog lists 90 wings (45 Elyos and 45 Asmodians), with grade and enchantment fields.</SourceNote>
    </div>
  </main>;
}

function PetsCatalog() {
  const [level,setLevel]=useState(1);
  const [query,setQuery]=useState("");
  const [genus,setGenus]=useState("All groups");
  const [grade,setGrade]=useState("Common");
  const [selected,setSelected]=useState(catalogData.pets.find(pet=>pet.id==="1008"));
  const visible=useMemo(()=>catalogData.pets.filter(pet=>(!query||`${pet.name} ${pet.genus}`.toLowerCase().includes(query.toLowerCase()))&&(genus==="All groups"||pet.genus===genus)),[query,genus]);
  const genusStats=["Attack","Defense","Accuracy","Evasion","Critical Hit","Critical Hit Resist","Block"];
  const normalPool=(standardPools[grade]||[]).map(([name,range,chance])=>[genusStats.includes(name)?`${selected.genus} ${name}`:name,range,chance]);
  const pool=selected.genus==="Special"?(specialPools[grade]||[]).map(([name,range])=>[name,range,"10%"]):normalPool;
  const petStats=selected.id==="1008"?petLevels:null;
  return <main className={styles.page}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/wings">Wings</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <header className={styles.header}><span className={styles.eyebrow}><PawPrint/> GAME · COMPANIONS</span><h1>Pets</h1><p>Search the complete pet index, inspect its group, and compare growth grades and possible stat bonuses here.</p></header>
      <section className={styles.catalog}><div className={styles.toolbar}><label className={styles.search}><Search/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search 208 pets…"/></label><select aria-label="Filter by pet group" value={genus} onChange={event=>setGenus(event.target.value)}><option>All groups</option>{["Fera","Cogni","Natura","Varian","Special"].map(value=><option key={value}>{value}</option>)}</select></div><div className={styles.count}>{visible.length} of {catalogData.pets.length} pets</div><div className={styles.petList}>{visible.map(pet=><button key={pet.id} className={`${styles.item} ${selected.id===pet.id?styles.selected:""}`} onClick={()=>{setSelected(pet);setLevel(1)}}><span className={styles.itemIcon}><PawPrint/></span><span className={styles.itemCopy}><strong>{pet.name}</strong><small>{pet.genus}</small></span></button>)}</div>{!visible.length&&<p className={styles.empty}>No pets match this search.</p>}</section>
      <section className={styles.progressCard}><div className={styles.progressHeading}><div><span className={styles.kicker}>GROWTH LEVEL · {selected.genus.toUpperCase()}</span><h2>{selected.name}</h2></div><strong>Lv. {level}<small> / 10</small></strong></div><input aria-label="Pet growth level" type="range" min="1" max="10" value={level} onChange={event=>setLevel(Number(event.target.value))}/><div className={styles.scale}><span>Level 1</span><span>Level 5</span><span>Level 10</span></div><div className={styles.chanceCallout}><span>Bonus grade chance at level {level}</span><strong>{feraChances[level-1][1]} Common · {feraChances[level-1][2]} Rare · {feraChances[level-1][3]} Epic · {feraChances[level-1][4]} Unique · {feraChances[level-1][5]} Heroic</strong></div>
        {selected.id==="1008"&&<div className={styles.stats}>{[["Souls to summon",petRecordExtras.summonSouls],["Run speed",petRecordExtras.runSpeed],["Sprint speed",petRecordExtras.sprintSpeed],["Summon item",`#${petRecordExtras.summonItem}`],["Tamed from",petRecordExtras.tameFrom]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}
        {petStats?<><h3>Pet-specific base stats</h3><div className={styles.tableWrap}><table><thead><tr>{["Level","Summon souls","Ground speed","Accuracy","DEX"].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{petStats.map(row=><tr className={Math.min(level,3)===row.level?styles.activeRow:""} key={row.level}><td>{row.level}</td><td>{row.souls}</td><td>{row.groundSpeed}</td><td>{row.accuracy}</td><td>{row.dex}</td></tr>)}</tbody></table></div></>:<p className={styles.hint}>This pet’s individual level table is not part of the imported snapshot yet. Its genus growth chances and stat pool are shown below.</p>}
      </section>
      <section className={styles.bonusCard}><div className={styles.sectionHead}><div><span className={styles.kicker}>{selected.genus.toUpperCase()} · BONUS POOL</span><h2>Possible stat rolls</h2><p>Shared by pets in this genus. Each slot rolls from the selected grade’s pool.</p></div><select aria-label="Bonus grade" value={grade} onChange={event=>setGrade(event.target.value)}>{["Common","Rare","Epic","Unique","Heroic"].map(value=><option key={value}>{value}</option>)}</select></div><div className={styles.bonusGrid}>{pool.map(([name,value,chance])=><div key={name}><span>{name}</span><strong>{value}</strong><small>{chance} chance</small></div>)}</div></section>
      <SourceNote>All {catalogData.pets.length} pet names and genus labels are indexed locally. Individual level tables are shown where the imported record includes them; genus growth pools remain available for every listed group.</SourceNote>
    </div>
  </main>;
}

export default function ProgressionCatalog({kind}) {
  return kind === "wings" ? <WingsCatalog/> : <PetsCatalog/>;
}
