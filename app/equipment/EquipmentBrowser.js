"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Gem, Search, X} from "lucide-react";
import EquipmentSlotIcon from "./EquipmentSlotIcon";
import progressionData from "../progression/catalogData.json";
import {classList} from "../classes/classData";

const grades = ["All rarities", "Common", "Rare", "Epic", "Unique", "Heroic", "Special", "Mythic"];
const weaponTypeOrder = ["Greatsword", "Longsword", "Dagger", "Bow", "Spellbook", "Orb", "Mace", "Staff", "Guard"];
const categories = [
  {id: "weapons", name: "Weapon", family: "Weapons", icon: "weapons"},
  {id: "wings", name: "Wings", family: "Wings", icon: "wings"},
  {id: "shoulders", name: "Shoulders", family: "Armor", sourceSlot: "Shoulder", icon: "shoulders"},
  {id: "cloak", name: "Cloak", family: "Armor", sourceSlot: "Cape", icon: "cloak"},
  {id: "gloves", name: "Gloves", family: "Armor", sourceSlot: "Gloves", icon: "gloves"},
  {id: "belt", name: "Belt", family: "Armor", sourceSlot: "Belt", icon: "belt"},
  {id: "pants", name: "Legs", family: "Armor", sourceSlot: "Pants", icon: "pants"},
  {id: "boots", name: "Boots", family: "Armor", sourceSlot: "Boots", icon: "boots"},
  {id: "helmet", name: "Helmet", family: "Armor", sourceSlot: "Helmet", icon: "helmet"},
  {id: "necklace", name: "Necklace", family: "Accessories", sourceSlot: "Necklace", icon: "necklace"},
  {id: "chest", name: "Chest", family: "Armor", sourceSlot: "Torso", icon: "chest"},
  {id: "earrings", name: "Earrings", family: "Accessories", sourceSlot: "Earring", icon: "earrings"},
  {id: "rings", name: "Ring", family: "Accessories", sourceSlot: "Ring", icon: "rings"},
  {id: "bracelet", name: "Bracelet", family: "Accessories", sourceSlot: "Bracelet", icon: "bracelet"},
  {id: "brooch", name: "Relic", family: "Accessories", sourceSlot: "Brooch", icon: "brooch"},
];
const emptyLoadoutStatGroups = [
  {title: "Base Stats", stats: ["Attack", "Magic Boost", "Accuracy", "Physical Defense", "Magic Defense", "Max HP", "Max MP"].map((label) => ({label, value: 0, suffix: ""}))},
  {title: "Combat Stats", stats: ["Critical Hit", "Critical Hit Resist", "Attack Speed", "Cast Speed", "Block"].map((label) => ({label, value: 0, suffix: ""}))},
  {title: "Additional Stats", stats: ["Movement Speed", "Skill Boost", "PvE Damage", "PvP Damage"].map((label) => ({label, value: 0, suffix: ""}))},
];
const baseLoadoutStatNames = new Set(["Attack", "Min Attack", "Max Attack", "Magic Boost", "Accuracy", "Defense", "Physical Defense", "Magic Defense", "HP", "Max HP", "MP", "Max MP", "Might", "Dexterity", "Constitution", "Willpower", "Precision"]);
const combatLoadoutStatNames = new Set(["Critical Hit", "Critical Hit Resist", "Critical Resist", "Attack Speed", "Cast Speed", "Block", "Parry Damage Reduction Rate", "Parry Damage Reduction Amount", "Shield Block Damage Reduction Rate", "Shield Block Damage Reduction Amount", "Combat Speed"]);
const equipmentClassOrder = ["gladiator","templar","assassin","ranger","sorcerer","spiritmaster","cleric","chanter"];
const equipmentClasses = equipmentClassOrder.map((slug) => classList.find((entry) => entry.slug === slug)).filter(Boolean);
const atlasLeft = ["weapons","wings","shoulders","cloak","gloves","belt","pants","boots"];
const atlasRight = ["helmet","necklace","chest","earrings","rings","bracelet","brooch"];
const familyArt = {Weapons: "/equipment-art/weapon.webp", Armor: "/equipment-art/armor.webp", Accessories: "/equipment-art/accessory.webp", Wings: "/equipment-art/accessory.webp"};
const wingItems = progressionData.wings.map((wing) => {
  const details = progressionData.wingDetails[wing.id] || {};
  return {
    id: wing.id, name: wing.name, grade: wing.grade, family: "Wings", category: "Wings",
    icon: wing.iconSrc, iconPosition: wing.iconPosition, faction: wing.faction,
    enhancementCap: wing.enhancementCap, region: "KR_TW",
    stats: (details.stats || []).map(([label, value]) => ({label, value})),
    upgrades: details.enchantmentCap ? `Enhancement cap +${details.enchantmentCap}` : "",
    obtain: ["AION2.app community reference; Korea / Taiwan client snapshot (2026-09-18)."],
  };
});

function gradeClass(grade) {
  return `grade${String(grade || "Common").replace(/[^a-z]/gi, "")}`;
}

function ItemVisual({item, size = 58}) {
  if (item.iconPosition && item.icon) {
    const [x, y] = item.iconPosition;
    const scale = size / 38;
    return <span className="equipmentWingSprite" aria-hidden="true" style={{
      width: size, height: size, backgroundImage: `url("${item.icon}")`,
      backgroundSize: `${304 * scale}px ${266 * scale}px`,
      backgroundPosition: `-${x * size}px -${y * size}px`,
    }} />;
  }
  return <img src={item.icon || familyArt[item.family] || familyArt.Armor} alt="" loading="lazy"
    onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = familyArt[item.family] || familyArt.Armor; }} />;
}

function EquipmentModal({item, region, onClose}) {
  const [details, setDetails] = useState(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    setDetails(null);
    setState("loading");
    if (item.family === "Wings") {
      setDetails({name: item.name, rarity: item.grade, itemType: "Wings", classRestrictions: item.faction, stats: item.stats || [], imprints: [], details: [], upgrades: item.upgrades, obtain: item.obtain || []});
      setState("ready");
      return () => controller.abort();
    }
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
  return <div className="equipmentModalBackdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="equipmentModal" role="dialog" aria-modal="true" aria-labelledby="equipmentModalTitle">
      <button className="equipmentModalClose" type="button" onClick={onClose} aria-label="Close item details"><X aria-hidden="true" /></button>
      <div className="equipmentModalEyebrow">EQUIPMENT ENCYCLOPEDIA · {region === "KR_TW" ? "KR / TW REFERENCE" : "GLOBAL REFERENCE"}</div>
      <div className="equipmentModalTitleRow">
        <ItemVisual item={item} size={62} />
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
        {details.skillImprints?.length > 0 && <section className="equipmentModalSection"><details><summary style={{cursor: "pointer", color: "#75dfff", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase"}}>Skill imprint options by class</summary><p style={{color: "#9cb9c6", fontSize: 10, lineHeight: 1.6}}>One listed skill may roll at Lv. 1 for your class. Names marked * come from the Korea/Taiwan client.</p><dl className="equipmentStatGrid isImprint" style={{gridTemplateColumns: "1fr"}}>{details.skillImprints.map(({label, value}) => <div key={label} style={{display: "grid", gridTemplateColumns: "minmax(90px, 130px) minmax(0, 1fr)"}}><dt>{label}</dt><dd style={{textAlign: "left", lineHeight: 1.55, overflowWrap: "anywhere"}}>{value}</dd></div>)}</dl></details></section>}
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
  const [selectedClass, setSelectedClass] = useState("gladiator");
  const [categoryId, setCategoryId] = useState("weapons");
  const [grade, setGrade] = useState("All rarities");
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({total: 0, page: 1, pages: 1});
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [atlasSelection, setAtlasSelection] = useState({});
  const [atlasRegion, setAtlasRegion] = useState("GLOBAL");
  const [atlasClass, setAtlasClass] = useState("gladiator");
  const [loadoutDetails, setLoadoutDetails] = useState({});
  const [loadoutLoading, setLoadoutLoading] = useState({});
  const [loadoutErrors, setLoadoutErrors] = useState({});
  const loadoutRequests = useRef({});
  const loadoutRequestSequence = useRef(0);
  const [showLoadout, setShowLoadout] = useState(false);
  const [loadoutStorageReady, setLoadoutStorageReady] = useState(false);
  const [loadoutNeedsRefresh, setLoadoutNeedsRefresh] = useState(false);
  const [openWeaponGroups, setOpenWeaponGroups] = useState({});
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("daevexus-equipment-loadout-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          const savedRegion = parsed.region === "KR_TW" ? "KR_TW" : "GLOBAL";
          const savedClass = equipmentClasses.some(({slug}) => slug === parsed.class) ? parsed.class : "gladiator";
          setRegion(savedRegion);
          setAtlasRegion(savedRegion);
          setSelectedClass(savedClass);
          setAtlasClass(savedClass);
          const savedSelection = parsed.selection && typeof parsed.selection === "object" ? parsed.selection : {};
          setAtlasSelection(savedSelection);
          setLoadoutDetails(parsed.details && typeof parsed.details === "object" ? parsed.details : {});
          setLoadoutNeedsRefresh(Object.values(savedSelection).some(Boolean));
        }
      }
    } catch {}
    setLoadoutStorageReady(true);
  }, []);

  useEffect(() => {
    if (!loadoutStorageReady) return;
    try {
      window.localStorage.setItem("daevexus-equipment-loadout-v1", JSON.stringify({region, class: selectedClass, selection: atlasSelection, details: loadoutDetails}));
    } catch {}
  }, [loadoutStorageReady, region, selectedClass, atlasSelection, loadoutDetails]);

  useEffect(() => {
    const controller = new AbortController();
    setState("loading");
    const selectedCategory = categories.find(({id}) => id === categoryId) || categories[0];
    if (selectedCategory.family === "Wings") {
      const normalizedSearch = submittedSearch.toLowerCase();
      const wingResults = wingItems.filter((item) =>
        (grade === "All rarities" || item.grade === grade) &&
        (!normalizedSearch || `${item.name} ${item.faction}`.toLowerCase().includes(normalizedSearch))
      );
      setItems(wingResults);
      setPageInfo({total: wingResults.length, page: 1, pages: 1});
      setState("ready");
      return () => controller.abort();
    }
    const query = new URLSearchParams({region, category: selectedCategory.family, page: String(page)});
    query.set("class", selectedClass);
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
  }, [region, selectedClass, categoryId, grade, page, submittedSearch]);

  useEffect(() => {
    if (atlasRegion !== region || atlasClass !== selectedClass) {
      loadoutRequests.current = {};
      setAtlasSelection({});
      setLoadoutDetails({});
      setLoadoutLoading({});
      setLoadoutErrors({});
      setAtlasRegion(region);
      setAtlasClass(selectedClass);
    }
  }, [region, atlasRegion, selectedClass, atlasClass]);

  useEffect(() => {
    if (!loadoutStorageReady || !loadoutNeedsRefresh) return;
    setLoadoutNeedsRefresh(false);
    Object.entries(atlasSelection).forEach(([slot, item]) => {
      if (!item) return;
      if (item.family === "Wings") {
        const currentWing = wingItems.find(({id}) => id === item.id) || item;
        setLoadoutDetails((current) => ({...current, [slot]: {stats: currentWing.stats || []}}));
        return;
      }
      const requestId = ++loadoutRequestSequence.current;
      loadoutRequests.current[slot] = requestId;
      setLoadoutDetails((current) => { const next = {...current}; delete next[slot]; return next; });
      setLoadoutLoading((current) => ({...current, [slot]: true}));
      setLoadoutErrors((current) => { const next = {...current}; delete next[slot]; return next; });
      fetch(`/api/class-equipment?view=general&region=${region}&item=${item.id}`)
        .then(async (response) => {
          const details = await response.json();
          if (!response.ok) throw new Error(details.error || "Could not load item stats.");
          return details;
        })
        .then((details) => {
          if (loadoutRequests.current[slot] !== requestId) return;
          setLoadoutDetails((current) => ({...current, [slot]: details}));
          setLoadoutLoading((current) => ({...current, [slot]: false}));
        })
        .catch((loadError) => {
          if (loadoutRequests.current[slot] !== requestId) return;
          setLoadoutLoading((current) => ({...current, [slot]: false}));
          setLoadoutErrors((current) => ({...current, [slot]: loadError.message || "Could not load item stats."}));
        });
    });
  }, [loadoutStorageReady, loadoutNeedsRefresh, atlasSelection, region]);

  useEffect(() => {
    setOpenWeaponGroups(
      grade === "All rarities" && !submittedSearch
        ? {}
        : Object.fromEntries(weaponTypeOrder.map((type) => [type, true]))
    );
  }, [categoryId, grade, region, selectedClass, submittedSearch]);

  const weaponGroups = categoryId === "weapons"
    ? Object.entries(items.reduce((groups, item) => {
        const type = item.category || "Other weapons";
        (groups[type] ||= []).push(item);
        return groups;
      }, {})).sort(([a], [b]) => {
        const aIndex = weaponTypeOrder.indexOf(a);
        const bIndex = weaponTypeOrder.indexOf(b);
        return (aIndex < 0 ? weaponTypeOrder.length : aIndex) - (bIndex < 0 ? weaponTypeOrder.length : bIndex) || a.localeCompare(b);
      })
    : [];
  const renderItemCard = (item) => <article className={"equipmentItemCard "+(atlasSelection[categoryId]?.id===item.id?"isEquipped":"")} key={`${region}-${item.id}`}>
    <button className="equipmentItemEquip" type="button" onClick={() => selectAtlasItem(item)} aria-label={`Equip ${item.name}`}>
      <span className="equipmentItemIcon"><ItemVisual item={item} size={66} /></span>
      <span className="equipmentItemName">{item.name}</span><span className={`equipmentItemGrade ${gradeClass(item.grade)}`}>{item.grade}</span>
      <span className="equipmentItemEquipState">{atlasSelection[categoryId]?.id===item.id?"EQUIPPED":"EQUIP"}</span>
    </button>
    <button className="equipmentItemDetailsButton" type="button" onClick={()=>setSelectedItem(item)}>DETAILS <ChevronRight aria-hidden="true"/></button>
  </article>;

  const closeItem = useCallback(() => setSelectedItem(null), []);
  const selectedCategory = categories.find(({id}) => id === categoryId) || categories[0];
  const selectedClassName = equipmentClasses.find(({slug}) => slug === selectedClass)?.name || "Gladiator";
  const selectCategory = (id) => changeFilter(() => setCategoryId(id));
  const selectAtlasItem = (item) => {
    const slot = categoryId;
    const requestId = ++loadoutRequestSequence.current;
    loadoutRequests.current[slot] = requestId;
    setAtlasSelection((current) => ({...current,[slot]:item}));
    setLoadoutErrors((current) => { const next = {...current}; delete next[slot]; return next; });
    if (item.family === "Wings") {
      setLoadoutDetails((current) => ({...current, [slot]: {stats: item.stats || []}}));
      setLoadoutLoading((current) => ({...current, [slot]: false}));
      return;
    }
    setLoadoutDetails((current) => { const next = {...current}; delete next[slot]; return next; });
    setLoadoutLoading((current) => ({...current, [slot]: true}));
    fetch(`/api/class-equipment?view=general&region=${region}&item=${item.id}`)
      .then(async (response) => {
        const details = await response.json();
        if (!response.ok) throw new Error(details.error || "Could not load item stats.");
        return details;
      })
      .then((details) => {
        if (loadoutRequests.current[slot] !== requestId) return;
        setLoadoutDetails((current) => ({...current, [slot]: details}));
        setLoadoutLoading((current) => ({...current, [slot]: false}));
      })
      .catch((loadError) => {
        if (loadoutRequests.current[slot] !== requestId) return;
        setLoadoutLoading((current) => ({...current, [slot]: false}));
        setLoadoutErrors((current) => ({...current, [slot]: loadError.message || "Could not load item stats."}));
      });
  };
  const equippedEntries = Object.entries(atlasSelection).filter(([,item])=>item);
  const loadoutPendingCount = equippedEntries.filter(([slot]) => loadoutLoading[slot]).length;
  const loadoutErrorCount = equippedEntries.filter(([slot]) => loadoutErrors[slot]).length;
  const loadoutTotals = equippedEntries.reduce((totals,[slot])=>{
    const stats=loadoutDetails[slot]?.stats||[];
    stats.forEach(({label,value})=>{
      const raw=String(value??"").replace(/,/g,"").trim();
      const match=raw.match(/^([+-]?\d+(?:\.\d+)?)(?:\s*\+\s*([+-]?\d+(?:\.\d+)?))?\s*(%)?$/);
      if(!match)return;
      const suffix=match[3]||"";
      const normalizedLabel = ({Defense: "Physical Defense", HP: "Max HP", MP: "Max MP"})[label] || label;
      const key=normalizedLabel+"|"+suffix;
      totals[key]=(totals[key]||0)+Number(match[1])+Number(match[2]||0);
    });
    return totals;
  },{});
  const groupedLoadoutStats = Object.entries(loadoutTotals).reduce((groups, [key, value]) => {
    const [label, suffix] = key.split("|");
    const group = baseLoadoutStatNames.has(label) ? "Base Stats" : combatLoadoutStatNames.has(label) ? "Combat Stats" : "Additional Stats";
    groups[group].push({label, suffix, value});
    return groups;
  }, {"Base Stats": [], "Combat Stats": [], "Additional Stats": []});
  const loadoutStatGroups = equippedEntries.length
    ? Object.entries(groupedLoadoutStats).filter(([, stats]) => stats.length).map(([title, stats]) => ({title, stats}))
    : emptyLoadoutStatGroups;
  const loadoutEmptyMessage = loadoutPendingCount
      ? "Loading selected item stats…"
      : loadoutErrorCount
        ? "Could not load stats for one or more selected pieces. Select the item again to retry."
        : "Selected items do not include numeric base stats.";
  const formatStatValue = (value) => new Intl.NumberFormat("en-US", {maximumFractionDigits: 2}).format(value);
  const clearLoadout=()=>{loadoutRequests.current={};setAtlasSelection({});setLoadoutDetails({});setLoadoutLoading({});setLoadoutErrors({});setShowLoadout(false)};
  const renderAtlasSlot = (id) => {
    const entry = categories.find((item) => item.id === id);
    if (!entry) return null;
    const chosen = atlasSelection[id];
    return <button type="button" key={id} className={"equipmentAtlasSlot "+(categoryId===id?"isSelected":"")} aria-pressed={categoryId===id} onClick={()=>selectCategory(id)}>
      <span className="equipmentAtlasSlotIcon">{chosen?.icon?<ItemVisual item={chosen} size={34}/>:<EquipmentSlotIcon type={entry.icon}/>}</span>
      <span>{entry.name}</span>{entry.slotCount===2&&<small>2</small>}
    </button>;
  };
  function changeFilter(change) {
    setPage(1);
    change();
  }
  const desktopLoadoutGroups = loadoutStatGroups.map(({title, stats}) => <section className="equipmentDesktopTotalsGroup" key={title}>
    <h3>{title}</h3>
    {stats.map(({label, value, suffix}) => <div className="equipmentDesktopTotalRow" key={`${label}|${suffix}`}><span>{label}</span><strong>{formatStatValue(value)}{suffix}</strong></div>)}
  </section>);
  const modalLoadoutGroups = loadoutStatGroups.map(({title, stats}) => <section className="equipmentLoadoutStatGroup" key={title}>
    <h3>{title}</h3>
    <div>{stats.map(({label, value, suffix}) => <div key={`${label}|${suffix}`}><span>{label}</span><strong>{formatStatValue(value)}{suffix}</strong></div>)}</div>
  </section>);

  return <main className="classPage equipmentBrowsePage generalEquipmentPage">
    <Link className="classBack" href="/?menu=open" aria-label="Back to the menu panel"><ArrowLeft aria-hidden="true" /></Link>
    <section className="equipmentGeneralContent">
      <div className="equipmentTopline">
        <div className="equipmentVisionIdentity"><span>DAEVEXUS · DATABASE</span><h1>Equipment</h1></div>
        <div className="equipmentClassChoices" role="group" aria-label="Choose a class">
          {equipmentClasses.map(({name, slug}) => <button type="button" key={slug} className={selectedClass === slug ? "isSelected" : ""} aria-pressed={selectedClass === slug} onClick={() => { if (selectedClass !== slug) changeFilter(() => { setSelectedClass(slug); setCategoryId("weapons"); }); }}>{name}</button>)}
        </div>
      </div>

      <div className="equipmentAtlasLayout">
        <aside className="equipmentAtlas" aria-label="Equipment loadout atlas">
          <div className="equipmentAtlasHalo"/>
          <div className="equipmentAtlasFigure hasDaevaArt"><img className="equipmentAtlasDaevaArt" src="/daevexus/equipment-sanctum-daeva.png" alt="Daeva integrada en el santuario" onError={(event)=>{event.currentTarget.style.display="none";event.currentTarget.parentElement?.classList.remove("hasDaevaArt")}}/></div>
          <div className="equipmentAtlasSide isLeft">{atlasLeft.map(renderAtlasSlot)}</div>
          <div className="equipmentAtlasSide isRight">{atlasRight.map(renderAtlasSlot)}</div>
          <div className="equipmentAtlasActions">
            <button className="equipmentClearLoadoutButton" type="button" onClick={clearLoadout}>CLEAR LOADOUT</button>
            <button className="equipmentLoadoutStatsButton" type="button" onClick={()=>setShowLoadout(true)}><span>LOADOUT STATS</span><b>{equippedEntries.length} / {categories.length}</b></button>
          </div>
        </aside>
        <section className="equipmentAtlasCatalog">
          <div className="equipmentAtlasCatalogHead"><div><span>DAEVEXUS · EQUIPMENT</span><h2>Equipment Atlas</h2><p>Choose a slot, then equip an item.</p></div><b>{pageInfo.total.toLocaleString()} items</b></div>
          <div className="equipmentToolbar generalEquipmentToolbar">
        <form className="equipmentSearch searchHalo" onSubmit={(event) => { event.preventDefault(); changeFilter(() => setSubmittedSearch(search.trim())); }}>
          <Search aria-hidden="true" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search equipment by name…" aria-label="Search equipment by name" />
          <button type="submit">Search</button>
        </form>
        <div className="equipmentGradeFilters" aria-label="Filter by rarity">
          {grades.map((entry) => <button type="button" key={entry} aria-pressed={grade === entry} className={`${grade === entry ? "isSelected " : ""}${entry === "All rarities" ? "gradeAll" : gradeClass(entry)}`} onClick={() => changeFilter(() => setGrade(entry))}>{entry}</button>)}
        </div>
      </div>
      <div className="equipmentAtlasCategoryGrid" role="group" aria-label="Equipment categories">
        {categories.map(({id}) => renderAtlasSlot(id))}
      </div>
      <p className={`equipmentRegionNote${categoryId === "weapons" ? " isWeaponNote" : ""}`}>{categoryId === "wings" ? "Wings use the unofficial Korea / Taiwan client snapshot from 2026-09-18." : "Weapon results are filtered for the selected class; the other equipment slots use the shared reviewed catalog."}</p>

      <div className="equipmentResultsHeader"><span>{submittedSearch ? `Results for “${submittedSearch}” · ${categories.find(({id}) => id === categoryId)?.name}` : categories.find(({id}) => id === categoryId)?.name} <b>{pageInfo.total.toLocaleString()}</b></span><span>{selectedClassName.toUpperCase()}</span></div>
      {state === "loading" && <p className="equipmentLoading">Loading equipment…</p>}
      {state === "error" && <p className="equipmentLoading isError">{error || "Could not load equipment. Please try again."}</p>}
      {categoryId === "weapons" && state === "ready" && items.length > 0 && <div className="equipmentWeaponMenuHead"><span>Weapon type</span><small>{weaponGroups.length} types</small></div>}
      {state === "ready" && items.length > 0 && (categoryId === "weapons"
        ? <div className="equipmentWeaponSections">
            {weaponGroups.map(([type, groupItems]) => {
              const isOpen = Boolean(openWeaponGroups[type]);
              const panelId = `equipment-weapon-${type.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
              return <section className="equipmentWeaponSection" key={type}>
                <h2><button className="equipmentWeaponSectionToggle" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenWeaponGroups((current) => ({...current, [type]: !current[type]}))}>
                  <ChevronDown aria-hidden="true" className={isOpen ? "isOpen" : ""} />
                  <span>{type}</span><small>{groupItems.length} {groupItems.length === 1 ? "weapon" : "weapons"}</small>
                </button></h2>
                {isOpen && <div id={panelId} className="equipmentItemGrid generalEquipmentGrid">{groupItems.map(renderItemCard)}</div>}
              </section>;
            })}
          </div>
        : <div className="equipmentItemGrid generalEquipmentGrid">{items.map(renderItemCard)}</div>)}
      {state === "ready" && items.length === 0 && <p className="equipmentLoading">{submittedSearch || grade !== "All rarities" ? "No reviewed items match these filters." : "No reviewed entries are available for this slot and region yet."}</p>}
      {state === "ready" && pageInfo.pages > 1 && <div className="equipmentPagination"><button type="button" disabled={pageInfo.page <= 1} onClick={() => setPage((current) => current - 1)}><ChevronLeft aria-hidden="true" />Previous</button><span>Page {pageInfo.page} of {pageInfo.pages}</span><button type="button" disabled={pageInfo.page >= pageInfo.pages} onClick={() => setPage((current) => current + 1)}>Next<ChevronRight aria-hidden="true" /></button></div>}
      <p className="equipmentDataNote">Choose a rarity to narrow the catalog. Select an item to open its information panel. Entries appear as their data is reviewed.</p>
        </section>
        <aside className="equipmentDesktopLoadout" aria-label="Current loadout summary">
          <div className="equipmentDesktopLoadoutHead"><div><span>DAEVEXUS · LOADOUT</span><h2>Loadout Stats</h2></div><div className="equipmentDesktopLoadoutControls"><b>{equippedEntries.length} / {categories.length}<small>equipped</small></b><button className="equipmentDesktopClear" type="button" onClick={clearLoadout} disabled={!equippedEntries.length}>Clear</button></div></div>
          <div className="equipmentDesktopTotals">
            {!equippedEntries.length && <div className="equipmentDesktopTotalsStatus isEmpty" role="status">No items equipped · Select pieces from the Atlas to build your loadout.</div>}
            {loadoutPendingCount > 0 && <div className="equipmentDesktopTotalsStatus" role="status">Updating stats for {loadoutPendingCount} {loadoutPendingCount === 1 ? "piece" : "pieces"}…</div>}
            {loadoutErrorCount > 0 && <div className="equipmentDesktopTotalsStatus isError" role="status">Stats failed to load for {loadoutErrorCount} {loadoutErrorCount === 1 ? "piece" : "pieces"}.</div>}
            {desktopLoadoutGroups.length
              ? desktopLoadoutGroups
              : <p>{loadoutEmptyMessage}</p>}
          </div>
          
          
        </aside>
      </div>
    </section>
    {showLoadout&&<div className="equipmentModalBackdrop" onMouseDown={(event)=>{if(event.target===event.currentTarget)setShowLoadout(false)}}><section className="equipmentLoadoutPanel" role="dialog" aria-modal="true" aria-labelledby="loadoutTitle"><button className="equipmentModalClose" type="button" onClick={()=>setShowLoadout(false)} aria-label="Close loadout stats"><X/></button><span className="equipmentModalEyebrow">DAEVEXUS · EQUIPMENT SUMMARY</span><h2 id="loadoutTitle">Loadout Stats</h2><p className="equipmentLoadoutCount">{equippedEntries.length} of {categories.length} equipment groups selected · {region==="KR_TW"?"Asia / Taiwan":"Global"}</p><div className="equipmentLoadoutTotals">{!equippedEntries.length && <p className="equipmentLoadoutStatus isEmpty" role="status">No items equipped · Select pieces from the Atlas to build your loadout.</p>}{loadoutPendingCount > 0 && <p className="equipmentLoadoutStatus" role="status">Updating stats for {loadoutPendingCount} {loadoutPendingCount === 1 ? "piece" : "pieces"}…</p>}{loadoutErrorCount > 0 && <p className="equipmentLoadoutStatus isError" role="status">Stats failed to load for {loadoutErrorCount} {loadoutErrorCount === 1 ? "piece" : "pieces"}.</p>}{modalLoadoutGroups.length?modalLoadoutGroups:<p>{loadoutEmptyMessage}</p>}</div><h3>Equipped pieces</h3><div className="equipmentLoadoutPieces">{equippedEntries.map(([slot,item])=><button type="button" key={slot} onClick={()=>{setShowLoadout(false);setSelectedItem(item)}}><span>{item.icon?<img src={item.icon} alt=""/>:<EquipmentSlotIcon type={categories.find(x=>x.id===slot)?.icon}/>}</span><div><small>{categories.find(x=>x.id===slot)?.name}</small><strong>{item.name}</strong><em>{item.grade}</em></div></button>)}</div><div className="equipmentLoadoutActions"><button type="button" onClick={clearLoadout}>Clear loadout</button><button type="button" onClick={()=>setShowLoadout(false)}>Continue equipping</button></div></section></div>}
    {selectedItem && <EquipmentModal item={selectedItem} region={region} onClose={closeItem} />}
  </main>;
}
