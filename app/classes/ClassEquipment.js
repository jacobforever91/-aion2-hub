"use client";

import {useCallback, useEffect, useMemo, useState} from "react";
import {ChevronLeft, ChevronRight, Gem, Search, Shield, Sword, X} from "lucide-react";

const grades = ["All grades", "Common", "Rare", "Epic", "Unique", "Heroic", "Special"];

function ItemModal({slug, item, onClose}) {
  const [details, setDetails] = useState(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    setDetails(null);
    setState("loading");
    fetch(`/api/class-equipment?class=${slug}&item=${item.id}`, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error("Could not load item");
        return response.json();
      })
      .then((data) => { setDetails(data); setState("ready"); })
      .catch((error) => { if (error.name !== "AbortError") setState("error"); });
    return () => controller.abort();
  }, [slug, item.id]);

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

  return <div className="equipmentModalBackdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="equipmentModal" role="dialog" aria-modal="true" aria-labelledby="equipmentModalTitle">
      <button className="equipmentModalClose" type="button" onClick={onClose} aria-label="Close item details"><X aria-hidden="true" /></button>
      <div className="equipmentModalEyebrow">CLASS EQUIPMENT · GLOBAL DATABASE</div>
      <div className="equipmentModalTitleRow">
        <img src={item.icon} alt="" />
        <div><h2 id="equipmentModalTitle">{details?.name || item.name}</h2><p>{[details?.rarity || item.grade, details?.itemType, details?.equipType && details.equipType !== "MainHand" ? details.equipType : ""].filter(Boolean).join(" · ")}</p></div>
      </div>

      {state === "loading" && <p className="equipmentModalMessage">Loading item statistics…</p>}
      {state === "error" && <p className="equipmentModalMessage isError">Could not load item details. Please try again.</p>}
      {state === "ready" && details && <>
        <div className="equipmentModalMeta">
          {details.itemLevel && <span>Item Lv. {details.itemLevel}</span>}
          {details.requiredLevel && <span>Required Lv. {details.requiredLevel}</span>}
          {details.equipType && <span>{details.equipType}</span>}
        </div>
        {details.stats?.length > 0 && <section className="equipmentModalSection"><h3>Base stats</h3><dl className="equipmentStatGrid">{details.stats.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {details.imprints?.length > 0 && <section className="equipmentModalSection"><h3>Soul imprint options</h3><dl className="equipmentStatGrid isImprint">{details.imprints.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {details.details?.length > 0 && <section className="equipmentModalSection"><h3>Item details</h3><dl className="equipmentStatGrid">{details.details.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {details.upgrades && <section className="equipmentModalSection"><h3>Upgrades</h3><p className="equipmentUpgradeText">{details.upgrades}</p></section>}
        {details.obtain?.length > 0 && <section className="equipmentModalSection"><h3>How to obtain</h3><ul className="equipmentObtainList">{details.obtain.map((line, index) => <li key={`${index}-${line}`}>{line}</li>)}</ul></section>}
        <a className="equipmentSource" href={details.sourceUrl} target="_blank" rel="noreferrer">Item data: AION2 Hub ↗</a>
      </>}
    </section>
  </div>;
}

export default function ClassEquipment({slug}) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [pageInfo, setPageInfo] = useState({total: 0, page: 1, pages: 1});
  const [grade, setGrade] = useState("All grades");
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [state, setState] = useState("loading");
  const [catalogState, setCatalogState] = useState("loading");
  const [catalogError, setCatalogError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setCatalogState("loading");
    fetch(`/api/class-equipment?class=${slug}`, {signal: controller.signal})
      .then(async (response) => { const data = await response.json(); if (!response.ok) throw new Error(`${response.status}: ${data.diagnostic || data.error || "Could not load classes"}`); return data; })
      .then((data) => {
        const nextCategories = data.categories || [];
        setCategories(nextCategories);
        setSelectedCategory((current) => current && nextCategories.some((entry) => entry.code === current.code) ? current : nextCategories[0] || null);
        setCatalogState("ready");
      })
      .catch((error) => { if (error.name !== "AbortError") { setCatalogError(error.message); setCatalogState("error"); } });
    return () => controller.abort();
  }, [slug]);

  useEffect(() => {
    if (!selectedCategory) return;
    const controller = new AbortController();
    setState("loading");
    const query = new URLSearchParams({class: slug, category: selectedCategory.code, page: String(pageInfo.page)});
    if (grade !== "All grades") query.set("grade", grade);
    if (submittedSearch) query.set("q", submittedSearch);
    fetch(`/api/class-equipment?${query}`, {signal: controller.signal})
      .then((response) => { if (!response.ok) throw new Error("Could not load items"); return response.json(); })
      .then((data) => {
        setItems(data.items || []);
        setPageInfo({total: data.total || 0, page: data.page || 1, pages: data.pages || 1});
        setState("ready");
      })
      .catch((error) => { if (error.name !== "AbortError") setState("error"); });
    return () => controller.abort();
  }, [slug, selectedCategory, grade, pageInfo.page, submittedSearch]);

  const visibleItems = useMemo(() => items, [items]);
  const weaponCategories = categories.filter(({group}) => group === "Weapon");
  const armorCategories = categories.filter(({group}) => group === "Armor");
  const accessoryCategories = categories.filter(({group}) => group === "Accessories");

  function chooseCategory(category) {
    setSelectedCategory(category);
    setSearch("");
    setSubmittedSearch("");
    setPageInfo((current) => ({...current, page: 1}));
  }

  function chooseGrade(value) {
    setGrade(value);
    setPageInfo((current) => ({...current, page: 1}));
  }

  const closeItem = useCallback(() => setSelectedItem(null), []);

  return <section className="classEquipment" aria-label="Class items and equipment">
    <div className="classEquipmentHeading">
      <div><span className="classEyebrow">GLOBAL · CLASS DATABASE</span><h2>Equipment</h2><p>Browse this class’s weapons, armor and accessories. Select an item to see all of its stats.</p></div>
      <div className="classEquipmentCount"><Gem aria-hidden="true" />{selectedCategory ? selectedCategory.count : "…"}<span>items</span></div>
    </div>

    {catalogState === "loading" && <p className="equipmentLoading">Loading class equipment…</p>}
    {catalogState === "error" && <p className="equipmentLoading isError">The equipment catalog is temporarily unavailable. Please try again later. <span>{catalogError}</span></p>}
    {catalogState === "ready" && <>
      {[["Weapon", weaponCategories, Sword], ["Armor", armorCategories, Shield], ["Accessories", accessoryCategories, Gem]].map(([group, entries, GroupIcon]) => entries.length > 0 && <div className="equipmentCategoryGroup" key={group}>
        <div className="equipmentCategoryTitle"><GroupIcon aria-hidden="true" /><span>{group}</span><i /></div>
        <div className="equipmentCategoryList" role="tablist" aria-label={`${group} equipment slots`}>
          {entries.map((category) => <button key={category.code} type="button" role="tab" aria-selected={selectedCategory?.code === category.code} className={selectedCategory?.code === category.code ? "isSelected" : ""} onClick={() => chooseCategory(category)}>
            <span>{category.name}</span><small>{category.count}</small>
          </button>)}
        </div>
      </div>)}

      <div className="equipmentToolbar">
        <form className="equipmentSearch" onSubmit={(event) => { event.preventDefault(); setPageInfo((current) => ({...current, page: 1})); setSubmittedSearch(search.trim()); }}>
          <Search aria-hidden="true" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search all items in this slot…" aria-label="Search all items in this equipment slot" />
          <button type="submit">Search</button>
        </form>
        <div className="equipmentGradeFilters" aria-label="Filter by item grade">
          {grades.map((entry) => <button type="button" key={entry} aria-pressed={grade === entry} className={grade === entry ? "isSelected" : ""} onClick={() => chooseGrade(entry)}>{entry}</button>)}
        </div>
      </div>

      <div className="equipmentResultsHeader"><span>{selectedCategory?.name || "Items"} <b>{pageInfo.total.toLocaleString()}</b></span><span>GLOBAL ITEM DATA</span></div>
      {state === "loading" && <p className="equipmentLoading">Loading items…</p>}
      {state === "error" && <p className="equipmentLoading isError">Could not load the item list. Please try again.</p>}
      {state === "ready" && visibleItems.length > 0 && <div className="equipmentItemGrid">
        {visibleItems.map((item) => <button className="equipmentItemCard" type="button" key={item.id} onClick={() => setSelectedItem(item)}>
          <span className="equipmentItemIcon"><img src={item.icon} alt="" loading="lazy" /></span>
          <span className="equipmentItemName">{item.name}</span><span className={`equipmentItemGrade grade${item.grade}`}>{item.grade}</span><span className="equipmentItemOpen">Details <ChevronRight aria-hidden="true" /></span>
        </button>)}
      </div>}
      {state === "ready" && visibleItems.length === 0 && <p className="equipmentLoading">No items match these filters.</p>}
      {state === "ready" && pageInfo.pages > 1 && <div className="equipmentPagination"><button type="button" disabled={pageInfo.page <= 1} onClick={() => setPageInfo((current) => ({...current, page: current.page - 1}))}><ChevronLeft aria-hidden="true" />Previous</button><span>Page {pageInfo.page} of {pageInfo.pages}</span><button type="button" disabled={pageInfo.page >= pageInfo.pages} onClick={() => setPageInfo((current) => ({...current, page: current.page + 1}))}>Next<ChevronRight aria-hidden="true" /></button></div>}
      <p className="equipmentDataNote">Global equipment database · <a href="https://aion2hub.com/database?view=class" target="_blank" rel="noreferrer">Source and data details</a></p>
    </>}
    {selectedItem && <ItemModal slug={slug} item={selectedItem} onClose={closeItem} />}
  </section>;
}
