"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Search, Feather, PawPrint, ExternalLink, Sparkles} from "lucide-react";
import styles from "./progression.module.css";

const wingItems = [
  {name:"Lesser Daeva Wings", grade:"Common", faction:"Elyos", id:"30200600", enchant:10},
  {name:"Intermediate Daeva Wings", grade:"Rare", faction:"Elyos", id:"30200500", enchant:10},
  {name:"Superior Daeva Wings", grade:"Epic", faction:"Elyos", id:"30200703", enchant:10},
  {name:"Ultimate Daeva Wings", grade:"Unique", faction:"Elyos", id:"30200101", enchant:10},
  {name:"Forest Spirit Wings", grade:"Unique", faction:"Elyos", id:"30101000", enchant:10, stats:[["Flight Power","200"],["Penetration","100"],["Damage Tolerance","3.5% + 100"],["Boss Attack","125 + 30"]]},
  {name:"Kromede Wings", grade:"Unique", faction:"Elyos", id:"30201400", enchant:10},
  {name:"Dark Veil Wings", grade:"Unique", faction:"Elyos", id:"30201900", enchant:10},
  {name:"Conqueror Wings", grade:"Epic", faction:"Elyos", id:"30300300", enchant:10},
  {name:"Nightmare Wings", grade:"Unique", faction:"Elyos", id:"30100500", enchant:10},
  {name:"Spirit Wings", grade:"Epic", faction:"Elyos", id:"30400200", enchant:10},
  {name:"Black Waves Wings", grade:"Special", faction:"Elyos", id:"30202400"},
  {name:"Woodland Bunny Bag Wings", grade:"Special", faction:"Elyos", id:"30700300"},
];

const petLevels = [
  {level:1, souls:"25", groundSpeed:"1", accuracy:"—", dex:"—"},
  {level:2, souls:"75", groundSpeed:"2", accuracy:"1", dex:"—"},
  {level:3, souls:"—", groundSpeed:"3", accuracy:"2", dex:"1"},
];

const feraChances = [
  [1,"90%","10%","—","—","—"],[2,"70%","30%","—","—","—"],[3,"55%","45%","—","—","—"],
  [4,"50%","45%","5%","—","—"],[5,"45%","45%","10%","—","—"],[6,"40%","40%","20%","—","—"],
  [7,"35%","34%","30%","1%","—"],[8,"30%","30%","35%","5%","—"],[9,"25%","25%","39%","10%","1%"],[10,"20%","30%","30%","15%","5%"],
];

function SourceNote({children}) {
  return <aside className={styles.source}><Sparkles aria-hidden="true"/><p>{children} <a href="https://aion2.app" target="_blank" rel="noreferrer">AION2.app <ExternalLink aria-hidden="true"/></a>. This is a third-party community reference, not an official VISION or NCSOFT page; Global values may change.</p></aside>;
}

function WingsCatalog() {
  const [query,setQuery]=useState("");
  const [grade,setGrade]=useState("All grades");
  const [faction,setFaction]=useState("All factions");
  const [enchant,setEnchant]=useState(0);
  const [selected,setSelected]=useState(wingItems[4]);
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
          <div className={styles.count}>Showing a curated preview · 90 wings listed in the reference catalog</div>
          <div className={styles.list}>{visible.map(item=><button key={item.id} className={`${styles.item} ${selected.id===item.id?styles.selected:""}`} onClick={()=>setSelected(item)}><span className={styles.itemIcon}><Feather/></span><span className={styles.itemCopy}><strong>{item.name}</strong><small>{item.grade} · {item.faction}</small></span>{item.enchant&&<span className={styles.levelPill}>+10</span>}</button>)}</div>
          {!visible.length&&<p className={styles.empty}>No wings match this search.</p>}
          <a className={styles.externalCatalog} href="https://aion2.app/db/wings" target="_blank" rel="noreferrer">Browse all 90 wings at the source <ExternalLink/></a>
        </section>
        <aside className={styles.detail}><span className={styles.kicker}>SELECTED WING</span><h2>{selected.name}</h2><p className={styles.meta}>{selected.grade} · {selected.faction}{selected.enchant?" · Enchantable to +10":" · Special grade"}</p>
          {selected.stats?<><h3>Recorded stats</h3><div className={styles.stats}>{selected.stats.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><small className={styles.caption}>Forest Spirit Wings · source detail currently lists these values with the item’s +10 enchant cap. Intermediate enchant values are not inferred here.</small></>:<p className={styles.hint}>This wing’s name, faction, grade, and enchant cap are listed. Detailed stat values are not yet included in this preview.</p>}
          <a className={styles.sourceButton} href={`https://aion2.app/db/wings/${selected.id}`} target="_blank" rel="noreferrer">Open source record <ExternalLink/></a>
        </aside>
      </div>
      <SourceNote>Reference catalog lists 90 wings (45 Elyos and 45 Asmodians), with grade and enchantment fields.</SourceNote>
    </div>
  </main>;
}

function PetsCatalog() {
  const [level,setLevel]=useState(1);
  const current=petLevels[level-1];
  return <main className={styles.page}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/wings">Wings</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <header className={styles.header}><span className={styles.eyebrow}><PawPrint/> GAME · COMPANIONS</span><h1>Pets</h1><p>Explore pet level stats and genus growth bonuses. The examples below use the Fera genus record.</p></header>
      <section className={styles.progressCard}><div className={styles.progressHeading}><div><span className={styles.kicker}>PET LEVEL</span><h2>Baby Odyle Spider <em>· Fera</em></h2></div><strong>Lv. {level}<small> / 3</small></strong></div><input aria-label="Pet level" type="range" min="1" max="3" value={level} onChange={event=>setLevel(Number(event.target.value))}/><div className={styles.scale}><span>Level 1</span><span>Level 2</span><span>Level 3</span></div>
        <div className={styles.stats}>{[["Summoning souls",current.souls],["Ground speed",current.groundSpeed],["Accuracy",current.accuracy],["DEX",current.dex]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><p className={styles.hint}>Values above are the pet-specific growth table. “—” means the source table lists no value at that level.</p>
      </section>
      <section className={styles.chanceSection}><div className={styles.sectionHead}><div><span className={styles.kicker}>GENUS GROWTH · FERA</span><h2>Bonus grade chance</h2><p>Chance when a bonus slot unlocks at each creature level.</p></div><a href="https://aion2.app/db/pets/genus/Feral" target="_blank" rel="noreferrer">Full stat pools <ExternalLink/></a></div>
        <div className={styles.tableWrap}><table><thead><tr>{["Level","Common","Rare","Epic","Unique","Heroic"].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{feraChances.map((row,index)=><tr className={index===level-1?styles.activeRow:""} key={row[0]}>{row.map((cell,i)=><td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>
      </section>
      <section className={styles.bonusCard}><span className={styles.kicker}>EXAMPLE · COMMON FERA BONUS POOL</span><h2>Possible stats for a slot</h2><p>Each option has a documented value range and roll chance. Higher grades have their own stat pools.</p><div className={styles.bonusGrid}>{[["Fera Defense","40–80"],["Fera Critical Hit Resist","2–4"],["Fera Evasion","5–10"],["Fera Block","7–14"],["HP","10–20"],["MP","5–10"]].map(([name,value])=><div key={name}><span>{name}</span><strong>{value}</strong><small>16.66% chance</small></div>)}</div></section>
      <a className={styles.externalCatalog} href="https://aion2.app/db/pets" target="_blank" rel="noreferrer">Browse all 208 pets at the source <ExternalLink/></a>
      <SourceNote>The reference catalog covers 208 pets and genus tables. Pet groups differ; this interactive preview documents one Fera example and its shared genus growth table.</SourceNote>
    </div>
  </main>;
}

export default function ProgressionCatalog({kind}) {
  return kind === "wings" ? <WingsCatalog/> : <PetsCatalog/>;
}
