import {Shield, Swords, Compass, Sparkles, Users, BookOpen, Crown, Map} from "lucide-react";

const classes = [
  { name: "Templar", role: "Tank", weapon: "Longsword", focus: "Defensive frontline · protects allies", icon: Shield },
  { name: "Gladiator", role: "Tank / DPS", weapon: "Greatsword", focus: "Heavy melee · pressure and damage", icon: Swords },
  { name: "Assassin", role: "DPS", weapon: "Dagger", focus: "Close-range burst · high mobility", icon: Compass },
  { name: "Ranger", role: "DPS", weapon: "Bow", focus: "Ranged attacks · precision", icon: Map },
  { name: "Sorcerer", role: "DPS", weapon: "Spellbook", focus: "Elemental magic · burst damage", icon: Sparkles },
  { name: "Spiritmaster", role: "DPS", weapon: "Orb", focus: "Spirit control · sustained pressure", icon: Users },
  { name: "Cleric", role: "Healer", weapon: "Mace", focus: "Healing · group support", icon: BookOpen },
  { name: "Chanter", role: "Healer / DPS", weapon: "Staff", focus: "Healing and buffs · close combat", icon: Crown },
];

export default function Classes() {
  return (
    <main className="classPage">
      <nav>
        <a className="brand" href="/"><b>AION <i>2</i> HUB</b><small>DATABASE &amp; TOOLS</small></a>
        <div className="navlinks">
          <a href="/database">Database</a>
          <a href="/classes">Classes</a>
          <a href="/#builds">Builds</a>
          <a href="/#guides">Guides</a>
        </div>
        <div className="navActions"><span className="region">GLOBAL</span></div>
      </nav>

      <section className="classRosterHero">
        <div>
          <small>GLOBAL · CLASS ROSTER</small>
          <h1>Choose your class</h1>
          <p>Eight paths into AION 2. Compare each role and main weapon.</p>
        </div>
        <div className="classCount"><strong>08</strong><span>CLASSES<br/>AVAILABLE</span></div>
      </section>

      <section className="classRoster">
        <div className="classRosterHeading">
          <div><small>FIND YOUR PATH</small><h2>Global classes</h2></div>
          <span>8 CLASSES</span>
        </div>

        <div className="classGrid">
          {classes.map(({name, role, weapon, focus, icon: Icon}) => (
            <article className="classCard" key={name}>
              <div className="classCardTop">
                <span className="classSymbol"><Icon aria-hidden="true"/></span>
                <span className="classRole">{role}</span>
              </div>
              <h3>{name}</h3>
              <p>{focus}</p>
              <div className="classWeapon"><span>Main weapon</span><strong>{weapon}</strong></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
