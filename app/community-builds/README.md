# Community Builds — interface and private publication preparation

This replaces the old demonstration-card directory at `/community-builds`. No new dependencies, external services or credentials are introduced.

## Available
- Full-width desktop library, responsive fallback, class/purpose/search filters.
- Explore, My builds and Prepared views. Explore never shows fabricated community entries, authors, votes or DPS.
- Read-only discovery of the Build Lab workspace and named library on the same browser/origin. Legacy `/builds` drafts are never accessed.
- Explicit preparation of a single Global variant: title, purpose, a separately entered public description, selection counts and card preview.
- A separate `daevexus.community.previews.v1` local key. Original drafts and metadata catalogs are never written.
- Private notes, equipment notes, rotation and other variants are excluded from the prepared build.
- JSON export of the prepared build, compatible with the Lab document schema.
- Corrupted/blocked/full storage reports an error rather than clearing or silently replacing data.

## Deliberately not connected
Accounts, authenticated authorship, server storage, public publication, public permalink resolution, moderation and withdrawal. Public publishing is visibly disabled until these exist. Device-local saving must not be advertised as public publication. All gameplay metadata remains pending verification.

Before enabling publication, add an authenticated server-owned build record, owner-only update/withdraw access, explicit consent, bounded schema validation, server-side sanitization, rate limiting and a public read-only snapshot endpoint. The author ID must come from the session, not a client display name. Do not upload the entire workspace or include private notes by default.

## Checks performed
`node --test tests/community-publication.test.mjs`: 14 tests passed for local reads, deduplication, errors, private-note exclusion, single-variant scope, region constraints, private preview saves, corruption preservation and UUID IDs.
JSX transpilation with TypeScript and CSS parsing with PostCSS passed. Static layout harness (synthetic fixtures, mocked icons, no React hydration/global stylesheet) checked 1280x720, 1920x1080, 3840x2160 and 390x844 without horizontal overflow. This is not a full Next.js production build or end-to-end browser test; deployment validation is separate.
