"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {ArrowLeft, Crosshair, Shield, Sword, X} from "lucide-react";
import {classData, classList, emblemBase, skillIconIds} from "./classData";

function formatSkillDescription(template, levelData, fallback) {
  if (!template || !levelData?.token_values) return fallback;
  return template.replace(/\{([^{}]+)\}/g, (_match, token) => levelData.token_values[token] ?? "?");
}

function formatSkillStats(levelData, fallbackStats = []) {
  if (!levelData) return fallbackStats;
  const stats = [];
  const range = (min, max) => {
    if (min == null && max == null) return null;
    if (min == null) return String(max);
    if (max == null || String(min) === String(max)) return String(min);
    return `${min}–${max}`;
  };
  const damage = range(levelData.dmg_min, levelData.dmg_max);
  const healing = range(levelData.heal_min, levelData.heal_max);
  if (damage) stats.push({label: "Daño", value: damage});
  if (healing) stats.push({label: "Curación", value: healing});
  if (Number(levelData.cooldown) > 0) stats.push({label: "Enfriamiento", value: `${levelData.cooldown} s`});
  if (Number(levelData.cost_mp) > 0) stats.push({label: "Maná", value: String(levelData.cost_mp)});
  if (Number(levelData.cost_hp) > 0) stats.push({label: "Vida", value: String(levelData.cost_hp)});
  if (Number(levelData.cost_dp) > 0) stats.push({label: "DP", value: String(levelData.cost_dp)});
  if (Number(levelData.casting_time) > 0) stats.push({label: "Lanzamiento", value: `${levelData.casting_time} s`});
  return stats.length ? stats : fallbackStats;
}

export default function ClassInfo({slug, onSelectClass}) {
  const detail = classData[slug];
  const selected = classList.find((entry) => entry.slug === slug);
  const [skillType, setSkillType] = useState("active");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillInfo, setSkillInfo] = useState(null);
  const [descriptionState, setDescriptionState] = useState("idle");
  const [skillLevel, setSkillLevel] = useState(1);

  useEffect(() => {
    if (!selectedSkill) return;
    const controller = new AbortController();
    setSkillInfo(null);
    setDescriptionState("loading");

    fetch(`/api/skill-description/${selectedSkill.id}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error("Could not load skill description");
        return response.json();
      })
      .then((info) => {
        setSkillInfo(info);
        setSkillLevel(1);
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
  const maxSkillLevel = skillInfo?.levels?.length || Number(skillInfo?.details?.find(({label}) => label === "Nivel máximo")?.value) || 1;
  const currentSkillLevel = skillInfo?.levels?.find(({level}) => level === skillLevel) || skillInfo?.levels?.[0];
  const currentDescription = formatSkillDescription(skillInfo?.descriptionTemplate, currentSkillLevel, skillInfo?.description);
  const currentStats = formatSkillStats(currentSkillLevel, skillInfo?.stats);
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
        <style jsx global>{`.skillLevelControl{margin:0 0 14px;padding:11px 12px;border:1px solid #1c4055;border-radius:5px;background:#071521}.skillLevelHeading{display:flex;justify-content:space-between;gap:12px;margin-bottom:8px;color:#9bb7c4;font-size:10px;letter-spacing:.5px}.skillLevelHeading output{color:#70ddff;font-weight:700;font-variant-numeric:tabular-nums}.skillLevelControl input{display:block;width:100%;height:4px;margin:0;accent-color:#54d9ff;cursor:pointer}.skillModalList li{opacity:.62;transition:opacity .18s ease,color .18s ease}.skillModalList li.isUnlocked{opacity:1}.skillModalList li.isUnlocked .skillModalLevel{border-color:#2582a0;background:#0a2b3d;color:#8de8ff}`}</style>
        <section className="skillModal" role="dialog" aria-modal="true" aria-labelledby="skillModalTitle" aria-describedby="skillModalDescription">
          <button className="skillModalClose" type="button" onClick={() => setSelectedSkill(null)} aria-label="Cerrar descripción"><X aria-hidden="true" /></button>
          <span className="skillModalEyebrow">{selected.name} · {selectedSkill.type === "active" ? "HABILIDAD ACTIVA" : "HABILIDAD PASIVA"}</span>
          <h2 id="skillModalTitle">{selectedSkill.name}</h2>
          <div className="skillModalDivider" />
          <p id="skillModalDescription" className={`skillModalDescription is${descriptionState}`}>
            {descriptionState === "loading" && "Cargando descripción…"}
            {descriptionState === "ready" && currentDescription}
            {descriptionState === "error" && "No se pudo cargar la descripción en este momento. Inténtalo de nuevo."}
          </p>
          {descriptionState === "ready" && skillInfo && <div className="skillModalData">
            {(skillInfo.requiredLevel || skillInfo.mastery) && <div className="skillModalBadges">
              {skillInfo.requiredLevel && <span>Nivel requerido {skillInfo.requiredLevel}</span>}
              {skillInfo.mastery && <span>{skillInfo.mastery === "Mastery" ? "Maestría" : skillInfo.mastery}</span>}
            </div>}
            {maxSkillLevel > 1 && <div className="skillLevelControl">
              <div className="skillLevelHeading"><label htmlFor="skill-level">Nivel de habilidad</label><output htmlFor="skill-level">{skillLevel} / {maxSkillLevel}</output></div>
              <input id="skill-level" type="range" min="1" max={maxSkillLevel} value={skillLevel} onChange={(event) => setSkillLevel(Number(event.target.value))} />
            </div>}
            {currentStats?.length > 0 && <div className="skillModalStats" aria-label={`Valores principales en nivel ${skillLevel}`}>
              {currentStats.map(({label, value}) => <div className="skillModalStat" key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}
            </div>}
            {skillInfo.properties && <p className="skillModalProperties">{skillInfo.properties}</p>}
            {skillInfo.specialties?.length > 0 && <section className="skillModalSection">
              <h3>Especializaciones</h3>
              <ul className="skillModalList">
                {skillInfo.specialties.map((specialty, index) => <li className={skillLevel >= specialty.level ? "isUnlocked" : ""} key={`${specialty.level}-${index}`}><span className="skillModalLevel">Nv. {specialty.level}</span><span>{specialty.description}</span></li>)}
              </ul>
            </section>}
            {skillInfo.chain?.length > 1 && <section className="skillModalSection">
              <h3>Cadena de habilidades</h3>
              <ol className="skillModalChain">{skillInfo.chain.map((entry) => <li key={`${entry.name}-${entry.step}`}><span>{entry.step}</span>{entry.name}</li>)}</ol>
            </section>}
            {skillInfo.details?.length > 0 && <section className="skillModalSection">
              <h3>Detalles</h3>
              <dl className="skillModalDetails">
                {skillInfo.details.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value === "Active" ? "Activa" : value === "Passive" ? "Pasiva" : value === "Physical" ? "Físico" : value === "Magical" ? "Mágico" : value}</dd></div>)}
              </dl>
            </section>}
            <small className="skillModalSource">Datos Global de habilidades</small>
          </div>}
        </section>
      </div>}

      {!onSelectClass && <nav className="classDetailNav" aria-label="Navegación entre clases">
        {classList.map(({name, slug: classSlug}) => <Link key={classSlug} className={classSlug === slug ? "current" : ""} href={`/classes/${classSlug}`}>{name}</Link>)}
      </nav>}
    </div>
  );
}
