# AION2 internal data agent

The scheduled GitHub Actions workflow runs once per day and can also be started manually from the repository's Actions tab. It checks official NC/PLAYNC announcement pages, remembers announcement IDs between runs, labels likely topics (classes, skills, stigmas, equipment, wings, pets), and publishes a JSON report as a short-lived workflow artifact. The first run creates a baseline and does not describe older announcements as newly published.

The first version is a **monitor and review assistant**. It records source links and announcement titles only. It does not copy full articles, modify the class/skill/stigma/item catalogs, or publish data to the live site. A new announcement is a signal for review, not proof that a Global data record changed.

## Source policy

- NC/PLAYNC first-party pages are checked automatically for announcement metadata.
- GLOBAL, KR, and TW are recorded separately. Korea/Taiwan findings must not be presented as Global facts. The NC corporate newsroom is labeled `NC` because its announcements do not by themselves establish a server region.
- `data-agent/sources.json` documents community sources and their access status. AION2.app and Aion2t.com currently prohibit automated copying without permission. AION2Hub.com remains manual-review-only until reuse permission or a suitable data license is verified.
- Community data can be added to the automated pipeline only after its source terms/license and region/version are verified. A source's popularity alone is not permission or proof of accuracy.

## To turn it into catalog synchronization

The next step requires a documented NC endpoint that supplies the relevant public catalog, or written permission/a licensed export from a community provider. Once that exists, add a validator and diff-based pull request for the affected dataset. Keep human review before merging updates to the live catalog.
