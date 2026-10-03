"use client";
import {useEffect,useMemo,useRef,useState} from "react";
import {Home,Menu,Search,RefreshCw,Shield,Swords,Sparkles,Feather,PawPrint,ExternalLink,Unlink,Database,ArrowLeft} from "lucide-react";
import styles from "./character.module.css";
import {buildCharacterResearchSample,classifyCharacterSkill} from "./character-model.mjs";
const STORAGE="daevexus.character-link.v1";
const RESEARCH_STORAGE="daevexus.character-research.v1";
const regions=[["naw","Global · NA West"],["nae","Global · NA East"],["eu","Global · Europe"],["sa","Global · South America"],["asia","Global · Asia"],["tw","Taiwan · Lab"]];
const fmt=n=>new Intl.NumberFormat("en-US").format(Number(n)||0);
const race=id=>Number(id)===1?"Elyos":Number(id)===2?"Asmodian":"Unknown";
function SyncedDaevanionBoard({board,onBack}){
 const raw=Array.isArray(board?.detail?.nodes)?board.detail.nodes:[];
 const minRow=raw.length?Math.min(...raw.map(n=>Number(n.row)||0)):1;
 const minCol=raw.length?Math.min(...raw.map(n=>Number(n.col)||0)):1;
 const offsetRow=minRow===0?1:0,offsetCol=minCol===0?1:0;
 const nodes=raw.map(n=>({...n,gridRow:(Number(n.row)||0)+offsetRow,gridCol:(Number(n.col)||0)+offsetCol})).filter(n=>n.gridRow>0&&n.gridCol>0&&n.gridRow<=15&&n.gridCol<=15);
 const openNodes=nodes.filter(n=>n.open);
 return <section className={styles.syncedBoardView}>
   <header className={styles.syncedBoardHeader}><button type="button" onClick={onBack}><ArrowLeft/> Progress</button><div><small>ACTIVE DAEVANION BOARD</small><h3>{board?.name||"Daevanion Board"}</h3></div><strong>{openNodes.length}/{board?.totalNodes||nodes.length||"—"}</strong></header>
   <div className={styles.syncedBoardShell}>
     <div className={styles.syncedBoardBackdrop}/>
     <div className={styles.syncedBoardFrame}>
       <div className={styles.syncedGridGlow}/>
       {nodes.map((node,i)=><span key={(node.id||i)+":"+node.gridRow+":"+node.gridCol} title={node.name||"Daevanion Node"} className={styles.syncedNode+" "+(node.open?styles.syncedNodeOpen:styles.syncedNodeClosed)} style={{"--r":node.gridRow,"--c":node.gridCol}}><i>{node.icon?<img src={node.icon} alt=""/>:<Sparkles/>}</i></span>)}
     </div>
     <div className={styles.syncedBoardLegend}><span><i className={styles.legendOpen}/>Your active nodes</span><span><i className={styles.legendClosed}/>Inactive nodes</span></div>
   </div>
   <div className={styles.syncedBoardFoot}><span>{board?.openPercent||0}% complete</span><span>{openNodes.length} active nodes</span><span>{nodes.length} synced positions</span></div>
 </section>;
}
export default function MyCharacter(){
 const[region,setRegion]=useState("naw"),[name,setName]=useState(""),[results,setResults]=useState([]),[linked,setLinked]=useState(null),[syncedAt,setSyncedAt]=useState(""),[tab,setTab]=useState("overview"),[view,setView]=useState("sync"),[boardView,setBoardView]=useState(null),[busy,setBusy]=useState(false),[message,setMessage]=useState("");
 const autoSyncAttempted=useRef(false);
 useEffect(()=>{try{const raw=localStorage.getItem(STORAGE);if(raw){const data=JSON.parse(raw);if(data?.character){setLinked(data.character);setSyncedAt(data.syncedAt||"");setRegion(data.character.region||"naw");}}}catch{}},[]);
 const itemLevel=useMemo(()=>linked?.stats?.find(s=>String(s.type).toLowerCase()==="itemlevel")?.value||0,[linked]);
 const acquired=useMemo(()=>[...(linked?.skills||[])].filter(s=>s.acquired===true&&Number(s.level)>0).sort((a,b)=>Number(b.equipped)-Number(a.equipped)||String(a.category||"").localeCompare(String(b.category||""))||String(a.name||"").localeCompare(String(b.name||""))),[linked]);
 const skillGroups=useMemo(()=>({active:acquired.filter(s=>classifyCharacterSkill(s.category)==="active"),passive:acquired.filter(s=>classifyCharacterSkill(s.category)==="passive"),stigma:acquired.filter(s=>classifyCharacterSkill(s.category)==="stigma")}),[acquired]);
 const daevanionBoards=useMemo(()=>{const all=Array.isArray(linked?.daevanion)?linked.daevanion:[];const unlocked=all.filter(b=>b.unlocked||b.open||Number(b.openNodes)>0||Number(b.openPercent)>0);return unlocked.length?unlocked:all;},[linked]);
 const persist=(character,time)=>{
   setLinked(character);setSyncedAt(time||"");
   try{
     localStorage.setItem(STORAGE,JSON.stringify({character,syncedAt:time}));
     const sample=buildCharacterResearchSample(character,time);
     const raw=localStorage.getItem(RESEARCH_STORAGE);
     const previous=raw?JSON.parse(raw):[];
     const key=[sample.region,sample.serverId,sample.characterId].join(":");
     const next=[sample,...(Array.isArray(previous)?previous:[]).filter(entry=>[entry?.region,entry?.serverId,entry?.characterId].join(":")!==key)].slice(0,24);
     localStorage.setItem(RESEARCH_STORAGE,JSON.stringify(next));
   }catch{}
 };
 async function search(event){event?.preventDefault();setBusy(true);setMessage("");setResults([]);try{const q=new URLSearchParams({region,keyword:name.trim()});const res=await fetch("/api/character-search?"+q,{cache:"no-store"}),data=await res.json();if(!data.ok)throw new Error(data.error);const matches=data.results||[];if(matches.length===1){await syncRef(matches[0]);return;}setResults(matches);if(!matches.length)setMessage(`No character named "${name.trim()}" was found. Check the region and spelling.`);else setMessage("We found more than one exact match. Choose your character.");}catch(e){setMessage(e.message||"Search failed.");}finally{setBusy(false);}}
 async function syncRef(ref){setBusy(true);setMessage("");try{const q=new URLSearchParams({region:ref.region,serverId:String(ref.serverId),characterId:ref.characterId});const res=await fetch("/api/character-sync?"+q,{cache:"no-store"}),data=await res.json();if(!data.ok)throw new Error(data.error);persist(data.character,data.syncedAt);setResults([]);setBoardView(null);setTab("overview");setView("info");}catch(e){setMessage(e.message||"Sync failed.");}finally{setBusy(false);}}
 useEffect(()=>{if(view==="sync"&&linked&&!autoSyncAttempted.current){autoSyncAttempted.current=true;syncRef(linked);}},[view,linked]);
 const unlink=()=>{autoSyncAttempted.current=false;setLinked(null);setSyncedAt("");setTab("overview");setView("sync");setMessage("");try{localStorage.removeItem(STORAGE);}catch{}};
 return <main className={styles.page}>
   <header className={styles.top}><a href="/?menu=open" aria-label="Open DAEVEXUS menu"><Menu/></a><div><small>DAEVEXUS · CHARACTER LAB</small><h1>{view==="sync"?"Character Sync":"Character Info"}</h1></div><a href="/" aria-label="Home"><Home/></a></header>
   {view==="sync"&&linked?<section className={styles.syncGate}>
     <div className={styles.autoSyncCard}>
       <div className={styles.syncPortrait}>{linked.profile.image?<img src={linked.profile.image} alt=""/>:<Shield/>}</div>
       <span className={styles.syncEyebrow}>CHARACTER SYNC</span>
       <h2>{busy?"Syncing "+linked.profile.name+"…":"Sync "+linked.profile.name}</h2>
       <p>{busy?"Getting your latest character data.":message?"Sync could not finish.":"Preparing your character…"}</p>
       <RefreshCw className={busy?styles.syncSpin:""}/>
       {message&&<><p className={styles.message}>{message}</p><button className={styles.syncPrimary} onClick={()=>{setMessage("");syncRef(linked);}} disabled={busy}>Try again</button></>}
       <button className={styles.syncSecondary} onClick={unlink} disabled={busy}><Unlink/> Use another character</button>
     </div>
   </section>:view==="sync"?<section className={styles.simpleConnect}>
     <div className={styles.simpleIntro}><span>CHARACTER SYNC</span><h2>Sync your character.</h2><p>Choose your region, enter the exact character name, and DAEVEXUS does the rest.</p></div>
     <form onSubmit={search} className={styles.simpleForm}>
       <label><span>1</span><div>Region<select value={region} onChange={e=>setRegion(e.target.value)}>{regions.map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></div></label>
       <label><span>2</span><div>Character name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your exact character name" minLength={2}/></div></label>
       <button className={styles.simpleSyncButton} disabled={busy||name.trim().length<2}><Search/>{busy?" Syncing…":" Sync character"}</button>
       <small>No password needed. Only public character data is read.</small>
     </form>
     {message&&<p className={styles.message}>{message}</p>}
     {!!results.length&&<div className={styles.results}><div className={styles.resultsHead}><b>Choose your character</b><span>{results.length}</span></div>{results.map(r=><button key={r.serverId+":"+r.characterId} onClick={()=>syncRef(r)} disabled={busy}><span className={styles.avatar}>{r.profileImage?<img src={r.profileImage} alt=""/>:<Shield/>}</span><span><b>{r.name}</b><small>Lv. {r.level} · {r.serverName||("Server "+r.serverId)} · {race(r.race)}</small></span><strong>SYNC</strong></button>)}</div>}
   </section>:linked?<section className={styles.dashboard}>
     <aside className={styles.profile}>
       <div className={styles.portrait}>{linked.profile.image?<img src={linked.profile.image} alt=""/>:<Shield/>}</div>
       <div className={styles.profileIdentity}><span className={styles.region}>{regions.find(x=>x[0]===linked.region)?.[1]||linked.region}</span><h2>{linked.profile.name}</h2><p>{linked.profile.className||"Class pending"} · Lv. {linked.profile.level} · {race(linked.profile.raceId)}</p><small>{linked.profile.serverName||("Server "+linked.serverId)}{linked.profile.guildName?" · "+linked.profile.guildName:""}</small></div>
       <div className={styles.profileActions}><a className={styles.official} href={linked.profileUrl} target="_blank" rel="noreferrer"><ExternalLink/> Official</a><a className={styles.buildImport} href="/builds?import=character"><Swords/> Build</a><button className={styles.infoBack} onClick={()=>{autoSyncAttempted.current=false;setMessage("");setView("sync");}}><RefreshCw/> Refresh</button></div>
       <div className={styles.syncTime}>Updated <b>{syncedAt?new Date(syncedAt).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:true}):"—"}</b></div>
     </aside>
     <div className={styles.content}>
       <div className={styles.metrics}><article><small>COMBAT POWER</small><strong>{fmt(linked.profile.combatPower)}</strong></article><article><small>LEVEL</small><strong>{linked.profile.level||"—"}</strong></article><article><small>ITEM LEVEL</small><strong>{itemLevel?fmt(itemLevel):"—"}</strong></article></div>
       <nav className={styles.tabs}><button className={tab==="overview"?styles.active:""} onClick={()=>setTab("overview")}><Sparkles/><span>Summary</span></button><button className={tab==="equipment"?styles.active:""} onClick={()=>setTab("equipment")}><Shield/><span>Gear</span></button><button className={tab==="companions"?styles.active:""} onClick={()=>setTab("companions")}><PawPrint/><span>Pet & Wings</span></button><button className={tab==="skills"?styles.active:""} onClick={()=>setTab("skills")}><Swords/><span>Skills</span></button><button className={tab==="progression"?styles.active:""} onClick={()=>setTab("progression")}><Database/><span>Progress</span></button></nav>
       {message&&<p className={styles.message}>{message}</p>}
       <div className={styles.panel}>
       {tab==="overview"&&<><div className={styles.sectionTitle}><Sparkles/><div><h3>Your character</h3><p>Your current synced stats.</p></div></div><div className={styles.statGrid}>{linked.stats.map(s=><article key={s.type+s.name}><span>{s.name||s.type}</span><strong>{fmt(s.value)}</strong>{s.effects?.slice(0,2).map(e=><small key={e}>{e}</small>)}</article>)}</div></>}
       {tab==="equipment"&&<><div className={styles.sectionTitle}><Shield/><div><h3>Your gear</h3><p>What your character is wearing now.</p></div></div><div className={styles.gearGrid}>{linked.equipment.map((it,i)=><article key={it.slotPos+":"+it.id+":"+i}><span className={styles.itemIcon}>{it.icon?<img src={it.icon} alt=""/>:<Database/>}</span><div><small>{it.slotName||("Slot "+it.slotPos)} · {it.grade||"—"}</small><b>{it.name||("Item "+it.id)}</b><span>{it.exceedLevel?it.exceedLevel+"+":""}{it.enchantLevel?"+"+it.enchantLevel:""}</span></div></article>)}</div></>}
       {tab==="companions"&&<><div className={styles.sectionTitle}><PawPrint/><div><h3>Pet & Wings</h3><p>What your character is using right now.</p></div></div><div className={styles.companionGrid}>
         <article className={styles.companionItem}>
           <small className={styles.companionType}>PET</small>
           <span className={styles.companionIcon}>{linked.pet?.icon?<img src={linked.pet.icon} alt=""/>:<PawPrint/>}</span>
           <h4>{linked.pet?.name||"No Pet equipped"}</h4>
           {linked.pet&&<strong>Level {linked.pet.level}</strong>}
         </article>
         <article className={styles.companionItem}>
           <small className={styles.companionType}>WINGS</small>
           <span className={styles.companionIcon}>{linked.wing?.icon?<img src={linked.wing.icon} alt=""/>:<Feather/>}</span>
           <h4>{linked.wing?.name||"No Wings equipped"}</h4>
           {linked.wing&&<strong>{linked.wing.enchantLevel?("Enhancement +"+linked.wing.enchantLevel):(linked.wing.grade?("Grade: "+linked.wing.grade):"—")}</strong>}
         </article>
       </div></>}
       {tab==="skills"&&<><div className={styles.sectionTitle}><Swords/><div><h3>Your skills</h3><p>Everything you have unlocked, separated by type.</p></div></div><div className={styles.skillGroups}>{[["active","Active"],["passive","Passive"],["stigma","Stigma"]].map(([key,label])=><section className={styles.skillGroup} key={key}><header><div><span>{label.toUpperCase()}</span><h4>{label}</h4></div><b>{skillGroups[key].length}</b></header><div className={styles.skillGrid}>{skillGroups[key].map(s=><article key={s.id}><span className={styles.itemIcon}>{s.icon?<img src={s.icon} alt=""/>:<Sparkles/>}</span><div><small>{s.category||label}{s.equipped?" · EQUIPPED":""}</small><b>{s.name||("Skill "+s.id)}</b><span>Lv. {s.level}</span></div></article>)}{!skillGroups[key].length&&<p className={styles.skillEmpty}>No {label.toLowerCase()} skills acquired.</p>}</div></section>)}</div>{!acquired.length&&<p className={styles.message}>No acquired skills were returned for this character.</p>}</>}
       {tab==="progression"&&(boardView?<SyncedDaevanionBoard board={boardView} onBack={()=>setBoardView(null)}/>:<><div className={styles.sectionTitle}><Database/><div><h3>Your progress</h3><p>Your titles, active Daevanion boards and rankings.</p></div></div><div className={styles.progressTop}><article><small>TITLES</small><strong>{linked.titles.owned}/{linked.titles.total||"—"}</strong></article><article><small>ACTIVE DAEVANION</small><strong>{daevanionBoards.length}</strong></article><article><small>RANKINGS</small><strong>{linked.rankings.length}</strong></article></div><div className={styles.boardList}>{daevanionBoards.map((b,i)=><button type="button" key={b.id||i} onClick={()=>setBoardView(b)}><span>{b.icon&&<img src={b.icon} alt=""/>}</span><div><b>{b.name||("Daevanion Board "+(i+1))}</b><small>{b.openNodes}/{b.totalNodes||"—"} nodes</small></div><strong>{b.openPercent?b.openPercent+"%":"VIEW"}</strong></button>)}{!daevanionBoards.length&&<p className={styles.skillEmpty}>No active Daevanion boards were returned by the current character sync.</p>}</div></>)}
       </div>
       
     </div>
   </section>:null}
 </main>;
}
