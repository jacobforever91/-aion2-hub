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
  icon: `https://aion2hub.com/api/icon/items/${row.id}`,
  stats: toPairs(row.stats),
  imprints: toPairs(row.equipType === "SubHand" ? guardImprints : mainImprints),
  details: [
    {label: "Binding", value: "Bind on Equip"},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  source: {
    name: "AION2 Hub independent item database",
    url: `https://aion2hub.com/database/items/${row.id}`,
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
}));

export default weaponsData;
