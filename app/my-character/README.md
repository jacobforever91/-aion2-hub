# My Character Lab

Route: `/my-character`.

This is a read-only character-link prototype. It never asks for or forwards NC/PURPLE credentials or cookies. It uses only public character services exposed by NC.

## Supported lab inputs
- Global: NA West, NA East, Europe, South America, Asia.
- Taiwan: public profile/search endpoints for testing.
- Search by character name, optionally narrowed with server ID.
- Direct official profile URL, recommended for the first user test.

## Snapshot
The normalized snapshot can include profile, level/class/faction, combat power, public stats, equipped gear, public Skills/Stigmas, Pet, Wings, titles summary, rankings and Daevanion progress when the official response contains them.

The linked snapshot is stored only in the browser under `daevexus.character-link.v1`. Sync is manual. Automatic Build Lab import is intentionally not connected yet because DAEVEXUS is still verifying slot/item metadata; this prevents a public snapshot from corrupting creator drafts or pretending unknown mappings are verified.

## Safety
- Official hosts are hard allowlisted.
- No arbitrary fetch/proxy URL.
- 10-12 second upstream timeout.
- No credentials, session tokens or NC cookies.
- No gameplay values are calculated or invented.
- Upstream failure remains visible.
