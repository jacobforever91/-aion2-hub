# DAEVEXUS Global Data Pipeline — Lab v1

This directory is the laboratory-only canonical data layer for DAEVEXUS.

It does **not** write to production catalogs, Build Creator stable data, or live pages. Every record created here is forced to:

- `region: GLOBAL`
- an optional Global shard (`nae`, `naw`, `eu`, `sa`, `asia`)
- a build envelope
- a primary source and extraction/observation method
- a confidence level
- a verification timestamp
- evidence entries
- `constraints.productionEligible: false`

## Why this exists

DAEVEXUS already has working Global character parsing, Build Lab data, research scouts, and domain-specific catalogs. The missing piece was a single provenance-aware record format shared by Equipment, Skills, Stigmas, Wings, Pets, Arcana, and Daevanion.

This is that format.

## Files

- `schema.mjs` — canonical lab record builder, validator, key generator, and evidence merger.
- `character-adapter.mjs` — converts the existing `buildCharacterResearchSample()` output into canonical lab records without changing Character Sync itself.
- `registry.json` — explicit Global-only entities, shards, provenance requirements, and promotion policy.
- `../../tests/global-data-pipeline.test.mjs` — safety and mapping tests.

## Confidence meanings

- **unverified** — lead only.
- **observed** — seen in one relevant source or real Global character observation.
- **cross-checked** — at least two evidence entries.
- **verified** — high-confidence reviewed record with at least two evidence entries.
- **rejected** — known bad, stale, incompatible, or region-mismatched.

Confidence is not the same thing as production approval. Even `verified` lab records remain blocked from production until a human intentionally promotes them.

## Build handling

The build envelope never invents a version. Unknown build values remain empty. This is deliberate: a first-party API observation can confirm that a character currently exposes an entity, but it does not by itself prove which client build introduced or owns the underlying static data.

## Current integration boundary

The adapter can already translate the existing Character Sync research sample into canonical records for:

- Equipment
- Skills
- Stigmas
- Pet
- Wings
- Arcana
- Daevanion

It does not change the live Character Sync or Build Creator. The next phase is to feed reviewed lab records into a read-only compatibility layer shared by those two systems.

## Local test

```bash
node --test tests/global-data-pipeline.test.mjs
```
