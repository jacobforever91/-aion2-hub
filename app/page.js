const menus={
GAME:[["Classes","/classes"],["Skills","/database"],["Progression","/database"]],
DATABASE:[["Items","/database"],["Skills","/database"],["NPCs","/database"],["Crafting","/database"]],
BUILDS:[["Class Builds","/classes"],["PvE Builds","/classes"],["PvP Builds","/classes"]],
WORLD:[["World Map","/database"],["Bosses","/database"],["Dungeons","/database"],["Quests","/database"]],
GUIDES:[["Beginner","/database"],["Leveling","/database"],["Endgame","/database"]]
};
const stories=[
{type:"LATEST UPDATE",title:"The world keeps changing",text:"See new content, balance changes and systems at a glance — then jump directly into the related classes, items and encounters.",meta:["OFFICIAL SOURCE","KR / TW"],icon:"✦"},
{type:"GAME GUIDE",title:"Learn by seeing",text:"Classes, skills and progression explained with visual paths instead of walls of text.",meta:["CLASSES","SKILLS","PROGRESSION"],icon:"♜"},
{type:"WORLD",title:"Know where to go",text:"Connect dungeons and bosses to their locations, rewards and the gear you are searching for.",meta:["MAP","BOSSES","DUNGEONS"],icon:"⌖"}
];
export default function Home(){return <main className="homeV2">
<header className="cinemaNav"><a className="cinemaBrand" href="/"><b>AION <i>2</i></b><span>HUB</span></a><div className="cinemaLinks">{Object.entries(menus).map(([name,items])=><div className="navGroup" key={name}><button>{name}<small>⌄</small></button><div className="dropMenu">{items.map(x=><a href={x[1]} key={x[0]}>{x[0]}<b>→</b></a>)}</div></div>)}</div><div className="cinemaActions"><button>GLOBAL⌄</button><button className="searchBtn">⌕</button><button className="menu">☰</button></div></header>
<section className="cinemaHero cleanHero"><div className="skyOrb"/><div className="wing wingL"/><div className="wing wingR"/><div className="heroMist"/><div className="cinemaCopy"><span className="chapter">THE WORLD OF ATREIA · ONE PLACE</span><h1>AION <strong>2</strong><small>HUB</small></h1><p>Your complete companion for AION 2.</p><div className="heroButtons"><button aria-label="Search">⌕ &nbsp; SEARCH AION 2</button></div></div><div className="scrollCue"><span>DISCOVER</span><b>⌄</b></div></section>
<section className="storyIntro"><span>DISCOVER AION 2</span><h2>See the world.<br/><em>Understand what matters.</em></h2><p>Visual information and useful details together — every card leads deeper into the HUB.</p></section>
<section className="visualStories">{stories.map((s,i)=><article className={i===0?"featuredStory":""} key={s.title}><div className="storyVisual"><div className="storyRune">{s.icon}</div><span>{i===0?"UPDATE":"AION 2"}</span></div><div className="storyInfo"><small>{s.type}</small><h3>{s.title}</h3><p>{s.text}</p><div className="storyMeta">{s.meta.map(m=><span key={m}>{m}</span>)}</div><a href={i===1?"/classes":"/database"}>EXPLORE <b>→</b></a></div></article>)}</section>
<section className="homeEnd"><span>ONE CONNECTED HUB</span><h2>From what you see<br/>to what you need.</h2><div><b>CLASS</b><i>→</i><b>SKILL</b><i>→</i><b>BUILD</b><i>→</i><b>GEAR</b><i>→</i><b>BOSS</b><i>→</i><b>MAP</b></div></section>
<footer><div><b>AION <i>2</i> HUB</b><p>Independent community companion for AION 2.</p></div><div className="footerTags"><span>GLOBAL</span><span>KR / TW</span></div></footer>
</main>}