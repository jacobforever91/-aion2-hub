"use client";

import Link from "next/link";
import {useState} from "react";
import {ArrowLeft, Crosshair, Shield, Sword} from "lucide-react";
import {classData, classList, emblemBase, skillIconIds} from "./classData";

export default function ClassInfo({slug, onSelectClass}) {
  const detail = classData[slug];
  const selected = classList.find((entry) => entry.slug === slug);
  const [skillType, setSkillType] = useState("active");

  if (!selected || !detail) return null;

  const skills = detail[skillType];
  return (
    <div className="classInfoPanel">
      {!onSelectClass && <Link className="classBreadcrumb" href="/classes">CLASES <span>/</span> {selected.name.toUpperCase()}</Link>}

      <header className="classDetailHero">
        <div className="classDetailCrest">
          <span className="classEmblemCrop"><img src={`${emblemBase}/${selected.emblem}.webp`} alt={`${selected.name} emblem`} /></span>
        </div>
        <div className="classDetailIntro">
          <span className="classEyebrow">AION 2 · GLOBAL CLASS FILE</span>
          <h1>{selected.name}</h1>
          <p>{detail.summary}</p>
          <div className="classMeta">
            <span><Shield aria-hidden="true" />{detail.role}</span>
            <span><Sword aria-hidden="true" />{detail.weapon}</span>
            <span><Crosshair aria-hidden="true" />Elyos &amp; Asmodians</span>
          </div>
        </div>
      </header>

      <section className="classSkills" aria-label="Habilidades de clase Global">
        <div className="classSkillsHeading" aria-hidden="true" />
        <div className="classSkillTabs" role="tablist" aria-label="Tipo de habilidad">
          <button type="button" role="tab" aria-selected={skillType === "active"} className={skillType === "active" ? "isSelected" : ""} onClick={() => setSkillType("active")}>Activas <span>{detail.active.length}</span></button>
          <button type="button" role="tab" aria-selected={skillType === "passive"} className={skillType === "passive" ? "isSelected" : ""} onClick={() => setSkillType("passive")}>Pasivas <span>{detail.passive.length}</span></button>
        </div>
        <div className="classSkillGrid" role="tabpanel">
          {skills.map((skill, index) => (
            <article className="classSkillItem" key={skill}>
              <img className="classSkillIcon" src={`https://aion2hub.com/api/skill-icon/${skillIconIds[slug][index + (skillType === "passive" ? detail.active.length : 0)]}`} alt="" aria-hidden="true" loading="lazy" />
              <span className="classSkillName">{skill}</span>
            </article>
          ))}
        </div>
        <p className="classDataNote">Lista de habilidades Global · Launch Scale Test · 19 sep 2026</p>
      </section>

      {!onSelectClass && <nav className="classDetailNav" aria-label="Navegación entre clases">
        {classList.map(({name, slug: classSlug}) => <Link key={classSlug} className={classSlug === slug ? "current" : ""} href={`/classes/${classSlug}`}>{name}</Link>)}
      </nav>}
    </div>
  );
}
