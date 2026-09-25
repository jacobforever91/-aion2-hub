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
  return <main className={styles.page + ' ' + styles.wingsPage}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/pets">Pets</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <header className={styles.header}><span className={styles.eyebrow}><Feather/> GAME · COSMETICS</span><h1>Wings</h1><p>Filter by rarity and faction. Equipment wings show their recorded stats; Special wings are listed as cosmetics in the KR reference.</p></header>
      <div className={styles.layout}>
        <section className={styles.catalog}>
          <div className={styles.toolbar}><label className={`${styles.search} searchHalo`}><Search/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search wings…"/></label><select aria-label="Filter by faction" value={faction} onChange={event=>setFaction(event.target.value)}><option>All factions</option><option>Elyos</option><option>Asmodians</option></select></div>
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
  const [query,setQuery]=useState("");
  const [genus,setGenus]=useState("All groups");
  const groups=["All groups","Fera","Cogni","Natura","Varian","Special"];
  const visible=useMemo(()=>catalogData.pets.filter(pet=>(!query||(pet.name+" "+pet.genus).toLowerCase().includes(query.toLowerCase()))&&(genus==="All groups"||pet.genus===genus)),[query,genus]);
  return <main className={styles.page + " " + styles.petPage}>
    <nav className={styles.nav}><Link className={styles.brand} href="/"><b>AION <i>2</i> VISION</b><small>GAME PROGRESSION</small></Link><div className={styles.links}><Link href="/classes">Classes</Link><Link href="/database">Database</Link><Link href="/equipment">Equipment</Link><Link href="/wings">Wings</Link></div><span className={styles.region}>REFERENCE DATA</span></nav>
    <div className={styles.wrap}><Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <h1 className={styles.petTitle}>Pets</h1>
      <section className={styles.catalog} aria-label="Pets">
        <label className={styles.search + " searchHalo"}><Search aria-hidden="true"/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search pets by name…" aria-label="Search pets by name"/></label>
        <div className={styles.petTabs} role="group" aria-label="Pet groups">{groups.map(value=><button key={value} type="button" className={styles.petTab + (genus===value?" "+styles.petTabActive:"")} aria-pressed={genus===value} onClick={()=>setGenus(value)}>{value}<span>{value==="All groups"?catalogData.pets.length:catalogData.pets.filter(pet=>pet.genus===value).length}</span></button>)}</div>
        <div className={styles.count}>{visible.length} of {catalogData.pets.length} pets</div>
        <div className={styles.petList}>{visible.map(pet=><article key={pet.id} className={styles.item + " " + styles.tierItem} style={{"--tier-color":genusColors[pet.genus]}}><span className={styles.itemIcon + " " + styles.artIcon} aria-hidden="true"><img src={petIcons[pet.id]} alt="" loading="lazy" decoding="async"/></span><span className={styles.itemCopy}><strong>{pet.name}</strong><small>{pet.genus}</small></span></article>)}</div>
        {!visible.length&&<p className={styles.empty}>No pets match this search.</p>}
      </section>
      <SourceNote>The {catalogData.pets.length} pet names and groups are indexed locally from the community reference snapshot.</SourceNote>
    </div>
  </main>;
}

export default function ProgressionCatalog({kind}) {
  return kind === "wings" ? <WingsCatalog/> : <PetsCatalog/>;
}
