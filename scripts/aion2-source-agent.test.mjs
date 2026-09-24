import test from "node:test";
import assert from "node:assert/strict";
import { classifyTags, parseOfficialLinks, runAgent } from "./aion2-source-agent.mjs";

const board = {
  id: "aion2-kr-notices",
  name: "AION2 Korea Notices",
  url: "https://aion2.plaync.com/ko-kr/board/notice/list",
  allowedHost: "aion2.plaync.com",
  region: "KR",
  kind: "official-announcements",
  pageType: "board",
};

test("parses only first-party official article links and labels the region", () => {
  const html = `
    <a href="/ko-kr/board/notice/view?articleId=notice-123">New skill balance update</a>
    <a href="https://example.com/ko-kr/board/notice/view?articleId=evil">Fake</a>
    <a href="/ko-kr/board/notice/list">Notice index</a>
  `;
  const links = parseOfficialLinks(html, board);
  assert.equal(links.length, 1);
  assert.equal(links[0].region, "KR");
  assert.equal(links[0].title, "New skill balance update");
  assert.deepEqual(links[0].tags, ["skills"]);
});

test("classifies multiple data areas without inventing more specific facts", () => {
  assert.deepEqual(classifyTags("Class balance: new stigma skills and pet changes"), ["classes", "skills", "stigmas", "pets"]);
});

test("reads AION2 first-party newsroom metadata embedded in the published page", () => {
  const newsroom = {
    id: "nc-global-news",
    name: "NC Global Newsroom",
    url: "https://about.ncsoft.com/en/news",
    allowedHost: "about.ncsoft.com",
    region: "GLOBAL",
    kind: "official-announcements",
    pageType: "newsroom",
  };
  const html = `<script>window.__data={"slug":"aion2_update_260706","title":"AION 2 Rolls Out \u0027Chapter 1\u0027 Update"}</script>`;
  const [item] = parseOfficialLinks(html, newsroom);
  assert.equal(item.region, "GLOBAL");
  assert.equal(item.title, "AION 2 Rolls Out 'Chapter 1' Update");
  assert.equal(item.url, "https://about.ncsoft.com/en/news/article/aion2_update_260706");
});

test("agent establishes a baseline without misreporting old records as new", async () => {
  const registry = {
    sources: [board],
    communityReferences: [{ name: "community", mode: "manual-review-only" }],
  };
  const { report, nextState } = await runAgent({
    registry,
    state: { seen: [] },
    fetcher: async (source) => ({
      sourceId: source.id,
      name: source.name,
      region: source.region,
      status: "ok",
      found: 1,
      items: parseOfficialLinks('<a href="/ko-kr/board/notice/view?articleId=notice-123">New skill balance update</a>', source),
    }),
  });
  assert.equal(report.summary.newAnnouncements, 0);
  assert.equal(report.summary.baselineItems, 1);
  assert.equal(report.automaticCatalogWrites, false);
  assert.deepEqual(nextState.seen, ["aion2-kr-notices:notice-123"]);
});

test("later runs report only newly discovered official records", async () => {
  const registry = { sources: [board], communityReferences: [] };
  const fetcher = async (source) => ({
    sourceId: source.id,
    name: source.name,
    region: source.region,
    status: "ok",
    found: 2,
    items: parseOfficialLinks(`
      <a href="/ko-kr/board/notice/view?articleId=notice-old">Old notice</a>
      <a href="/ko-kr/board/notice/view?articleId=notice-new">New skill update</a>
    `, source),
  });
  const { report } = await runAgent({
    registry,
    state: { initialized: true, seen: ["aion2-kr-notices:notice-old"] },
    fetcher,
  });
  assert.equal(report.summary.newAnnouncements, 1);
  assert.equal(report.newItems[0].key, "aion2-kr-notices:notice-new");
});

test("never requests community reference sources", async () => {
  const official = { ...board };
  const community = { ...board, id: "community", kind: "community-reference" };
  const called = [];
  await runAgent({
    registry: { sources: [official, community], communityReferences: [] },
    fetcher: async (source) => {
      called.push(source.id);
      return { sourceId: source.id, name: source.name, region: source.region, status: "ok", found: 0, items: [] };
    },
  });
  assert.deepEqual(called, [official.id]);
});
