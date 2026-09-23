const menus={
GAME:[["Classes","/classes"],["Skills","/database"],["Progression","/database"]],
DATABASE:[["Items","/database"],["Skills","/database"],["NPCs","/database"],["Crafting","/database"]],
BUILDS:[["Class Builds","/classes"],["PvE Builds","/classes"],["PvP Builds","/classes"]],
WORLD:[["World Map","/database"],["Bosses","/database"],["Dungeons","/database"],["Quests","/database"]],
GUIDES:[["Beginner","/database"],["Leveling","/database"],["Endgame","/database"]]
};
const stories=[
{type:"LATEST UPDATE",title:"The world keeps changing",text:"New content, balance changes and systems — connected directly to the classes, items and encounters they affect.",meta:["OFFICIAL DATA","KR / TW"],scene:"updateScene",mark:"✦"},
{type:"GAME GUIDE",title:"Choose your path",text:"See every class, its role, skills, progression and recommended equipment in one visual journey.",meta:["8 CLASSES","SKILLS","GEAR"],scene:"classScene",mark:"⚔"},
{type:"WORLD",title:"Explore Atreia",text:"Find bosses, dungeons, quests and rewards — and see exactly where everything connects on the world map.",meta:["MAP","BOSSES","DUNGEONS"],scene:"worldScene",mark:"⌖"}
];
export default function Home(){return <main className="homeV2">
<header className="cinemaNav"><a className="cinemaBrand" href="/"><b>AION <i>2</i></b><span>HUB</span></a><div className="cinemaLinks">{Object.entries(menus).map(([name,items])=><div className="navGroup" key={name}><button>{name}<small>⌄</small></button><div className="dropMenu">{items.map(x=><a href={x[1]} key={x[0]}>{x[0]}<b>→</b></a>)}</div></div>)}</div><div className="cinemaActions"><button>GLOBAL⌄</button><button className="searchBtn">⌕</button><button className="menu">☰</button></div></header>
<section className="cinemaHero cleanHero aliveHero"><div className="worldDisc"/><div className="floatingIsland islandOne"/><div className="floatingIsland islandTwo"/><div className="skyOrb"/><div className="wing wingL"/><div className="wing wingR"/><div className="heroMist"/><div className="cinemaCopy"><span className="chapter">THE WORLD OF ATREIA · ONE PLACE</span><h1>AION <strong>2</strong><small>HUB</small></h1><p>Your complete companion for AION 2.</p><div className="heroButtons"><button aria-label="Search">⌕ &nbsp; SEARCH AION 2</button></div></div><div className="scrollCue"><span>DISCOVER</span><b>⌄</b></div></section>
<section className="storyIntro"><span>DISCOVER AION 2</span><h2>See it first.<br/><em>Know it instantly.</em></h2><p>Images guide you. Information explains it. Every detail connects to the next answer.</p></section>
<section className="visualStories">{stories.map((s,i)=><article className={i===0?"featuredStory":""} key={s.title}><div className={"storyVisual "+s.scene}><div className="sceneHorizon"/><div className="sceneMark">{s.mark}</div><div className="sceneLabel"><small>{s.type}</small><b>{s.title}</b></div></div><div className="storyInfo"><small>{s.type}</small><h3>{s.title}</h3><p>{s.text}</p><div className="storyMeta">{s.meta.map(m=><span key={m}>{m}</span>)}</div><a href={i===1?"/classes":"/database"}>{i===1?"VIEW CLASSES":i===2?"OPEN WORLD":"VIEW UPDATE"} <b>→</b></a></div></article>)}</section>
<section className="homeEnd"><span>ONE CONNECTED HUB</span><h2>One discovery leads<br/>to the next.</h2><div><b>CLASS</b><i>→</i><b>SKILL</b><i>→</i><b>BUILD</b><i>→</i><b>GEAR</b><i>→</i><b>BOSS</b><i>→</i><b>MAP</b></div></section>
<footer><div><b>AION <i>2</i> HUB</b><p>Independent community companion for AION 2.</p></div><div className="footerTags"><span>GLOBAL</span><span>KR / TW</span></div></footer>
</main>}