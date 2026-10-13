import test from "node:test";
import assert from "node:assert/strict";
import {
  createLabRecord,
  validateLabRecord,
  recordKey,
} from "../data-agent/global-pipeline/schema.mjs";
import { recordsFromCharacterResearchSample } from "../data-agent/global-pipeline/character-adapter.mjs";

const base = {
  entityType: "equipment",
  id: "1001",
  region: "GLOBAL",
  shard: "naw",
  build: { clientVersion: "2.0.6.0", platform: "Global" },
  source: { id: "fixture", name: "Fixture", kind: "manual-lab", method: "test" },
  confidence: { level: "observed", score: 0.6 },
  lastVerified: "2026-10-13T12:00:00Z",
  evidence: [{ kind: "fixture", source: "test", note: "unit test" }],
  data: { grade: "Unique" },
};

test("canonical records stay Global and lab-only", () => {
  const record = createLabRecord(base, "2026-10-13T12:00:00Z");
  assert.equal(record.region, "GLOBAL");
  assert.equal(record.shard, "naw");
  assert.equal(record.constraints.laboratoryOnly, true);
  assert.equal(record.constraints.productionEligible, false);
  assert.deepEqual(validateLabRecord(record), { ok: true, errors: [] });
});

test("Global pipeline rejects KR/TW records", () => {
  assert.throws(() => createLabRecord({ ...base, region: "KR_TW" }), /Global-only/);
});

test("cross-checked and verified records require two evidence entries", () => {
  assert.throws(() => createLabRecord({
    ...base,
    confidence: { level: "verified", score: 0.95 },
    evidence: [{ kind: "one", source: "only source" }],
  }), /at least two evidence/);

  const record = createLabRecord({
    ...base,
    confidence: { level: "cross-checked", score: 0.8 },
    evidence: [
      { kind: "first", source: "source A" },
      { kind: "second", source: "source B" },
    ],
  });
  assert.equal(record.confidence.level, "cross-checked");
});

test("record keys include shard entity id and known build", () => {
  const record = createLabRecord(base);
  assert.equal(recordKey(record), "GLOBAL:naw:equipment:1001:2.0.6.0");
});

test("unsafe prototype keys are removed from payload data", () => {
  const payload = JSON.parse('{"safe":1,"__proto__":{"polluted":true},"nested":{"constructor":{"bad":1}}}');
  const record = createLabRecord({ ...base, data: payload });
  assert.equal(record.data.safe, 1);
  assert.equal(Object.hasOwn(record.data, "__proto__"), false);
  assert.equal(Object.hasOwn(record.data.nested, "constructor"), false);
  assert.equal({}.polluted, undefined);
});

test("Character Sync research samples map into all current Global entity families", () => {
  const sample = {
    schemaVersion: 1,
    source: "NC public character API",
    syncedAt: "2026-10-13T12:00:00Z",
    region: "naw",
    serverId: 1201,
    characterId: "abc",
    equipmentSlots: [{ slotPos: 1, slotName: "Weapon", id: 99, grade: "Unique" }],
    skills: [
      { id: 100, category: "Active", normalizedCategory: "active", level: 7, acquired: true, equipped: true },
      { id: 101, category: "Dp", normalizedCategory: "stigma", level: 5, acquired: true, equipped: true },
    ],
    pet: { id: 2, level: 3 },
    wing: { id: 3, grade: "Unique", enchantLevel: 4 },
    arcana: [{ id: "41", grade: "Unique", level: 1, enchantLevel: 0, slotPos: 41, slotName: "Arcana1", equipped: true }],
    daevanion: [{ id: 71, name: "Nezekan", openNodes: 2, totalNodes: 88, detailNodes: 2 }],
  };

  const records = recordsFromCharacterResearchSample(sample, {
    clientVersion: "2.0.6.0",
    locator: "fixture://character/abc",
  });

  assert.deepEqual(
    [...new Set(records.map((record) => record.entityType))].sort(),
    ["arcana", "daevanion", "equipment", "pet", "skill", "stigma", "wing"],
  );
  assert.ok(records.every((record) => record.region === "GLOBAL"));
  assert.ok(records.every((record) => record.shard === "naw"));
  assert.ok(records.every((record) => record.constraints.productionEligible === false));
  assert.equal(records.find((record) => record.entityType === "stigma").id, "101");
});
