const menus={
GAME:[["Classes","/classes"],["Skills","/database"],["Progression","/database"]],
DATABASE:[["Items","/database"],["Skills","/database"],["NPCs","/database"],["Crafting","/database"]],
BUILDS:[["Class Builds","/classes"],["PvE Builds","/classes"],["PvP Builds","/classes"]],
WORLD:[["World Map","/database"],["Bosses","/database"],["Dungeons","/database"],["Quests","/database"]],
GUIDES:[["Beginner","/database"],["Leveling","/database"],["Endgame","/database"]]
};
export default function Home(){return <main className="homeV2">
<header className="cinemaNav"><a className="cinemaBrand" href="/"><b>AION <i>2</i></b><span>HUB</span></a><div className="cinemaLinks">{Object.entries(menus).map(([name,items])=><div className="navGroup" key={name}><button>{name}<small>⌄</small></button><div className="dropMenu">{items.map(x=><a href={x[1]} key={x[0]}>{x[0]}<b>→</b></a>)}</div></div>)}</div><div className="cinemaActions"><button>GLOBAL⌄</button><button className="searchBtn">⌕</button><button className="menu">☰</button></div></header>
<section className="cinemaHero cleanHero"><div className="skyOrb"/><div className="wing wingL"/><div className="wing wingR"/><div className="heroMist"/><div className="cinemaCopy"><span className="chapter">THE WORLD OF ATREIA · ONE PLACE</span><h1>AION <strong>2</strong><small>HUB</small></h1><p>Your complete companion for AION 2.</p><div className="heroButtons"><button aria-label="Search">⌕ &nbsp; SEARCH AION 2</button></div></div><div className="scrollCue"><span>DISCOVER</span><b>⌄</b></div></section>
<section className="cleanUpdates"><div><span>LATEST</span><h2>Stay connected to Atreia.</h2></div><a href="/database">Explore the database <b>→</b></a></section>
<footer><div><b>AION <i>2</i> HUB</b><p>Independent community companion for AION 2.</p></div><div className="footerTags"><span>GLOBAL</span><span>KR / TW</span></div></footer>
</main>}