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
    name: "AION 2 VISION independent item database",
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
    name: "AION 2 VISION independent item database",
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
    name: "AION 2 VISION independent item database",
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
        name: "AION 2 VISION independent item database",
        region: "Global Launch Scale Test snapshot",
        capturedAt: "2026-09-19",
        official: false,
      },
    };
  }));
}


const forgottenMainImprints = [
  ["Combat Speed", "3.34% ~ 3.91%"], ["Damage Boost", "1.87% ~ 2.22%"],
  ["Multi-hit Chance", "2.47% ~ 2.91%"], ["Weapon Damage Boost", "2.47% ~ 2.91%"],
  ["Status Effect Chance", "6.6% ~ 7.66%"], ["Might", "6 ~ 14"],
  ["Precision", "6 ~ 14"], ["Attack", "12 ~ 21"],
  ["Critical Hit", "17 ~ 27"], ["Critical Attack", "25 ~ 36"],
  ["Back Attack", "25 ~ 36"], ["Front Attack", "25 ~ 36"],
  ["Accuracy", "23 ~ 33"], ["Block", "14 ~ 23"],
  ["MP", "52 ~ 67"], ["HP", "105 ~ 128"],
];

const forgottenGuardImprints = [
  ["Combat Speed", "2.6% ~ 3.06%"], ["Damage Boost", "1.49% ~ 1.78%"],
  ["Multi-hit Chance", "1.98% ~ 2.35%"], ["Weapon Damage Boost", "1.98% ~ 2.35%"],
  ["Status Effect Chance", "5.28% ~ 6.14%"], ["Might", "5 ~ 13"],
  ["Precision", "5 ~ 13"], ["Attack", "9 ~ 17"],
  ["Critical Hit", "14 ~ 23"], ["Critical Attack", "20 ~ 30"],
  ["Back Attack", "20 ~ 30"], ["Front Attack", "20 ~ 30"],
  ["Accuracy", "18 ~ 28"], ["Block", "11 ~ 20"],
  ["MP", "42 ~ 55"], ["HP", "84 ~ 104"],
];

const riversideMainImprints = [
  ["Combat Speed", "3.49% ~ 4.08%"], ["Damage Boost", "1.95% ~ 2.31%"],
  ["Multi-hit Chance", "2.58% ~ 3.04%"], ["Weapon Damage Boost", "2.58% ~ 3.04%"],
  ["Status Effect Chance", "6.9% ~ 8.01%"], ["Might", "6 ~ 14"],
  ["Precision", "6 ~ 14"], ["Attack", "12 ~ 21"],
  ["Critical Hit", "18 ~ 28"], ["Critical Attack", "26 ~ 37"],
  ["Back Attack", "26 ~ 37"], ["Front Attack", "26 ~ 37"],
  ["Accuracy", "24 ~ 35"], ["Block", "14 ~ 23"],
  ["MP", "55 ~ 70"], ["HP", "110 ~ 134"],
];

const riversideGuardImprints = [
  ["Combat Speed", "2.72% ~ 3.2%"], ["Damage Boost", "1.56% ~ 1.86%"],
  ["Multi-hit Chance", "2.07% ~ 2.45%"], ["Weapon Damage Boost", "2.07% ~ 2.45%"],
  ["Status Effect Chance", "5.52% ~ 6.42%"], ["Might", "5 ~ 13"],
  ["Precision", "5 ~ 13"], ["Attack", "10 ~ 19"],
  ["Critical Hit", "14 ~ 23"], ["Critical Attack", "21 ~ 31"],
  ["Back Attack", "21 ~ 31"], ["Front Attack", "21 ~ 31"],
  ["Accuracy", "19 ~ 29"], ["Block", "11 ~ 20"],
  ["MP", "44 ~ 58"], ["HP", "88 ~ 108"],
];

const commonProgressionSeries = [
  {
    name: "Forgotten", idSuffix: "017", level: "13", sellPrice: "69 Gold",
    mainImprints: forgottenMainImprints, guardImprints: forgottenGuardImprints,
    attacks: [["61", "83"], ["58", "72"], ["50", "65"], ["56", "70"], ["65", "72"], ["43", "86"], ["50", "65"], ["58", "79"], ["29"]],
  },
  {
    name: "Riverside", idSuffix: "018", level: "18", sellPrice: "97 Gold",
    mainImprints: riversideMainImprints, guardImprints: riversideGuardImprints,
    attacks: [["87", "117"], ["82", "102"], ["71", "92"], ["79", "99"], ["92", "102"], ["61", "122"], ["71", "92"], ["82", "112"], ["41"]],
  },
];

commonProgressionSeries.push(
  {...commonProgressionSeries[0], name: "Shade", idSuffix: "021"},
  {...commonProgressionSeries[1], name: "Phantasm", idSuffix: "022"},
);

for (const series of commonProgressionSeries) {
  weaponsData.push(...commonWeaponTypes.map((type, index) => {
    const id = type.idPrefix + series.idSuffix;
    const attacks = series.attacks[index];
    const stats = type.stats.map(([label, value]) => [
      label,
      label === "Min Attack" || (type.equipType === "SubHand" && label === "Attack") ? attacks[0]
        : label === "Max Attack" ? attacks[1] : value,
    ]);
    return {
      id, name: series.name + " " + type.suffix, category: type.category,
      itemType: type.itemType, equipType: type.equipType, group: "Weapon",
      grade: "Common", itemLevel: series.level, requiredLevel: series.level,
      icon: "/equipment-icons/" + id + ".webp",
      stats: toPairs(stats),
      imprints: toPairs(type.equipType === "SubHand" ? series.guardImprints : series.mainImprints),
      details: [
        {label: "Binding", value: "Bind on Equip"},
        {label: "Manastone sockets", value: "1"},
        {label: "Sell price", value: series.sellPrice},
        {label: "Enchantable to", value: "+5"},
        {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
      ],
      source: {
        name: "AION 2 VISION independent item database",
        region: "Global Launch Scale Test snapshot",
        capturedAt: "2026-09-19",
        official: false,
      },
    };
  }));
}


weaponsData.push({
  id: "110120003",
  name: "Ludra's Blade of Extinction",
  region: "GLOBAL",
  grade: "Unique",
  rarityColor: "Yellow",
  group: "Weapon",
  category: "Greatsword",
  itemType: "Greatsword",
  equipType: "MainHand",
  itemLevel: "102",
  requiredLevel: "45",
  tier: "4",
  icon: "/equipment-icons/110120003.png",
  stats: toPairs([
    ["Min Attack", "446"], ["Max Attack", "604"], ["Accuracy", "100"],
    ["Critical Hit", "150"], ["Block", "150"],
    ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  imprints: toPairs([
    ["Combat Speed", "11.23 ~ 12.98"], ["Damage Boost", "6.29 ~ 7.30"],
    ["Multi-hit Chance", "8.32 ~ 9.64"], ["Weapon Damage Boost", "8.32 ~ 9.64"],
    ["Status Effect Chance", "22.20 ~ 25.60"], ["Might", "22 ~ 32"],
    ["Precision", "22 ~ 32"], ["Attack", "38 ~ 51"], ["Critical Hit", "59 ~ 75"],
    ["Critical Attack", "83 ~ 102"], ["Back Attack", "83 ~ 102"],
    ["Front Attack", "83 ~ 102"], ["Accuracy", "79 ~ 98"], ["Block", "48 ~ 62"],
    ["MP", "177 ~ 211"], ["HP", "357 ~ 418"],
  ]),
  imprintSlots: 3,
  obtain: ["Abyssal Forge: Ludra", "Abyssal Forge: Weapon Selection Chest (Bound)"],
  details: [
    {label: "Weapon range", value: "1.5 m"},
    {label: "Manastone slots", value: "4"},
    {label: "Godstone slots", value: "1"},
    {label: "Binding", value: "Bind on pickup"},
    {label: "Sell price", value: "59,720 Kina (Bound)"},
    {label: "Alternate client item ID", value: "110120014 (same item variant)"},
    {label: "Region/version", value: "AION 2 Global 2.0.8.0"},
  ],
  upgrades: "Enchantable to +15; breakthrough to +5.",
  verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
  source: {
    name: "AION 2 Global Database (gaming.tools)",
    region: "GLOBAL",
    capturedAt: "2026-11-15",
    official: false,
    crossCheck: "AION2Hub item card manually reviewed on 2026-11-15",
    clientVersion: "2.0.8.0",
    note: "Global item ID, name, level, grade, slot, base stats and imprint pool reviewed against Global client-derived references. Alternate client ID 110120014 is the same item variant and is not listed separately.",
  },
});


weaponsData.push(
  {
    id: "110130003",
    name: "Holy Spirit Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "41",
    requiredLevel: "35",
    tier: "2",
    icon: "/equipment-icons/110130003.webp",
    stats: toPairs([
      ["Min Attack", "177"], ["Max Attack", "239"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "7.89 ~ 9.14"], ["Damage Boost", "4.42 ~ 5.15"],
      ["Multi-hit Chance", "5.85 ~ 6.80"], ["Weapon Damage Boost", "5.85 ~ 6.80"],
      ["Status Effect Chance", "15.60 ~ 18.01"], ["Might", "15 ~ 24"],
      ["Precision", "15 ~ 24"], ["Attack", "27 ~ 38"], ["Critical Hit", "41 ~ 54"],
      ["Critical Attack", "58 ~ 74"], ["Back Attack", "58 ~ 74"], ["Front Attack", "58 ~ 74"],
      ["Accuracy", "55 ~ 70"], ["Block", "33 ~ 45"], ["MP", "124 ~ 150"], ["HP", "250 ~ 295"],
    ]),
    imprintSlots: 4,
    obtain: ["Verteron area drops from monsters and named enemies."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Sell price", value: "2,443 Kina (Bound)"},
      {label: "Skin", value: "Steel Solidarity (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global 2.0.8.0"},
    ],
    upgrades: "Enchantable to +15.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      region: "GLOBAL",
      clientVersion: "2.0.8.0",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "AION2Hub item card manually reviewed on 2026-11-15",
      note: "Item ID, grade, level, main-hand greatsword type, base stats and soul imprint pool manually reviewed for the Global client.",
    },
  },
  {
    id: "110130006",
    name: "Fantasy Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "36",
    requiredLevel: "30",
    tier: "2",
    icon: "/equipment-icons/110130006.webp",
    stats: toPairs([
      ["Min Attack", "155"], ["Max Attack", "209"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "7.59 ~ 8.80"], ["Damage Boost", "4.25 ~ 4.96"],
      ["Multi-hit Chance", "5.62 ~ 6.53"], ["Weapon Damage Boost", "5.62 ~ 6.53"],
      ["Status Effect Chance", "15.00 ~ 17.32"], ["Might", "15 ~ 24"],
      ["Precision", "15 ~ 24"], ["Attack", "26 ~ 37"], ["Critical Hit", "40 ~ 53"],
      ["Critical Attack", "56 ~ 71"], ["Back Attack", "56 ~ 71"], ["Front Attack", "56 ~ 71"],
      ["Accuracy", "53 ~ 68"], ["Block", "32 ~ 44"], ["MP", "120 ~ 145"], ["HP", "241 ~ 284"],
    ]),
    imprintSlots: 4,
    obtain: ["Altgard world bosses, including Melted Danar."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Sell price", value: "1,742 Kina (Bound)"},
      {label: "Skin", value: "Ancient Oath (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global 2.0.8.0"},
    ],
    upgrades: "Enchantable to +15.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      region: "GLOBAL",
      clientVersion: "2.0.8.0",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "AION2Hub item card manually reviewed on 2026-11-15",
      note: "Item ID, grade, level, main-hand greatsword type, base stats and soul imprint pool manually reviewed for the Global client.",
    },
  }
);


weaponsData.push(
  {
    id: "110130007",
    name: "Spectral Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "41",
    requiredLevel: "35",
    tier: "2",
    icon: "/equipment-icons/110130007.webp",
    stats: toPairs([
      ["Min Attack", "177"], ["Max Attack", "239"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "7.89 ~ 9.14"], ["Damage Boost", "4.42 ~ 5.15"],
      ["Multi-hit Chance", "5.85 ~ 6.80"], ["Weapon Damage Boost", "5.85 ~ 6.80"],
      ["Status Effect Chance", "15.60 ~ 18.01"], ["Might", "15 ~ 24"],
      ["Precision", "15 ~ 24"], ["Attack", "27 ~ 38"], ["Critical Hit", "41 ~ 54"],
      ["Critical Attack", "58 ~ 74"], ["Back Attack", "58 ~ 74"], ["Front Attack", "58 ~ 74"],
      ["Accuracy", "55 ~ 70"], ["Block", "33 ~ 45"], ["MP", "124 ~ 150"], ["HP", "250 ~ 295"],
    ]),
    imprintSlots: 4,
    obtain: ["Altgard monsters, including Melted Danar, Predator Garsan, and Deceiver Trid."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Sell price", value: "2,443 Kina (Bound)"},
      {label: "Skin", value: "Steel Solidarity (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global client"},
    ],
    upgrades: "Enchantable to +15.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      region: "GLOBAL",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "Item card manually reviewed on 2026-11-15",
      note: "Global ID, grade, level, greatsword slot, base stats and imprint pool reviewed individually.",
    },
  },
  {
    id: "110130010",
    name: "Tranquility Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "36",
    requiredLevel: "30",
    tier: "2",
    icon: "/equipment-icons/110130010.webp",
    stats: toPairs([
      ["Min Attack", "155"], ["Max Attack", "209"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "7.59 ~ 8.80"], ["Damage Boost", "4.25 ~ 4.96"],
      ["Multi-hit Chance", "5.62 ~ 6.53"], ["Weapon Damage Boost", "5.62 ~ 6.53"],
      ["Status Effect Chance", "15.00 ~ 17.32"], ["Might", "15 ~ 24"],
      ["Precision", "15 ~ 24"], ["Attack", "26 ~ 37"], ["Critical Hit", "40 ~ 53"],
      ["Critical Attack", "56 ~ 71"], ["Back Attack", "56 ~ 71"], ["Front Attack", "56 ~ 71"],
      ["Accuracy", "53 ~ 68"], ["Block", "32 ~ 44"], ["MP", "120 ~ 145"], ["HP", "241 ~ 284"],
    ]),
    imprintSlots: 4,
    obtain: ["Global client source entries are unresolved in the reviewed reference."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Sell price", value: "1,742 Kina (Bound)"},
      {label: "Skin", value: "Savage Tread (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global client"},
    ],
    upgrades: "Enchantable to +15.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      region: "GLOBAL",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "Item card manually reviewed on 2026-11-15",
      note: "Global ID, grade, level, greatsword slot, base stats and imprint pool reviewed individually; source mapping was not verifiable.",
    },
  },
  {
    id: "110130011",
    name: "Courage Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "41",
    requiredLevel: "35",
    tier: "2",
    icon: "/equipment-icons/110130011.webp",
    stats: toPairs([
      ["Min Attack", "177"], ["Max Attack", "239"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "7.89 ~ 9.14"], ["Damage Boost", "4.42 ~ 5.15"],
      ["Multi-hit Chance", "5.85 ~ 6.80"], ["Weapon Damage Boost", "5.85 ~ 6.80"],
      ["Status Effect Chance", "15.60 ~ 18.01"], ["Might", "15 ~ 24"],
      ["Precision", "15 ~ 24"], ["Attack", "27 ~ 38"], ["Critical Hit", "41 ~ 54"],
      ["Critical Attack", "58 ~ 74"], ["Back Attack", "58 ~ 74"], ["Front Attack", "58 ~ 74"],
      ["Accuracy", "55 ~ 70"], ["Block", "33 ~ 45"], ["MP", "124 ~ 150"], ["HP", "250 ~ 295"],
    ]),
    imprintSlots: 4,
    obtain: ["Chaotic Lower Reshanta drops, including Devastated Remnants and Sulfur Tree Island."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Sell price", value: "2,443 Kina (Bound)"},
      {label: "Skin", value: "Skybound Oath (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global client"},
    ],
    upgrades: "Enchantable to +15.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      region: "GLOBAL",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "Item card manually reviewed on 2026-11-15",
      note: "Global ID, grade, level, greatsword slot, base stats and imprint pool reviewed individually.",
    },
  }
);


weaponsData.push(
  {
    id: "110130012",
    name: "Fallen Ancient God Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "46",
    requiredLevel: "40",
    tier: "2",
    icon: "/equipment-icons/110130012.webp",
    stats: toPairs([
      ["Min Attack", "199"], ["Max Attack", "269"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "8.20 ~ 9.50"], ["Damage Boost", "4.59 ~ 5.35"],
      ["Multi-hit Chance", "6.07 ~ 7.05"], ["Weapon Damage Boost", "6.07 ~ 7.05"],
      ["Status Effect Chance", "16.20 ~ 18.70"], ["Might", "16 ~ 25"],
      ["Precision", "16 ~ 25"], ["Attack", "28 ~ 39"], ["Critical Hit", "43 ~ 56"],
      ["Critical Attack", "60 ~ 76"], ["Back Attack", "60 ~ 76"], ["Front Attack", "60 ~ 76"],
      ["Accuracy", "58 ~ 74"], ["Block", "35 ~ 47"], ["MP", "129 ~ 155"], ["HP", "260 ~ 306"],
    ]),
    imprintSlots: 4,
    obtain: ["Chaotic Lower Reshanta drops, including Archipelago of Siel's Wings, Reshanta's Root, and Black Fragments Area."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Sell price", value: "3,427 Kina (Bound)"},
      {label: "Skin", value: "Golden Vow (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global client"},
    ],
    upgrades: "Enchantable to +15.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      url: "https://aion2.gaming.tools/items/110130012",
      region: "GLOBAL",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "Item card manually reviewed on 2026-11-15",
      note: "Global ID, grade, level, greatsword slot, base stats and imprint pool reviewed individually.",
    },
  },
  {
    id: "110130015",
    name: "True Dragon Lord Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "62",
    requiredLevel: "45",
    tier: "3",
    icon: "/equipment-icons/110130015.webp",
    stats: toPairs([
      ["Min Attack", "269"], ["Max Attack", "365"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "8.80 ~ 10.19"], ["Damage Boost", "4.93 ~ 5.74"],
      ["Multi-hit Chance", "6.52 ~ 7.57"], ["Weapon Damage Boost", "6.52 ~ 7.57"],
      ["Status Effect Chance", "17.40 ~ 20.08"], ["Might", "17 ~ 27"],
      ["Precision", "17 ~ 27"], ["Attack", "30 ~ 42"], ["Critical Hit", "46 ~ 60"],
      ["Critical Attack", "65 ~ 82"], ["Back Attack", "65 ~ 82"], ["Front Attack", "65 ~ 82"],
      ["Accuracy", "62 ~ 78"], ["Block", "37 ~ 50"], ["MP", "139 ~ 167"], ["HP", "279 ~ 328"],
    ]),
    imprintSlots: 4,
    obtain: ["Elyos Blacksmithing 55 recipe at a Blacksmithing Table."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Faction", value: "Elyos"},
      {label: "Sell price", value: "30,906 Kina (Bound)"},
      {label: "Skin", value: "Forgotten Melody (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global client"},
    ],
    upgrades: "Enchantable, exceedable and surpassable.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      url: "https://aion2.gaming.tools/items/110130015",
      region: "GLOBAL",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "Item card manually reviewed on 2026-11-15",
      note: "Global ID, faction, craft requirement, grade, level, weapon slot, stats and imprint pool reviewed individually.",
    },
  },
  {
    id: "110130020",
    name: "Dark Dragon Lord Greatsword",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Greatsword",
    itemType: "Greatsword",
    equipType: "MainHand",
    itemLevel: "78",
    requiredLevel: "45",
    tier: "3",
    icon: "/equipment-icons/110130020.webp",
    stats: toPairs([
      ["Min Attack", "340"], ["Max Attack", "460"], ["Accuracy", "100"],
      ["Critical Hit", "150"], ["Block", "150"],
      ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: toPairs([
      ["Combat Speed", "9.72 ~ 11.25"], ["Damage Boost", "5.44 ~ 6.33"],
      ["Multi-hit Chance", "7.20 ~ 8.35"], ["Weapon Damage Boost", "7.20 ~ 8.35"],
      ["Status Effect Chance", "19.20 ~ 22.15"], ["Might", "19 ~ 29"],
      ["Precision", "19 ~ 29"], ["Attack", "33 ~ 45"], ["Critical Hit", "51 ~ 66"],
      ["Critical Attack", "72 ~ 90"], ["Back Attack", "72 ~ 90"], ["Front Attack", "72 ~ 90"],
      ["Accuracy", "68 ~ 85"], ["Block", "41 ~ 54"], ["MP", "153 ~ 183"], ["HP", "308 ~ 361"],
    ]),
    imprintSlots: 4,
    obtain: ["No known in-game acquisition source in the reviewed Global reference."],
    details: [
      {label: "Weapon range", value: "1.5 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Soul Bind"},
      {label: "Faction", value: "Asmodians"},
      {label: "Sell price", value: "53,102 Kina (Bound)"},
      {label: "Skin", value: "Seal Guardian (Greatsword)"},
      {label: "Region/version", value: "AION 2 Global client"},
    ],
    upgrades: "Enchantable, exceedable and surpassable.",
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source: {
      name: "AION 2 Global Database (gaming.tools)",
      url: "https://aion2.gaming.tools/items/110130020",
      region: "GLOBAL",
      capturedAt: "2026-11-15",
      official: false,
      crossCheck: "Item card manually reviewed on 2026-11-15",
      note: "Global ID, faction, grade, level, weapon slot, base stats and imprint pool reviewed individually; no current acquisition was listed.",
    },
  }
);

export default weaponsData;
