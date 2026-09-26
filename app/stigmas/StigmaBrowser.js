"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {ArrowLeft, Sparkles, X} from "lucide-react";
import {classList, emblemBase} from "../classes/classData";
import {stigmaCatalog, stigmaCatalogSource} from "./stigmaData";

function skillStats(levelData, fallbackStats = []) {
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
  if (damage) stats.push({label: "Damage", value: damage});
  if (healing) stats.push({label: "Healing", value: healing});
  if (Number(levelData.cooldown) > 0) stats.push({label: "Cooldown", value: `${levelData.cooldown} sec`});
  if (Number(levelData.cost_mp) > 0) stats.push({label: "MP", value: String(levelData.cost_mp)});
  if (Number(levelData.cost_hp) > 0) stats.push({label: "HP", value: String(levelData.cost_hp)});
  if (Number(levelData.cost_dp) > 0) stats.push({label: "DP", value: String(levelData.cost_dp)});
  if (Number(levelData.casting_time) > 0) stats.push({label: "Cast Time", value: `${levelData.casting_time} sec`});
  return stats.length ? stats : fallbackStats;
}

export default function StigmaBrowser() {
  const [selectedSlug, setSelectedSlug] = useState("templar");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillInfo, setSkillInfo] = useState(null);
  const [skillState, setSkillState] = useState("idle");
  const [skillLevel, setSkillLevel] = useState(1);
  const selectedClass = classList.find(({slug}) => slug === selectedSlug) || classList[0];
  const skills = stigmaCatalog[selectedSlug] || [];
  const availableLevels = skillInfo?.levels?.map(({level}) => Number(level)).filter(Number.isFinite).sort((a,b) => a-b) || [];
  const minSkillLevel = availableLevels[0] || 1;
  const maxSkillLevel = availableLevels.at(-1) || Number(skillInfo?.details?.find(({label}) => label === "Max Level")?.value) || 1;
  const currentSkillLevel = skillInfo?.levels?.find(({level}) => Number(level) === skillLevel) || skillInfo?.levels?.[0];
  const currentDescription = skillInfo?.descriptionTemplate && currentSkillLevel
    ? skillInfo.descriptionTemplate.replace(/\{([^{}]+)\}/g, (_match, token) => currentSkillLevel.token_values?.[token] ?? "?").replace(/\\n/g, "\n")
    : skillInfo?.description?.replace(/\\n/g, "\n");
  const currentStats = skillStats(currentSkillLevel, skillInfo?.stats);

  useEffect(() => {
    if (!selectedSkill) return;
    const controller = new AbortController();
    setSkillInfo(null);
    setSkillState("loading");
    fetch(`/api/skill-description/${selectedSkill.id}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error("Could not load skill details");
        return response.json();
      })
      .then((info) => {
        setSkillInfo(info);
        setSkillLevel(Number(info?.levels?.[0]?.level) || 1);
        setSkillState("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setSkillState("error");
      });
    return () => controller.abort();
  }, [selectedSkill]);

  useEffect(() => {
    if (!selectedSkill) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => { if (event.key === "Escape") setSelectedSkill(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedSkill]);

  return (
    <main className="classPage classBrowsePage stigmaBrowsePage">
      <Link className="classBack" href="/?menu=open" aria-label="Back to the menu panel">
        <ArrowLeft aria-hidden="true" />
      </Link>

      <nav className="classGrid" aria-label="Choose a class to view Stigma skills">
        {classList.map(({name, slug, emblem}) => (
          <button
            className={`classIcon${selectedSlug === slug ? " isSelected" : ""}`}
            type="button"
            key={slug}
            onClick={() => setSelectedSlug(slug)}
            aria-label={`Show ${name} Stigma skills`}
            aria-pressed={selectedSlug === slug}
            title={`${name} Stigma skills`}
          >
            <span className="classEmblemCrop" aria-hidden="true">
              <img src={`${emblemBase}/${emblem}.webp`} alt="" />
            </span>
          </button>
        ))}
      </nav>

      <section className="classInlineContent stigmaInlineContent" aria-live="polite">
        <div className="stigmaClassPane">
          <header className="equipmentClassHeading stigmaHeading">
            <span className="classEyebrow">GAME · CLASS STIGMAS</span>
            <h1>{selectedClass.name}</h1>
            <p>Stigma skills shown for this class.</p>
          </header>

          <aside className="stigmaSourceNotice">
            <Sparkles aria-hidden="true" />
            <p><strong>Unofficial Taiwan/Asia reference.</strong> This community catalog is a provisional starting point for Global. Its class lists have not been verified in the Global client, and English names are community translations.</p>
          </aside>

          <div className="stigmaSkillGrid" key={selectedSlug}>
            {skills.map((skill) => (
              <button className="stigmaSkillCard" type="button" key={`${selectedSlug}-${skill.id}`} onClick={() => setSelectedSkill(skill)} aria-label={`View ${skill.name} details`}>
                <span className="stigmaSkillIcon" aria-hidden="true">
                  <img src={`https://aion2hub.com/api/skill-icon/${skill.id}`} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                </span>
                <span className="stigmaSkillName">{skill.name}</span>
                <span className="stigmaSkillType">STIGMA</span>
              </button>
            ))}
          </div>

          <footer className="stigmaSourceLinks">
            <span>{stigmaCatalogSource.label}. Region: {stigmaCatalogSource.region} · Updated {stigmaCatalogSource.updatedAt}.</span>
            <span className="stigmaSourceAnchors">{stigmaCatalogSource.sources.map((label) => (
              <span key={label}>{label}</span>
            ))}</span>
          </footer>
        </div>
      </section>

      {selectedSkill && <div className="skillModalBackdrop" onClick={(event) => { if (event.target === event.currentTarget) setSelectedSkill(null); }}>
        <section className="skillModal stigmaDetailModal" role="dialog" aria-modal="true" aria-labelledby="stigmaModalTitle" aria-describedby="stigmaModalDescription">
          <button className="skillModalClose" type="button" onClick={() => setSelectedSkill(null)} aria-label="Close Stigma details"><X aria-hidden="true" /></button>
          <span className="skillModalEyebrow">{selectedClass.name} · STIGMA SKILL</span>
          <div className="skillModalSkillIdentity">
            <img src={`https://aion2hub.com/api/skill-icon/${selectedSkill.id}`} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} />
            <div><h2 id="stigmaModalTitle">{selectedSkill.name}</h2><span>Stigma skill</span></div>
          </div>
          <div className="skillModalDivider" />
          <p id="stigmaModalDescription" className={`skillModalDescription is${skillState}`}>
            {skillState === "loading" && "Loading skill details…"}
            {skillState === "ready" && currentDescription}
            {skillState === "error" && "Skill details are not available right now."}
          </p>
          {skillState === "ready" && skillInfo && <div className="skillModalData">
            {(skillInfo.requiredLevel || skillInfo.mastery) && <div className="skillModalBadges">
              {skillInfo.requiredLevel && <span>Required Level {skillInfo.requiredLevel}</span>}
              {skillInfo.mastery && <span>{skillInfo.mastery}</span>}
            </div>}
            {maxSkillLevel > 1 && <div className="skillLevelControl">
              <div className="skillLevelHeading"><label htmlFor="stigma-level">Skill Level</label><output htmlFor="stigma-level">{skillLevel} / {maxSkillLevel}</output></div>
              <input id="stigma-level" type="range" min={minSkillLevel} max={maxSkillLevel} value={skillLevel} onChange={(event) => {
                const requested = Number(event.target.value);
                const nearest = availableLevels.length ? availableLevels.reduce((best, level) => Math.abs(level-requested) < Math.abs(best-requested) ? level : best, availableLevels[0]) : requested;
                setSkillLevel(nearest);
              }} />
            </div>}
            {currentStats?.length > 0 && <div className="skillModalStats" aria-label={`Main values at level ${skillLevel}`}>
              {currentStats.map(({label, value}) => <div className="skillModalStat" key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}
            </div>}
            {skillInfo.properties && <p className="skillModalProperties">{skillInfo.properties}</p>}
            {skillInfo.specialties?.length > 0 && <section className="skillModalSection"><h3>Specialties</h3><ul className="skillModalList">
              {skillInfo.specialties.map((specialty, index) => <li className={skillLevel >= specialty.level ? "isUnlocked" : ""} key={`${specialty.level}-${index}`}><span className="skillModalLevel">Lv. {specialty.level}</span><span>{specialty.description}</span></li>)}
            </ul></section>}
            {skillInfo.details?.length > 0 && <section className="skillModalSection"><h3>Details</h3><dl className="skillModalDetails">
              {skillInfo.details.map(({label, value}) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl></section>}
            <small className="skillModalSource">Asia/Taiwan community data · Global values are not verified yet.</small>
          </div>}
        </section>
      </div>}
    </main>
  );
}
