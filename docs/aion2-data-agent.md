# AION2 internal data agent

The scheduled GitHub Actions workflow runs once per day, can be started manually from the repository's Actions tab, and also runs when its agent code/configuration changes.

The internal helper now has **two jobs**:

1. **Official source monitor** — checks NC/PLAYNC announcement pages, remembers announcement IDs, keeps GLOBAL/KR/TW separate, labels likely topics, and writes a review report.
2. **Research scout** — watches commit metadata from a small allowlisted set of public AION 2 research repositories. It looks for changes related to Skills, skill levels/effects, Stigmas, Equipment, Arcana, Daevanion, Wings, Pets, cooldowns, official APIs, and packet/protocol research.

Both jobs are review assistants. They do **not** change production catalogs or publish experimental values to the live site.

## Team workflow

- **Internal helper:** continuously finds leads, remembers what it has already seen, and prioritizes new candidates.
- **ChatGPT:** investigates high-value candidates, cross-checks them against independent evidence and the Global client when possible, and decides whether a finding is actually verified.
- **Zona de Prueba:** stores experimental or newly verified research separately from stable Skills/Stigmas/Equipment/Build Creator data.
- **Production data:** changes only after a finding has been verified and intentionally promoted.

This makes the helper a scout rather than an automatic data writer. A HIGH priority lead means "investigate this first", not "this is confirmed game data."

## Official source policy

- NC/PLAYNC first-party pages are checked automatically for announcement metadata.
- GLOBAL, KR, and TW are recorded separately. Korea/Taiwan findings must not be presented as Global facts. The NC corporate newsroom is labeled `NC` because its announcements do not by themselves establish a server region.
- `data-agent/sources.json` documents community sources and their access status. AION2.app and Aion2t.com currently prohibit automated copying without permission. AION2Hub.com remains manual-review-only until reuse permission or a suitable data license is verified.
- Community data can be added to the automated catalog pipeline only after its terms/license and region/version are verified.

## Research scout policy

- `data-agent/research-sources.json` is an explicit allowlist.
- The scout reads **GitHub commit metadata and changed filenames only**. It does not automatically copy external game catalogs, patches, packet captures, or scraped site content into DAEVEXUS.
- Source region is kept `UNVERIFIED` unless independently established.
- Skill-level/SkillEffect findings and skill+protocol changes are HIGH priority. Other DAEVEXUS data-area changes are normally MEDIUM priority.
- The first run is a baseline and does not report old commits as new research.

## Reports

- `aion2-source-agent-report` — official announcement monitor.
- `aion2-research-scout-report` — public research metadata candidates.

Both are short-lived GitHub Actions artifacts retained for review. Agent state is cached between runs so old records are not repeatedly presented as new.

## Catalog synchronization

Automatic production synchronization remains disabled. A future catalog sync requires a documented first-party endpoint or appropriately licensed data, validation, region/version checks, and human review before merge.
