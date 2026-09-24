"use client";

import {useState} from "react";
import {ArrowLeft} from "lucide-react";
import ClassInfo from "./ClassInfo";
import {classList, emblemBase} from "./classData";

export default function Classes() {
  const [selectedSlug, setSelectedSlug] = useState("templar");

  function goBack() {
    window.location.assign("/?menu=open");
  }

  return (
    <main className="classPage classBrowsePage">
      <button className="classBack" type="button" onClick={goBack} aria-label="Back">
        <ArrowLeft aria-hidden="true" />
      </button>
      <div className="classGrid" role="list" aria-label="Choose a class">
        {classList.map(({name, slug, emblem}) => (
          <button
            className={`classIcon${selectedSlug === slug ? " isSelected" : ""}`}
            type="button"
            key={slug}
            onClick={() => setSelectedSlug(slug)}
            aria-label={`View ${name} class`}
            aria-pressed={selectedSlug === slug}
            title={name}
          >
            <span className="classEmblemCrop" aria-hidden="true">
              <img src={`${emblemBase}/${emblem}.webp`} alt="" />
            </span>
          </button>
        ))}
      </div>
      <section className="classInlineContent" aria-live="polite">
        <ClassInfo key={selectedSlug} slug={selectedSlug} onSelectClass={setSelectedSlug} />
      </section>
    </main>
  );
}
