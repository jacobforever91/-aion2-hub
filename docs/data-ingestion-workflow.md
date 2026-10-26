# Data ingestion workflow

This is the proposed workflow for moving AION 2 research into DAEVEXUS-owned data. It is intentionally independent of the UI until the existing loaders and routes have been inventoried.

## 1. Capture
- Preserve the original packet capture, client export, official source snapshot, or in-game observation.
- Store a stable source reference and SHA-256 when the artifact is available.
- Record the Global/KR/TW region and patch/build. Use `unknown` or `null` rather than guessing.

## 2. Normalize without losing source data
- Keep the raw record in an immutable/raw area.
- Transform it into the record schema in `data/schema/aion2-record.schema.json`.
- Keep normalized mechanics and localized names separate.
- Do not invent missing fields. Leave them null or omit them, with a note if needed.

## 3. Confidence and conflict handling
- `verified`: repeatable packet/client extraction or direct observation with retained evidence.
- `corroborated`: multiple independent sources agree, but no direct verification yet.
- `provisional`: lead requiring validation.
- `disputed`: sources conflict; exclude from authoritative gameplay calculations.
- `stale`: patch freshness is unknown or superseded.
- Confidence applies to the record or relationship. A source that confirms a name does not automatically confirm its stats or region.

## 4. Relationship claims
Relationships such as skill-to-effect, equipment-to-stat, Arcana-to-bonus, or Daevanion-node-to-increment must include their own evidence and status. Similar timing or matching values are leads, not proof of causation.

For the five increments in the previously validated `0x5100 MySkillList_NT` packet, run controlled before/after comparisons:
1. Record a baseline character/skill state.
2. Change exactly one candidate source (one Daevanion node, Arcana setting, or equipment modifier).
3. Capture the same skill-list packet again.
4. Compare skill ID, original/effective level, each of the five increment fields, and cooldown.
5. Repeat the toggle or swap to rule out unrelated state changes.
6. Mark the causal relationship verified only when the change is reproducible and competing explanations are ruled out.

Do not infer which increment belongs to which system until controlled evidence supports it.

## 5. Release gate
Before the data feeds the public build:
- Validate every record against the schema.
- Reject duplicate IDs within the same region/build namespace.
- Check all relationship targets exist, or explicitly mark them as unresolved external IDs.
- Report counts by entity type, confidence, region, and patch.
- Compare generated output with the previous version and review all removals/stat changes.
- Run the existing project build/tests after integration.
- Keep this research branch separate from `main` until a reviewed integration is approved.

## Current known limitations
- The 4,538-record skill validation is recorded in prior research notes, but the original raw export/capture is not yet checked into this branch. Treat the count as a prior validation result, not a dataset currently available to the site.
- The single Blood Blade record is an illustrative preservation of a previously checked example, not a complete skills dataset.
- The Global Daevanion board inventory remains disputed; do not encode a definitive board list from conflicting guides.
