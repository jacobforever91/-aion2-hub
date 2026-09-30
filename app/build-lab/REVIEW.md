# Build Creator Lab — usability and reliability review

Date: 2026-09-30. This review changes only the isolated /build-lab document. The existing /builds, Home, Skills, Equipment, catalogs and their saved drafts are unchanged. Original Lab v1 assets are retained; the route now loads lab-review.mjs and lab-review.css plus review-model.mjs. The original numeric model and catalog adapter are unchanged.

## Layout and clarity

The header now has two rows instead of three. Variant selection, class and region stay visible; faction, planned level and goal use one character-settings dialog. Infrequent actions are grouped under More.

Equipment slots share one aligned grid, with horizontal All / Weapons / Armor / Accessories filters. Filled cards have a narrow action rail instead of an extra full-width footer. In the tested 1920x1080 and 3840x2160 desktop cases all seventeen equipment planning slots fit in one editor view at both text sizes. Long names and smaller screens can scroll internally rather than being clipped or reduced to unreadable text.

Skills now use a list and persistent side-by-side inspector within the editor. The reference-summary panel remains visible. Collections brings wing and pet selections, pet-level bonuses and Arcana into one workspace. Rotation and notes are side by side. Repetitive explanations are grouped in calculation scope and Planning checks instead of occupying several large warning boxes.

## Information surfaced from existing records

- Pet preview and selected-pet bonuses follow an exact recorded level; missing levels are not interpolated.
- Wing and Arcana records expose their recorded values. Malformed values are marked unverified; region safeguards are unchanged.
- Skill details include source-provided requirements, HP/DP costs, properties, related skills and extra details. Equal damage/healing bounds are combined; unequal bounds remain ranges, never fabricated DPS.
- Planning checks identify reference level requirements, unavailable selections, missing specializations, unloaded skill checks, incompatible faction/region entries and budget overruns.
- Comparison identifies changed skill levels, specialization choices, enhancement targets and notes, individual Arcana slots, pet levels, character settings, rotations and differing Daevanion nodes/budgets instead of only reporting that configurations differ.

## Reliability fixes

Picker search/rarity changes clear a stale preview. Re-selecting the same equipped item preserves its planning annotations. Async skill responses no longer mutate a different active variant. Closing Share while compression runs no longer reopens or corrupts a dialog. Text editing participates in undo history. Focus, keyboard tabs and internal scroll positions are retained. New/imported/opened documents attempt to archive the current Lab workspace before replacing it; an unreadable existing draft is protected from autosave. Legacy creator storage keys are never used.

## Validation performed

37 Node model/helper checks passed with synthetic fixtures. Run: node --test tests/build-lab-review.test.mjs

24 Chromium interaction checks passed, including equipment selection, source breakdown, variant independence, planning targets, levels and locked specializations, rotation, pet-level selection, board budgets, local-library interactions, sharing, keyboard tabs, reload-state restoration and recoverable source failures. The browser harness used synthetic catalog responses and virtual local storage, not a real game dataset or live browser origin.

60 section/viewport/text-size combinations were checked: six sections at 1280x720, 1440x900, 1920x1080, 3840x2160 and 390x844, using Comfortable and Larger modes. Desktop outer-window overflow and horizontal overflow checks passed. Ten item-picker viewport checks also passed. JavaScript syntax checks passed. Source files uploaded to GitHub were checked against local blob hashes.

Live browser navigation was unavailable in the execution environment, including the attempted local-origin browser run. No live external-icon, live-skill-service or full live-site visual validation is claimed. GitHub/Vercel deployment status is checked separately after publication.

## Still intentionally unverified

This remains a community-reference planner, not an official Global rules engine. Character base values, real enhancement formulas, set effects, unchosen imprint rolls, skill/passive contributions, Daevanion stat amounts and DPS remain uncalculated. Fixed percentage values are additive reference sums, not a final combat formula. No game limits or numeric records were invented in this review.
