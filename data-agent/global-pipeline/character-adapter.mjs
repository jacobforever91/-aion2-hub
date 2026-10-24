import { createLabRecord } from "./schema.mjs";

const asArray = (value) => Array.isArray(value) ? value : [];

function contextFor(sample, context = {}) {
  const syncedAt = String(sample?.syncedAt || context.lastVerified || new Date().toISOString());
  return {
    region: "GLOBAL",
    shard: String(sample?.region || context.shard || "").toLowerCase(),
    build: {
      clientVersion: String(context.clientVersion || ""),
      steamBuild: String(context.steamBuild || ""),
      platform: String(context.platform || ""),
      extractedAt: String(context.extractedAt || ""),
    },
    source: {
      id: "nc-public-character-api",
      name: "NC public character API",
      kind: "official-api",
      locator: String(context.locator || ""),
      method: "Observed from a public character profile response.",
    },
    confidence: { level: "observed", score: 0.65 },
    lastVerified: syncedAt,
    evidence: [{
      kind: "first-party-api",
      source: "NC public character API",
      locator: String(context.locator || ""),
      note: "Observed on a real character profile; this alone does not prove client-build universality.",
    }],
  };
}

export function recordsFromCharacterResearchSample(sample = {}, context = {}) {
  if (String(sample?.source || "") !== "NC public character API") {
    throw new Error("Expected a research sample produced by the NC public character API adapter.");
  }

  const base = contextFor(sample, context);
  const records = [];

  for (const item of asArray(sample.equipmentSlots)) {
    if (!item?.id) continue;
    records.push(createLabRecord({
      ...base,
      entityType: "equipment",
      id: String(item.id),
      data: {
        slotPos: Number(item.slotPos) || 0,
        slotName: String(item.slotName || ""),
        grade: String(item.grade || ""),
        characterObservation: {
          serverId: Number(sample.serverId) || 0,
          characterId: String(sample.characterId || ""),
        },
      },
    }, base.lastVerified));
  }

  for (const skill of asArray(sample.skills)) {
    if (!skill?.id) continue;
    const entityType = String(skill.normalizedCategory || "").toLowerCase() === "stigma" ? "stigma" : "skill";
    records.push(createLabRecord({
      ...base,
      entityType,
      id: String(skill.id),
      data: {
        rawCategory: String(skill.category || ""),
        normalizedCategory: String(skill.normalizedCategory || ""),
        level: Number(skill.level) || 0,
        needLevel: Number(skill.needLevel) || 0,
        acquired: skill.acquired === true,
        equipped: skill.equipped === true,
        characterObservation: {
          serverId: Number(sample.serverId) || 0,
          characterId: String(sample.characterId || ""),
        },
      },
    }, base.lastVerified));
  }

  if (sample.pet?.id) {
    records.push(createLabRecord({
      ...base,
      entityType: "pet",
      id: String(sample.pet.id),
      data: { level: Number(sample.pet.level) || 0 },
    }, base.lastVerified));
  }

  if (sample.wing?.id) {
    records.push(createLabRecord({
      ...base,
      entityType: "wing",
      id: String(sample.wing.id),
      data: {
        grade: String(sample.wing.grade || ""),
        enchantLevel: Number(sample.wing.enchantLevel) || 0,
      },
    }, base.lastVerified));
  }

  for (const card of asArray(sample.arcana)) {
    if (!card?.id) continue;
    records.push(createLabRecord({
      ...base,
      entityType: "arcana",
      id: String(card.id),
      data: {
        grade: String(card.grade || ""),
        level: Number(card.level) || 0,
        enchantLevel: Number(card.enchantLevel) || 0,
        slotPos: Number(card.slotPos) || 0,
        slotName: String(card.slotName || ""),
        equipped: card.equipped === true,
      },
    }, base.lastVerified));
  }

  for (const board of asArray(sample.daevanion)) {
    if (!board?.id) continue;
    records.push(createLabRecord({
      ...base,
      entityType: "daevanion",
      id: String(board.id),
      data: {
        name: String(board.name || ""),
        openNodes: Number(board.openNodes) || 0,
        totalNodes: Number(board.totalNodes) || 0,
        detailNodes: Number(board.detailNodes) || 0,
      },
    }, base.lastVerified));
  }

  return records;
}
