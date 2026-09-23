"use client";

import {ArrowLeft} from "lucide-react";

const classes = [
  {name: "Templar", emblem: "a803b8ff93e66eb3f53d072afefbfab8973db1ae"},
  {name: "Gladiator", emblem: "9f148fff4326b424e31e6a302c53f9f0a3bc20e2"},
  {name: "Assassin", emblem: "60b63119fe4abbc95da8536381693cf5d27e9bff"},
  {name: "Ranger", emblem: "5135150c4edcbfd46fa724345ba0426243ba7612"},
  {name: "Sorcerer", emblem: "f23f42707808d521e1fa9a54ebbff2df2a5f4a19"},
  {name: "Spiritmaster", emblem: "d34fd5fab057473228b11c9d21093420fd2243ea"},
  {name: "Cleric", emblem: "d6e8b2e7f1e0c92f2e2eccc27aa3c7114a428b17"},
  {name: "Chanter", emblem: "6aa4fcc86358be7383100c19ef0bbcd653339441"},
];

const emblemBase = "https://assets.playnccdn.com/res/aion2/update/2026/global/260421_teaser/4th/pc/img/sec6";

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
        {classes.map(({name, emblem}) => (
          <div className="classIcon" key={name} role="img" aria-label={name} title={name}>
            <span className="classEmblemCrop">
              <img src={`${emblemBase}/${emblem}.webp`} alt="" />
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
