"use client";

import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {ArrowLeft, BookOpen, Search, Sparkles, X, ChevronRight, Gem, Feather, PawPrint} from "lucide-react";
import {classData, classList, skillIconIds} from "../classes/classData";
import {stigmaCatalog, stigmaCatalogSource} from "../stigmas/stigmaData";
import catalogData from "../progression/catalogData.json";
import styles from "./encyclopedia.module.css";

const filters = [
  {id: "all", label: "All entries"},
  {id: "active", label: "Active"},
  {id: "passive", label: "Passive"},
  {id: "stigma", label: "Stigmas"},
  {id: "wings", label: "Wings"},
  {id: "pets", label: "Pets"},
];
const PAGE_SIZE = 48;

function makeEntries() {
  const classEntries = classList.flatMap(({name: className, slug}) => {
    const classSkills = classData[slug];
    const active = classSkills.active.map((skillName, index) => ({
      id: skillIconIds[slug][index], name: skillName, className, slug, type: "active",
      region: "Global",
    }));
    const passive = classSkills.passive.map((skillName, index) => ({
      id: skillIconIds[slug][classSkills.active.length + index], name: skillName, className, slug, type: "passive",
      region: "Global",
    }));
    const stigmas = stigmaCatalog[slug].map((skill) => ({
      ...skill, className, slug, type: "stigma", region: "Asia / Taiwan",
    }));
    return [...active, ...passive, ...stigmas];
  });
  return [
    ...classEntries,
    ...catalogData.wings.map((wing)=>({id:wing.id,name:wing.name,className:`${wing.grade} · ${wing.faction}${wing.enhancementCap?` · Enchant +${wing.enhancementCap}`:""}`,type:"wings",region:"Community reference",href:"/wings"})),
    ...catalogData.pets.map((pet)=>({id:pet.id,name:pet.name,className:`Pet · ${pet.genus}`,type:"pets",region:"Community reference",href:"/pets"})),
  ];
}

function getDescription(info, levelData) {
  if (info?.descriptionTemplate && levelData?.token_values) {
    return info.descriptionTemplate
      .replace(/\{([^{}]+)\}/g, (_match, token) => levelData.token_values[token] ?? "?")
      .replace(/\\n/g, "\n");
  }
  return info?.description?.replace(/\\n/g, "\n") || "";
}

function getStats(levelData, fallbackStats = []) {
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

function EntryModal({entry, onClose}) {
  const [info, setInfo] = useState(null);
  const [state, setState] = useState("loading");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    setInfo(null);
    setState("loading");
    fetch(`/api/skill-description/${entry.id}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error("Could not load entry details");
        return response.json();
      })
      .then((result) => { setInfo(result); setLevel(1); setState("ready"); })
      .catch((error) => { if (error.name !== "AbortError") setState("error"); });
    return () => controller.abort();
  }, [entry]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  const maxLevel = info?.levels?.length || Number(info?.details?.find(({label}) => label === "Max Level")?.value) || 1;
  const currentLevel = info?.levels?.find(({level: entryLevel}) => entryLevel === level) || info?.levels?.[0];
  const description = getDescription(info, currentLevel);
  const stats = getStats(currentLevel, info?.stats);
  const isStigma = entry.type === "stigma";

  return (
    <div className="skillModalBackdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="skillModal stigmaDetailModal" role="dialog" aria-modal="true" aria-labelledby="encyclopediaEntryTitle" aria-describedby="encyclopediaEntryDescription">
        <button className="skillModalClose" type="button" onClick={onClose} aria-label="Close entry details"><X aria-hidden="true" /></button>
        <span className="skillModalEyebrow">{entry.className} · {isStigma ? "STIGMA SKILL" : `${entry.type.toUpperCase()} SKILL`}</span>
        <div className="skillModalSkillIdentity">
          <img src={`https://aion2hub.com/api/skill-icon/${entry.id}`} alt="" />
          <div><h2 id="encyclopediaEntryTitle">{entry.name}</h2><span>{isStigma ? "Unofficial Asia / Taiwan reference" : `${entry.region} class skill`}</span></div>
        </div>
        <div className="skillModalDivider" />
        <p id="encyclopediaEntryDescription" className={`skillModalDescription is${state}`}>
          {state === "loading" && "Loading skill details…"}
          {state === "ready" && (description || "No description is available for this entry yet.")}
          {state === "error" && "Skill details are not available right now. Please try again later."}
        </p>
        {state === "ready" && info && <div className="skillModalData">
          {(info.requiredLevel || info.mastery) && <div className="skillModalBadges">
            {info.requiredLevel && <span>Required Level {info.requiredLevel}</span>}
            {info.mastery && <span>{info.mastery}</span>}
          </div>}
          {maxLevel > 1 && <div className="skillLevelControl">
            <div className="skillLevelHeading"><label htmlFor="encyclopedia-skill-level">Skill Level</label><output htmlFor="encyclopedia-skill-level">{level} / {maxLevel}</output></div>
            <input id="encyclopedia-skill-level" type="range" min="1" max={maxLevel} value={level} onChange={(event) => setLevel(Number(event.target.value))} />
          </div>}
          {stats?.length > 0 && <div className="skillModalStats" aria-label={`Main values at level ${level}`}>
            {stats.map(({label, value}) => <div className="skillModalStat" key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}
          </div>}
          {info.properties && <p className="skillModalProperties">{info.properties}</p>}
          {info.specialties?.length > 0 && <section className="skillModalSection"><h3>Specialties</h3><ul className="skillModalList">
            {info.specialties.map((specialty, index) => <li className={level >= specialty.level ? "isUnlocked" : ""} key={`${specialty.level}-${index}`}><span className="skillModalLevel">Lv. {specialty.level}</span><span>{specialty.description}</span></li>)}
          </ul></section>}
          {info.chain?.length > 1 && <section className="skillModalSection"><h3>Skill Chain</h3><div className="skillModalChain" role="list">
            {info.chain.map((linked) => <div className="skillModalChainItem" role="listitem" key={`${linked.name}-${linked.id || linked.name}`}>{linked.icon && <img src={linked.icon} alt="" loading="lazy" />}<span>{linked.name}</span></div>)}
          </div></section>}
          {info.details?.length > 0 && <section className="skillModalSection"><h3>Details</h3><dl className="skillModalDetails">
            {info.details.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl></section>}
          <small className="skillModalSource">{isStigma ? `${stigmaCatalogSource.label} · Region: ${stigmaCatalogSource.region}. Global values are unverified.` : "Global skill data"}</small>
        </div>}
      </section>
    </div>
  );
}

export default function DatabaseBrowser() {
  const entries = useMemo(makeEntries, []);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredEntries = useMemo(() => entries.filter((entry) => {
    if (filter !== "all" && entry.type !== filter) return false;
    if (!normalizedQuery) return true;
    return `${entry.name} ${entry.className} ${entry.type} ${entry.region}`.toLocaleLowerCase().includes(normalizedQuery);
  }), [entries, filter, normalizedQuery]);
  const visibleEntries = filteredEntries.slice(0, visibleCount);
  const closeModal = () => setSelectedEntry(null);

  useEffect(() => { setVisibleCount(PAGE_SIZE); }, [query, filter]);

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link className={styles.brand} href="/"><b>AION <i>2</i> HUB</b><small>DATABASE &amp; TOOLS</small></Link>
        <div className={styles.navLinks}><Link aria-current="page" href="/database">Database</Link><Link href="/classes">Classes</Link><Link href="/#builds">Builds</Link><Link href="/#world">World</Link></div>
        <Link className={styles.region} href="/">GLOBAL</Link>
      </nav>

      <div className={styles.wrap}>
        <Link className={styles.back} href="/?menu=open" aria-label="Back to menu"><ArrowLeft aria-hidden="true" /></Link>
        <header className={styles.header}>
          <span className={styles.eyebrow}><BookOpen aria-hidden="true" /> DATABASE ENCYCLOPEDIA</span>
          <h1>Game <em>Encyclopedia</em></h1>
          <p>Search class skills, Stigmas, all 90 Wings, and all 208 Pets together, then open any entry inside the hub.</p>
        </header>

        <label className={styles.search}>
          <Search aria-hidden="true" />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search skills, Stigmas, Wings, Pets, or class…" aria-label="Search the game encyclopedia" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X aria-hidden="true" /></button>}
          <kbd>⌕</kbd>
        </label>

        <div className={styles.toolbar}>
          <div className={styles.filters} role="group" aria-label="Filter by entry type">
            {filters.map(({id, label}) => <button type="button" key={id} className={filter === id ? styles.filterActive : ""} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}{id === "all" && <span>{entries.length}</span>}</button>)}
          </div>
          <p aria-live="polite">{filteredEntries.length ? `Showing ${visibleEntries.length} of ${filteredEntries.length} entries` : "No entries found"}</p>
        </div>

        <section className={styles.results} aria-label="Encyclopedia entries" aria-live="polite">
          {visibleEntries.map((entry) => entry.href ? <Link className={styles.entry} href={entry.href} key={entry.id}>
            <span className={styles.icon}>{entry.type === "wings" ? <Feather aria-hidden="true"/> : <PawPrint aria-hidden="true"/>}</span>
            <span className={styles.entryCopy}><strong>{entry.name}</strong><span>{entry.className}</span></span>
            <span className={`${styles.badge} ${styles[`badge_${entry.type}`]}`}>{entry.type}</span>
          </Link> : <button type="button" className={styles.entry} key={`${entry.slug}-${entry.type}-${entry.id}`} onClick={() => setSelectedEntry(entry)}>
            <span className={styles.icon}><img src={`https://aion2hub.com/api/skill-icon/${entry.id}`} alt="" loading="lazy" /></span>
            <span className={styles.entryCopy}><strong>{entry.name}</strong><span>{entry.className}</span></span>
            <span className={`${styles.badge} ${styles[`badge_${entry.type}`]}`}>{entry.type === "stigma" && <Sparkles aria-hidden="true" />}{entry.type}</span>
          </button>)}
        </section>

        {visibleCount < filteredEntries.length && <button className={styles.loadMore} type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>Show more entries <span>{visibleEntries.length} / {filteredEntries.length}</span></button>}

        <aside className={styles.sourceNote}>
          <Sparkles aria-hidden="true" />
          <p><strong>Regional data is identified at the entry.</strong> Stigmas use provisional Asia / Taiwan community references. Wings and Pets use a third-party community catalog snapshot dated 2026-09-18; Global availability and values may change.</p>
        </aside>

        <section className={styles.catalogLinks} aria-label="Other connected catalogs">
          <Link className={styles.catalogCard} href="/equipment">
            <span className={styles.catalogIcon}><Gem aria-hidden="true" /></span>
            <span><strong>Equipment</strong><small>Search every equipment slot by name and rarity</small></span>
            <ChevronRight aria-hidden="true" />
          </Link>
          <Link className={styles.catalogCard} href="/wings"><span className={styles.catalogIcon}><Feather aria-hidden="true"/></span><span><strong>Wings</strong><small>All 90 wings · faction, grade, enchant cap, and stats preview</small></span><ChevronRight aria-hidden="true"/></Link>
          <Link className={styles.catalogCard} href="/pets"><span className={styles.catalogIcon}><PawPrint aria-hidden="true"/></span><span><strong>Pets</strong><small>All 208 pets · search, group, growth chance, and stat pools</small></span><ChevronRight aria-hidden="true"/></Link>
        </section>
      </div>
      {selectedEntry && <EntryModal entry={selectedEntry} onClose={closeModal} />}
    </main>
  );
}
