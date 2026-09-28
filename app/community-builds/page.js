"use client";

import Link from "next/link";
import {useMemo,useState} from "react";
import {ArrowLeft,Search,Shield,Swords,Users,Plus,LogIn} from "lucide-react";
import styles from "./community.module.css";

const classes=["All","Gladiator","Templar","Assassin","Ranger","Sorcerer","Spiritmaster","Cleric","Chanter"];
const demoBuilds=[
  {id:"demo-templar",name:"Aegis Frontline",className:"Templar",mode:"PvE",author:"DAEVEXUS Demo",updated:"Prototype",tags:["Tank","Group","Shield"]},
  {id:"demo-gladiator",name:"Crimson Breaker",className:"Gladiator",mode:"PvP",author:"DAEVEXUS Demo",updated:"Prototype",tags:["Burst","Abyss","Greatsword"]},
  {id:"demo-cleric",name:"Lightkeeper",className:"Cleric",mode:"PvE",author:"DAEVEXUS Demo",updated:"Prototype",tags:["Healing","Group","Support"]},
  {id:"demo-ranger",name:"Silent Gale",className:"Ranger",mode:"PvP",author:"DAEVEXUS Demo",updated:"Prototype",tags:["Ranged","Kite","Abyss"]},
];

export default function CommunityBuilds(){
  const [classFilter,setClassFilter]=useState("All");
  const [mode,setMode]=useState("All");
  const [search,setSearch]=useState("");
  const visible=useMemo(()=>demoBuilds.filter((build)=>{
    const classOk=classFilter==="All"||build.className===classFilter;
    const modeOk=mode==="All"||build.mode===mode;
    const q=search.trim().toLowerCase();
    const searchOk=!q||[build.name,build.className,build.mode,...build.tags].join(" ").toLowerCase().includes(q);
    return classOk&&modeOk&&searchOk;
  }),[classFilter,mode,search]);

  return <main className={styles.page}>
    <nav className={styles.nav}>
      <Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft/></Link>
      <Link className={styles.brand} href="/"><b>DAEVEXUS</b><small>COMMUNITY BUILDS</small></Link>
      <div className={styles.navActions}>
        <Link className={styles.ghost} href="/builds"><Plus size={15}/> Create Build</Link>
        <button className={styles.login} type="button" disabled title="Account connection is the next phase"><LogIn size={15}/> Sign in · next phase</button>
      </div>
    </nav>

    <div className={styles.wrap}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}><Users size={15}/> DAEVEXUS COMMUNITY</span>
        <h1>Find a build for <em>your class</em></h1>
        <p>Explore community builds by class and purpose. The cards below are clearly marked prototype examples until accounts and publishing are connected.</p>
        <div className={styles.heroActions}>
          <Link href="/builds" className={styles.primary}><Plus size={16}/> Create your build</Link>
          <span className={styles.status}>LOGIN + PUBLISHING · NEXT PHASE</span>
        </div>
      </header>

      <section className={styles.filters}>
        <div className={styles.searchBox}><Search size={17}/><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search builds, class or tag"/></div>
        <div className={styles.modeButtons}>
          {["All","PvE","PvP"].map((item)=><button key={item} type="button" className={mode===item?styles.activeMode:""} onClick={()=>setMode(item)}>{item}</button>)}
        </div>
      </section>

      <section className={styles.classRail} aria-label="Class filters">
        {classes.map((item)=><button key={item} type="button" className={classFilter===item?styles.activeClass:""} onClick={()=>setClassFilter(item)}>{item}</button>)}
      </section>

      <section className={styles.resultsHeader}>
        <div><span>BUILD LIBRARY</span><h2>{classFilter==="All"?"All classes":classFilter}</h2></div>
        <small>{visible.length} prototype {visible.length===1?"build":"builds"}</small>
      </section>

      <section className={styles.grid}>
        {visible.map((build)=><article className={styles.card} key={build.id}>
          <div className={styles.cardTop}>
            <span className={styles.classIcon}>{build.mode==="PvP"?<Swords size={20}/>:<Shield size={20}/>}</span>
            <div className={styles.badges}><b>{build.className}</b><span>{build.mode}</span></div>
          </div>
          <h3>{build.name}</h3>
          <p className={styles.author}>by {build.author} · {build.updated}</p>
          <div className={styles.tags}>{build.tags.map((tag)=><span key={tag}>{tag}</span>)}</div>
          <div className={styles.cardFooter}><span>DEMO CARD</span><Link href="/builds">Open Creator →</Link></div>
        </article>)}
        {!visible.length&&<div className={styles.empty}><h3>No prototype builds match these filters.</h3><p>Try another class, PvE/PvP mode or search term.</p></div>}
      </section>
    </div>
  </main>;
}
