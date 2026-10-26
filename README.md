# DAEVEXUS

All-in-one community companion for AION 2.

## First milestone
- Responsive landing page
- Universal search concept
- Global / KR-TW region selector
- Foundation for Database, Builds, Classes, Maps, Dungeons, Crafting, Guides and Tools

Built with Next.js for Vercel deployment.

## Data research foundation
The isolated `research/verified-data-foundation` branch contains a provenance-aware data schema, a dataset manifest, and a reproducible ingestion workflow. These files are groundwork only: they do not replace existing app loaders or change the deployed site.

- [Data confidence and verification policy](docs/data-provenance.md)
- [Data record schema](data/schema/aion2-record.schema.json)
- [Dataset manifest](data/manifest.json)
- [Ingestion workflow and release gate](docs/data-ingestion-workflow.md)

Important: the reported 4,538 skill-record validation is prior research; the original export is not yet in this branch. The manifest makes that limitation explicit. Daevanion board coverage remains disputed until verified against the current Global build.
