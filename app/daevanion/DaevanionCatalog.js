"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowLeft,Clock3,Gauge,Heart,Shield,ShieldCheck,Sparkles,Swords,Target,Zap} from "lucide-react";
import boardData from "../builds/daevanion-boards.json";
import {classData,classList,skillIconIds,emblemBase} from "../classes/classData.js";
import styles from "./daevanion-game.module.css";

const BOARD_META={
  Nezekan:{level:12,tone:"ivory"},
  Zikel:{level:20,tone:"ivory"},
  Vaizel:{level:30,tone:"ivory"},
  Triniel:{level:40,tone:"ivory"},
  Ariel:{level:45,tone:"emerald"},
  Azphel:{level:45,tone:"violet"},
  Marchutan:{level:45,tone:"crimson"},
  Yustiel:{level:45,tone:"azure"}
};
const GRADE_TONE={Start:"start",Common:"common",Rare:"rare",Legend:"legend",Unique:"unique"};
const classSlugByName=Object.fromEntries(classList.map(c=>[c.name,c.slug]));
const alias={"Veteran's Counterstrike":"Experienced Counterstrike"};
const clean=value=>String(value||"").normalize("NFKC").replace(/[’]/g,"'").trim().toLowerCase();
function skillIcon(className,label){
  const name=(label||"").replace(/^Skill Level Up - /,"").trim();
  const data=classData[classSlugByName[className]];
  const ids=skillIconIds[classSlugByName[className]]||[];
  if(!data)return "";
  const names=[...(data.active||[]),...(data.passive||[])];
  const target=clean(alias[name]||name);
  const index=names.findIndex(item=>clean(item)===target);
  return index>=0&&ids[index]?"https://aion2hub.com/api/skill-icon/"+ids[index]:"";
}
function statGlyph(label){
  const t=clean(label);
  if(t.includes("max hp"))return Heart;
  if(t.includes("max mp"))return Sparkles;
  if(t.includes("defense")||t.includes("tolerance")||t.includes("resist"))return ShieldCheck;
  if(t.includes("critical"))return Target;
  if(t.includes("cooldown"))return Clock3;
  if(t.includes("speed"))return Gauge;
  if(t.includes("attack")||t.includes("damage"))return Swords;
  return Zap;
}
function BoardNode({node,className,selected,onSelect}){
  const [row,col,label,grade,cost,start]=node;
  const icon=skillIcon(className,label);
  const Glyph=statGlyph(label);
  return <button type="button" title={label} aria-label={label} className={styles.node+" "+styles[GRADE_TONE[grade]||"common"]+" "+(selected?styles.selected:"")+" "+(start?styles.startNode:"")} style={{"--r":row,"--c":col}} onClick={()=>onSelect(node)}>
    <span className={styles.nodeCore}>{icon?<img src={icon} alt="" loading="lazy"/>:<Glyph/>}</span>
    {cost>0&&<em>{cost}</em>}
  </button>;
}
function Connections({nodes}){
  const cells=new Set(nodes.map(n=>n[0]+":"+n[1]));
  const lines=[];
  for(const node of nodes){
    const [r,c]=node;
    if(cells.has(r+":"+(c+1)))lines.push(<i key={"h-"+r+"-"+c} className={styles.hLine} style={{"--r":r,"--c":c}}/>);
    if(cells.has((r+1)+":"+c))lines.push(<i key={"v-"+r+"-"+c} className={styles.vLine} style={{"--r":r,"--c":c}}/>);
  }
  return lines;
}
export default function DaevanionCatalog(){
  const classes=Object.keys(boardData);
  const [className,setClassName]=useState(classes.includes("Gladiator")?"Gladiator":classes[0]);
  const initialBoards=Object.keys(boardData[classes.includes("Gladiator")?"Gladiator":classes[0]]||{});
  const [board,setBoard]=useState(initialBoards[0]||"Nezekan");
  const [selected,setSelected]=useState(null);
  const boards=Object.keys(boardData[className]||{});
  const nodes=boardData[className]?.[board]||[];
  const selectedNode=selected&&nodes.some(n=>n[0]===selected[0]&&n[1]===selected[1])?selected:nodes.find(n=>n[5])||nodes[0]||null;
  const totalCost=useMemo(()=>nodes.reduce((sum,n)=>sum+(Number(n[4])||0),0),[nodes]);
  const changeClass=name=>{setClassName(name);const next=Object.keys(boardData[name]||{})[0];setBoard(next||"Nezekan");setSelected(null);};
  const changeBoard=name=>{setBoard(name);setSelected(null);};
  return <main className={styles.page}>
    <Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
    <aside className={styles.sidebar}>
      <div className={styles.brand}><span>DAEVEXUS</span><small>DAEVANION BOARD</small></div>
      <div className={styles.classTitle}>CLASS</div>
      <div className={styles.classList}>{classes.map(name=>{const info=classList.find(c=>c.name===name);return <button type="button" key={name} className={className===name?styles.activeClass:""} onClick={()=>changeClass(name)}><span>{info?.emblem?<img src={emblemBase+"/"+info.emblem+".webp"} alt=""/>:<Shield/>}</span><b>{name}</b></button>})}</div>
    </aside>
    <section className={styles.main}>
      <header className={styles.topbar}>
        <div><small>{className.toUpperCase()}</small><h1>{board}</h1></div>
        <div className={styles.boardTabs}>{boards.map(name=><button type="button" key={name} data-tone={BOARD_META[name]?.tone||"ivory"} className={board===name?styles.activeBoard:""} onClick={()=>changeBoard(name)}><b>{name}</b><small>Lv. {BOARD_META[name]?.level||45}</small></button>)}</div>
        <div className={styles.boardSummary}><span>{nodes.length}<small>NODES</small></span><span>{totalCost}<small>TOTAL COST</small></span></div>
      </header>
      <div className={styles.workspace}>
        <div className={styles.boardShell} data-tone={BOARD_META[board]?.tone||"ivory"}>
          <div className={styles.boardBackdrop}/>
          <div className={styles.boardFrame}>
            <div className={styles.gridGlow}/>
            <Connections nodes={nodes}/>
            {nodes.map((node,index)=><BoardNode key={node[0]+"-"+node[1]+"-"+index} node={node} className={className} selected={selectedNode===node} onSelect={setSelected}/>)}
            <div className={styles.axisTop}>15 × 15 DAEVANION GRID</div>
          </div>
          <div className={styles.legend}><span className={styles.commonDot}/>Basic stat <span className={styles.rareDot}/>Passive / enhanced stat <span className={styles.legendDot}/>Active skill / advanced stat <span className={styles.uniqueDot}/>Major stat</div>
        </div>
        <aside className={styles.detail}>
          {selectedNode?(()=>{
            const [row,col,label,grade,cost,start]=selectedNode;
            const icon=skillIcon(className,label);const Glyph=statGlyph(label);
            return <><div className={styles.detailHead}><span className={styles.detailIcon+" "+styles[GRADE_TONE[grade]||"common"]}>{icon?<img src={icon} alt=""/>:<Glyph/>}</span><div><small>{start?"START NODE":grade.toUpperCase()}</small><h2>{label}</h2></div></div>
              <div className={styles.detailRows}><div><span>Board</span><b>{board}</b></div><div><span>Position</span><b>{row} : {col}</b></div><div><span>Cost</span><b>{cost||0}</b></div><div><span>Class</span><b>{className}</b></div></div>
              <p className={styles.detailNote}>{label.startsWith("Skill Level Up - ")?"Skill level node. The icon is matched to the class skill catalog.":"Stat/progression node from the DAEVEXUS board dataset."}</p>
              <div className={styles.colorKey}><i className={styles.commonDot}/><span>Common</span><i className={styles.rareDot}/><span>Rare</span><i className={styles.legendDot}/><span>Legend</span><i className={styles.uniqueDot}/><span>Unique</span></div>
            </>;
          })():<div className={styles.empty}>Select a node</div>}
          <div className={styles.reference}><Sparkles/><p><b>Game-guided visual pass.</b> Geometry and progression data come from the current DAEVEXUS board dataset. Skill icons are matched to the class catalog. Global values remain subject to verification.</p></div>
        </aside>
      </div>
    </section>
  </main>;
}
