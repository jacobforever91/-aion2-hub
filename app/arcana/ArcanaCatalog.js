"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, ArrowRight, Search, Sparkles} from "lucide-react";
import styles from "./arcana.module.css";

export const metadata={
  title:"Arcana | AION 2 VISION",
  description:"Browse Arcana cards and their verified stats inside AION 2 VISION.",
};

const cards=[
  {id:"810160002",name:"Chalice of Magic",type:"Chalice",mainStat:"Space · Israphel",value:8,skillSlots:1,icon:"C"},
  {id:"810260002",name:"Parchment of Magic",type:"Parchment",mainStat:"Destiny · Marchutan",value:8,skillSlots:1,icon:"P"},
  {id:"810360002",name:"Compass of Magic",type:"Compass",mainStat:"Death · Triniel",value:8,skillSlots:1,icon:"C"},
  {id:"810460002",name:"Bell of Magic",type:"Bell",mainStat:"Destruction · Zikel",value:8,skillSlots:1,icon:"B"},
  {id:"810560002",name:"Mirror of Magic",type:"Mirror",mainStat:"Wisdom · Lumiel",value:8,skillSlots:1,icon:"M"},
];
const types=["All","Chalice","Parchment","Compass","Bell","Mirror"];

export default function ArcanaPage(){
  const [query,setQuery]=useState("");
  const [type,setType]=useState("All");
  const visibleCards=useMemo(()=>cards.filter((card)=>{
    const matchesType=type==="All"||card.type===type;
    const matchesQuery=(card.name+" "+card.mainStat+" "+card.type).toLowerCase().includes(query.trim().toLowerCase());
    return matchesType&&matchesQuery;
  }),[query,type]);

  return <main className={styles.page}>
    <Link className={styles.back} href="/?menu=open" aria-label="Back to the Game menu"><ArrowLeft/></Link>
    <div className={styles.content}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}><Sparkles/> GAME · CHARACTER SYSTEM</span>
        <h1>Arcana</h1>
        <p>Search cards and compare their main stats. Open a card to see the enhancement details.</p>
      </header>

      <section className={styles.catalog} aria-labelledby="catalogTitle">
        <div className={styles.catalogHead}>
          <div><span className={styles.sectionLabel}>CARD CATALOG</span><h2 id="catalogTitle">Magic set · Common</h2></div>
          <span className={styles.count}>{visibleCards.length} / {cards.length}</span>
        </div>
        <label className={styles.search}><Search/><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search by card or stat" aria-label="Search Arcana cards"/></label>
        <div className={styles.filters} aria-label="Filter by card type">{types.map((item)=><button key={item} type="button" className={type===item?styles.filterActive:styles.filter} aria-pressed={type===item} onClick={()=>setType(item)}>{item}</button>)}</div>

        <div className={styles.cardList}>
          {visibleCards.map((card)=><details className={styles.card} key={card.id}>
            <summary>
              <span className={styles.cardMark} aria-hidden="true">{card.icon}</span>
              <span className={styles.cardCopy}><small>{card.type} · COMMON · MAGIC SET</small><strong>{card.name}</strong><em>{card.mainStat} <b>+{card.value}</b></em></span>
              <span className={styles.expand} aria-hidden="true">+</span>
            </summary>
            <div className={styles.cardDetails}>
              <div><span>Item level</span><b>20</b></div>
              <div><span>Required character level</span><b>45</b></div>
              <div><span>Base skill imprint</span><b>{card.skillSlots} skill</b></div>
              <p>Enhancement adds skill levels from the class-specific pool. The exact options depend on your class.</p>
              <small>Item ID {card.id} · Global test snapshot, 19 Sep 2026</small>
            </div>
          </details>)}
          {!visibleCards.length&&<p className={styles.empty}>No Arcana cards match that search.</p>}
        </div>
      </section>

      <aside className={styles.dataNote}>
        <strong>Reference data</strong>
        <p>This first in-site catalog shows five Common cards from the Magic set. Values were checked against the AION2Hub.com community database for its Global test snapshot dated 19 Sep 2026; they are unofficial and may differ by region or later game updates.</p>
      </aside>

      <Link className={styles.buildLink} href="/builds?tab=progression&section=arcana#arcana-setup">
        <span><small>BUILD CREATOR</small><strong>Record Arcana in a build</strong></span><ArrowRight/>
      </Link>
    </div>
  </main>;
}
