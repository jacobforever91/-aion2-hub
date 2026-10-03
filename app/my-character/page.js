"use client";
import {useEffect,useMemo,useRef,useState} from "react";
import {Home,Menu,Search,RefreshCw,Shield,Swords,Sparkles,Feather,PawPrint,ExternalLink,Unlink,Database,ArrowLeft,Heart,ShieldCheck,Target,Clock3,Gauge,Zap} from "lucide-react";
import styles from "./character.module.css";
import {buildCharacterResearchSample,classifyCharacterSkill} from "./character-model.mjs";
import boardData from "../builds/daevanion-boards.json";
const STORAGE="daevexus.character-link.v1";
const RESEARCH_STORAGE="daevexus.character-research.v1";
const regions=[["naw","Global · NA West"],["nae","Global · NA East"],["eu","Global · Europe"],["sa","Global · South America"],["asia","Global · Asia"],["tw","Taiwan · Lab"]];
const fmt=n=>new Intl.NumberFormat("en-US").format(Number(n)||0);
const race=id=>Number(id)===1?"Elyos":Number(id)===2?"Asmodian":"Unknown";
const boardClassAlias={Spiritmaster:"Elementalist"};
const BOARD_ORDER=["Nezekan","Zikel","Vaizel","Triniel","Ariel","Azphel","Marchutan","Yustiel"];
function daevanionGlyph(label){
 const t=String(label||"").toLowerCase();
 if(t.includes("max hp"))return Heart;
 if(t.includes("defense")||t.includes("tolerance")||t.includes("resist"))return ShieldCheck;
 if(t.includes("critical"))return Target;
 if(t.includes("cooldown"))return Clock3;
 if(t.includes("speed"))return Gauge;
 if(t.includes("attack")||t.includes("damage"))return Swords;
 return Zap;
}
function SyncedBoardConnections({nodes}){
 const cells=new Set(nodes.map(n=>n.row+":"+n.col));
 const lines=[];
 for(const node of nodes){
   const r=node.row,c=node.col;
   if(cells.has(r+":"+(c+1)))lines.push(<i key={"h-"+r+"-"+c} className={styles.syncedHLine} style={{"--r":r,"--c":c}}/>);
   if(cells.has((r+1)+":"+c))lines.push(<i key={"v-"+r+"-"+c} className={styles.syncedVLine} style={{"--r":r,"--c":c}}/>);
 }
 return lines;
}
function BoardBonusSummary({board}){
 const detail=board?.detail||{};
 const statEffects=[...new Set(Array.isArray(detail.openStatEffects)?detail.openStatEffects.filter(Boolean):[])];
 const skillEffects=[...new Set(Array.isArray(detail.openSkillEffects)?detail.openSkillEffects.filter(Boolean):[])];
 const activeNodes=(Array.isArray(detail.nodes)?detail.nodes:[]).filter(node=>node?.open);
 const nodeEffects=[];
 const seen=new Set();
 for(const node of activeNodes){
   for(const effect of (Array.isArray(node?.effects)?node.effects:[])){
     const key=String(effect||"").trim();
     if(!key||seen.has(key)||statEffects.includes(key)||skillEffects.includes(key))continue;
     seen.add(key);
     nodeEffects.push({node:node.name||"Active node",effect:key});
   }
 }
 const hasAny=statEffects.length||skillEffects.length||nodeEffects.length;
 return <section className={styles.boardBonusSummary}>
   <div className={styles.boardBonusHead}><Sparkles/><div><small>BOARD SUMMARY</small><h4>What this board gives you</h4></div></div>
   {hasAny?<div className={styles.boardBonusGroups}>
     {!!statEffects.length&&<div className={styles.boardBonusGroup}><h5>Stat bonuses</h5>{statEffects.map((effect,i)=><p key={"stat-"+i}><span>+</span>{effect}</p>)}</div>}
     {!!skillEffects.length&&<div className={styles.boardBonusGroup}><h5>Skill bonuses</h5>{skillEffects.map((effect,i)=><p key={"skill-"+i}><span>◆</span>{effect}</p>)}</div>}
     {!!nodeEffects.length&&<div className={styles.boardBonusGroup}><h5>Active node effects</h5>{nodeEffects.map((row,i)=><p key={"node-"+i}><span>•</span><b>{row.node}</b> · {row.effect}</p>)}</div>}
   </div>:<p className={styles.boardBonusEmpty}>The official sync did not return readable English effect text for this board yet.</p>}
 </section>;
}
function SyncedDaevanionBoard({board,className,skills,onBack}){
 const[selectedNode,setSelectedNode]=useState(null);
 useEffect(()=>setSelectedNode(null),[board?.id]);
 const raw=Array.isArray(board?.detail?.nodes)?board.detail.nodes:[];
 const minRow=raw.length?Math.min(...raw.map(n=>Number(n.row)||0)):1;
 const minCol=raw.length?Math.min(...raw.map(n=>Number(n.col)||0)):1;
 const offsetRow=minRow===0?1:0,offsetCol=minCol===0?1:0;
 const rawByCell=new Map(raw.map(n=>[((Number(n.row)||0)+offsetRow)+":"+((Number(n.col)||0)+offsetCol),n]));
 const catalogClass=boardClassAlias[className]||className;
 const catalog=boardData?.[catalogClass]?.[board?.name]||[];
 const visualNodes=catalog.length?catalog.map(([row,col,label,grade,cost,start])=>{
   const synced=rawByCell.get(row+":"+col);
   const skillName=String(label||"").replace(/^Skill Level Up - /,"").trim().toLowerCase();
   const skillIcon=String(label||"").startsWith("Skill Level Up - ")
     ? (Array.isArray(skills)?skills:[]).find(sk=>String(sk.name||"").toLowerCase()===skillName)?.icon
     : "";
   return {row,col,label,grade,cost,start,open:!!synced?.open,icon:synced?.icon||skillIcon||"",synced};
 }):raw.map(n=>({
   row:(Number(n.row)||0)+offsetRow,col:(Number(n.col)||0)+offsetCol,label:n.name||"Daevanion Node",
   grade:n.grade||"Common",cost:0,start:false,open:!!n.open,icon:n.icon||"",synced:n
 })).filter(n=>n.row>0&&n.col>0&&n.row<=15&&n.col<=15&&(n.icon||n.open||n.label!=="Daevanion Node"));
 const selectableNodes=visualNodes.filter(n=>!n.start);
 const openNodes=selectableNodes.filter(n=>n.open);
 return <section className={styles.syncedBoardView}>
   <header className={styles.syncedBoardHeader}><button type="button" onClick={onBack}><ArrowLeft/> Progress</button><div><small>{board?.reference?"DAEVANION BOARD REFERENCE":"ACTIVE DAEVANION BOARD"}</small><h3>{board?.name||"Daevanion Board"}</h3></div><strong>{board?.reference?selectableNodes.length:(openNodes.length+"/"+(board?.totalNodes||selectableNodes.length||"—"))}</strong></header>
   <div className={styles.syncedBoardShell}>
     <div className={styles.syncedBoardBackdrop}/>
     <div className={styles.syncedBoardFrame}>
       <div className={styles.syncedGridGlow}/>
       <SyncedBoardConnections nodes={visualNodes}/>
       {visualNodes.map((node,i)=>{const Glyph=daevanionGlyph(node.label);const tone=String(node.grade||"common").toLowerCase();const selected=selectedNode?.row===node.row&&selectedNode?.col===node.col;return <button type="button" key={(node.synced?.id||i)+":"+node.row+":"+node.col} title={node.label+(node.open?" · Active":" · Available")} onClick={()=>setSelectedNode(node)} className={styles.syncedNode+" "+styles.syncedNodeButton+" "+(styles["syncedGrade"+tone[0].toUpperCase()+tone.slice(1)]||"")+" "+(node.open?styles.syncedNodeOpen:styles.syncedNodeClosed)+" "+(selected?styles.syncedNodeSelected:"")} style={{"--r":node.row,"--c":node.col}}><i>{node.icon?<img src={node.icon} alt=""/>:<Glyph/>}</i>{node.cost>0&&<em>{node.cost}</em>}</button>})}
     </div>
     <div className={styles.syncedBoardLegend}><span><i className={styles.legendOpen}/>Your active nodes</span><span><i className={styles.legendClosed}/>Available nodes</span></div>
   </div>
   <div className={styles.syncedBoardFoot}><span>{board?.openPercent||0}% complete</span><span>{openNodes.length} active nodes</span><span>{selectableNodes.length} board nodes</span></div>
   {selectedNode&&(()=>{const Glyph=daevanionGlyph(selectedNode.label);const effects=Array.isArray(selectedNode.synced?.effects)?selectedNode.synced.effects.filter(Boolean):[];const isSkill=String(selectedNode.label||"").startsWith("Skill Level Up - ");const nodeType=selectedNode.start?"Start node":isSkill?"Skill node":"Stat node";return <section className={styles.nodeInspector}>
     <div className={styles.nodeInspectorHead}><span className={styles.nodeInspectorIcon}>{selectedNode.icon?<img src={selectedNode.icon} alt=""/>:<Glyph/>}</span><div><small>NODE DETAILS</small><h4>{isSkill?String(selectedNode.label).replace(/^Skill Level Up - /,""):selectedNode.label}</h4><p>{nodeType} · {selectedNode.grade||"Common"}</p></div><b className={selectedNode.open?styles.nodeStatusActive:styles.nodeStatusAvailable}>{selectedNode.open?"ACTIVE":"AVAILABLE"}</b></div>
     <div className={styles.nodeInspectorFacts}><span><small>STATUS</small><strong>{selectedNode.open?"Active":"Available"}</strong></span><span><small>COST</small><strong>{selectedNode.cost||0}</strong></span><span><small>POSITION</small><strong>{selectedNode.row}:{selectedNode.col}</strong></span></div>
     <div className={styles.nodeInspectorEffects}><h5>What this node gives</h5>{effects.length?effects.map((effect,i)=><p key={i}><Sparkles/>{effect}</p>):isSkill?<p><Swords/>Skill Level Up · {String(selectedNode.label).replace(/^Skill Level Up - /,"")}</p>:<p><Sparkles/>{selectedNode.label}<small>Official numeric effect text was not returned for this node.</small></p>}</div>
   </section>})()}
   <BoardBonusSummary board={board}/>
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
 const allDaevanionBoards=useMemo(()=>{
   const synced=Array.isArray(linked?.daevanion)?linked.daevanion:[];
   const byName=new Map(synced.map(board=>[String(board?.name||"").toLowerCase(),board]));
   const catalogClass=boardClassAlias[linked?.profile?.className]||linked?.profile?.className;
   return BOARD_ORDER.map(name=>{
     const found=byName.get(name.toLowerCase());
     const catalog=boardData?.[catalogClass]?.[name]||[];
     const total=catalog.filter(node=>!node?.[5]).length;
     return found?{...found,totalNodes:found.totalNodes||total,reference:false}:{id:"reference-"+name,name,open:false,unlocked:false,openNodes:0,totalNodes:total,openPercent:0,icon:"",detail:null,reference:true};
   });
 },[linked]);
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
       {tab==="progression"&&(boardView?<SyncedDaevanionBoard board={boardView} className={linked.profile.className} skills={linked.skills} onBack={()=>setBoardView(null)}/>:<><div className={styles.sectionTitle}><Database/><div><h3>Your progress</h3><p>All eight original Daevanion boards. Synced boards show your current points.</p></div></div><div className={styles.progressTop}><article><small>TITLES</small><strong>{linked.titles.owned}/{linked.titles.total||"—"}</strong></article><article><small>ACTIVE DAEVANION</small><strong>{daevanionBoards.length}</strong></article><article><small>RANKINGS</small><strong>{linked.rankings.length}</strong></article></div><div className={styles.boardSelector8}>{allDaevanionBoards.map((b,i)=><button type="button" key={b.name} className={b.reference?styles.boardReference:styles.boardSynced} onClick={()=>setBoardView(b)}><small>BOARD {i+1}</small><b>{b.name}</b><span>{b.reference?(b.totalNodes+" nodes"):(b.openNodes+"/"+b.totalNodes+" · "+(b.openPercent||0)+"%")}</span></button>)}</div></>)}
       </div>
       
     </div>
   </section>:null}
 </main>;
}
