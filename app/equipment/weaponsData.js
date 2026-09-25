const mainImprints = [
  ["Combat Speed", "4.45% ~ 5.19%"],
  ["Damage Boost", "2.49% ~ 2.93%"],
  ["Multi-hit Chance", "3.3% ~ 3.87%"],
  ["Weapon Damage Boost", "3.3% ~ 3.87%"],
  ["Status Effect Chance", "8.8% ~ 10.19%"],
  ["Might", "8 ~ 16"],
  ["Precision", "8 ~ 16"],
  ["Attack", "15 ~ 24"],
  ["Critical Hit", "23 ~ 33"],
  ["Critical Attack", "33 ~ 45"],
  ["Back Attack", "33 ~ 45"],
  ["Front Attack", "33 ~ 45"],
  ["Accuracy", "31 ~ 43"],
  ["Block", "18 ~ 28"],
  ["MP", "70 ~ 88"],
  ["HP", "141 ~ 169"],
];

const guardImprints = [
  ["Combat Speed", "3.46% ~ 4.05%"],
  ["Damage Boost", "1.99% ~ 2.36%"],
  ["Multi-hit Chance", "2.64% ~ 3.11%"],
  ["Weapon Damage Boost", "2.64% ~ 3.11%"],
  ["Status Effect Chance", "7.04% ~ 8.17%"],
  ["Might", "7 ~ 15"],
  ["Precision", "7 ~ 15"],
  ["Attack", "12 ~ 21"],
  ["Critical Hit", "18 ~ 28"],
  ["Critical Attack", "26 ~ 37"],
  ["Back Attack", "26 ~ 37"],
  ["Front Attack", "26 ~ 37"],
  ["Accuracy", "25 ~ 36"],
  ["Block", "14 ~ 23"],
  ["MP", "56 ~ 71"],
  ["HP", "113 ~ 137"],
];

const rows = [
  {
    id: "110150008", name: "Tempest Greatsword", category: "Greatsword", itemType: "Greatsword", equipType: "MainHand",
    stats: [["Min Attack", "71"], ["Max Attack", "97"], ["Accuracy", "100"], ["Critical Hit", "150"], ["Block", "150"], ["Parry Damage Reduction Rate", "25%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110350008", name: "Tempest Dagger", category: "Dagger", itemType: "Dagger", equipType: "MainHand",
    stats: [["Min Attack", "59"], ["Max Attack", "76"], ["Accuracy", "50"], ["Critical Hit", "200"], ["Block", "50"], ["Parry Damage Reduction Rate", "16%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110450008", name: "Tempest Bow", category: "Bow", itemType: "Bow", equipType: "MainHand",
    stats: [["Min Attack", "65"], ["Max Attack", "82"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "16%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110550008", name: "Tempest Spellbook", category: "Spellbook", itemType: "Magicbook", equipType: "MainHand",
    stats: [["Min Attack", "76"], ["Max Attack", "84"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "13%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110650008", name: "Tempest Orb", category: "Orb", itemType: "Orb", equipType: "MainHand",
    stats: [["Min Attack", "50"], ["Max Attack", "101"], ["Accuracy", "50"], ["Critical Hit", "150"], ["Block", "0"], ["Parry Damage Reduction Rate", "13%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110750008", name: "Tempest Mace", category: "Mace", itemType: "Mace", equipType: "MainHand",
    stats: [["Min Attack", "59"], ["Max Attack", "76"], ["Accuracy", "100"], ["Critical Hit", "50"], ["Block", "50"], ["Parry Damage Reduction Rate", "19%"], ["Shield Block Damage Reduction Rate", "30%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110850008", name: "Tempest Staff", category: "Staff", itemType: "Staff", equipType: "MainHand",
    stats: [["Min Attack", "67"], ["Max Attack", "92"], ["Accuracy", "75"], ["Critical Hit", "100"], ["Block", "125"], ["Parry Damage Reduction Rate", "22%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "115050008", name: "Tempest Guard", category: "Guard", itemType: "Guarder", equipType: "SubHand",
    stats: [["Attack", "34"], ["Accuracy", "50"], ["Critical Hit", "50"]],
  },
];

const toPairs = (pairs) => pairs.map(([label, value]) => ({label, value}));

const weaponsData = rows.map((row) => ({
  ...row,
  group: "Weapon",
  grade: "Rare",
  itemLevel: "15",
  requiredLevel: "15",
  icon: `/equipment-icons/${row.id}.webp`,
  stats: toPairs(row.stats),
  imprints: toPairs(row.equipType === "SubHand" ? guardImprints : mainImprints),
  details: [
    {label: "Binding", value: "Bind on Equip"},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  source: {
    name: "AION2 Hub independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
}));


const wisdomMainImprints = [
  ["Combat Speed", "7.59% ~ 8.8%"], ["Damage Boost", "4.25% ~ 4.96%"],
  ["Multi-hit Chance", "5.62% ~ 6.53%"], ["Weapon Damage Boost", "5.62% ~ 6.53%"],
  ["Status Effect Chance", "15% ~ 17.32%"], ["Might", "15 ~ 24"],
  ["Precision", "15 ~ 24"], ["Attack", "26 ~ 37"],
  ["Critical Hit", "40 ~ 53"], ["Critical Attack", "56 ~ 71"],
  ["Back Attack", "56 ~ 71"], ["Front Attack", "56 ~ 71"],
  ["Accuracy", "53 ~ 68"], ["Block", "32 ~ 44"],
  ["MP", "120 ~ 145"], ["HP", "241 ~ 284"],
];

const wisdomGuardImprints = [
  ["Combat Speed", "5.9% ~ 6.86%"], ["Damage Boost", "3.4% ~ 3.98%"],
  ["Multi-hit Chance", "4.5% ~ 5.25%"], ["Weapon Damage Boost", "4.5% ~ 5.25%"],
  ["Status Effect Chance", "12% ~ 13.87%"], ["Might", "12 ~ 21"],
  ["Precision", "12 ~ 21"], ["Attack", "21 ~ 31"],
  ["Critical Hit", "32 ~ 44"], ["Critical Attack", "45 ~ 59"],
  ["Back Attack", "45 ~ 59"], ["Front Attack", "45 ~ 59"],
  ["Accuracy", "43 ~ 56"], ["Block", "26 ~ 37"],
  ["MP", "96 ~ 117"], ["HP", "193 ~ 229"],
];

const wisdomRows = [
  {
    id: "110130002", name: "Wisdom Greatsword", category: "Greatsword", itemType: "Greatsword", equipType: "MainHand",
    stats: [["Min Attack", "179"], ["Max Attack", "242"], ["Accuracy", "100"], ["Critical Hit", "150"], ["Block", "150"], ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110230002", name: "Wisdom Longsword", category: "Longsword", itemType: "Sword", equipType: "MainHand",
    stats: [["Min Attack", "168"], ["Max Attack", "210"], ["Accuracy", "150"], ["Critical Hit", "50"], ["Block", "200"], ["Parry Damage Reduction Rate", "27%"], ["Shield Block Damage Reduction Rate", "40%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110330002", name: "Wisdom Knife", category: "Dagger", itemType: "Dagger", equipType: "MainHand",
    stats: [["Min Attack", "147"], ["Max Attack", "189"], ["Accuracy", "50"], ["Critical Hit", "200"], ["Block", "50"], ["Parry Damage Reduction Rate", "24%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110430002", name: "Wisdom Bow", category: "Bow", itemType: "Bow", equipType: "MainHand",
    stats: [["Min Attack", "163"], ["Max Attack", "205"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "24%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110530002", name: "Wisdom Spellbook", category: "Spellbook", itemType: "Magicbook", equipType: "MainHand",
    stats: [["Min Attack", "189"], ["Max Attack", "210"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "21%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110630002", name: "Wisdom Orb", category: "Orb", itemType: "Orb", equipType: "MainHand",
    stats: [["Min Attack", "126"], ["Max Attack", "252"], ["Accuracy", "50"], ["Critical Hit", "150"], ["Block", "0"], ["Parry Damage Reduction Rate", "21%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110730002", name: "Wisdom Mace", category: "Mace", itemType: "Mace", equipType: "MainHand",
    stats: [["Min Attack", "147"], ["Max Attack", "189"], ["Accuracy", "100"], ["Critical Hit", "50"], ["Block", "50"], ["Parry Damage Reduction Rate", "27%"], ["Shield Block Damage Reduction Rate", "40%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110830002", name: "Wisdom Staff", category: "Staff", itemType: "Staff", equipType: "MainHand",
    stats: [["Min Attack", "168"], ["Max Attack", "231"], ["Accuracy", "75"], ["Critical Hit", "100"], ["Block", "125"], ["Parry Damage Reduction Rate", "30%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "115030002", name: "Wisdom Guard", category: "Guard", itemType: "Guarder", equipType: "SubHand",
    stats: [["Attack", "84"], ["Accuracy", "50"], ["Critical Hit", "50"]],
  },
];

weaponsData.push(...wisdomRows.map((row) => ({
  ...row,
  group: "Weapon",
  grade: "Unique",
  itemLevel: "36",
  requiredLevel: "30",
  icon: "/equipment-icons/" + row.id + ".webp",
  stats: toPairs(row.stats),
  imprints: toPairs(row.equipType === "SubHand" ? wisdomGuardImprints : wisdomMainImprints),
  details: [
    {label: "Binding", value: "Bind on Equip"},
    {label: "Manastone sockets", value: "4"},
    {label: "Godstone sockets", value: "1"},
    {label: "Enchantable to", value: "+15"},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  source: {
    name: "AION2 Hub independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
})));


const elderMainImprints = [
  ["Combat Speed", "5.82% ~ 6.76%"], ["Damage Boost", "3.25% ~ 3.81%"],
  ["Multi-hit Chance", "4.31% ~ 5.03%"], ["Weapon Damage Boost", "4.31% ~ 5.03%"],
  ["Status Effect Chance", "11.5% ~ 13.3%"], ["Might", "11 ~ 20"],
  ["Precision", "11 ~ 20"], ["Attack", "20 ~ 30"],
  ["Critical Hit", "31 ~ 43"], ["Critical Attack", "43 ~ 56"],
  ["Back Attack", "43 ~ 56"], ["Front Attack", "43 ~ 56"],
  ["Accuracy", "41 ~ 54"], ["Block", "24 ~ 35"],
  ["MP", "92 ~ 113"], ["HP", "185 ~ 220"],
];

const elderGuardImprints = [
  ["Combat Speed", "4.53% ~ 5.28%"], ["Damage Boost", "2.6% ~ 3.06%"],
  ["Multi-hit Chance", "3.45% ~ 4.04%"], ["Weapon Damage Boost", "3.45% ~ 4.04%"],
  ["Status Effect Chance", "9.2% ~ 10.65%"], ["Might", "9 ~ 17"],
  ["Precision", "9 ~ 17"], ["Attack", "16 ~ 25"],
  ["Critical Hit", "24 ~ 35"], ["Critical Attack", "34 ~ 46"],
  ["Back Attack", "34 ~ 46"], ["Front Attack", "34 ~ 46"],
  ["Accuracy", "33 ~ 45"], ["Block", "19 ~ 29"],
  ["MP", "73 ~ 91"], ["HP", "148 ~ 177"],
];

const elderRows = [
  {
    id: "110140002", name: "Elder Greatsword", category: "Greatsword", itemType: "Greatsword", equipType: "MainHand",
    stats: [["Min Attack", "112"], ["Max Attack", "152"], ["Accuracy", "100"], ["Critical Hit", "150"], ["Block", "150"], ["Parry Damage Reduction Rate", "29%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110240002", name: "Elder Longsword", category: "Longsword", itemType: "Sword", equipType: "MainHand",
    stats: [["Min Attack", "106"], ["Max Attack", "132"], ["Accuracy", "150"], ["Critical Hit", "50"], ["Block", "200"], ["Parry Damage Reduction Rate", "23%"], ["Shield Block Damage Reduction Rate", "35%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110340002", name: "Elder Dagger", category: "Dagger", itemType: "Dagger", equipType: "MainHand",
    stats: [["Min Attack", "92"], ["Max Attack", "119"], ["Accuracy", "50"], ["Critical Hit", "200"], ["Block", "50"], ["Parry Damage Reduction Rate", "20%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110440002", name: "Elder Bow", category: "Bow", itemType: "Bow", equipType: "MainHand",
    stats: [["Min Attack", "102"], ["Max Attack", "129"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "20%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110540002", name: "Elder Spellbook", category: "Spellbook", itemType: "Magicbook", equipType: "MainHand",
    stats: [["Min Attack", "119"], ["Max Attack", "132"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "17%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110640002", name: "Elder Orb", category: "Orb", itemType: "Orb", equipType: "MainHand",
    stats: [["Min Attack", "79"], ["Max Attack", "158"], ["Accuracy", "50"], ["Critical Hit", "150"], ["Block", "0"], ["Parry Damage Reduction Rate", "17%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110740002", name: "Elder Mace", category: "Mace", itemType: "Mace", equipType: "MainHand",
    stats: [["Min Attack", "92"], ["Max Attack", "119"], ["Accuracy", "100"], ["Critical Hit", "50"], ["Block", "50"], ["Parry Damage Reduction Rate", "23%"], ["Shield Block Damage Reduction Rate", "35%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    id: "110840002", name: "Elder Staff", category: "Staff", itemType: "Staff", equipType: "MainHand",
    stats: [["Min Attack", "106"], ["Max Attack", "145"], ["Accuracy", "75"], ["Critical Hit", "100"], ["Block", "125"], ["Parry Damage Reduction Rate", "26%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    id: "115040002", name: "Elder Guard", category: "Guard", itemType: "Guarder", equipType: "SubHand",
    stats: [["Attack", "53"], ["Accuracy", "50"], ["Critical Hit", "50"]],
  },
];

weaponsData.push(...elderRows.map((row) => ({
  ...row,
  group: "Weapon",
  grade: "Epic",
  itemLevel: "23",
  requiredLevel: "20",
  icon: "/equipment-icons/" + row.id + ".webp",
  stats: toPairs(row.stats),
  imprints: toPairs(row.equipType === "SubHand" ? elderGuardImprints : elderMainImprints),
  details: [
    {label: "Binding", value: "Bind on Equip"},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  source: {
    name: "AION2 Hub independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
})));


const commonWeaponTypes = [
  {
    idPrefix: "110160", suffix: "Greatsword", category: "Greatsword", itemType: "Greatsword", equipType: "MainHand",
    stats: [["Min Attack", "4"], ["Max Attack", "6"], ["Accuracy", "100"], ["Critical Hit", "150"], ["Block", "150"], ["Parry Damage Reduction Rate", "21%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110260", suffix: "Longsword", category: "Longsword", itemType: "Sword", equipType: "MainHand",
    stats: [["Min Attack", "4"], ["Max Attack", "5"], ["Accuracy", "150"], ["Critical Hit", "50"], ["Block", "200"], ["Parry Damage Reduction Rate", "15%"], ["Shield Block Damage Reduction Rate", "25%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110360", suffix: "Dagger", category: "Dagger", itemType: "Dagger", equipType: "MainHand",
    stats: [["Min Attack", "4"], ["Max Attack", "5"], ["Accuracy", "50"], ["Critical Hit", "200"], ["Block", "50"], ["Parry Damage Reduction Rate", "12%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110460", suffix: "Bow", category: "Bow", itemType: "Bow", equipType: "MainHand",
    stats: [["Min Attack", "4"], ["Max Attack", "5"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "12%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110560", suffix: "Spellbook", category: "Spellbook", itemType: "Magicbook", equipType: "MainHand",
    stats: [["Min Attack", "5"], ["Max Attack", "5"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"], ["Parry Damage Reduction Rate", "9%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110660", suffix: "Orb", category: "Orb", itemType: "Orb", equipType: "MainHand",
    stats: [["Min Attack", "3"], ["Max Attack", "6"], ["Accuracy", "50"], ["Critical Hit", "150"], ["Block", "0"], ["Parry Damage Reduction Rate", "9%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110760", suffix: "Mace", category: "Mace", itemType: "Mace", equipType: "MainHand",
    stats: [["Min Attack", "4"], ["Max Attack", "5"], ["Accuracy", "100"], ["Critical Hit", "50"], ["Block", "50"], ["Parry Damage Reduction Rate", "15%"], ["Shield Block Damage Reduction Rate", "25%"], ["Parry Damage Reduction Amount", "100,000"], ["Shield Block Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "110860", suffix: "Staff", category: "Staff", itemType: "Staff", equipType: "MainHand",
    stats: [["Min Attack", "4"], ["Max Attack", "6"], ["Accuracy", "75"], ["Critical Hit", "100"], ["Block", "125"], ["Parry Damage Reduction Rate", "18%"], ["Parry Damage Reduction Amount", "100,000"]],
  },
  {
    idPrefix: "115060", suffix: "Guard", category: "Guard", itemType: "Guarder", equipType: "SubHand",
    stats: [["Attack", "2"], ["Accuracy", "50"], ["Critical Hit", "50"]],
  },
];

for (const variant of [{name: "Worn", idSuffix: "001"}, {name: "Training", idSuffix: "008"}]) {
  weaponsData.push(...commonWeaponTypes.map((type) => {
    const id = type.idPrefix + variant.idSuffix;
    return {
      id, name: variant.name + " " + type.suffix, category: type.category,
      itemType: type.itemType, equipType: type.equipType, group: "Weapon",
      grade: "Common", itemLevel: "1",
      icon: "/equipment-icons/" + id + ".webp",
      stats: toPairs(type.stats),
      imprints: [],
      details: [
        {label: "Binding", value: "Bound"},
        {label: "Manastone sockets", value: "1"},
        {label: "Sell price", value: "31 Gold"},
        {label: "Enchantable to", value: "+5"},
        {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
      ],
      source: {
        name: "AION2 Hub independent item database",
        region: "Global Launch Scale Test snapshot",
        capturedAt: "2026-09-19",
        official: false,
      },
    };
  }));
}

export default weaponsData;
