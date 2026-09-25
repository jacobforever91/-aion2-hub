const imprintPools = {
  "kaldrix": [
    [
      "Might",
      "19 ~ 29"
    ],
    [
      "Dexterity",
      "19 ~ 29"
    ],
    [
      "Intelligence",
      "19 ~ 29"
    ],
    [
      "Constitution",
      "19 ~ 29"
    ],
    [
      "Precision",
      "19 ~ 29"
    ],
    [
      "Willpower",
      "19 ~ 29"
    ],
    [
      "Accuracy",
      "22 ~ 32"
    ],
    [
      "Evasion",
      "16 ~ 25"
    ],
    [
      "Critical Hit",
      "14 ~ 23"
    ],
    [
      "Critical Hit Resist",
      "20 ~ 30"
    ],
    [
      "Block",
      "16 ~ 25"
    ],
    [
      "Block Penetration",
      "21 ~ 31"
    ]
  ],
  "epic": [
    [
      "Accuracy",
      "14 ~ 14"
    ],
    [
      "Critical Hit Resist",
      "13 ~ 13"
    ],
    [
      "Block Penetration",
      "14 ~ 14"
    ]
  ],
  "rare": [
    [
      "Accuracy",
      "10 ~ 10"
    ],
    [
      "Critical Hit Resist",
      "9 ~ 9"
    ],
    [
      "Block Penetration",
      "10 ~ 10"
    ]
  ]
};
const brooches = [
  {
    "id": "310530001",
    "name": "Kaldrix Brooch (Bind on Equip)",
    "grade": "Unique",
    "level": "112",
    "required": "45",
    "binding": "Bind on Equip",
    "attack": "85",
    "defense": "297",
    "pool": "kaldrix",
    "sockets": "4",
    "sell": "28,888 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Attack 75, Defense 150; Exceed to +5: Attack 100, Defense 200, Damage Boost 5%"
  },
  {
    "id": "310530002",
    "name": "Kaldrix Brooch (Bind on Pickup)",
    "grade": "Unique",
    "level": "112",
    "required": "45",
    "binding": "Bind on Pickup",
    "attack": "85",
    "defense": "297",
    "pool": "kaldrix",
    "sockets": "4",
    "sell": "28,888 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Attack 75, Defense 150; Exceed to +5: Attack 100, Defense 200, Damage Boost 5%"
  },
  {
    "id": "310540001",
    "name": "Pilgrim Brooch",
    "grade": "Epic",
    "level": "106",
    "required": "",
    "binding": "Bound",
    "attack": "80",
    "defense": "281",
    "pool": "epic",
    "sockets": "3",
    "sell": "14,444 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Attack 75, Defense 150"
  },
  {
    "id": "310540002",
    "name": "Liberator Brooch",
    "grade": "Epic",
    "level": "106",
    "required": "",
    "binding": "Bound",
    "attack": "80",
    "defense": "281",
    "pool": "epic",
    "sockets": "3",
    "sell": "14,444 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Attack 75, Defense 150"
  },
  {
    "id": "310550001",
    "name": "Explorer Brooch",
    "grade": "Rare",
    "level": "50",
    "required": "",
    "binding": "Bound",
    "attack": "38",
    "defense": "134",
    "pool": "rare",
    "sockets": "2",
    "sell": "246 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Attack 50, Defense 100"
  }
];
const pairs = (entries) => entries.map(([label, value]) => ({label, value}));

export default brooches.map((item) => ({
  id: item.id,
  name: item.name,
  group: "Accessories",
  category: "Brooch",
  region: "KR_TW",
  grade: item.grade,
  itemLevel: item.level,
  requiredLevel: item.required,
  equipType: "Brooch",
  itemType: "Accessories",
  icon: "/equipment-icons/" + item.id + ".webp",
  stats: pairs([["Attack", item.attack], ["Defense", item.defense]]),
  imprints: pairs(imprintPools[item.pool]),
  details: [
    {label: "Binding", value: item.binding},
    {label: "Manastone sockets", value: item.sockets},
    ...(item.binding === "Bound" ? [] : [{label: "Soul imprint selection", value: "Choose " + item.sockets + " sub-stats"}]),
    {label: "Sell price", value: item.sell},
    {label: "Enchantable to", value: item.enchant},
    {label: "Region/version", value: "Korea/Taiwan client v110 · 2026-09-09"},
  ],
  upgrades: item.upgrade,
  source: {
    name: "AION 2 VISION independent item database",
    region: "Korea/Taiwan client v110",
    capturedAt: "2026-09-09",
    official: false,
  },
}));
