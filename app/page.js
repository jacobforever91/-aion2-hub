"use client";
import {useEffect, useRef, useState} from "react";
import {MessageCircle} from "lucide-react";
const menus={GAME:[["Skills","/classes"],["Equipment","/equipment"],["Stigmas","/stigmas"],["Daevanion","/daevanion"],["Wings","/wings"],["Pets","/pets"],["Arcana","/arcana"]],DATABASE:[["Items","/database"],["Skills","/database"],["NPCs","/database"],["Crafting","/database"]],BUILDS:[["Build Creator","/builds"],["Class Builds","/builds?mode=class"],["PvE Builds","/builds?mode=pve"],["PvP Builds","/builds?mode=pvp"]],WORLD:[["World Map","/database"],["Bosses","/database"],["Dungeons","/database"],["Quests","/database"]],GUIDES:[["Beginner","/database"],["Leveling","/database"],["Endgame","/database"]]};
export default function Home(){const[open,setOpen]=useState(false);const stageRef=useRef(null);const indexRef=useRef(0);const lockRef=useRef(false);const touchRef=useRef(null);useEffect(()=>{if(new URLSearchParams(window.location.search).get("menu")==="open"){setOpen(true);window.history.replaceState(null,"","/")}},[]);useEffect(()=>{const closeOnEscape=e=>{if(e.key==="Escape")setOpen(false)};document.body.style.overflow=open?"hidden":"";if(open){const menu=document.getElementById("aion-menu");if(menu)menu.scrollTop=0}window.addEventListener("keydown",closeOnEscape);return()=>{document.body.style.overflow="";window.removeEventListener("keydown",closeOnEscape)}},[open]);useEffect(()=>{const root=stageRef.current;if(!root)return;const screens=[...root.querySelectorAll(".cinematicScreen")];const go=(next)=>{next=Math.max(0,Math.min(screens.length-1,next));if(next===indexRef.current||lockRef.current)return;lockRef.current=true;const old=indexRef.current;indexRef.current=next;screens.forEach((s,i)=>{s.classList.toggle("isActive",i===next);s.classList.toggle("isLeaving",i===old)});root.style.setProperty("--screen-index",String(next));history.replaceState(null,"",next===0?location.pathname:"#"+screens[next].id);setTimeout(()=>{screens[old]?.classList.remove("isLeaving");lockRef.current=false},1650)};const wheel=e=>{if(open)return;e.preventDefault();if(Math.abs(e.deltaY)<8||lockRef.current)return;go(indexRef.current+(e.deltaY>0?1:-1))};const key=e=>{if(open)return;if(["ArrowDown","PageDown"].includes(e.key)){e.preventDefault();go(indexRef.current+1)}if(["ArrowUp","PageUp"].includes(e.key)){e.preventDefault();go(indexRef.current-1)}};const start=e=>{touchRef.current=e.touches[0]?.clientY??null};const end=e=>{if(open||touchRef.current==null)return;const y=e.changedTouches[0]?.clientY??touchRef.current;const d=touchRef.current-y;touchRef.current=null;if(Math.abs(d)>45)go(indexRef.current+(d>0?1:-1))};const links=[...root.querySelectorAll('a[href^="#"]')];const click=e=>{const id=e.currentTarget.getAttribute("href")?.slice(1);const i=screens.findIndex(s=>s.id===id);if(i>=0){e.preventDefault();go(i)}};links.forEach(a=>a.addEventListener("click",click));window.addEventListener("wheel",wheel,{passive:false});window.addEventListener("keydown",key);window.addEventListener("touchstart",start,{passive:true});window.addEventListener("touchend",end,{passive:true});screens[0]?.classList.add("isActive");return()=>{links.forEach(a=>a.removeEventListener("click",click));window.removeEventListener("wheel",wheel);window.removeEventListener("keydown",key);window.removeEventListener("touchstart",start);window.removeEventListener("touchend",end)}},[open]);return <main ref={stageRef} className="homeV2 presentationHome cinematicHome">
<div id="aion-menu" className={"a2MobileMenu forgeMenu "+(open?"isOpen":"")} aria-hidden={!open}>
  <div className="forgeMenuContent">
    <div className="forgeMenuHeader"><span>DAEVEXUS</span><small>GAME &amp; DATABASE</small></div>
    <div className="forgeSecondary">
      <section><h3>GAME</h3><a href="/equipment"><span>Equipment</span><b>↗</b></a><a href="/classes"><span>Skills</span><b>↗</b></a><a href="/wings"><span>Wings</span><b>↗</b></a><a href="/pets"><span>Pets</span><b>↗</b></a><a href="/arcana"><span>Arcana</span><b>↗</b></a><a href="/database"><span>Items Database</span><b>↗</b></a><a href="/stigmas"><span>Stigmas</span><b>↗</b></a><a href="/daevanion"><span>Daevanion</span><b>↗</b></a></section>
      <section><h3>DATABASE</h3><a href="/database"><span>NPCs</span><b>↗</b></a><a href="/database"><span>Crafting</span><b>↗</b></a></section>
      <section><h3>BUILDS</h3><a href="/builds"><span>Build Creator</span><b>↗</b></a><a href="/builds?mode=class"><span>Class Builds</span><b>↗</b></a><a href="/builds?mode=pve"><span>PvE Builds</span><b>↗</b></a><a href="/builds?mode=pvp"><span>PvP Builds</span><b>↗</b></a></section>
      <section><h3>WORLD</h3><a href="/database"><span>Map</span><b>↗</b></a><a href="/database"><span>Dungeons &amp; Bosses</span><b>↗</b></a><a href="/database"><span>Lore</span><b>↗</b></a></section>
      <section><h3>GUIDES</h3><a href="/database"><span>Beginner Guide</span><b>↗</b></a><a href="/database"><span>Progression Guide</span><b>↗</b></a><a href="/database"><span>Tips &amp; Tools</span><b>↗</b></a></section>
      <section><h3>REGION</h3><a href="/"><span>Global</span><b>↗</b></a><a href="/"><span>KR / TW</span><b>↗</b></a></section>
    </div>
    <div className="forgeDiscord"><i><MessageCircle/></i><span>Join Our Discord<small>Community, guides and updates</small></span><b>↗</b></div>
  </div>
</div>
<button className={"a2Close forgeClose "+(open?"isVisible":"")} onClick={()=>setOpen(false)} aria-label="Close menu" aria-hidden={!open}>×</button>

<section id="home-screen" className="approvedHomeHero cinematicScreen" aria-label="DAEVEXUS Elyos and Asmodians Home">
  <img src="/home/daevexus-home-hero.webp" alt="DAEVEXUS AION 2 Companion with Elyos and Asmodians, launch date and system shortcuts"/>
  <button className="heroHotspot heroMenuHotspot" type="button" onClick={()=>setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="aion-menu"><span className="srOnly">Open menu</span></button>
  <a className="heroHotspot heroHomeHotspot" href="/" aria-label="Home"><span className="srOnly">Home</span></a>
  <a className="heroHotspot heroElyosHotspot" href="#elyos-screen" aria-label="Explore Elyos"><span className="srOnly">Explore Elyos</span></a>
  <a className="heroHotspot heroAsmoHotspot" href="#asmodians-screen" aria-label="Explore Asmodians"><span className="srOnly">Explore Asmodians</span></a>
  <nav className="heroSystemHotspots" aria-label="DAEVEXUS systems">
    <a href="/classes" aria-label="Skills"><span className="srOnly">Skills</span></a>
    <a href="/equipment" aria-label="Equipment"><span className="srOnly">Equipment</span></a>
    <a href="/stigmas" aria-label="Stigmas"><span className="srOnly">Stigmas</span></a>
    <a href="/pets" aria-label="Pets"><span className="srOnly">Pets</span></a>
    <a href="/wings" aria-label="Wings"><span className="srOnly">Wings</span></a>
    <a href="/arcana" aria-label="Arcanas"><span className="srOnly">Arcanas</span></a>
    <a href="/daevanion" aria-label="Daevanion"><span className="srOnly">Daevanion</span></a>
    <a href="/builds" aria-label="Builds"><span className="srOnly">Builds</span></a>
    <span aria-label="World Map recovery in progress"><span className="srOnly">World Map recovery in progress</span></span>
  </nav>
</section>

<section id="elyos-screen" className="approvedFactionScreen cinematicScreen"><img src="/home/1B701743-81F6-4C8A-B827-D07FFD0EDFA3.png" alt="DAEVEXUS Elyos faction introduction"/></section>
<section id="asmodians-screen" className="approvedFactionScreen cinematicScreen"><img src="/home/8A997A54-D1D5-430C-AFC3-C4E5FC95C104.png" alt="DAEVEXUS Asmodians faction introduction"/></section>
<section id="global-screen" className="approvedFactionScreen cinematicScreen"><img src="/home/D86FC685-ADCD-45C4-8AC2-B7B69858488E.png" alt="DAEVEXUS AION 2 Global launch October 5, 2026"/></section>\n<section id="founder-packs-screen" className="approvedFactionScreen cinematicScreen"><img src="/home/25047614-E33E-4054-957A-F3F82D70B249.png" alt="DAEVEXUS AION 2 Founder Packs"/><a className="founderOfficialHotspot" href="https://purple.plaync.com/game/aion2global?locale=en-US" target="_blank" rel="noreferrer" aria-label="View official AION 2 Founder Packs"><span className="srOnly">View official Founder Packs</span></a></section>
</main>}