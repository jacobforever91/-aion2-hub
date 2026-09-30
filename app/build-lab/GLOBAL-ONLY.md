# Build Creator Lab: Global-only mode

Date: 2026-09-30. Only the isolated Build Lab and its tests change. The existing Home, Skills, Equipment, /builds creator, original catalogs and old saved drafts are untouched.

The region selector is removed from the reusable reviewed template after every render. A first-paint rule also hides it, so it has no keyboard or layout footprint. On desktop, its space is redistributed to the class and variant fields. No editor font sizes, equipment-card sizes or panel heights were reduced.

An import-map facade makes the reviewed UI and helpers use Global-only storage, import/share validation and numeric safeguards, without changing the original pure model. JSON and shared builds containing another region are rejected instead of silently relabeled.

Global drafts and Global variants in older libraries are copied to separate Global workspace/library keys. The old keys remain byte-for-byte unchanged, including unsupported regional variants and unreadable drafts. A mixed legacy document receives a separate ID when its Global variants are copied. Existing Global-namespace work is never overwritten by migration.

The read-only Lab catalog now offers Global equipment and Arcana only. The existing wing/pet snapshots were KR/TW references; they are not promoted to Global. Those sections display Global data pending until actual Global entries are available. This does not turn the reference catalog into official or validated game data. Daevanion topology remains a planning reference and no unknown numeric bonuses are added.

Validation: 15 pure policy/migration tests passed (`node --test tests/build-lab-global.test.mjs`). Node syntax checks passed for the new modules and changed routes. A targeted offline Chromium harness exercised native import-map bindings, old-draft preservation, Global migration, regional import/share rejection, repeated template renders, missing-data labels and header overflow at 1280x720, 1920x1080, 3840x2160 and 390x844. The harness used a synthetic catalog, a header fixture matching the reviewed template, a minimal base-model fixture and virtual local storage; it was not a full-site live visual test. Network navigation was blocked in the execution environment. Deployment is checked separately through GitHub/Vercel statuses.
