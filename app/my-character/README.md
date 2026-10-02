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

The linked snapshot is stored only in the browser under `daevexus.character-link.v1`. Each successful sync also keeps a compact research sample under `daevexus.character-research.v1` (maximum 24 browser-local samples) with raw slot positions/names, skill categories, progression IDs and Daevanion summary data. The Character Info screen can import the current snapshot into Build Creator. Equipment is mapped by official slot names while raw `slotPos` is preserved; unknown or duplicate mappings are kept for review instead of guessed. Imported Stigmas use the official equipped flag, and the NC `Dp` skill category is normalized as Stigma.

## Safety
- Official hosts are hard allowlisted.
- No arbitrary fetch/proxy URL.
- 10-12 second upstream timeout.
- No credentials, session tokens or NC cookies.
- No gameplay values are calculated or invented.
- Upstream failure remains visible.
