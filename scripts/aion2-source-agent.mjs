import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(root, "data-agent", "sources.json");
const statePath = process.env.AION2_AGENT_STATE ?? path.join(root, ".agent-state", "state.json");
const reportPath = process.env.AION2_AGENT_REPORT ?? path.join(root, "data-agent", "review", "latest.json");
const requestTimeoutMs = 15_000;
const maxResponseBytes = 5 * 1024 * 1024;

const classificationRules = [
  ["classes", /\bclass(?:es)?\b|직업|클래스|職業|職業/i],
  ["skills", /\bskills?\b|skill balance|스킬|技能/i],
  ["stigmas", /\bstigma(?:s)?\b|스티그마|烙印/i],
  ["equipment", /\b(?:equipment|gear|items?)\b|장비|아이템|裝備|道具/i],
  ["wings", /\bwings?\b|날개|翅膀/i],
  ["pets", /\bpets?\b|펫|寵物/i],
];

function decodeHtml(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function cleanText(html) {
  return decodeHtml(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim());
}

export function classifyTags(title, sourceKind = "") {
  const haystack = `${title} ${sourceKind}`;
  const matches = classificationRules.filter(([, pattern]) => pattern.test(haystack)).map(([tag]) => tag);
  return matches.length ? matches : ["general-update"];
}

function safeOfficialUrl(rawHref, source) {
  try {
    const url = new URL(decodeHtml(rawHref), source.url);
    if (url.protocol !== "https:" || url.hostname !== source.allowedHost) return null;
    if (source.pageType === "board" && !/\/board\/(?:notice|update)\/view\b/i.test(url.pathname)) return null;
    if (source.pageType === "newsroom" && !/\/news\/article\//i.test(url.pathname)) return null;
    return url;
  } catch {
    return null;
  }
}

export function parseOfficialLinks(html, source) {
  const results = new Map();
  if (source.pageType === "newsroom") {
    const newsroomEntryPattern = /"slug"\s*:\s*"(aion2[^"\\]+)"\s*,\s*"title"\s*:\s*"((?:\\.|[^"\\])*)"/gi;
    for (const match of html.matchAll(newsroomEntryPattern)) {
      const slug = match[1];
      let title = match[2];
      try {
        title = JSON.parse(`"${title}"`);
      } catch {
        title = decodeHtml(title);
      }
      const url = new URL(`/en/news/article/${encodeURIComponent(slug)}`, source.url);
      const item = {
        key: `${source.id}:${slug}`,
        sourceId: source.id,
        sourceName: source.name,
        region: source.region,
        kind: source.kind,
        title,
        url: url.toString(),
        tags: classifyTags(title, source.kind),
      };
      results.set(item.key, item);
    }
  }

  const anchorPattern = /<a\b([^>]*?)href\s*=\s*(["'])(.*?)\2([^>]*)>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorPattern.exec(html))) {
    const [, beforeHref, , href, afterHref, inner] = match;
    const url = safeOfficialUrl(href, source);
    if (!url) continue;

    const title = cleanText(inner) || cleanText(`${beforeHref} ${afterHref}`.replace(/.*?(?:aria-label|title)\s*=\s*(["'])(.*?)\1.*/i, "$2"));
    const hasArticleId = url.searchParams.has("articleId");
    const isNewsroomArticle = source.pageType === "newsroom" && /aion\s*2/i.test(`${title} ${url.pathname}`);
    if (source.pageType === "board" && !hasArticleId) continue;
    if (source.pageType === "newsroom" && !isNewsroomArticle) continue;

    const canonicalUrl = url.toString();
    const id = url.searchParams.get("articleId") || canonicalUrl;
    const key = `${source.id}:${id}`;
    if (!results.has(key)) {
      results.set(key, {
        key,
        sourceId: source.id,
        sourceName: source.name,
        region: source.region,
        kind: source.kind,
        title: title || `Official notice ${id}`,
        url: canonicalUrl,
        tags: classifyTags(title, source.kind),
      });
    }
  }
  return [...results.values()];
}

async function fetchSource(source) {
  const url = new URL(source.url);
  if (url.protocol !== "https:" || url.hostname !== source.allowedHost) {
    throw new Error("Source URL does not match its HTTPS host allowlist.");
  }

  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": "AION2-VISION-Source-Monitor/1.0 (official announcement metadata only)",
    },
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
    throw new Error(`Unexpected content type: ${contentType || "unknown"}`);
  }

  const body = await response.arrayBuffer();
  if (body.byteLength > maxResponseBytes) throw new Error("Page exceeded the 5 MiB safety limit.");
  const html = new TextDecoder().decode(body);
  const items = parseOfficialLinks(html, source);
  return {
    sourceId: source.id,
    name: source.name,
    region: source.region,
    status: items.length ? "ok" : source.pageType === "board" ? "needs-adapter" : "no-articles-detected",
    note: items.length ? undefined : source.pageType === "board"
      ? "The official board renders its article list client-side; this monitor will not guess its private list endpoint."
      : "No matching AION2 articles were found in this page response.",
    found: items.length,
    items,
  };
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

export async function runAgent({ registry, state = { seen: [] }, fetcher = fetchSource } = {}) {
  const sourceRegistry = registry || JSON.parse(await fs.readFile(registryPath, "utf8"));
  const sources = sourceRegistry.sources.filter((source) => source.kind.startsWith("official-"));
  const checkedAt = new Date().toISOString();
  const results = await Promise.all(sources.map(async (source) => {
    try {
      return await fetcher(source);
    } catch (error) {
      return {
        sourceId: source.id,
        name: source.name,
        region: source.region,
        status: "error",
        error: error?.message || "Unknown fetch error",
        found: 0,
        items: [],
      };
    }
  }));

  const isBaselineRun = state.initialized !== true;
  const previouslySeen = new Set(state.seen || []);
  const allItems = results.flatMap((result) => result.items);
  // First run establishes a baseline; old newsroom stories are not presented as fresh news.
  const newItems = isBaselineRun ? [] : allItems.filter((item) => !previouslySeen.has(item.key));
  const nextSeen = [...new Set([...previouslySeen, ...allItems.map((item) => item.key)])].slice(-5000);
  const report = {
    generatedAt: checkedAt,
    mode: "monitor-and-review",
    automaticCatalogWrites: false,
    summary: {
      sourcesChecked: results.length,
      sourcesAvailable: results.filter((result) => result.status === "ok").length,
      newAnnouncements: newItems.length,
      baselineItems: isBaselineRun ? allItems.length : 0,
      sourcesNeedingAdapter: results.filter((result) => result.status === "needs-adapter").length,
    },
    sources: results.map(({ items, ...source }) => source),
    newItems,
    recentOfficialItems: allItems,
    communityReferences: sourceRegistry.communityReferences,
  };

  return { report, nextState: { initialized: true, updatedAt: checkedAt, seen: nextSeen } };
}

async function main() {
  const registry = JSON.parse(await fs.readFile(registryPath, "utf8"));
  const state = await readJson(statePath, { seen: [] });
  const { report, nextState } = await runAgent({ registry, state });

  await fs.mkdir(path.dirname(statePath), { recursive: true });
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(statePath, `${JSON.stringify(nextState, null, 2)}\n`);
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const newEntries = report.summary.baselineItems
      ? `Initial baseline saved (${report.summary.baselineItems} existing official announcements); future runs will show only newly detected records.`
      : report.newItems.length
      ? report.newItems.map((item) => `- **${item.region} · ${item.tags.join(", ")}** [${item.title}](${item.url})`).join("\n")
      : "No new official announcements were found.";
    const sourceRows = report.sources.map((source) => `| ${source.region} | ${source.name} | ${source.status} | ${source.found ?? 0}${source.note ? ` — ${source.note}` : source.error ? ` — ${source.error}` : ""} |`).join("\n");
    const summary = `## AION2 source agent\n\nChecked ${report.generatedAt}. It records official announcement metadata only; it does not edit game catalog data.\n\n### New announcements\n${newEntries}\n\n### Sources\n| Region | Source | Status | Found |\n|---|---|---:|---:|\n${sourceRows}\n`;
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
  }

  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
  if (report.sources.every((source) => source.status === "error")) {
    throw new Error("Every official source failed. State was saved, but the scheduled run should be marked failed.");
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
