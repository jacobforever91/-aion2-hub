import {skillIconIds} from "../../../classes/classData.js";
import {stigmaCatalog} from "../../../stigmas/stigmaData.js";

const stigmaSkillIds = Object.values(stigmaCatalog).flat().map(({id}) => id);
const validSkillIds = new Set([...Object.values(skillIconIds).flat(), ...stigmaSkillIds, "12410000"]);

function decodeHtml(value) {
  return value
    .replace(/<!--\s*-->/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function readSection(html, title) {
  const start = html.indexOf(`>${title}</h2>`);
  if (start < 0) return "";
  const end = html.indexOf("</section>", start);
  return html.slice(start, end < 0 ? undefined : end);
}

function readPairs(html, rowPattern, labelMap) {
  const pairs = [];
  for (const [, row] of html.matchAll(rowPattern)) {
    const spans = [...row.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/g)].map((match) => decodeHtml(match[1]));
    if (spans.length < 2 || !spans[0] || !spans[1]) continue;
    pairs.push({label: labelMap[spans[0]] || spans[0], value: spans[1]});
  }
  return pairs;
}

const statLabels = {Damage: "Damage", Heal: "Healing", Cooldown: "Cooldown", MP: "MP", HP: "HP", DP: "DP", "Cast time": "Cast Time"};
const detailLabels = {Type: "Type", "Damage type": "Damage Type", Weapon: "Weapon", Range: "Range", Max: "Max Level", "Required level": "Required Level", Duration: "Duration", Target: "Target"};

function parseSkillPage(html, skillId) {
  const descriptionMatch = html.match(/class="[^"]*whitespace-pre-line[^"]*"[^>]*>\s*<span>([\s\S]*?)<\/span>/);
  const propertiesMatch = html.match(/<p class="text-xs text-amber[^\"]*whitespace-pre-line[^\"]*">\s*<span>([\s\S]*?)<\/span>/);
  const statsHtml = html.match(/<div class="flex flex-wrap gap-1\.5 mt-3">([\s\S]*?)<\/section>/)?.[1] || "";
  const detailsHtml = readSection(html, "Details");
  const specialtyHtml = readSection(html, "Specialty");
  const chainHtml = readSection(html, "Chain");
  const headerMeta = html.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*<div class="flex flex-wrap items-center gap-2 mt-1\.5[^\"]*">([\s\S]*?)<\/div>/)?.[1] || "";
  const headerValues = [...headerMeta.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/g)].map((match) => decodeHtml(match[1]).replace(/^·\s*/, "")).filter(Boolean);
  const stats = [...statsHtml.matchAll(/<span class="text-gray-500[^\"]*">([^<]*)<\/span>\s*<span class="font-semibold[^\"]*">([^<]*)<\/span>/g)].map(([, label, value]) => ({label: statLabels[decodeHtml(label)] || decodeHtml(label), value: decodeHtml(value)}));
  const levelsMatch = html.match(/\\"levels\\":(\[\{[\s\S]*?\}\]),\\"specs\\"/);
  let levels = [];
  let descriptionTemplate = "";
  if (levelsMatch) {
    try {
      levels = JSON.parse(levelsMatch[1].replace(/\\"/g, '"'));
      const dataTail = html.slice(levelsMatch.index);
      const templateMatch = dataTail.match(/\\"description\\":\\"((?:\\\\.|[^\\"])*)\\",\\"properties\\"/);
      if (templateMatch) descriptionTemplate = JSON.parse(`"${templateMatch[1]}"`);
    } catch {
      levels = [];
    }
  }
  const specialties = [...specialtyHtml.matchAll(/<div class="flex items-start gap-2[^\"]*">([\s\S]*?)<\/div>/g)].map(([, row]) => {
    const levelText = row.match(/<span class="flex-shrink-0 px-1\.5[^\"]*">([\s\S]*?)<\/span>/)?.[1] || "";
    const effectStart = row.indexOf('class="text-sm text-gray');
    const effectOpenEnd = effectStart >= 0 ? row.indexOf(">", effectStart) + 1 : -1;
    const effectEnd = row.lastIndexOf("</span>");
    const effectHtml = effectOpenEnd >= 0 && effectEnd >= effectOpenEnd ? row.slice(effectOpenEnd, effectEnd) : "";
    return {level: Number(decodeHtml(levelText).match(/\d+/)?.[0] || 0), description: decodeHtml(effectHtml)};
  }).filter((entry) => entry.description);
  const chainNames = [...chainHtml.matchAll(/<span class="text-sm [^\"]*">([\s\S]*?)<\/span>\s*<span class="text-\[10px\][^\"]*">([\s\S]*?)<\/span>/g)];
  const chainIcons = [...chainHtml.matchAll(/<img src="([^\"]+)"[^>]*>/g)].map(([, src]) => src);
  const chainIds = [...chainHtml.matchAll(/href="\/(?:es\/)?db\/skills\/(\d{8})"/g)].map(([, skillId]) => skillId);
  const chain = chainNames.map(([, name, step], index) => ({
    name: decodeHtml(name),
    step: decodeHtml(step),
    id: index === 0 ? skillId : chainIds[index - 1] || "",
    icon: chainIcons[index] ? new URL(chainIcons[index], "https://aion2.app").href : "",
  })).filter((entry) => entry.name);

  return {
    description: descriptionMatch ? decodeHtml(descriptionMatch[1]) : "",
    properties: propertiesMatch ? decodeHtml(propertiesMatch[1]) : "",
    stats,
    specialties,
    chain,
    levels,
    descriptionTemplate,
    details: readPairs(detailsHtml, /<div class="flex items-baseline justify-between[^\"]*">([\s\S]*?)<\/div>/g, detailLabels),
    category: headerValues[1] || "",
    mastery: headerValues[2] || "",
    requiredLevel: headerValues.find((value) => /Required level/i.test(value))?.match(/\d+/)?.[0] || "",
  };
}

export async function GET(_request, {params}) {
  const {id} = await params;
  if (!/^\d{8}$/.test(id) || !validSkillIds.has(id)) {
    return Response.json({error: "Skill not found."}, {status: 404});
  }

  try {
    const response = await fetch(`https://aion2.app/db/skills/${id}`, {
      next: {revalidate: 3600},
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Skill source returned ${response.status}`);

    const html = await response.text();
    const skill = parseSkillPage(html, id);
    if (!skill.description) throw new Error("Skill description was not found");

    return Response.json(skill);
  } catch {
    return Response.json({error: "Could not load skill details."}, {status: 502});
  }
}
