"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {ArrowLeft, Crosshair, Shield, Sword, X} from "lucide-react";
import {classData, classList, emblemBase, skillIconIds} from "./classData";

export default function ClassInfo({slug, onSelectClass}) {
  const detail = classData[slug];
  const selected = classList.find((entry) => entry.slug === slug);
  const [skillType, setSkillType] = useState("active");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillDescription, setSkillDescription] = useState("");
  const [descriptionState, setDescriptionState] = useState("idle");

  useEffect(() => {
    if (!selectedSkill) return;
    const controller = new AbortController();
    setSkillDescription("");
    setDescriptionState("loading");

    fetch(`/api/skill-description/${selectedSkill.id}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error("Could not load skill description");
        return response.json();
      })
      .then(({description}) => {
        setSkillDescription(description);
        setDescriptionState("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setDescriptionState("error");
      });

    return () => controller.abort();
  }, [selectedSkill]);

  useEffect(() => {
    if (!selectedSkill) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedSkill(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedSkill]);

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
          {skills.map((skill, index) => {
            const skillId = skillIconIds[slug][index + (skillType === "passive" ? detail.active.length : 0)];
            return (
            <button className="classSkillItem" type="button" key={skill} onClick={() => setSelectedSkill({name: skill, id: skillId, type: skillType})} aria-label={`Ver qué hace ${skill}`}>
              <img className={`classSkillIcon${skill === "Survival Willpower" ? " isSurvivalWillpower" : ""}`} src={`https://aion2hub.com/api/skill-icon/${skillId}`} alt="" aria-hidden="true" loading="lazy" />
              <span className="classSkillName">{skill}</span>
            </button>
          )})}
        </div>
        <p className="classDataNote">Lista de habilidades Global · Launch Scale Test · 19 sep 2026</p>
      </section>

      {selectedSkill && <div className="skillModalBackdrop" onClick={(event) => { if (event.target === event.currentTarget) setSelectedSkill(null); }}>
        <section className="skillModal" role="dialog" aria-modal="true" aria-labelledby="skillModalTitle" aria-describedby="skillModalDescription">
          <button className="skillModalClose" type="button" onClick={() => setSelectedSkill(null)} aria-label="Cerrar descripción"><X aria-hidden="true" /></button>
          <span className="skillModalEyebrow">{selected.name} · {selectedSkill.type === "active" ? "HABILIDAD ACTIVA" : "HABILIDAD PASIVA"}</span>
          <h2 id="skillModalTitle">{selectedSkill.name}</h2>
          <div className="skillModalDivider" />
          <p id="skillModalDescription" className={`skillModalDescription is${descriptionState}`}>
            {descriptionState === "loading" && "Cargando descripción…"}
            {descriptionState === "ready" && skillDescription}
            {descriptionState === "error" && "No se pudo cargar la descripción en este momento. Inténtalo de nuevo."}
          </p>
          {descriptionState === "ready" && <small className="skillModalSource">Descripción de habilidad · Datos Global</small>}
        </section>
      </div>}

      {!onSelectClass && <nav className="classDetailNav" aria-label="Navegación entre clases">
        {classList.map(({name, slug: classSlug}) => <Link key={classSlug} className={classSlug === slug ? "current" : ""} href={`/classes/${classSlug}`}>{name}</Link>)}
      </nav>}
    </div>
  );
}
