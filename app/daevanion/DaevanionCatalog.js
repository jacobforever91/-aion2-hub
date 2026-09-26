"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowLeft,Search,Sparkles} from "lucide-react";
import boardData from "../builds/daevanion-boards.json";

const classes=Object.keys(boardData);
const meta={
  Nezekan:"Lv. 12 · Daevanion Stone",
  Zikel:"Lv. 20 · Daevanion Stone",
  Vaizel:"Lv. 30 · Daevanion Stone",
  Triniel:"Lv. 40 · Daevanion Stone",
  Ariel:"Lv. 45 · Conquest",
  Azphel:"Lv. 45 · Battle",
  Marchutan:"Lv. 45 · Season 2",
  Yustiel:"Lv. 45 · Season 3"
};
const order={Start:0,Common:1,Rare:2,Legend:3,Unique:4};

export default function DaevanionCatalog(){
  const [className,setClassName]=useState(classes[0]);
  const [board,setBoard]=useState("Nezekan");
  const [query,setQuery]=useState("");
  const nodes=boardData[className]?.[board]||[];
  const visible=useMemo(()=>nodes.filter((node)=>(node[2]+" "+node[3]).toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>(order[b[3]]??0)-(order[a[3]]??0)||a[2].localeCompare(b[2])),[nodes,query]);

  return <main className="daevanionPage">
    <Link className="daevanionBack" href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
    <div className="daevanionWrap">
      <header className="daevanionHero">
        <span><Sparkles/> GAME · CHARACTER PROGRESSION</span>
        <h1>Daevanion</h1>
        <p>Explore Daevanion boards by class using the same dataset connected to VISION Build Creator.</p>
      </header>
      <aside className="daevanionNote"><strong>REFERENCE DATA</strong><p>Asia/Taiwan reference dataset. Global names, values and requirements may change.</p></aside>
      <nav className="daevanionClasses" aria-label="Choose class">
        {classes.map((name)=><button type="button" key={name} className={className===name?"isSelected":""} onClick={()=>setClassName(name)}>{name}</button>)}
      </nav>
      <nav className="daevanionBoards" aria-label="Choose board">
        {Object.keys(boardData[className]||{}).map((name)=><button type="button" key={name} className={board===name?"isSelected":""} onClick={()=>setBoard(name)}><strong>{name}</strong><small>{meta[name]}</small></button>)}
      </nav>
      <div className="daevanionToolbar">
        <div><span>{className}</span><h2>{board}</h2><small>{nodes.length} recorded nodes · {meta[board]}</small></div>
        <label><Search/><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search node effects…" aria-label="Search Daevanion nodes"/></label>
      </div>
      <section className="daevanionGrid">
        {visible.map((node,index)=><article className={"daevanionNode rarity"+node[3]} key={node[0]+"-"+node[1]+"-"+index}><span className="daevanionCoords">{node[0]}:{node[1]}</span><div><strong>{node[2]}</strong><small>{node[3]}{node[4]?" · Cost "+node[4]:""}{node[5]?" · Starting node":""}</small></div></article>)}
      </section>
      {!visible.length&&<p className="daevanionEmpty">No nodes match this search.</p>}
    </div>
  </main>;
}
