const sections=[
["Database","Items, skills, monsters, NPCs, quests and rewards","12K+","◈"],
["Builds","Discover builds and prepare your own setup","META","⚔"],
["Classes","Class identity, skills, gear and progression","8","♜"],
["World Map","Bosses, gathering, NPCs and exploration routes","LIVE","⌖"],
["Dungeons","Mechanics, encounters, loot and requirements","PVE","◆"],
["Crafting","Recipes, materials and progression paths","RECIPES","✧"],
["Guides","Leveling, gearing, PvE, PvP and progression","NEW","☷"],
["Tools","Planners, calculators, trackers and utilities","LAB","⚙"]
];
const updates=[
["GLOBAL LAUNCH","September 2026","Global release information and regional data will stay clearly separated."],
["DATABASE","Connected knowledge","Items can lead to sources, bosses, dungeons, maps and crafting materials."],
["REGIONS","Global · KR/TW","Switch regions without mixing balance, content or progression information."]
];
export default function Home(){return <main>
<nav><a className="brand" href="#"><b>AION <i>2</i> HUB</b><small>DATABASE & TOOLS</small></a><div className="navlinks"><a href="#database">Database</a><a href="#builds">Builds</a><a href="#classes">Classes</a><a href="#world">World</a><a href="#guides">Guides</a></div><div className="navActions"><button className="region">🌐 GLOBAL⌄</button><button className="menu">☰</button></div></nav>
<section className="hero"><div className="heroGlow"/><div className="eyebrow">✦ THE ALL-IN-ONE AION 2 COMPANION ✦</div><h1>One world.<br/><em>Every answer.</em></h1><p>Search the entire world of AION 2 from one place — builds, items, skills, bosses, quests, maps, crafting and guides.</p><div className="search"><span>⌕</span><input placeholder="Search items, bosses, quests, skills..."/><kbd>⌘ K</kbd></div><div className="chips"><span>⚔ Builds</span><span>✦ Items</span><span>♜ Bosses</span><span>◇ Quests</span><span>⌖ Maps</span></div><div className="status"><b>● LIVE FOUNDATION</b><span>Global + KR/TW architecture</span><span>•</span><span>Mobile ready</span></div></section>
<section className="updates"><div className="updateInner">{updates.map(x=><article key={x[0]}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
<section className="content" id="database"><div className="heading"><div><small>EXPLORE THE HUB</small><h2>Everything connects here</h2><p>Start anywhere. Every page will lead you to the information you need next.</p></div><span className="version">AION 2 HUB • PHASE 01</span></div><div className="grid">{sections.map((s,i)=><article id={i===1?"builds":i===2?"classes":i===3?"world":i===6?"guides":undefined} key={s[0]}><div className="cardTop"><div className="icon">{s[3]}</div><span>{s[2]}</span></div><h3>{s[0]}</h3><p>{s[1]}</p><a href="#">Explore <b>→</b></a></article>)}</div></section>
<section className="vision"><small>THE HUB VISION</small><h2>Stop searching ten websites.<br/><em>Find it here.</em></h2><p>Our goal is to connect every useful piece of AION 2 knowledge into one fast, searchable companion.</p><div className="flow"><span>ITEM</span><b>→</b><span>DROP SOURCE</span><b>→</b><span>BOSS</span><b>→</b><span>DUNGEON</span><b>→</b><span>MAP</span></div></section>
<footer><div><b>AION <i>2</i> HUB</b><p>Independent community companion for AION 2.</p></div><div className="footerTags"><span>GLOBAL</span><span>KR / TW</span><span>DATA SEPARATED</span></div></footer>
</main>}