"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {ArrowLeft, Crosshair, Shield, Sword, X} from "lucide-react";
import {classData, classList, emblemBase, skillIconIds} from "./classData";

function formatSkillDescription(template, levelData, fallback) {
  if (!template || !levelData?.token_values) return fallback?.replace(/\\n/g, "\n");
  return template.replace(/\{([^{}]+)\}/g, (_match, token) => levelData.token_values[token] ?? "?").replace(/\\n/g, "\n");
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
  if (damage) stats.push({label: "Damage", value: damage});
  if (healing) stats.push({label: "Healing", value: healing});
  if (Number(levelData.cooldown) > 0) stats.push({label: "Cooldown", value: `${levelData.cooldown} sec`});
  if (Number(levelData.cost_mp) > 0) stats.push({label: "MP", value: String(levelData.cost_mp)});
  if (Number(levelData.cost_hp) > 0) stats.push({label: "HP", value: String(levelData.cost_hp)});
  if (Number(levelData.cost_dp) > 0) stats.push({label: "DP", value: String(levelData.cost_dp)});
  if (Number(levelData.casting_time) > 0) stats.push({label: "Cast Time", value: `${levelData.casting_time} sec`});
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
  const maxSkillLevel = skillInfo?.levels?.length || Number(skillInfo?.details?.find(({label}) => label === "Max Level")?.value) || 1;
  const currentSkillLevel = skillInfo?.levels?.find(({level}) => level === skillLevel) || skillInfo?.levels?.[0];
  const currentDescription = formatSkillDescription(skillInfo?.descriptionTemplate, currentSkillLevel, skillInfo?.description);
  const currentStats = formatSkillStats(currentSkillLevel, skillInfo?.stats);
  return (
    <div className="classInfoPanel">
      {!onSelectClass && <Link className="classBreadcrumb" href="/classes">CLASSES <span>/</span> {selected.name.toUpperCase()}</Link>}

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

      <section className="classSkills" aria-label="Global class skills">
        <div className="classSkillsHeading" aria-hidden="true" />
        <div className="classSkillTabs" role="tablist" aria-label="Skill type">
          <button type="button" role="tab" aria-selected={skillType === "active"} className={skillType === "active" ? "isSelected" : ""} onClick={() => setSkillType("active")}>Active <span>{detail.active.length}</span></button>
          <button type="button" role="tab" aria-selected={skillType === "passive"} className={skillType === "passive" ? "isSelected" : ""} onClick={() => setSkillType("passive")}>Passive <span>{detail.passive.length}</span></button>
        </div>
        <div className="classSkillGrid" role="tabpanel">
          {skills.map((skill, index) => {
            const skillId = skillIconIds[slug][index + (skillType === "passive" ? detail.active.length : 0)];
            return (
            <button className="classSkillItem" type="button" key={skill} onClick={() => setSelectedSkill({name: skill, id: skillId, type: skillType})} aria-label={`View ${skill} details`}>
              <img className={`classSkillIcon${skill === "Survival Willpower" ? " isSurvivalWillpower" : ""}`} src={`https://aion2hub.com/api/skill-icon/${skillId}`} alt="" aria-hidden="true" loading="lazy" />
              <span className="classSkillName">{skill}</span>
            </button>
          )})}
        </div>
        <p className="classDataNote">Global skill list · Launch Scale Test · Sep 19, 2026</p>
      </section>

      {selectedSkill && <div className="skillModalBackdrop" onClick={(event) => { if (event.target === event.currentTarget) setSelectedSkill(null); }}>
        <style jsx global>{`.skillModal{width:min(760px,calc(100vw - 28px))!important;max-height:min(96svh,1100px)!important;padding:58px clamp(22px,5vw,38px) 30px!important;scrollbar-width:none;-ms-overflow-style:none}.skillModal::-webkit-scrollbar{display:none}.skillModalClose{top:14px!important;right:14px!important;z-index:2;width:38px;height:38px}.skillModal.hasSkillChain{width:min(1040px,calc(100vw - 32px))!important;max-height:min(98svh,1300px)!important}.skillModalData{margin-top:24px!important}.skillModalBadges{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 17px}.skillModalBadges span{padding:6px 10px;border:1px solid #24546b;border-radius:4px;background:#071725;color:#9fd8e9;font-size:10px;letter-spacing:.25px}.skillModalStats{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:8px;margin:0 0 16px}.skillModalStat{display:flex;flex-direction:column;gap:6px;padding:10px 11px;border:1px solid #1c4055;border-radius:5px;background:#071521}.skillModalStat span{color:#88a3b1;font-size:9px;letter-spacing:.8px;text-transform:uppercase}.skillModalStat strong{color:#d8f7ff;font-size:15px;font-weight:650}.skillModalProperties{display:inline-flex;margin:0 0 15px;padding:7px 10px;border:1px solid #24546b;border-radius:4px;background:#071725;color:#9fd8e9;font-size:11px;line-height:1.5}.skillModalSection{margin-top:17px;padding-top:14px;border-top:1px solid #19384c}.skillModalSection h3{margin:0 0 10px;color:#75dfff;font-size:10px;letter-spacing:1.6px;text-transform:uppercase}.skillModalList{display:grid;gap:8px;margin:0;padding:0;list-style:none}.skillModalList li{display:grid;grid-template-columns:54px minmax(0,1fr);align-items:start;gap:10px;color:#c0d2dc;font-size:12px;line-height:1.55}.skillModalLevel{padding:4px 6px;border:1px solid #244d62;border-radius:4px;color:#73dfff;font-size:9px;text-align:center;white-space:nowrap}.skillModalSource{display:block;margin-top:22px;color:#7893a2;font-size:9px;letter-spacing:.6px}.skillModalDetails{grid-template-columns:repeat(2,minmax(0,1fr))!important}.skillModalDetails>div{display:grid!important;grid-template-columns:minmax(90px,.8fr) minmax(0,1fr);align-items:baseline;gap:8px}.skillModalDetails dt{white-space:nowrap}.skillModalDetails dd{overflow-wrap:anywhere}.skillModalData{margin-top:24px!important}.skillModalBadges{margin-bottom:17px!important}.skillModalChain{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0}.skillModalChainItem{display:flex;align-items:center;gap:9px;min-width:0;padding:7px 10px;border:1px solid #1d4055;border-radius:5px;background:#071521}.skillModalChainItem img{width:34px;height:34px;flex:none;object-fit:contain;border:1px solid #234d63;border-radius:5px;background:#06111d}.skillModalChainItem span{color:#ccdde4;font-size:12px;line-height:1.35}.skillModalSkillIdentity{display:flex;align-items:center;gap:12px;margin:0 0 16px;padding:10px 12px;border:1px solid #1c4055;border-radius:6px;background:#071521}.skillModalSkillIdentity img{width:48px;height:48px;flex:none;object-fit:cover;border:1px solid #327b96;border-radius:7px;background:#06111d}.skillModalSkillIdentity h2{margin:0!important;color:#eef8fc!important;font:400 24px/1.2 Georgia,"Times New Roman",serif!important}.skillModalSkillIdentity span{display:block;margin-top:4px;color:#79a2b5;font-size:9px;letter-spacing:1px;text-transform:uppercase}.skillLevelControl{margin:18px 0 20px;padding:15px 16px;border:1px solid #1c4055;border-radius:5px;background:#071521}.skillLevelHeading{display:flex;justify-content:space-between;gap:12px;margin-bottom:13px;line-height:1.5;color:#9bb7c4;font-size:10px;letter-spacing:.5px}.skillLevelHeading output{color:#70ddff;font-weight:700;font-variant-numeric:tabular-nums}.skillLevelControl input{display:block;width:100%;height:8px;margin:0;accent-color:#54d9ff;cursor:pointer}.skillModalList li{opacity:.62;transition:opacity .18s ease,color .18s ease}.skillModalList li.isUnlocked{opacity:1}.skillModalList li.isUnlocked .skillModalLevel{border-color:#2582a0;background:#0a2b3d;color:#8de8ff}@media(max-width:520px){.skillModalDetails{grid-template-columns:1fr!important}.skillModal{width:calc(100vw - 20px)!important;max-height:92svh!important;padding:56px 22px 24px!important}.skillModal.hasSkillChain{width:calc(100vw - 16px)!important;max-height:96svh!important}.skillModalDetails>div{grid-template-columns:minmax(88px,.72fr) minmax(0,1fr)}}`}</style>
        <section className={`skillModal${skillInfo?.chain?.length > 1 ? " hasSkillChain" : ""}`} role="dialog" aria-modal="true" aria-labelledby="skillModalTitle" aria-describedby="skillModalDescription">
          <button className="skillModalClose" type="button" onClick={() => setSelectedSkill(null)} aria-label="Close skill details"><X aria-hidden="true" /></button>
          <span className="skillModalEyebrow">{selected.name} · {selectedSkill.type === "active" ? "ACTIVE SKILL" : "PASSIVE SKILL"}</span>
          <div className="skillModalSkillIdentity">
            <img src={`https://aion2hub.com/api/skill-icon/${selectedSkill.id}`} alt={`Icono de ${selectedSkill.name}`} />
            <div><h2 id="skillModalTitle">{selectedSkill.name}</h2><span>{selectedSkill.type === "active" ? "Active skill" : "Passive skill"}</span></div>
          </div>
          <div className="skillModalDivider" />
          <p id="skillModalDescription" className={`skillModalDescription is${descriptionState}`}>
            {descriptionState === "loading" && "Loading skill details…"}
            {descriptionState === "ready" && currentDescription}
            {descriptionState === "error" && "Could not load skill details right now. Please try again."}
          </p>
          {descriptionState === "ready" && skillInfo && <div className="skillModalData">
            {(skillInfo.requiredLevel || skillInfo.mastery) && <div className="skillModalBadges">
              {skillInfo.requiredLevel && <span>Required Level {skillInfo.requiredLevel}</span>}
              {skillInfo.mastery && <span>{skillInfo.mastery}</span>}
            </div>}
            {maxSkillLevel > 1 && <div className="skillLevelControl">
              <div className="skillLevelHeading"><label htmlFor="skill-level">Skill Level</label><output htmlFor="skill-level">{skillLevel} / {maxSkillLevel}</output></div>
              <input id="skill-level" type="range" min="1" max={maxSkillLevel} value={skillLevel} onChange={(event) => setSkillLevel(Number(event.target.value))} />
            </div>}
            {currentStats?.length > 0 && <div className="skillModalStats" aria-label={`Valores principales en nivel ${skillLevel}`}>
              {currentStats.map(({label, value}) => <div className="skillModalStat" key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}
            </div>}
            {skillInfo.properties && <p className="skillModalProperties">{skillInfo.properties}</p>}
            {skillInfo.specialties?.length > 0 && <section className="skillModalSection">
              <h3>Specialties</h3>
              <ul className="skillModalList">
                {skillInfo.specialties.map((specialty, index) => <li className={skillLevel >= specialty.level ? "isUnlocked" : ""} key={`${specialty.level}-${index}`}><span className="skillModalLevel">Lv. {specialty.level}</span><span>{specialty.description}</span></li>)}
              </ul>
            </section>}
            {skillInfo.chain?.length > 1 && <section className="skillModalSection">
              <h3>Skill Chain</h3>
              <div className="skillModalChain" role="list">{skillInfo.chain.map((entry) => <div className="skillModalChainItem" role="listitem" key={`${entry.name}-${entry.id || entry.name}`}>{entry.icon && <img src={entry.icon} alt="" loading="lazy" />}<span>{entry.name}</span></div>)}</div>
            </section>}
            {skillInfo.details?.length > 0 && <section className="skillModalSection">
              <h3>Details</h3>
              <dl className="skillModalDetails">
                {skillInfo.details.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
            </section>}
            <small className="skillModalSource">Global skill data</small>
          </div>}
        </section>
      </div>}

      {!onSelectClass && <nav className="classDetailNav" aria-label="Browse classes">
        {classList.map(({name, slug: classSlug}) => <Link key={classSlug} className={classSlug === slug ? "current" : ""} href={`/classes/${classSlug}`}>{name}</Link>)}
      </nav>}
    </div>
  );
}
