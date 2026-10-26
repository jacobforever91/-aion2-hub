# DAEVEXUS — Verified Data Foundation

## Purpose
Build a first-party, versioned data layer for AION 2 so the site does not need to depend on external guide pages at runtime. External sources are research inputs, not the database itself.

## Data confidence labels
- **verified** — supported by a repeatable packet/data extraction or direct in-game observation, with evidence recorded.
- **corroborated** — multiple independent sources agree, but no direct extraction/observation yet.
- **provisional** — useful lead that still needs confirmation.
- **disputed** — credible sources disagree; do not publish as fact.
- **stale** — once supported, but region/patch freshness is unknown or superseded.

Every record should keep its region, game/build version or patch when known, last-verified date, evidence type, and a short note describing how it was verified. Never silently turn a provisional value into a verified one.

## Existing verified research to preserve
- The skill-list packet identified as `0x5100 MySkillList_NT` was validated against **4,538/4,538 records** in the prior research pass.
- The packet data contains skill ID, effective level, original level, five increment fields, and cooldown.
- Effective level matched original level plus the five increment fields in the validation performed.
- Example checked: Gladiator Blood Blade, skill ID `11340000`, effective/original level 10, all five increments zero.
- The sources of those five increment fields have **not** been identified. Daevanion, Arcana, equipment, or other systems are correlation candidates, not confirmed causes.
- Local client research found IoStore files and localized text packs, but the FModel index was encrypted and no usable main key/dynamic keys were available in that pass. Do not modify the installed client or attempt to bypass encryption.

These notes preserve prior research claims; keep the original packet/export and its hash or capture reference alongside any future machine-readable dataset before treating the values as independently reproducible.

## First-party data model
Use stable internal IDs and separate localized display text from mechanics.

Suggested record envelope:
- `id`: stable source/game identifier
- `entity_type`: skill, equipment, pet, wing, stigma, arcana, daevanion, class, map, dungeon, crafting
- `region`: Global, KR, TW, or unknown
- `game_version`: exact patch/build if known, otherwise null
- `status`: one of the confidence labels above
- `fields`: normalized mechanics and properties
- `localization`: locale-keyed display strings
- `evidence`: source type, source reference, capture/export hash, observed date, verifier note
- `relations`: explicit links to other IDs, with the relationship itself and evidence
- `updated_at`: ISO date

Do not merge same-looking records across regions or patches unless IDs and mechanics have been matched. Preserve raw source fields beside normalized fields so transformations can be audited.

## Independence from external websites
1. Ingest data into versioned local JSON/CSV/SQLite or a generated database artifact.
2. Keep a reproducible import/normalization script; do not manually edit generated output.
3. Record provenance per field or record, not just one generic source list.
4. Add schema validation and duplicate-ID checks to the build.
5. Let the website read its own generated data bundle; external websites may inform research but should not be required for ordinary browsing.
6. Where direct game data is unavailable, clearly label community-derived entries and show the region/patch they describe.

## Open verification queue
- Identify which systems contribute to the five skill-level increment fields by correlating controlled observations with Daevanion, Arcana, equipment, and other modifiers.
- **Board existence update (2026-10-26):** the Global patch dated 2026-10-20 PDT / 2026-10-21 CEST adds Ariel, so the pre-patch five-board list is stale. A board-level Ariel record is now stored at `data/corroborated/daevanion-ariel-global.json`. Its existence and fragment/currency loop are corroborated against the official patch-note link and independent transcriptions. The current Global inventory is six boards: Nezekan, Zikel, Vaizel, Triniel, Azphel and Ariel. The apparent five-vs-six conflict was temporal: a five-board guide was reviewed Oct. 12, before the Oct. 21 Ariel patch. Detailed node layout and stat values remain unverified in this dataset.
- Inventory existing DAEVEXUS data loaders and UI before adding a parallel schema or replacing current behavior.
- Build a small golden test set from independently verified records before bulk ingestion.

## Safety and deployment
This research branch is isolated from `main`. Do not merge or deploy without reviewing the diff, validating the data against the target Global patch, and running the project build/tests.
