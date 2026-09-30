"use client";

import {useEffect,useMemo,useRef,useState} from "react";
import {Menu,Home,Plus,Search,Users,Lock,BookOpen,ArrowUpRight,Download,X,Eye,Shield,Swords} from "lucide-react";
import {CLASSES,MODES,readDrafts,readPreviews,makePreview,savePreview,selectedVariant,selectionCounts,className} from "./publication-model.mjs";
import styles from "./community.module.css";

function Counts({variant}) {
  const counts=selectionCounts(variant);
  return <dl className={styles.counts}>{Object.entries(counts).map(([name,value])=><div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl>;
}

export default function CommunityBuilds(){
  const [view,setView]=useState("explore"),[classFilter,setClassFilter]=useState("All"),[mode,setMode]=useState("All"),[search,setSearch]=useState("");
  const [documents,setDocuments]=useState([]),[previews,setPreviews]=useState([]),[warnings,setWarnings]=useState([]),[ready,setReady]=useState(false),[notice,setNotice]=useState("");
  const [editor,setEditor]=useState(null),[title,setTitle]=useState(""),[description,setDescription]=useState(""),[purpose,setPurpose]=useState("PvE"),[variantId,setVariantId]=useState(""),[formError,setFormError]=useState("");
  const dialog=useRef(null);
  useEffect(()=>{
    function refresh(){
      const issues=[];
      try {
        const local=readDrafts(window.localStorage);setDocuments(local.documents);issues.push(...local.warnings);
        try {setPreviews(readPreviews(window.localStorage));} catch(error){issues.push(error.message);}
      } catch {issues.push("Browser storage is unavailable. Your saved builds have not been changed.");}
      setWarnings([...new Set(issues)]);setReady(true);
    }
    refresh();window.addEventListener("storage",refresh);window.addEventListener("focus",refresh);
    return ()=>{window.removeEventListener("storage",refresh);window.removeEventListener("focus",refresh);};
  },[]);
  useEffect(()=>{
    if(editor&&!dialog.current?.open)dialog.current?.showModal();
    else if(!editor&&dialog.current?.open)dialog.current.close();
  },[editor]);
  const entries=useMemo(()=>{
    const list=view==="drafts"?documents.map(doc=>({doc,title:doc.title||"Untitled build",variant:selectedVariant(doc)})):
      view==="prepared"?previews.map(preview=>({doc:preview.build,title:preview.title,variant:selectedVariant(preview.build),preview})):[];
    const q=search.trim().toLowerCase();
    return list.filter(item=>(classFilter==="All"||className(item.variant)===classFilter)&&(mode==="All"||item.variant?.goal===mode)&&(!q||[item.title,className(item.variant),item.variant?.goal,item.preview?.description].join(" ").toLowerCase().includes(q)));
  },[documents,previews,view,classFilter,mode,search]);
  function prepare(doc,existing=null){
    const variant=selectedVariant(doc);setTitle(existing?.title||doc.title||"");setDescription(existing?.description||"");setPurpose(MODES.includes(variant?.goal)?variant.goal:"PvE");setVariantId(variant?.id||"");setFormError("");setEditor({doc,existing});
  }
  function save(event){
    event.preventDefault();
    try {
      let preview=makePreview(editor.doc,{title,description,mode:purpose,variantId});
      if(editor.existing)preview={...preview,id:editor.existing.id,sourceId:editor.existing.sourceId};
      setPreviews(savePreview(window.localStorage,preview));setEditor(null);setView("prepared");setClassFilter("All");setMode("All");setSearch("");setNotice("Private preview saved on this device. Nothing was published or uploaded.");
    } catch(error){setFormError(error?.message||"Could not save the preview. Export your build from Build Lab as a backup.");}
  }
  function exportBuild(preview){
    try {
      const url=URL.createObjectURL(new Blob([JSON.stringify(preview.build,null,2)],{type:"application/json"}));
      const anchor=document.createElement("a");anchor.href=url;anchor.download="daevexus-build.json";document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
      setNotice("Build export prepared. Private notes are not included.");
    } catch {setNotice("Export could not start. Your saved preview has not been changed.");}
  }
  const chosen=editor?selectedVariant(editor.doc,variantId):null;
  const pending=!chosen||chosen.region!=="GLOBAL"||className(chosen)==="Unknown class";
  return <main className={styles.page}>
    <header className={styles.topbar}>
      <a className={styles.iconButton} href="/?menu=open" aria-label="Open menu"><Menu size={22}/></a>
      <div className={styles.brand}><span>DAEVEXUS</span><h1>Community Builds</h1></div>
      <a className={styles.create} href="/build-lab"><Plus size={18}/>Create build</a>
      <a className={styles.iconButton} href="/" aria-label="Home"><Home size={22}/></a>
    </header>
    <div className={styles.workspace}>
      <aside className={styles.sidebar} aria-label="Build classes">
        <p className={styles.overline}>CLASS</p>
        {["All",...CLASSES].map(name=><button key={name} type="button" className={classFilter===name?styles.chosen:""} onClick={()=>setClassFilter(name)} aria-pressed={classFilter===name}>{name==="All"?<Users size={18}/>:name==="Templar"||name==="Cleric"?<Shield size={18}/>:<Swords size={18}/>}<span>{name==="All"?"All classes":name}</span></button>)}
        <div className={styles.scope}><span>GLOBAL</span><p>Game stats pending verification.</p></div>
      </aside>
      <section className={styles.library} aria-label="Build library">
        <div className={styles.tabs} role="group" aria-label="Library view">
          {[["explore","Explore"],["drafts","My builds"],["prepared","Prepared"]].map(([key,label])=><button key={key} type="button" aria-pressed={view===key} className={view===key?styles.currentTab:""} onClick={()=>{setView(key);setNotice("");}}>{label}{key!=="explore"&&ready&&<span>{key==="drafts"?documents.length:previews.length}</span>}</button>)}
        </div>
        <div className={styles.toolbar}>
          <label className={styles.search}><Search size={18}/><input aria-label="Search builds" type="search" value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search builds or class"/></label>
          <select aria-label="Build purpose" value={mode} onChange={event=>setMode(event.target.value)}><option value="All">All purposes</option>{MODES.map(value=><option key={value}>{value}</option>)}</select>
        </div>
        <div className={styles.body}>
          {notice&&<p className={styles.notice} role="status">{notice}</p>}
          {warnings.map(warning=><p className={styles.warning} role="status" key={warning}>{warning}</p>)}
          {view==="explore"?<div className={styles.empty}>
            <Users size={40} strokeWidth={1.2}/><span className={styles.overline}>COMMUNITY LIBRARY</span><h2>A home for your builds.</h2>
            <p>Browse player builds by class and purpose, then make a copy in the creator.</p>
            <div className={styles.connection}><Lock size={18}/><span>Public publishing is not connected yet.<small>Accounts and shared storage are required. Local drafts stay private.</small></span></div>
            <button className={styles.primary} type="button" onClick={()=>setView("drafts")}><BookOpen size={18}/>Prepare one of my builds</button>
          </div>:!ready?<p className={styles.loading} role="status">Reading builds on this device…</p>:<>
            <div className={styles.results}><h2>{view==="drafts"?"My builds":"Publication previews"}</h2><span><Lock size={14}/>Private · this device</span></div>
            {entries.length?<div className={styles.grid}>{entries.map(({doc,title:label,variant,preview})=><article className={styles.card} key={preview?.id||doc.id}>
              <div className={styles.cardMeta}><span>{className(variant)}</span><b>{variant?.goal||"PvE"}</b></div><h3>{label}</h3>
              <p className={styles.variant}>{variant?.name||"Selected variant"}{!preview&&doc.variants.length>1?` · ${doc.variants.length} variants`:""}</p>
              {preview?.description&&<p className={styles.description}>{preview.description}</p>}
              <Counts variant={variant}/>
              <div className={styles.cardFooter}><button type="button" onClick={()=>prepare(doc,preview)}><Eye size={16}/>{preview?"Edit preview":"Prepare publication"}</button>{preview&&<button type="button" className={styles.export} onClick={()=>exportBuild(preview)} aria-label={`Export ${label}`} title="Export build without private notes"><Download size={18}/></button>}</div>
            </article>)}</div>:<div className={styles.empty}><BookOpen size={36} strokeWidth={1.2}/><h2>{search||classFilter!=="All"||mode!=="All"?"No matching builds":view==="drafts"?"Your builds stay yours.":"No publication previews yet."}</h2><p>{view==="drafts"?"Save a build in Build Lab, then return using the same browser and site address. Older Build Creator drafts remain separate and untouched.":"Choose a build in My builds to prepare its title, purpose and description."}</p><a className={styles.primary} href="/build-lab">Open Build Lab<ArrowUpRight size={17}/></a></div>}
          </>}
        </div>
      </section>
    </div>
    <dialog ref={dialog} className={styles.dialog} onClose={()=>setEditor(null)} onCancel={()=>setEditor(null)} aria-labelledby="publication-title">
      {editor&&<form onSubmit={save}>
        <div className={styles.modalHead}><div><span className={styles.overline}>PRIVATE PREVIEW</span><h2 id="publication-title">Prepare publication</h2></div><button className={styles.iconButton} type="button" onClick={()=>setEditor(null)} aria-label="Close publication preview"><X size={22}/></button></div>
        <div className={styles.formBody}>
          <label>Build name<input autoFocus required maxLength={120} value={title} onChange={event=>setTitle(event.target.value)}/></label>
          <div className={styles.formRow}><label>Variant<select value={variantId} onChange={event=>setVariantId(event.target.value)}>{editor.doc.variants.map(variant=><option key={variant.id} value={variant.id}>{variant.name||className(variant)} · {className(variant)}</option>)}</select></label><label>Purpose<select value={purpose} onChange={event=>setPurpose(event.target.value)}>{MODES.map(value=><option key={value}>{value}</option>)}</select></label></div>
          <label>Public description<textarea value={description} onChange={event=>setDescription(event.target.value)} maxLength={3000} rows={4} placeholder="Explain how to use this build. Do not include personal information."/></label>
          <div className={styles.previewCard}><div className={styles.cardMeta}><span>{className(chosen)}</span><b>{purpose}</b></div><h3>{title||"Build name"}</h3><p className={styles.description}>{description||"Your description will appear here."}</p><Counts variant={chosen}/></div>
          <p className={styles.privacy}><Lock size={16}/><span>Only the chosen variant is copied. Private notes, gear notes and rotation notes are excluded. Your original draft is never changed.</span></p>
          {pending&&<p className={styles.warning}>Choose a supported Global variant to save this preview.</p>}
          {formError&&<p className={styles.warning} role="alert">{formError}</p>}
        </div>
        <div className={styles.modalFooter}><p>Publishing to everyone requires an account connection and shared storage. Game stats remain unverified.</p><div><button type="button" disabled title="Account connection and shared storage are not configured">Publish · not connected</button><button type="submit" className={styles.primary} disabled={pending}>Save private preview</button></div></div>
      </form>}
    </dialog>
  </main>;
}
