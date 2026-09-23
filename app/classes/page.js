"use client";

import {ArrowLeft, Shield, Swords, Compass, Map, Sparkles, Users, BookOpen, Crown} from "lucide-react";

const classes = [
  {name: "Templar", icon: Shield},
  {name: "Gladiator", icon: Swords},
  {name: "Assassin", icon: Compass},
  {name: "Ranger", icon: Map},
  {name: "Sorcerer", icon: Sparkles},
  {name: "Spiritmaster", icon: Users},
  {name: "Cleric", icon: BookOpen},
  {name: "Chanter", icon: Crown},
];

export default function Classes() {
  function goBack() {
    if (window.history.length > 1) window.history.back();
    else window.location.assign("/");
  }

  return (
    <main className="classPage">
      <button className="classBack" type="button" onClick={goBack} aria-label="Regresar">
        <ArrowLeft aria-hidden="true" />
      </button>

      <div className="classGrid" aria-label="Clases de AION 2">
        {classes.map(({name, icon: Icon}) => (
          <div className="classIcon" key={name} role="img" aria-label={name} title={name}>
            <Icon aria-hidden="true" />
          </div>
        ))}
      </div>
    </main>
  );
}
