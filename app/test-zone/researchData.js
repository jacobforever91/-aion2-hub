export const testZoneResearch = [
  {
    id: "official-character-build-pipeline",
    status: "VERIFIED",
    title: "Official Character → Build pipeline",
    summary: "Public PLAYNC character snapshots can now be normalized into a reversible Build Creator baseline without guessing unknown slots.",
    facts: [
      "The public equipment payload preserves slotPos and slotPosName; DAEVEXUS maps known names and retains unknown mappings for review.",
      "The public skill payload preserves id, category, skillLevel, needLevel, acquired and equip state.",
      "NC category Dp is normalized as Stigma; imported Stigmas require the official equipped flag.",
      "Pet, Wing and Daevanion summaries from the public snapshot are carried into the build as official-source context.",
      "Daevanion node coordinates stay read-only after import until their coordinate basis is proven equivalent to the local planner grid."
    ]
  },
  {
    id: "packet-0x5100",
    status: "VERIFIED",
    title: "0x5100 · MySkillList_NT",
    summary: "Runtime snapshot of the skills learned by the local character.",
    facts: [
      "Carries skill code, effective level, original level and five additional level fields.",
      "Invariant verified on 4,538 / 4,538 observed records: effectiveLevel = originalLevel + sum(additional[0..4]).",
      "Also carries remaining cooldown when present.",
      "Keep the five additional fields unnamed until their individual sources are proven."
    ]
  },
  {
    id: "gladiator-11340000",
    status: "VERIFIED",
    title: "Gladiator · Skill 11340000",
    summary: "Golden runtime example retained for parser validation.",
    facts: [
      "Observed effective level: 10.",
      "Observed original level: 10.",
      "Observed additional levels: 0 + 0 + 0 + 0 + 0.",
      "Observed remaining cooldown: 42,450 ms.",
      "Catalog cooldown reference used by the parser research: 90,000 ms."
    ]
  },
  {
    id: "runtime-suffix",
    status: "VERIFIED",
    title: "Runtime skill suffix",
    summary: "The runtime skill-code suffix must not be treated as the skill level.",
    facts: [
      "Runtime variants can encode specialization / internal variants.",
      "Normalize to the base skill family for identity, but preserve the raw code for research.",
      "Do not derive level from the final digits of the runtime code."
    ]
  },
  {
    id: "stigma-levels",
    status: "VERIFIED",
    title: "Stigma level model",
    summary: "Independent parser evidence exposes base and effective Stigma levels separately.",
    facts: [
      "Observed model exposes BaseSkillLevel and EffectiveLevel.",
      "This supports storing baseLevel and effectiveLevel as separate fields in DAEVEXUS.",
      "Future Stigma experiments should remain isolated here until the packet source is fully mapped."
    ]
  },
  {
    id: "five-level-sources",
    status: "RESEARCH",
    title: "Five additional level sources",
    summary: "Current target: identify what each of the five additional level fields represents.",
    facts: [
      "Daevanion nodes can grant +1 to specific skills.",
      "Arcana and other systems can also affect skill levels.",
      "Do not label individual bytes as Daevanion, Arcana, gear or another source until correlation proves it."
    ]
  },
  {
    id: "internal-research-scout",
    status: "RESEARCH",
    title: "Internal Research Scout",
    summary: "The DAEVEXUS helper now works as a second research scout alongside ChatGPT.",
    facts: [
      "Monitors official NC/PLAYNC announcements separately from public research-repository metadata.",
      "Flags Skills, skill levels/effects, Stigmas, Equipment, Arcana, Daevanion, Wings, Pets, cooldown and packet/protocol changes.",
      "Skill-level / SkillEffect leads receive the highest review priority.",
      "The helper never promotes experimental values into production by itself; ChatGPT validates the lead first."
    ]
  }
];

export const testZoneRules = [
  "Experimental code stays inside /test-zone or dedicated research data files until verified.",
  "Stable Skills, Stigmas, Equipment and Build Creator data is not overwritten by an experiment.",
  "Raw IDs and raw packet observations are preserved alongside normalized IDs.",
  "Unverified assumptions must be marked RESEARCH, not presented as game facts.",
  "The internal helper finds leads; ChatGPT verifies them before production promotion.",
  "Once a finding is verified, it can be promoted from Test Zone into the production dataset."
];

export const testZoneModules = [
  {
    id: "skills",
    status: "VERIFIED",
    title: "Skills",
    mounted: [
      "Canonical original-class catalog is separated into 12 Active, 10 Passive and 13 Stigma skills.",
      "Shared/system Dodge is no longer counted as a class Active skill.",
      "0x5100 effective/original/additional level model remains preserved for runtime research."
    ],
    next: "Map each additional-level source without guessing its system."
  },
  {
    id: "stigmas",
    status: "VERIFIED",
    title: "Stigmas",
    mounted: [
      "NC public character category Dp is normalized as Stigma.",
      "Original classes now expose 13 canonical Stigma IDs each.",
      "BaseSkillLevel and EffectiveLevel remain stored as separate runtime concepts."
    ],
    next: "Correlate Stigma runtime level changes with the source that caused them."
  },
  {
    id: "equipment",
    status: "RESEARCH",
    title: "Equipment",
    mounted: [
      "Character Sync preserves official slotPos, slot name, item ID and equipped-item detail.",
      "Build Creator maps known Global slot names into the 20-slot layout and preserves unknown mappings instead of guessing.",
      "No runtime equipment-to-skill-level source field has been labeled yet."
    ],
    next: "Collect several Global character samples per class and compare raw slotPos values against the same 20 named slots."
  },
  {
    id: "arcana",
    status: "RESEARCH",
    title: "Arcana",
    mounted: [
      "Tracked as a possible contributor to skill-level changes.",
      "No individual 0x5100 additional field is labeled Arcana yet."
    ],
    next: "Test one Arcana change while holding gear and Daevanion constant."
  },
  {
    id: "daevanion",
    status: "RESEARCH",
    title: "Daevanion",
    mounted: [
      "Character Sync now keeps official board summaries plus public node detail when available.",
      "Synced open-node data is visible read-only in Build Creator; it is not forced onto the local planner grid.",
      "Its exact 0x5100 additional-field position is still unassigned."
    ],
    next: "Prove the official row/column coordinate basis against one known board before enabling automatic path import."
  },
  {
    id: "pets",
    status: "RESEARCH",
    title: "Pets",
    mounted: [
      "Character Sync preserves the current public Pet ID, name, level and official asset when returned.",
      "Build Creator can retain and display a synced Pet even when it is not yet present in the local catalog.",
      "No new Pet combat formula is inferred from the snapshot."
    ],
    next: "Cross-check repeated Pet IDs across public samples before promoting mechanical stats."
  },
  {
    id: "wings",
    status: "RESEARCH",
    title: "Wings",
    mounted: [
      "Character Sync preserves current Wing ID, name, grade, enchant level and official asset when returned.",
      "Build Creator can retain and display a synced Wing even when it is not yet present in the local catalog.",
      "No Wing stat is invented when the public snapshot does not expose it."
    ],
    next: "Cross-check Wing IDs against the local Global catalog and promote exact matches."
  }
];

