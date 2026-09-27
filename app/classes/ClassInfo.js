"use client";

import Link from "next/link";
import {useEffect, useMemo, useState} from "react";
import {Activity, ArrowRight, Clock3, Droplet, Flame, Heart, Search, Shield, Sparkles, Swords, Timer} from "lucide-react";
import {classData, classList, skillIconIds} from "./classData";

const regularSkillCount = 13;
const skillClassOrder = ["gladiator", "templar", "assassin", "ranger", "sorcerer", "spiritmaster", "cleric", "chanter"];
const skillClasses = skillClassOrder.map((slug) => classList.find((entry) => entry.slug === slug)).filter(Boolean);
const skillFilters = [
  {id: "all", label: "All", Icon: Sparkles},
  {id: "active", label: "Active", Icon: Swords},
  {id: "stigma", label: "Stigma", Icon: Flame},
  {id: "passive", label: "Passive", Icon: Shield},
];

function skillIconUrl(id) {
  if (id === "18790000") return "https://aion2.app/db-item-icons/ICON_GL_SKILL_Passive_009.webp";
  return "https://aion2hub.com/api/skill-icon/" + id;
}

function getClassSkills(slug) {
  const detail = classData[slug];
  const icons = skillIconIds[slug] || [];
  if (!detail) return [];

  const groups = [
    {type: "active", names: detail.active.slice(0, regularSkillCount), offset: 0},
    {type: "stigma", names: detail.active.slice(regularSkillCount), offset: regularSkillCount},
    {type: "passive", names: detail.passive, offset: detail.active.length},
  ];

  return groups.flatMap(({type, names, offset}) =>
    names.map((name, index) => {
      const id = icons[offset + index] || "";
      return {name, id, type, key: [type, id, name].join(":")};
    })
  );
}

function formatSkillDescription(template, levelData, fallback) {
  const plainFallback = fallback ? fallback.replace(/\\n/g, "\n").trim() : "";
  if (!template || !levelData?.token_values) return plainFallback;

  let missingValue = false;
  const description = template.replace(/\{([^{}]+)\}/g, (_match, token) => {
    const value = levelData.token_values[token];
    if (value === null || value === undefined || value === "") {
      missingValue = true;
      return "";
    }
    return String(value);
  }).replace(/\\n/g, "\n").trim();

  return missingValue ? plainFallback : description;
}

function formatSkillStats(levelData, fallbackStats = []) {
  const rows = [];
  const add = (label, value, Icon) => {
    if (value === null || value === undefined || String(value).trim() === "") return;
    rows.push({label, value: String(value), Icon});
  };
  const present = (value) => value !== null && value !== undefined && value !== "";

  if (levelData) {
    if (present(levelData.dmg_min)) add("Min Damage", levelData.dmg_min, Swords);
    if (present(levelData.dmg_max)) add("Max Damage", levelData.dmg_max, Swords);
    if (present(levelData.heal_min)) add("Min Healing", levelData.heal_min, Heart);
    if (present(levelData.heal_max)) add("Max Healing", levelData.heal_max, Heart);
    if (Number(levelData.cooldown) > 0) add("Cooldown", levelData.cooldown + " sec", Clock3);
    if (Number(levelData.cost_mp) > 0) add("MP Cost", levelData.cost_mp, Droplet);
    if (Number(levelData.cost_hp) > 0) add("HP Cost", levelData.cost_hp, Heart);
    if (Number(levelData.cost_dp) > 0) add("DP Cost", levelData.cost_dp, Sparkles);
    if (present(levelData.casting_time)) {
      const castingTime = Number(levelData.casting_time);
      add("Casting Time", castingTime === 0 ? "Instant" : levelData.casting_time + " sec", Timer);
    }
  }

  if (rows.length) return rows;
  return fallbackStats.map(({label, value}) => {
    const normalized = String(label).toLowerCase();
    const Icon = normalized.includes("heal") || normalized === "hp" ? Heart
      : normalized === "mp" ? Droplet
      : normalized.includes("cooldown") ? Clock3
      : normalized.includes("cast") ? Timer
      : normalized.includes("damage") ? Swords
      : Activity;
    return {label, value, Icon};
  });
}

function SkillIcon({skill, size = "tile"}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={"classSkillIconBox is" + size} aria-hidden="true">
      {failed || !skill?.id
        ? <Sparkles className="classSkillIconFallback" aria-hidden="true"/>
        : <img src={skillIconUrl(skill.id)} alt="" loading="lazy" onError={() => setFailed(true)}/>}
    </span>
  );
}

function getSkillTypeLabel(type) {
  return type === "stigma" ? "Stigma" : type === "passive" ? "Passive" : "Active";
}

export default function ClassInfo({slug, onSelectClass}) {
  const detail = classData[slug];
  const selectedClass = classList.find((entry) => entry.slug === slug);
  const allSkills = useMemo(() => getClassSkills(slug), [slug]);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedSkillKey, setSelectedSkillKey] = useState(() => getClassSkills(slug)[0]?.key || "");
  const [skillInfo, setSkillInfo] = useState(null);
  const [descriptionState, setDescriptionState] = useState("idle");
  const [skillLevel, setSkillLevel] = useState(1);
  const [requestVersion, setRequestVersion] = useState(0);

  useEffect(() => {
    setQuery("");
    setActiveFilter("all");
    setSelectedSkillKey(getClassSkills(slug)[0]?.key || "");
    setSkillLevel(1);
  }, [slug]);

  const filteredSkills = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allSkills.filter((skill) =>
      (activeFilter === "all" || skill.type === activeFilter)
      && (!normalizedQuery || skill.name.toLowerCase().includes(normalizedQuery))
    );
  }, [allSkills, activeFilter, query]);

  useEffect(() => {
    if (!filteredSkills.length) {
      if (selectedSkillKey) setSelectedSkillKey("");
      return;
    }
    if (!filteredSkills.some((skill) => skill.key === selectedSkillKey)) {
      setSelectedSkillKey(filteredSkills[0].key);
    }
  }, [filteredSkills, selectedSkillKey]);

  const selectedSkill = allSkills.find((skill) => skill.key === selectedSkillKey) || null;

  useEffect(() => {
    if (!selectedSkill?.id) {
      setSkillInfo(null);
      setDescriptionState("idle");
      return;
    }

    const controller = new AbortController();
    setSkillInfo(null);
    setDescriptionState("loading");
    setSkillLevel(1);

    fetch("/api/skill-description/" + selectedSkill.id, {signal: controller.signal})
      .then(async (response) => {
        const info = await response.json();
        if (!response.ok) throw new Error(info.error || "Could not load skill details");
        return info;
      })
      .then((info) => {
        setSkillInfo(info);
        setSkillLevel(Number(info?.levels?.[0]?.level) || 1);
        setDescriptionState("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setDescriptionState("error");
      });

    return () => controller.abort();
  }, [selectedSkill?.id, requestVersion]);

  if (!selectedClass || !detail) return null;

  const maxLevelDetail = skillInfo?.details?.find(({label}) => /max level/i.test(label))?.value;
  const maxLevelFromDetail = Number(String(maxLevelDetail || "").match(/\d+/)?.[0] || 0);
  const maxLevelFromData = Math.max(0, ...(skillInfo?.levels || []).map(({level}) => Number(level) || 0));
  const availableSkillLevels = (skillInfo?.levels || []).map(({level}) => Number(level)).filter(Number.isFinite).sort((a, b) => a - b);
  const minSkillLevel = availableSkillLevels[0] || 1;
  const maxSkillLevel = availableSkillLevels.length
    ? Math.max(minSkillLevel, maxLevelFromData)
    : Math.max(minSkillLevel, maxLevelFromDetail);
  const currentSkillLevel = skillInfo?.levels?.find(({level}) => Number(level) === skillLevel) || skillInfo?.levels?.[0] || null;
  const currentDescription = formatSkillDescription(skillInfo?.descriptionTemplate, currentSkillLevel, skillInfo?.description);
  const currentStats = formatSkillStats(currentSkillLevel, skillInfo?.stats);
  const relatedSkills = (skillInfo?.chain || []).filter((entry) =>
    entry.name && entry.name.toLowerCase() !== selectedSkill?.name.toLowerCase() && entry.id !== selectedSkill?.id
  );
  const detailRows = (skillInfo?.details || []).filter(({label}) => !/max level|required level/i.test(label));
  const activeCount = allSkills.filter((skill) => skill.type === "active").length;
  const stigmaCount = allSkills.filter((skill) => skill.type === "stigma").length;
  const passiveCount = allSkills.filter((skill) => skill.type === "passive").length;
  const filterCounts = {all: allSkills.length, active: activeCount, stigma: stigmaCount, passive: passiveCount};

  return (
    <div className="classSkillExperience">
      <header className="classSkillTopbar">
        <div className="classSkillPageTitle">
          <span>DAEVEXUS · DATABASE</span>
          <h1>Skills</h1>
        </div>
        <nav className="classSkillClassTabs" aria-label="Choose a class">
          {skillClasses.map((classEntry) => onSelectClass
            ? <button
                className={"classSkillClassTab" + (classEntry.slug === slug ? " isSelected" : "")}
                type="button"
                key={classEntry.slug}
                onClick={() => onSelectClass(classEntry.slug)}
                aria-pressed={classEntry.slug === slug}
              >{classEntry.name}</button>
            : <Link
                className={"classSkillClassTab" + (classEntry.slug === slug ? " isSelected" : "")}
                href={"/classes/" + classEntry.slug}
                key={classEntry.slug}
                aria-current={classEntry.slug === slug ? "page" : undefined}
              >{classEntry.name}</Link>
          )}
        </nav>
      </header>

      <div className="classSkillPanels">
        <section className="classSkillCatalog" aria-label={selectedClass.name + " skill catalog"}>
          <div className="classSkillCatalogHead">
            <div className="classSkillCatalogTitle">
              <span>SKILLS · GLOBAL</span>
              <h2>{selectedClass.name} Skills</h2>
            </div>
            <b className="classSkillResultCount">{filteredSkills.length}<small> / {allSkills.length}</small></b>
            <label className="classSkillSearch">
              <Search aria-hidden="true"/>
              <input
                type="search"
                aria-label="Search skills by name"
                placeholder="Search skills…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>

          <div className="classSkillCatalogBody">
            <div className="classSkillFilters" role="group" aria-label="Filter skills by type">
              {skillFilters.map(({id, label, Icon}) => (
                <button
                  type="button"
                  aria-pressed={activeFilter === id}
                  className={"classSkillFilter" + (activeFilter === id ? " isActive" : "")}
                  key={id}
                  onClick={() => setActiveFilter(id)}
                >
                  <Icon aria-hidden="true"/>
                  <span>{label}</span>
                  <small>{filterCounts[id]}</small>
                </button>
              ))}
            </div>

            <div className="classSkillGrid" aria-label={activeFilter + " skills"}>
              {filteredSkills.map((skill) => (
                <button
                  type="button"
                  className={"classSkillTile" + (selectedSkillKey === skill.key ? " isSelected" : "")}
                  key={skill.key}
                  onClick={() => setSelectedSkillKey(skill.key)}
                  aria-label={"Show " + skill.name + " details"}
                  aria-pressed={selectedSkillKey === skill.key}
                >
                  <SkillIcon skill={skill}/>
                  <span className="classSkillTileName">{skill.name}</span>
                  <small>{getSkillTypeLabel(skill.type)}</small>
                </button>
              ))}
              {!filteredSkills.length && <p className="classSkillNoMatches" role="status">No skills match your search.</p>}
            </div>
          </div>

          <p className="classSkillCatalogNote">Global skill list · values depend on skill level and current data.</p>
        </section>

        <aside className="classSkillDetailsPanel" aria-label="Selected skill details" aria-live="polite" aria-busy={descriptionState === "loading"}>
          {!selectedSkill ? (
            <div className="classSkillDetailEmpty">
              <Sparkles aria-hidden="true"/>
              <h2>No skill selected</h2>
              <p>Choose a skill from the grid to see its details.</p>
            </div>
          ) : (
            <>
              <header className="classSkillDetailsHead">
                <SkillIcon skill={selectedSkill} size="large"/>
                <div className="classSkillDetailsTitle">
                  <span>SKILL DETAILS · {getSkillTypeLabel(selectedSkill.type).toUpperCase()}</span>
                  <h2>{selectedSkill.name}</h2>
                  <div className="classSkillBadges">
                    {skillInfo?.requiredLevel && <span>Required Lv. {skillInfo.requiredLevel}</span>}
                    {skillInfo?.mastery && <span>{skillInfo.mastery}</span>}
                    {skillInfo?.category && <span>{skillInfo.category}</span>}
                  </div>
                </div>
              </header>

              <div className={"classSkillDescription is" + descriptionState} id="class-skill-description">
                {descriptionState === "loading" && <p>Loading skill details…</p>}
                {descriptionState === "ready" && <p>{currentDescription || "No description is available for this skill."}</p>}
                {descriptionState === "error" && (
                  <div className="classSkillLoadError">
                    <p>Skill details could not be loaded.</p>
                    <button type="button" onClick={() => setRequestVersion((version) => version + 1)}>Try again</button>
                  </div>
                )}
              </div>

              {descriptionState === "ready" && skillInfo && (
                <div className="classSkillDetailContent">
                  {maxSkillLevel > 1 && (
                    <section className="classSkillLevelControl" aria-label="Skill level">
                      <div className="classSkillLevelHeading">
                        <label htmlFor="class-skill-level">Skill Level</label>
                        <output htmlFor="class-skill-level">Lv. {skillLevel} / {maxSkillLevel}</output>
                      </div>
                      <div className="classSkillLevelRow">
                        <button type="button" aria-label="Decrease skill level" disabled={skillLevel <= minSkillLevel} onClick={() => setSkillLevel((level) => Math.max(minSkillLevel, level - 1))}>−</button>
                        <input
                          id="class-skill-level"
                          type="range"
                          min={minSkillLevel}
                          max={maxSkillLevel}
                          step="1"
                          value={Math.min(skillLevel, maxSkillLevel)}
                          onChange={(event) => setSkillLevel(Number(event.target.value))}
                          aria-describedby="class-skill-description"
                        />
                        <button type="button" aria-label="Increase skill level" disabled={skillLevel >= maxSkillLevel} onClick={() => setSkillLevel((level) => Math.min(maxSkillLevel, level + 1))}>+</button>
                      </div>
                    </section>
                  )}

                  {currentStats.length > 0 ? (
                    <section className="classSkillStats" aria-label={"Values at level " + skillLevel}>
                      {currentStats.map(({label, value, Icon}) => (
                        <div className="classSkillStatRow" key={label}>
                          <Icon aria-hidden="true"/>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </section>
                  ) : (
                    <p className="classSkillNoStats">No numeric values are listed for this skill.</p>
                  )}

                  {skillInfo.properties && <p className="classSkillProperties">{skillInfo.properties}</p>}

                  {skillInfo.specialties?.length > 0 && (
                    <section className="classSkillSupplement">
                      <h3>Specialties</h3>
                      <ul className="classSkillSpecialties">
                        {skillInfo.specialties.map((specialty, index) => (
                          <li className={skillLevel >= specialty.level ? "isUnlocked" : ""} key={String(specialty.level) + "-" + index}>
                            <span>Lv. {specialty.level}</span>
                            <p>{specialty.description}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {detailRows.length > 0 && (
                    <section className="classSkillSupplement">
                      <h3>Details</h3>
                      <dl className="classSkillDetailsList">
                        {detailRows.map(({label, value}) => (
                          <div key={label + "-" + value}><dt>{label}</dt><dd>{value}</dd></div>
                        ))}
                      </dl>
                    </section>
                  )}

                  {relatedSkills.length > 0 && (
                    <section className="classSkillSupplement">
                      <h3>Related Skills</h3>
                      <div className="classSkillRelatedList">
                        {relatedSkills.map((entry) => (
                          <div className="classSkillRelatedItem" key={entry.id || entry.name}>
                            <SkillIcon skill={{id: entry.id, name: entry.name}} size="related"/>
                            <div><strong>{entry.name}</strong>{entry.step && <small>{entry.step}</small>}</div>
                            <ArrowRight aria-hidden="true"/>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <small className="classSkillDataSource">Global skill reference data</small>
                </div>
              )}
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
