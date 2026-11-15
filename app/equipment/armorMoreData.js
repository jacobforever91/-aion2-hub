Warning: truncated output (original token count: 79238)
Total output lines: 3741

const imprintPools = {
  "3:bootsLunatic45": [["Move Speed","6.4% ~ 7.43%"],["Perfect Chance","2.7% ~ 3.18%"],["Regeneration","1.35% ~ 1.62%"],["Defense increase","1.8% ~ 2.14%"],["Perfect Resist","2.25% ~ 2.66%"],["Status Effect Resist","3.85% ~ 4.5%"],["Endurance Penetration","1.35% ~ 1.62%"],["Dexterity","14 ~ 23"],["Constitution","8 ~ 16"],["Willpower","11 ~ 20"],["Attack","12 ~ 21"],["Critical Hit","19 ~ 29"],["Accuracy","25 ~ 36"],["Defense","149 ~ 178"],["Evasion","15 ~ 24"],["Critical Damage Defense","154 ~ 184"],["Back Defense","154 ~ 184"],["Front Defense","154 ~ 184"],["Critical Hit Resist","27 ~ 38"],["Block","15 ~ 24"],["MP","57 ~ 73"],["HP","115 ~ 139"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","27 ~ 38"]],
  "3:bootsPilgrimQuest39": [["Defense","30 ~ 30"],["MP","19 ~ 19"],["Natural MP Regen","7 ~ 7"]],
  "3:bootsLiberatorQuest39": [["Defense","30 ~ 30"],["MP","19 ~ 19"],["Natural MP Regen","7 ~ 7"]],
  "3:boots43": [["Move Speed","5.6% ~ 6.51%"],["Perfect Chance","2.36% ~ 2.78%"],["Regeneration","1.18% ~ 1.43%"],["Defense increase","1.57% ~ 1.88%"],["Perfect Resist","1.97% ~ 2.34%"],["Status Effect Resist","3.37% ~ 3.95%"],["Endurance Penetration","1.18% ~ 1.43%"],["Dexterity","12 ~ 21"],["Constitution","7 ~ 15"],["Willpower","9 ~ 17"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","22 ~ 32"],["Defense","131 ~ 158"],["Evasion","13 ~ 22"],["Critical Damage Defense","134 ~ 161"],["Back Defense","134 ~ 161"],["Front Defense","134 ~ 161"],["Critical Hit Resist","23 ~ 33"],["Block","13 ~ 22"],["MP","50 ~ 65"],["HP","101 ~ 123"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","23 ~ 33"]],
  "3:boots45": [["Move Speed","6% ~ 6.97%"],["Perfect Chance","2.53% ~ 2.98%"],["Regeneration","1.26% ~ 1.52%"],["Defense increase","1.68% ~ 2%"],["Perfect Resist","2.11% ~ 2.5%"],["Status Effect Resist","3.61% ~ 4.22%"],["Endurance Penetration","1.26% ~ 1.52%"],["Dexterity","13 ~ 22"],["Constitution","8 ~ 16"],["Willpower","10 ~ 19"],["Attack","12…78238 tokens truncated… capturedAt: "2026-10-30",
  dataSnapshotAt: "2026-09-19",
  official: false,
  status: "MANUALLY_REVIEWED"
};
const current207Source = {
  name: "gaming.tools AION 2 Global client database",
  region: "GLOBAL",
  clientVersion: "2.0.7.0",
  capturedAt: "2026-10-14",
  official: false,
  status: "GLOBAL_CLIENT_CROSSCHECKED"
};

export default armorPieces.map((item) => ({
  id: item.id,
  name: item.name,
  group: "Armor",
  category: item.category,
  grade: item.grade,
  itemLevel: item.level,
  requiredLevel: item.required,
  equipType: item.equipType,
  itemType: "Armor",
  icon: "/equipment-icons/" + item.id + ".webp",
  stats: pairs([["Defense", item.defense], ["HP", item.hp]]),
  imprints: pairs(imprintPools[item.pool]),
  details: [
    {label: "Binding", value: item.binding || "Bind on Equip"},
    {label: "Manastone sockets", value: item.sockets},
    {label: "Soul imprint selection", value: item.fixedImprints ? "Fixed quest reward stats" : "Choose " + (item.selections || item.sockets) + " sub-stats"},
    ...(item.faction ? [{label: "Faction", value: item.faction}] : []),
    ...(item.crafting ? [{label: "Crafting recipe", value: item.crafting}] : []),
    ...(item.setBonus ? [{label: "Set bonus", value: item.setBonus}] : []),
    {label: "Sell price", value: item.sell},
    {label: "Enchantable to", value: item.enchant},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  upgrades: item.upgrade,
  obtain: item.obtain,
  verificationStatus: AION2HUB_MANUAL_SYNC.has(item.id) ? "MANUALLY_REVIEWED" : GLOBAL_207_SYNC.has(item.id) ? "GLOBAL_207_CROSSCHECKED" : "",
  source: AION2HUB_MANUAL_SYNC.has(item.id) ? {...aion2HubManualSource, capturedAt: item.manuallyReviewedAt || aion2HubManualSource.capturedAt} : GLOBAL_207_SYNC.has(item.id) ? current207Source : {
    name: "AION 2 VISION independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
}));

