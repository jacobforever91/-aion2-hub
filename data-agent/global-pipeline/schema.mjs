export const ENTITY_TYPES = Object.freeze([
  "equipment",
  "skill",
  "stigma",
  "wing",
  "pet",
  "arcana",
  "daevanion",
]);

export const GLOBAL_SHARDS = Object.freeze(["nae", "naw", "eu", "sa", "asia"]);

export const SOURCE_KINDS = Object.freeze([
  "official-api",
  "official-notice",
  "client-extraction",
  "network-observation",
  "community-cross-check",
  "manual-lab",
]);

export const CONFIDENCE_LEVELS = Object.freeze([
  "unverified",
  "observed",
  "cross-checked",
  "verified",
  "rejected",
]);

const blockedKeys = new Set(["__proto__", "prototype", "constructor"]);

function cleanString(value, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cloneSafe(value, depth = 0) {
  if (depth > 12) return null;
  if (value == null || typeof value === "string" || typeof value === "boolean") return value;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (Array.isArray(value)) return value.slice(0, 5000).map((entry) => cloneSafe(entry, depth + 1));
  if (typeof value !== "object") return null;

  const out = {};
  for (const [key, child] of Object.entries(value)) {
    if (blockedKeys.has(key)) continue;
    out[key.slice(0, 120)] = cloneSafe(child, depth + 1);
  }
  return out;
}

function normalizeIso(value, fallback) {
  const text = cleanString(value, 80);
  if (!text) return fallback;
  const ms = Date.parse(text);
  return Number.isFinite(ms) ? new Date(ms).toISOString() : fallback;
}

function normalizeEvidence(value) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  const out = [];
  for (const raw of value) {
    if (!raw || typeof raw !== "object") continue;
    const evidence = {
      kind: cleanString(raw.kind, 80) || "reference",
      source: cleanString(raw.source, 180),
      locator: cleanString(raw.locator, 1000),
      note: cleanString(raw.note, 1000),
    };
    const key = JSON.stringify(evidence);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(evidence);
    if (out.length >= 50) break;
  }
  return out;
}

function normalizeConfidence(raw = {}, evidence = []) {
  const level = CONFIDENCE_LEVELS.includes(raw.level) ? raw.level : "unverified";
  let score = Number(raw.score);
  if (!Number.isFinite(score)) {
    score = level === "verified" ? 0.9 :
      level === "cross-checked" ? 0.75 :
      level === "observed" ? 0.55 :
      level === "rejected" ? 0 : 0.25;
  }
  score = Math.max(0, Math.min(1, score));

  if (level === "verified" && evidence.length < 2) {
    throw new Error("Verified records require at least two evidence entries.");
  }
  if (level === "cross-checked" && evidence.length < 2) {
    throw new Error("Cross-checked records require at least two evidence entries.");
  }
  if (level === "rejected") score = 0;

  return { level, score };
}

function normalizeSource(raw = {}) {
  const kind = SOURCE_KINDS.includes(raw.kind) ? raw.kind : "manual-lab";
  return {
    id: cleanString(raw.id, 120) || "unknown",
    name: cleanString(raw.name, 180) || "Unknown source",
    kind,
    locator: cleanString(raw.locator, 1000),
    method: cleanString(raw.method, 240),
  };
}

function normalizeBuild(raw = {}) {
  return {
    channel: "GLOBAL",
    clientVersion: cleanString(raw.clientVersion, 80),
    steamBuild: cleanString(raw.steamBuild, 80),
    platform: cleanString(raw.platform, 80),
    extractedAt: normalizeIso(raw.extractedAt, ""),
  };
}

export function createLabRecord(input = {}, now = new Date().toISOString()) {
  const generatedAt = normalizeIso(now, new Date().toISOString());
  const entityType = cleanString(input.entityType, 40).toLowerCase();
  if (!ENTITY_TYPES.includes(entityType)) throw new Error("Unsupported entityType.");

  const id = cleanString(String(input.id ?? ""), 180);
  if (!id) throw new Error("A stable entity id is required.");

  const region = cleanString(input.region || "GLOBAL", 20).toUpperCase();
  if (region !== "GLOBAL") throw new Error("This pipeline is Global-only.");

  const shard = cleanString(input.shard, 20).toLowerCase();
  if (shard && !GLOBAL_SHARDS.includes(shard)) throw new Error("Unsupported Global shard.");

  const evidence = normalizeEvidence(input.evidence);
  const confidence = normalizeConfidence(input.confidence, evidence);
  const source = normalizeSource(input.source);
  const lastVerified = normalizeIso(input.lastVerified, generatedAt);
  const build = normalizeBuild(input.build);

  return {
    schemaVersion: 1,
    entityType,
    id,
    region: "GLOBAL",
    shard: shard || "",
    build,
    source,
    confidence,
    lastVerified,
    evidence,
    data: cloneSafe(input.data ?? {}),
    constraints: {
      laboratoryOnly: true,
      productionEligible: false,
      promotionRequiresHumanReview: true,
    },
  };
}

export function validateLabRecord(record) {
  const errors = [];
  if (!record || typeof record !== "object") return { ok: false, errors: ["Record must be an object."] };
  if (record.schemaVersion !== 1) errors.push("schemaVersion must be 1.");
  if (!ENTITY_TYPES.includes(record.entityType)) errors.push("Invalid entityType.");
  if (!cleanString(record.id, 180)) errors.push("Missing id.");
  if (record.region !== "GLOBAL") errors.push("Region must be GLOBAL.");
  if (record.shard && !GLOBAL_SHARDS.includes(record.shard)) errors.push("Invalid Global shard.");
  if (!record.build || record.build.channel !== "GLOBAL") errors.push("Build channel must be GLOBAL.");
  if (!record.source || !SOURCE_KINDS.includes(record.source.kind)) errors.push("Invalid source.");
  if (!record.confidence || !CONFIDENCE_LEVELS.includes(record.confidence.level)) errors.push("Invalid confidence.");
  if (!record.constraints?.laboratoryOnly) errors.push("Record must remain laboratory-only.");
  if (record.constraints?.productionEligible !== false) errors.push("Lab records cannot be production eligible.");
  if (!Number.isFinite(Date.parse(record.lastVerified || ""))) errors.push("lastVerified must be an ISO date.");
  if ((record.confidence?.level === "verified" || record.confidence?.level === "cross-checked") && (!Array.isArray(record.evidence) || record.evidence.length < 2)) {
    errors.push("Cross-checked/verified records require at least two evidence entries.");
  }
  return { ok: errors.length === 0, errors };
}

export function recordKey(record) {
  const result = validateLabRecord(record);
  if (!result.ok) throw new Error(result.errors.join(" "));
  const buildId = record.build.clientVersion || record.build.steamBuild || "build-unknown";
  const shard = record.shard || "all";
  return [record.region, shard, record.entityType, record.id, buildId].join(":");
}

export function mergeEvidence(...lists) {
  return normalizeEvidence(lists.flat());
}
