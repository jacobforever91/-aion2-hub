"use client";

import {useState} from "react";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import {classList, classWeapons, emblemBase} from "../classes/classData";
import ClassEquipment from "../classes/ClassEquipment";

export default function EquipmentBrowser() {
  const [selectedSlug, setSelectedSlug] = useState("templar");
  const selectedClass = classList.find(({slug}) => slug === selectedSlug) || classList[0];
  const weapons = classWeapons[selectedClass.slug];
  const weaponSummary = [weapons.main.name, weapons.secondary && `${weapons.secondary.kind}: ${weapons.secondary.name}`].filter(Boolean).join(" · ");

  return (
    <main className="classPage classBrowsePage equipmentBrowsePage">
      <Link className="classBack" href="/?menu=open" aria-label="Back to the menu panel">
        <ArrowLeft aria-hidden="true" />
      </Link>
      <nav className="classGrid" aria-label="Choose a class for equipment">
        {classList.map(({name, slug, emblem}) => (
          <button
            className={`classIcon${selectedSlug === slug ? " isSelected" : ""}`}
            type="button"
            key={slug}
            onClick={() => setSelectedSlug(slug)}
            aria-label={`Show ${name} equipment`}
            aria-pressed={selectedSlug === slug}
            title={`${name} equipment`}
          >
            <span className="classEmblemCrop" aria-hidden="true">
              <img src={`${emblemBase}/${emblem}.webp`} alt="" />
            </span>
          </button>
        ))}
      </nav>
      <section className="classInlineContent equipmentInlineContent" aria-live="polite">
        <div className="equipmentClassPane">
          <header className="equipmentClassHeading">
            <span className="classEyebrow">GLOBAL · CLASS EQUIPMENT</span>
            <h1>{selectedClass.name}</h1>
            <p>{weaponSummary} · Weapons, armor and accessories for this class.</p>
          </header>
          <ClassEquipment key={selectedSlug} slug={selectedSlug} />
        </div>
      </section>
    </main>
  );
}
