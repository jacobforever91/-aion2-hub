const source = "https://aion2hub.com";
const validCategories = new Set(["Weapons", "Armor", "Accessories"]);
const validGrades = new Set(["Common", "Rare", "Epic", "Unique", "Heroic", "Special", "Mythic"]);

export const maxDuration = 30;

async function readSource(path) {
  const response = await fetch(`${source}${path}`, {
    headers: {"user-agent": "Mozilla/5.0 (compatible; AION2VisionEquipmentCatalog/1.0)", accept: "text/html"},
    next: {revalidate: 900},
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`The community item catalog returned ${response.status}.`);
  return response.text();
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

function getPageInfo(html) {
  const match = plain(html).match(/([\d,]+)\s+items?\s*[·•]\s*page\s+(\d+)\s+of\s+(\d+)/i);
  return match ? {total: Number(match[1].replaceAll(",", "")), page: Number(match[2]), pages: Number(match[3])} : {total: 0, page: 1, pages: 1};
}

function getItems(html, category) {
  const items = [];
  for (const [, id, anchor] of html.matchAll(/<a\b[^>]*href="\/database\/items\/(\d+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    const title = anchor.match(/\btitle="([^"]+)"/i)?.[1];
    const labels = [...anchor.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([, value]) => plain(value)).filter(Boolean);
    const name = plain(title || labels.at(-2) || anchor);
    const grade = labels.find((label) => validGrades.has(label)) || "";
    const sourceIcon = anchor.match(/<img\b[^>]*src="([^"]+)"/i)?.[1] || "";
    const iconPath = sourceIcon.startsWith("http") ? sourceIcon : sourceIcon ? `${source}${sourceIcon}` : `${source}/api/icon/items/${id}`;
    if (name && grade) items.push({id, name, grade, category, icon: iconPath});
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
  const headerStart = html.indexOf("<h1");
  const headerEnd = html.indexOf(">Stats</div>");
  const header = headerStart >= 0 && headerEnd > headerStart ? html.slice(headerStart, headerEnd) : "";
  const properties = [...header.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/gi)].map(([, value]) => plain(value)).filter(Boolean);
  const sectionList = (pattern) => html.match(pattern)?.[1] || "";
  const stats = readPairs(sectionList(/>Stats<\/div>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i));
  const imprints = readPairs(sectionList(/>Soul Imprint\s*(?:<span\b[^>]*>[\s\S]*?<\/span>)?<\/div>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i));

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
      if (obtain.length === 4) break;
    }
  }

  const itemLevel = properties.find((value) => /^Item Lv\s*\d+/i.test(value))?.match(/\d+/)?.[0] || "";
  const requiredLevel = properties.find((value) => /^Requires Lv\s*\d+/i.test(value))?.match(/\d+/)?.[0] || "";
  const rarity = properties.find((value) => validGrades.has(value)) || "";
  const equipType = properties.find((value) => /^(MainHand|OffHand)$/i.test(value)) || "";
  const itemType = properties.find((value) => /^(Sword|Longsword|Greatsword|Dagger|Bow|Spellbook|Orb|Mace|Staff|Guard|Shield|Helmet|Boots|Gloves|Pants|Cape|Ring|Earring|Necklace|Accessory|Armor)$/i.test(value)) || "";
  const knownClasses = ["Templar", "Gladiator", "Assassin", "Ranger", "Sorcerer", "Spiritmaster", "Cleric", "Chanter", "Brawler"];
  const classRestrictions = properties.filter((value) => knownClasses.includes(value)).join(", ");
  return {id, name, rarity, itemLevel, requiredLevel, equipType, itemType, classRestrictions, stats, imprints, details, upgrades, obtain};
}

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  const itemId = params.get("item");
  const region = params.get("region") || "GLOBAL";
  if (!["GLOBAL", "KR_TW"].includes(region)) return Response.json({error: "Unknown data region."}, {status: 400});

  try {
    if (itemId) {
      if (!/^\d{8,12}$/.test(itemId)) return Response.json({error: "Invalid item."}, {status: 400});
      const html = await readSource(`/database/items/${itemId}${region === "KR_TW" ? "?region=kr" : ""}`);
      const item = getItemInfo(html, itemId);
      if (!item.name) return Response.json({error: "Item not found."}, {status: 404});
      return Response.json({...item, region, official: false});
    }

    const category = params.get("category") || "Weapons";
    if (!validCategories.has(category)) return Response.json({error: "Unknown equipment type."}, {status: 400});
    const grade = params.get("grade") || "";
    if (grade && !validGrades.has(grade)) return Response.json({error: "Unknown rarity."}, {status: 400});
    const page = Math.max(1, Math.min(999, Number(params.get("page")) || 1));
    const search = (params.get("q") || "").trim().slice(0, 80);
    const url = new URL("/database", source);
    url.searchParams.set("cat", category);
    if (region === "KR_TW") url.searchParams.set("region", "kr");
    if (grade) url.searchParams.set("grade", grade);
    if (search) url.searchParams.set("q", search);
    if (page > 1) url.searchParams.set("page", String(page));

    const html = await readSource(`${url.pathname}${url.search}`);
    const items = getItems(html, category);
    return Response.json({region, category, items, ...getPageInfo(html), source: "unofficial-community-reference"});
  } catch (error) {
    return Response.json({error: error.message || "The equipment catalog is temporarily unavailable."}, {status: 502});
  }
}
