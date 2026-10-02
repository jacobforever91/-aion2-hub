# DAEVEXUS Build Creator Lab — independent prototype

Route: `/build-lab`. The existing `/builds`, navigation, styles, data and saved drafts are unchanged.

## Architecture

A new standalone GET route returns an isolated HTML document, without the application's inherited layout or global styles. New assets live only in `/public/build-lab-assets/`. The new read-only `/build-lab/catalog` adapter imports existing local catalogs; it does not mutate them or call any write endpoint. No package dependencies were added.

The existing skill-description endpoint is read on demand, with a timeout, retry and visible failure state. All other prototype functions operate on the imported local catalog and browser storage.

## Working features

- Up to ten independent variants; duplicate, rename, delete, switch, undo/redo.
- Class, faction, region, intended level and content goal per variant.
- Twenty visible Global equipment planning slots matching the current 2 × 10 loadout model, including Belt, Amulet, two Bracelets and two Rune slots. Legacy KR/TW Brooch planning remains backward-compatible but is not shown in a Global loadout. Alternate main weapons are not double-counted as off-hand equipment.
- Search, rarity and compatibility filtering; item preview; before/after numeric differences; equip/remove.
- Saved enhancement, imprint and socket targets as planning annotations, explicitly not simulated bonuses.
- Skills and Stigmas, recorded level ranges, Min/Max and step controls, specialization choices, locked-tier handling.
- Wings, pet-level selection and ten Arcana planning slots; region safeguards on totals.
- Class-specific Daevanion boards, cheapest connected paths, dependent-branch pruning and user-defined planning budgets.
- Rotation sequence, move/remove steps, Unicode plain-text notes.
- Variant comparisons, flat numeric bonuses with per-source drill-down, excluded-value diagnostics.
- Device-local autosave and named build library; JSON import/export and compressed share links; no account.
- Comfortable/Larger text modes; 4K-friendly single-window desktop and mobile fallback.

## Data honesty

Catalogs remain unofficial community reference snapshots. This is NOT a verified Global rules engine. The UI distinguishes planning from verified calculations.

Fixed numeric values are summed. Ranges and malformed values are not guessed. Percentage rows are additive reference sums, not final combat formulas. Character base stats, unchosen imprint rolls, enhancement targets, skill/passive effects, set bonuses, Daevanion stat amounts and DPS are not calculated. Daevanion cost values are never misinterpreted as stat bonuses.

KR/TW wing/pet bonuses are excluded from Global numeric totals. Cross-region comparison does not display numeric deltas. Class and region changes reset only the active variant's incompatible systems, after confirmation.

Slot counts and planning-level/budget limits are prototype limits, not verified game caps. No live character import, account login, cloud storage, community publication or combat meter is claimed.

## Storage / safety

Only `daevexus.build-lab.workspace.v1`, `daevexus.build-lab.library.v1` and `daevexus.build-lab.scale` are used. Existing-creator storage keys are never read or written. Imported/shared builds are schema-normalized, length-limited and rendered as escaped text. Decompression has a bounded reader. Import opens a separate document ID. Notes in share links are public to anyone receiving that link.

## Validation

Run `node --test tests/build-lab-model.test.mjs` from the repository root.

22 pure-model checks cover parsing, region/class compatibility, double-count prevention, statistic provenance, variants, imports, Unicode sharing, graph paths, budgets and levels. Browser flows were exercised in an offline Chromium harness with clearly labeled synthetic fixtures, at 1280×720, 1440×900, 1920×1080, 3840×2160 and a mobile viewport. External icon services and the live skill source may be unavailable independently; errors remain visible and selections can still be planned.

Prototype code and visual treatment are original. Product patterns considered: variant-based editing, slot pickers, comparison, source breakdown, connected progression, local libraries and sharing. No third-party planner code or private APIs were copied.
