import test from "node:test";
import assert from "node:assert/strict";
import {classifyResearch, priorityFor, runResearchAgent} from "./aion2-research-agent.mjs";

test("prioritizes skill-level packet work", () => {
  const tags = classifyResearch("Parse MySkillList 0x5100 effectiveLevel", ["src/PacketParser.cs"]);
  assert.ok(tags.includes("skill-levels"));
  assert.ok(tags.includes("packet-protocol"));
  assert.equal(priorityFor(tags), "high");
});

test("recognizes DAEVEXUS data areas from changed paths", () => {
  const tags = classifyResearch("refresh data", ["arcana/data/skills/gladiator.json", "ui/daevanion-board.js"]);
  assert.ok(tags.includes("arcana"));
  assert.ok(tags.includes("daevanion"));
  assert.equal(priorityFor(tags), "medium");
});

test("first run is a baseline and does not invent old commits as new", async () => {
  const registry = {sources:[{id:"sample",repository:"owner/repo",region:"UNVERIFIED"}]};
  const {report, nextState} = await runResearchAgent({
    registry,
    state:{seenBySource:{}},
    sourceFetcher: async (source, seen) => ({
      sourceId:source.id,
      repository:source.repository,
      region:source.region,
      status:"ok",
      baseline:seen.length===0,
      latestSha:"abc",
      recentShas:["abc","def"],
      newCommits:[],
    })
  });
  assert.equal(report.summary.newCommits, 0);
  assert.deepEqual(nextState.seenBySource.sample, ["abc","def"]);
});

test("later runs surface only candidates returned by the scout", async () => {
  const registry = {sources:[{id:"sample",repository:"owner/repo",region:"UNVERIFIED"}]};
  const {report} = await runResearchAgent({
    registry,
    state:{seenBySource:{sample:["old"]}},
    sourceFetcher: async (source) => ({
      sourceId:source.id,
      repository:source.repository,
      region:source.region,
      status:"ok",
      baseline:false,
      latestSha:"new",
      recentShas:["new","old"],
      newCommits:[{
        sha:"new",repository:source.repository,region:source.region,message:"Stigma skill level parser",
        committedAt:"2026-10-01T00:00:00Z",url:"https://github.com/owner/repo/commit/new",
        files:["parser.cs"],tags:["stigmas","skill-levels","packet-protocol"],priority:"high"
      }],
    })
  });
  assert.equal(report.summary.reviewCandidates, 1);
  assert.equal(report.summary.highPriority, 1);
  assert.equal(report.automaticCatalogWrites, false);
  assert.equal(report.dataCopiedFromResearchRepos, false);
});
