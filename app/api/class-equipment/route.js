import {classList} from "../../classes/classData.js";
import equipmentData from "../../classes/equipmentData.json";

const source = "https://aion2hub.com";
const gradeOptions = new Set(["Common", "Rare", "Epic", "Unique", "Heroic", "Special", "Mythic"]);
const classNames = new Map(classList.map(({slug, name}) => [slug, name]));
const sourceClassNames = new Map([["spiritmaster", "Elementalist"]]);

export const maxDuration = 30;

async function readSource(path) {
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(`${source}${path}`, {
        headers: {"user-agent": "Mozilla/5.0 (compatible; AION2HubClassGuide/1.0)", accept: "text/html"},
        next: {revalidate: 900},
        signal: AbortSignal.timeout(12_000),
      });
      if (response.ok) return response.text();
      lastError = new Error(`Item source returned ${response.status}`);
      if (response.status < 500) break;
    } catch (error) {
      lastError = error;
    }
    if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 350));
  }
  throw lastError || new Error("Item source request failed.");
}

function plain(value) {
  return (value || "")
    .replace(/<!--\s*-->/g, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&#x27;/gi, "'").replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, " ").trim();
}

function getClassCategories(html) {
  const categories = [];
  const categoryLinks = /<a\b[^>]*href="([^"]*\/database\?view=class[^"]*&(?:amp;)?sc=[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  for (const [, href, body] of html.matchAll(categoryLinks)) {
    const url = new URL(href.replace(/&amp;/g, "&"), source);
    const category = url.searchParams.get("sc");
    const title = plain(body.match(/<span\b[^>]*class="[^"]*font-cinzel[^"]*"[^>]*>([\s\S]*?)<\/span>/i)?.[1]);
    const imageId = body.match(/<img\b[^>]*src="[^"]*items\/(\d+)/i)?.[1] || "";
    const bodyText = plain(body);
    const count = bodyText.match(/([\d,]+)\s+items?/i)?.[1] || "0";
    const isWeapon = bodyText.includes("Your weapon");
    if (!category || !title) continue;
    categories.push({code: category, name: title, count, icon: imageId ? `${source}/api/icon/items/${imageId}` : "", group: isWeapon ? "Weapon" : ["Amulet", "Belt", "Bracelet", "Brooch", "Earring", "Necklace", "Pendant", "Ring", "Seal"].includes(category) ? "Accessories" : "Armor"});
  }
  return categories;
}

function getPageInfo(html) {
  const match = plain(html).match(/([\d,]+)\s+items?\s*[·•]\s*page\s+(\d+)\s+of\s+(\d+)/i);
  return match ? {total: Number(match[1].replaceAll(",", "")), page: Number(match[2]), pages: Number(match[3])} : {total: 0, page: 1, pages: 1};
}

function getItems(html) {
  const items = [];
  for (const [, attributes, id, anchor] of html.matchAll(/<a\b([^>]*href="\/database\/items\/(\d+)"[^>]*)>([\s\S]*?)<\/a>/gi)) {
    const title = attributes.match(/\btitle="([^"]+)"/i)?.[1];
    const labels = [...anchor.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([, value]) => plain(value)).filter(Boolean);
    const name = title || labels.find((label) => !gradeOptions.has(label) && !/^(?:GLOBAL|KR\/TW)$/i.test(label)) || plain(anchor);
    const grade = labels.find((label) => gradeOptions.has(label)) || "";
    const iconPath = anchor.match(/<img\b[^>]*src="([^"]+)"/i)?.[1] || `/api/icon/items/${id}`;
    items.push({id, name, grade, icon: iconPath.startsWith("http") ? iconPath : `${source}${iconPath}`});
  }
  return items;
}

function readPairs(listHtml) {
  if (!listHtml) return [];
  const pairs = [];
  for (const [, row] of listHtml.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)) {
    const values = [...row.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([, value]) => plain(value)).filter(Boolean);
    if (values.length > 1) pairs.push({label: values[0], value: values[1]});
  }
  return pairs;
}

function getItemInfo(html, id) {
  const name = plain(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
  const headerEnd = html.indexOf(">Stats</div>");
  const headerStart = html.indexOf("<h1");
  const header = headerStart >= 0 && headerEnd > headerStart ? html.slice(headerStart, headerEnd) : "";
  const properties = [...header.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([, value]) => plain(value)).filter(Boolean);
  const listAfter = (pattern) => {
    const match = html.match(pattern);
    return match?.[1] || "";
  };
  const stats = readPairs(listAfter(/>Stats<\/div>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i));
  const imprints = readPairs(listAfter(/>Soul Imprint\s*(?:<span\b[^>]*>[\s\S]*?<\/span>)?<\/div>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i));

  const infoStart = html.indexOf(">Item Info</h2>");
  const infoEnd = infoStart >= 0 ? html.indexOf("</dl>", infoStart) : -1;
  const infoHtml = infoStart >= 0 && infoEnd > infoStart ? html.slice(infoStart, infoEnd) : "";
  const details = [];
  for (const [, row] of infoHtml.matchAll(/<div\b[^>]*>([\s\S]*?)<\/div>/gi)) {
    const label = plain(row.match(/<dt\b[^>]*>([\s\S]*?)<\/dt>/i)?.[1]);
    const value = plain(row.match(/<dd\b[^>]*>([\s\S]*?)<\/dd>/i)?.[1]);
    if (label && value) details.push({label, value});
  }
  const upgradesStart = html.indexOf(">Upgrades</h2>");
  const obtainStart = html.indexOf(">How to Obtain</h2>", upgradesStart);
  const upgrades = upgradesStart >= 0 && obtainStart > upgradesStart ? plain(html.slice(upgradesStart, obtainStart)).replace(/^>?\s*Upgrades\s*/i, "") : "";
  const obtain = [];
  if (obtainStart >= 0) {
    const obtainHtml = html.slice(obtainStart + 22);
    for (const [, row] of obtainHtml.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)) {
      const value = plain(row);
      if (value) obtain.push(value);
      if (obtain.length === 3) break;
    }
  }
  const itemLevel = properties.find((value) => /^Item Lv\s*\d+/i.test(value))?.match(/\d+/)?.[0] || "";
  const requiredLevel = properties.find((value) => /^Requires Lv\s*\d+/i.test(value))?.match(/\d+/)?.[0] || "";
  const rarity = properties.find((value) => gradeOptions.has(value)) || "";
  const equipType = properties.find((value) => /^(MainHand|OffHand)$/i.test(value)) || "";
  const itemType = properties.find((value) => /^(Sword|Greatsword|Dagger|Bow|Spellbook|Orb|Mace|Staff|Shield|Helmet|Torso|Breastplate|Shoulder|Pauldrons|Boots|Gloves|Pants|Cape|Cloak|Ring|Earring|Necklace|Bracelet|Brooch|Accessory|Armor)$/i.test(value)) || "";
  return {id, name, rarity, itemLevel, requiredLevel, equipType, itemType, stats, imprints, details, upgrades, obtain};
}

const equipmentFamilies = new Set(["Weapons", "Armor", "Accessories"]);
const equipmentSlots = {
  Armor: new Set(["Helmet", "Torso", "Shoulder", "Gloves", "Pants", "Boots", "Cape"]),
  Accessories: new Set(["Necklace", "Earring", "Ring", "Bracelet", "Brooch"]),
};
const slotAliases = {
  Helmet: ["helmet"], Torso: ["torso", "breastplate", "chest"], Shoulder: ["shoulder", "pauldrons"],
  Gloves: ["gloves", "glove"], Pants: ["pants", "greaves", "leggings"], Boots: ["boots", "boot"], Cape: ["cape", "cloak"],
  Necklace: ["necklace"], Earring: ["earring", "earrings"], Ring: ["ring", "rings"], Bracelet: ["bracelet"], Brooch: ["brooch"],
};
const equipmentArt = {Weapons: "/equipment-art/weapon.webp", Armor: "/equipment-art/armor.webp", Accessories: "/equipment-art/accessory.webp"};

function localGeneralItems(category, slot) {
  return equipmentData.items.filter((item) => {
    if (!slot) return category === "Weapons" && item.group === "Weapon";
    const aliases = slotAliases[slot] || [];
    return aliases.includes(String(item.category || "").toLowerCase()) || aliases.includes(String(item.equipType || "").toLowerCase());
  });
}

async function getGeneralEquipment(request) {
  const params = new URL(request.url).searchParams;
  const category = params.get("category") || "Weapons";
  const slot = params.get("slot") || "";
  const region = params.get("region") || "GLOBAL";
  const itemId = params.get("item");
  const grade = params.get("grade") || "";
  const search = (params.get("q") || "").trim().slice(0, 80);
  if (!equipmentFamilies.has(category)) return Response.json({error: "Unknown equipment type."}, {status: 400});
  if (!["GLOBAL", "KR_TW"].includes(region)) return Response.json({error: "Unknown data region."}, {status: 400});
  if (category === "Weapons" ? Boolean(slot) : !equipmentSlots[category]?.has(slot)) return Response.json({error: "Unknown equipment slot."}, {status: 400});
  if (grade && !gradeOptions.has(grade)) return Response.json({error: "Unknown rarity."}, {status: 400});
  if (itemId) {
    if (!/^\d{8,12}$/.test(itemId)) return Response.json({error: "Invalid item."}, {status: 400});
    const item = region === "GLOBAL" ? equipmentData.items.find((entry) => entry.id === itemId) : null;
    if (!item) return Response.json({error: "This item is not in the reviewed local catalog yet."}, {status: 404});
    return Response.json({...item, rarity: item.grade, region, official: false});
  }

  const filtered = (region === "GLOBAL" ? localGeneralItems(category, slot) : []).filter((item) =>
    (!grade || item.grade === grade) && (!search || item.name.toLowerCase().includes(search.toLowerCase()))
  );
  return Response.json({
    region, category, slot,
    items: filtered.map(({id, name, grade}) => ({id, name, grade, category, family: category, icon: equipmentArt[category]})),
    total: filtered.length, page: 1, pages: 1, source: "reviewed-local-snapshot",
  });
}

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  if (params.get("view") === "general") return getGeneralEquipment(request);
  const slug = params.get("class") || "";
  const className = classNames.get(slug);
  if (!className) return Response.json({error: "Unknown class."}, {status: 400});
  const sourceClassName = sourceClassNames.get(slug) || className;

  const category = params.get("category");
  const page = Math.max(1, Math.min(99, Number(params.get("page")) || 1));
  const grade = params.get("grade");
  const search = (params.get("q") || "").trim().slice(0, 80);
  const itemId = params.get("item");

  // A reviewed local snapshot keeps the first Templar weapon available even
  // when the community reference is unreachable from serverless deployments.
  const localItems = equipmentData.items.filter((item) => item.class === slug);
  if (localItems.length) {
    if (itemId) {
      if (!/^\d{8,12}$/.test(itemId)) return Response.json({error: "Invalid item."}, {status: 400});
      const item = localItems.find((entry) => entry.id === itemId);
      if (!item) return Response.json({error: "This item is not in the reviewed local catalog yet."}, {status: 404});
      return Response.json(item);
    }

    const categories = [...new Set(localItems.map(({category}) => category))].map((name) => ({
      code: name,
      name,
      count: String(localItems.filter((item) => item.category === name).length),
      group: localItems.find((item) => item.category === name)?.group || "Armor",
    }));
    if (!category) return Response.json({className, categories, source: "reviewed-local-snapshot"});
    const categoryItems = localItems.filter((item) => item.category === category);
    if (!categoryItems.length) return Response.json({className, category, items: [], total: 0, page: 1, pages: 1, source: "reviewed-local-snapshot"});
    const filteredItems = categoryItems.filter((item) =>
      (!grade || grade === "All grades" || item.grade === grade) &&
      (!search || item.name.toLowerCase().includes(search.toLowerCase()))
    );
    return Response.json({
      className,
      category,
      items: filteredItems.map(({id, name, grade}) => ({id, name, grade})),
      total: filteredItems.length,
      page: 1,
      pages: 1,
      source: "reviewed-local-snapshot",
    });
  }

  try {
    if (itemId) {
      if (!/^\d{8,12}$/.test(itemId)) return Response.json({error: "Invalid item."}, {status: 400});
      const itemHtml = await readSource(`/database/items/${itemId}`);
      const item = getItemInfo(itemHtml, itemId);
      if (!item.name) return Response.json({error: "Item not found."}, {status: 404});
      return Response.json(item);
    }

    const url = new URL("/database", source);
    url.searchParams.set("view", "class");
    url.searchParams.set("cls", sourceClassName);
    if (category) {
      if (!/^[A-Za-z]+$/.test(category)) return Response.json({error: "Invalid equipment slot."}, {status: 400});
      url.searchParams.set("sc", category);
      if (grade && gradeOptions.has(grade)) url.searchParams.set("grade", grade);
      if (search) url.searchParams.set("q", search);
      if (page > 1) url.searchParams.set("page", String(page));
    }
    const html = await readSource(`${url.pathname}${url.search}`);
    if (!category) return Response.json({className, categories: getClassCategories(html), source: source});
    const items = getItems(html);
    const info = getPageInfo(html);
    return Response.json({className, category, items, ...info, source});
  } catch (error) {
    console.error("Class equipment lookup failed:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const message = errorMessage.includes("403")
      ? "The equipment source is currently rejecting requests from this site (HTTP 403)."
      : "The equipment database is temporarily unavailable. Please try again later.";
    return Response.json({error: message}, {status: 502});
  }
}
