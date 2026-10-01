export const testZoneResearch = [
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
      "0x5100 effective/original/additional level model.",
      "Gladiator skill 11340000 retained as a golden runtime sample.",
      "Runtime suffix is preserved separately from base skill identity."
    ],
    next: "Map each additional-level source without guessing its system."
  },
  {
    id: "stigmas",
    status: "VERIFIED",
    title: "Stigmas",
    mounted: [
      "BaseSkillLevel and EffectiveLevel are stored as separate concepts.",
      "Stigma level experiments remain isolated from the production catalog."
    ],
    next: "Correlate Stigma runtime level changes with the source that caused them."
  },
  {
    id: "equipment",
    status: "RESEARCH",
    title: "Equipment",
    mounted: [
      "Research Scout watches equipment/gear/item-detail changes.",
      "No new runtime equipment-to-skill-level mapping has been promoted yet."
    ],
    next: "Capture a controlled equipment swap and compare skill/stat deltas."
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
      "Known as a candidate source for specific skill-level bonuses.",
      "Its exact 0x5100 additional-field position is still unassigned."
    ],
    next: "Toggle one +skill node and compare the five additional-level fields."
  },
  {
    id: "pets",
    status: "RESEARCH",
    title: "Pets",
    mounted: [
      "Research Scout monitors Pet-related repository metadata.",
      "No newly verified mechanical Pet data has been mounted yet."
    ],
    next: "Promote only a Pet finding that has independent evidence."
  },
  {
    id: "wings",
    status: "RESEARCH",
    title: "Wings",
    mounted: [
      "Research Scout monitors Wings-related repository metadata.",
      "No newly verified mechanical Wings data has been mounted yet."
    ],
    next: "Promote only a Wings finding that has independent evidence."
  }
];

