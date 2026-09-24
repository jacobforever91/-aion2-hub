"use client";

import {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {ArrowLeft, ChevronLeft, ChevronRight, Gem, Search, X} from "lucide-react";
import EquipmentSlotIcon from "./EquipmentSlotIcon";

const grades = ["All rarities", "Common", "Rare", "Epic", "Unique", "Heroic", "Special", "Mythic"];
const categories = [
  {id: "weapons", name: "Weapons", family: "Weapons", icon: "weapons"},
  {id: "helmet", name: "Helmet", family: "Armor", sourceSlot: "Helmet", icon: "helmet"},
  {id: "chest", name: "Chest", family: "Armor", sourceSlot: "Torso", icon: "chest"},
  {id: "shoulders", name: "Shoulders", family: "Armor", sourceSlot: "Shoulder", icon: "shoulders"},
  {id: "gloves", name: "Gloves", family: "Armor", sourceSlot: "Gloves", icon: "gloves"},
  {id: "pants", name: "Pants", family: "Armor", sourceSlot: "Pants", icon: "pants"},
  {id: "boots", name: "Boots", family: "Armor", sourceSlot: "Boots", icon: "boots"},
  {id: "cloak", name: "Cloak", family: "Armor", sourceSlot: "Cape", icon: "cloak"},
  {id: "necklace", name: "Necklace", family: "Accessories", sourceSlot: "Necklace", icon: "necklace"},
  {id: "earrings", name: "Earrings", family: "Accessories", sourceSlot: "Earring", slotCount: 2, icon: "earrings"},
  {id: "rings", name: "Rings", family: "Accessories", sourceSlot: "Ring", slotCount: 2, icon: "rings"},
  {id: "bracelet", name: "Bracelet", family: "Accessories", sourceSlot: "Bracelet", icon: "bracelet"},
  {id: "brooch", name: "Brooch", family: "Accessories", sourceSlot: "Brooch", icon: "brooch"},
];
const familyArt = {Weapons: "/equipment-art/weapon.webp", Armor: "/equipment-art/armor.webp", Accessories: "/equipment-art/accessory.webp"};

function gradeClass(grade) {
  return `grade${String(grade || "Common").replace(/[^a-z]/gi, "")}`;
}

function EquipmentModal({item, region, onClose}) {
  const [details, setDetails] = useState(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    setDetails(null);
    setState("loading");
    fetch(`/api/class-equipment?view=general&region=${region}&item=${item.id}`, {signal: controller.signal})
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not load item details");
        return data;
      })
      .then((data) => { setDetails(data); setState("ready"); })
      .catch((error) => { if (error.name !== "AbortError") setState("error"); });
    return () => controller.abort();
  }, [item.id, region]);

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

  const rarity = details?.rarity || item.grade;
  const itemArt = familyArt[item.family] || familyArt.Armor;
  return <div className="equipmentModalBackdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="equipmentModal" role="dialog" aria-modal="true" aria-labelledby="equipmentModalTitle">
      <button className="equipmentModalClose" type="button" onClick={onClose} aria-label="Close item details"><X aria-hidden="true" /></button>
      <div className="equipmentModalEyebrow">EQUIPMENT ENCYCLOPEDIA · {region === "KR_TW" ? "KR / TW REFERENCE" : "GLOBAL REFERENCE"}</div>
      <div className="equipmentModalTitleRow">
        <img src={item.icon || itemArt} alt="" />
        <div><h2 id="equipmentModalTitle">{details?.name || item.name}</h2><p>{[rarity, details?.itemType || item.category, details?.equipType && details.equipType !== "MainHand" ? details.equipType : ""].filter(Boolean).join(" · ")}</p></div>
      </div>

      {state === "loading" && <p className="equipmentModalMessage">Loading item details…</p>}
      {state === "error" && <p className="equipmentModalMessage isError">Could not load this item’s details. Please try again.</p>}
      {state === "ready" && details && <>
        <div className="equipmentModalMeta">
          {details.itemLevel && <span>Item Lv. {details.itemLevel}</span>}
          {details.requiredLevel && <span>Required Lv. {details.requiredLevel}</span>}
          {details.equipType && <span>{details.equipType}</span>}
          {details.classRestrictions && <span>{details.classRestrictions}</span>}
        </div>
        {details.stats?.length > 0 && <section className="equipmentModalSection"><h3>Base stats</h3><dl className="equipmentStatGrid">{details.stats.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {details.imprints?.length > 0 && <section className="equipmentModalSection"><h3>Soul imprint options</h3><dl className="equipmentStatGrid isImprint">{details.imprints.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {details.details?.length > 0 && <section className="equipmentModalSection"><h3>Item details</h3><dl className="equipmentStatGrid">{details.details.map(({label, value}) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {details.upgrades && <section className="equipmentModalSection"><h3>Upgrades</h3><p className="equipmentUpgradeText">{details.upgrades}</p></section>}
        {details.obtain?.length > 0 && <section className="equipmentModalSection"><h3>How to obtain</h3><ul className="equipmentObtainList">{details.obtain.map((line, index) => <li key={`${index}-${line}`}>{line}</li>)}</ul></section>}
        <p className="equipmentDataNote">{region === "KR_TW" ? "Unofficial Korea / Taiwan reference. Values may differ in Global." : "Unofficial Global reference data. Details may change as the Global database develops."}</p>
      </>}
    </section>
  </div>;
}

export default function EquipmentBrowser() {
  const [region, setRegion] = useState("GLOBAL");
  const [categoryId, setCategoryId] = useState("weapons");
  const [grade, setGrade] = useState("All rarities");
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({total: 0, page: 1, pages: 1});
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setState("loading");
    const selectedCategory = categories.find(({id}) => id === categoryId) || categories[0];
    const query = new URLSearchParams({region, category: selectedCategory.family, page: String(page)});
    if (selectedCategory.sourceSlot) query.set("slot", selectedCategory.sourceSlot);
    if (grade !== "All rarities") query.set("grade", grade);
    if (submittedSearch) query.set("q", submittedSearch);
    query.set("view", "general");
    fetch(`/api/class-equipment?${query}`, {signal: controller.signal})
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not load equipment");
        return data;
      })
      .then((data) => {
        setItems(data.items || []);
        setPageInfo({total: data.total || 0, page: data.page || 1, pages: data.pages || 1});
        setState("ready");
      })
      .catch((fetchError) => {
        if (fetchError.name !== "AbortError") { setError(fetchError.message); setState("error"); }
      });
    return () => controller.abort();
  }, [region, categoryId, grade, page, submittedSearch]);

  const closeItem = useCallback(() => setSelectedItem(null), []);
  function changeFilter(change) {
    setPage(1);
    change();
  }

  return <main className="classPage equipmentBrowsePage generalEquipmentPage">
    <Link className="classBack" href="/?menu=open" aria-label="Back to the menu panel"><ArrowLeft aria-hidden="true" /></Link>
    <section className="equipmentGeneralContent">
      <div className="equipmentRegionBar" aria-label="Choose item data region">
        <div className="equipmentRegionChoices" role="group" aria-label="Item data region">
          <button type="button" className={region === "GLOBAL" ? "isSelected" : ""} aria-pressed={region === "GLOBAL"} onClick={() => changeFilter(() => setRegion("GLOBAL"))}>Global</button>
          <button type="button" className={region === "KR_TW" ? "isSelected" : ""} aria-pressed={region === "KR_TW"} onClick={() => changeFilter(() => setRegion("KR_TW"))}>Asia / Taiwan</button>
        </div>
        <p>{region === "KR_TW" ? "Unofficial Korea / Taiwan reference data. Stats may differ from Global." : "Unofficial Global reference data. Entries may change as the Global catalog develops."}</p>
      </div>

      <div className="equipmentToolbar generalEquipmentToolbar">
        <form className="equipmentSearch searchHalo" onSubmit={(event) => { event.preventDefault(); changeFilter(() => setSubmittedSearch(search.trim())); }}>
          <Search aria-hidden="true" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search equipment by name…" aria-label="Search equipment by name" />
          <button type="submit">Search</button>
        </form>
        <div className="equipmentGradeFilters" aria-label="Filter by rarity">
          {grades.map((entry) => <button type="button" key={entry} aria-pressed={grade === entry} className={`${grade === entry ? "isSelected " : ""}${entry === "All rarities" ? "gradeAll" : gradeClass(entry)}`} onClick={() => changeFilter(() => setGrade(entry))}>{entry}</button>)}
        </div>
      </div>

      <div className="equipmentSlotFilters" role="group" aria-label="Equipment slot">
        {categories.map(({id, name, icon, slotCount}) => <button type="button" aria-pressed={categoryId === id} className={categoryId === id ? "isSelected" : ""} key={id} onClick={() => changeFilter(() => setCategoryId(id))}><EquipmentSlotIcon type={icon} />{name}{slotCount === 2 && <small>2 slots</small>}</button>)}
      </div>

      <div className="equipmentResultsHeader"><span>{submittedSearch ? `Results for “${submittedSearch}” · ${categories.find(({id}) => id === categoryId)?.name}` : categories.find(({id}) => id === categoryId)?.name} <b>{pageInfo.total.toLocaleString()}</b></span><span>{region === "KR_TW" ? "KR / TW REFERENCE" : "GLOBAL REFERENCE"}</span></div>
      {state === "loading" && <p className="equipmentLoading">Loading equipment…</p>}
      {state === "error" && <p className="equipmentLoading isError">{error || "Could not load equipment. Please try again."}</p>}
      {state === "ready" && items.length > 0 && <div className="equipmentItemGrid generalEquipmentGrid">
        {items.map((item) => <button className="equipmentItemCard" type="button" key={`${region}-${item.id}`} onClick={() => setSelectedItem(item)}>
          <span className="equipmentItemIcon"><img src={item.icon || familyArt[item.family] || familyArt.Armor} alt="" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = familyArt[item.family] || familyArt.Armor; }} /></span>
          <span className="equipmentItemName">{item.name}</span><span className={`equipmentItemGrade ${gradeClass(item.grade)}`}>{item.grade}</span><span className="equipmentItemOpen">Details <ChevronRight aria-hidden="true" /></span>
        </button>)}
      </div>}
      {state === "ready" && items.length === 0 && <p className="equipmentLoading">{submittedSearch || grade !== "All rarities" ? "No reviewed items match these filters." : "No reviewed entries are available for this slot and region yet."}</p>}
      {state === "ready" && pageInfo.pages > 1 && <div className="equipmentPagination"><button type="button" disabled={pageInfo.page <= 1} onClick={() => setPage((current) => current - 1)}><ChevronLeft aria-hidden="true" />Previous</button><span>Page {pageInfo.page} of {pageInfo.pages}</span><button type="button" disabled={pageInfo.page >= pageInfo.pages} onClick={() => setPage((current) => current + 1)}>Next<ChevronRight aria-hidden="true" /></button></div>}
      <p className="equipmentDataNote">Choose a rarity to narrow the catalog. Select an item to open its information panel. Entries appear as their data is reviewed.</p>
    </section>
    {selectedItem && <EquipmentModal item={selectedItem} region={region} onClose={closeItem} />}
  </main>;
}
