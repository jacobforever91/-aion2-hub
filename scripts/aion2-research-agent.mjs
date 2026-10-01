import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(root, "data-agent", "research-sources.json");
const statePath = process.env.AION2_RESEARCH_STATE ?? path.join(root, ".agent-state", "research-state.json");
const reportPath = process.env.AION2_RESEARCH_REPORT ?? path.join(root, "data-agent", "review", "research-latest.json");
const requestTimeoutMs = 15_000;

const rules = [
  ["skill-levels", /skill.?level|level.?skill|myskilllist|0x5100|baseskilllevel|effectivelevel/i],
  ["skill-effects", /skilleffect|skill.?effect|damage.?coefficient|damage.?formula|coefficient/i],
  ["skills", /\bskills?\b|skill[_/-]/i],
  ["stigmas", /\bstigmas?\b/i],
  ["equipment", /\bequipment\b|\bgear\b|item.?detail/i],
  ["daevanion", /daevanion/i],
  ["arcana", /arcana/i],
  ["wings", /\bwings?\b/i],
  ["pets", /petwing|\bpets?\b/i],
  ["cooldown", /cooldown|cooltime/i],
  ["packet-protocol", /packet|opcode|parser|capture|0x[0-9a-f]{2,}/i],
  ["official-api", /plaync|official.?api|character.?equipment|character.?daevanion/i],
];

export function classifyResearch(message = "", files = []) {
  const haystack = `${message} ${files.join(" ")}`;
  return rules.filter(([, pattern]) => pattern.test(haystack)).map(([tag]) => tag);
}

export function priorityFor(tags) {
  if (tags.includes("skill-levels") || tags.includes("skill-effects")) return "high";
  if ((tags.includes("skills") || tags.includes("stigmas")) && tags.includes("packet-protocol")) return "high";
  if (tags.some((tag) => ["skills","stigmas","equipment","daevanion","arcana","wings","pets","official-api"].includes(tag))) return "medium";
  return "low";
}

async function githubJson(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "DAEVEXUS-Research-Scout/1.0"
    },
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  if (!response.ok) throw new Error(`GitHub HTTP ${response.status}`);
  return response.json();
}

async function fetchSource(source, seen = []) {
  const list = await githubJson(`https://api.github.com/repos/${source.repository}/commits?per_page=20`);
  const known = new Set(seen);
  const isBaseline = seen.length === 0;
  const newRows = isBaseline ? [] : list.filter((row) => !known.has(row.sha)).slice(0, 5);
  const detailed = [];

  for (const row of newRows) {
    const detail = await githubJson(`https://api.github.com/repos/${source.repository}/commits/${row.sha}`);
    const files = (detail.files || []).map((file) => file.filename);
    const message = row.commit?.message || "";
    const tags = classifyResearch(message, files);
    detailed.push({
      sha: row.sha,
      repository: source.repository,
      region: source.region,
      message: message.split("\n")[0],
      committedAt: row.commit?.committer?.date || row.commit?.author?.date || null,
      url: row.html_url,
      files,
      tags,
      priority: priorityFor(tags),
    });
  }

  return {
    sourceId: source.id,
    repository: source.repository,
    region: source.region,
    status: "ok",
    baseline: isBaseline,
    latestSha: list[0]?.sha || null,
    recentShas: list.map((row) => row.sha),
    newCommits: detailed,
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

export async function runResearchAgent({ registry, state = { seenBySource: {} }, sourceFetcher = fetchSource } = {}) {
  const sourceRegistry = registry || JSON.parse(await fs.readFile(registryPath, "utf8"));
  const checkedAt = new Date().toISOString();
  const results = [];

  for (const source of sourceRegistry.sources) {
    try {
      results.push(await sourceFetcher(source, state.seenBySource?.[source.id] || []));
    } catch (error) {
      results.push({
        sourceId: source.id,
        repository: source.repository,
        region: source.region,
        status: "error",
        error: error?.message || "Unknown error",
        recentShas: state.seenBySource?.[source.id] || [],
        newCommits: [],
      });
    }
  }

  const newCommits = results.flatMap((result) => result.newCommits || []);
  const reviewCandidates = newCommits
    .filter((item) => item.priority !== "low")
    .sort((a, b) => ({high:0,medium:1,low:2}[a.priority] - ({high:0,medium:1,low:2}[b.priority]));

  const nextSeenBySource = {...(state.seenBySource || {})};
  for (const result of results) {
    if (result.status === "ok") {
      nextSeenBySource[result.sourceId] = result.recentShas.slice(0, 50);
    }
  }

  const report = {
    generatedAt: checkedAt,
    mode: "research-scout",
    automaticCatalogWrites: false,
    dataCopiedFromResearchRepos: false,
    summary: {
      sourcesChecked: results.length,
      sourcesAvailable: results.filter((result) => result.status === "ok").length,
      newCommits: newCommits.length,
      reviewCandidates: reviewCandidates.length,
      highPriority: reviewCandidates.filter((item) => item.priority === "high").length,
    },
    divisionOfLabor: {
      helper: "Find new public research leads and classify them without changing production data.",
      chatgpt: "Validate high-value leads against independent sources/client evidence before promotion to DAEVEXUS.",
    },
    sources: results.map(({newCommits: _newCommits, recentShas: _recentShas, ...rest}) => rest),
    reviewCandidates,
    newCommits,
  };

  return {
    report,
    nextState: {initialized: true, updatedAt: checkedAt, seenBySource: nextSeenBySource},
  };
}

async function main() {
  const registry = JSON.parse(await fs.readFile(registryPath, "utf8"));
  const state = await readJson(statePath, {seenBySource: {}});
  const {report, nextState} = await runResearchAgent({registry, state});

  await fs.mkdir(path.dirname(statePath), {recursive:true});
  await fs.mkdir(path.dirname(reportPath), {recursive:true});
  await fs.writeFile(statePath, `${JSON.stringify(nextState, null, 2)}\n`);
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const candidates = report.reviewCandidates.length
      ? report.reviewCandidates.map((item) => `- **${item.priority.toUpperCase()} · ${item.repository} · ${item.tags.join(", ")}** [${item.message}](${item.url})`).join("\n")
      : "No new research candidates were found.";
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY,
      `\n## DAEVEXUS research scout\n\nMetadata-only watch. No production catalogs are edited.\n\n### Review candidates\n${candidates}\n`);
  }

  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
  if (report.summary.sourcesAvailable === 0) {
    throw new Error("Every research source failed.");
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
