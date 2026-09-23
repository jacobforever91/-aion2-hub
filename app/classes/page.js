"use client";

import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import {classList, emblemBase} from "./classData";

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
        {classList.map(({name, slug, emblem}) => (
          <Link className="classIcon" href={`/classes/${slug}`} key={slug} aria-label={`Ver clase ${name}`} title={name}>
            <span className="classEmblemCrop" aria-hidden="true">
              <img src={`${emblemBase}/${emblem}.webp`} alt="" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
