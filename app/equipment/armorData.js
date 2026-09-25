const imprintPools = {
  level13: [
    ["Incoming Heal","4.95% ~ 5.76%"],["Double Chance","0.55% ~ 0.7%"],["Endurance","0.82% ~ 1.01%"],["Attack increase","0.55% ~ 0.7%"],
    ["Perfect Resist","1.03% ~ 1.25%"],["Status Effect Resist","1.76% ~ 2.09%"],["Weapon Damage Tolerance","1.98% ~ 2.35%"],
    ["Dexterity","3 ~ 10"],["Constitution","5 ~ 13"],["Willpower","3 ~ 10"],["Attack","6 ~ 14"],["Critical Hit","8 ~ 16"],
    ["Accuracy","11 ~ 20"],["Defense","68 ~ 85"],["Evasion","7 ~ 15"],["Critical Damage Defense","70 ~ 88"],
    ["Back Defense","70 ~ 88"],["Front Defense","70 ~ 88"],["Critical Hit Resist","12 ~ 21"],["Block","7 ~ 15"],
    ["MP","26 ~ 37"],["HP","52 ~ 67"],["Natural MP Regen","6 ~ 14"],["Natural HP Regen","12 ~ 21"],
  ],
  level18: [
    ["Incoming Heal","5.17% ~ 6.02%"],["Double Chance","0.57% ~ 0.73%"],["Endurance","0.86% ~ 1.06%"],["Attack increase","0.57% ~ 0.73%"],
    ["Perfect Resist","1.08% ~ 1.31%"],["Status Effect Resist","1.84% ~ 2.19%"],["Weapon Damage Tolerance","2.07% ~ 2.45%"],
    ["Dexterity","3 ~ 10"],["Constitution","5 ~ 13"],["Willpower","3 ~ 10"],["Attack","6 ~ 14"],["Critical Hit","9 ~ 17"],
    ["Accuracy","12 ~ 21"],["Defense","71 ~ 89"],["Evasion","7 ~ 15"],["Critical Damage Defense","74 ~ 92"],
    ["Back Defense","74 ~ 92"],["Front Defense","74 ~ 92"],["Critical Hit Resist","13 ~ 22"],["Block","7 ~ 15"],
    ["MP","27 ~ 38"],["HP","55 ~ 70"],["Natural MP Regen","6 ~ 14"],["Natural HP Regen","13 ~ 22"],
  ],
  elder: [
    ["Incoming Heal","8.62% ~ 9.98%"],["Double Chance","0.96% ~ 1.17%"],["Endurance","1.43% ~ 1.71%"],["Attack increase","0.96% ~ 1.17%"],
    ["Perfect Resist","1.79% ~ 2.13%"],["Status Effect Resist","3.08% ~ 3.61%"],["Weapon Damage Tolerance","3.45% ~ 4.04%"],
    ["Dexterity","5 ~ 13"],["Constitution","9 ~ 17"],["Willpower","5 ~ 13"],["Attack","10 ~ 19"],["Critical Hit","15 ~ 24"],
    ["Accuracy","20 ~ 30"],["Defense","119 ~ 144"],["Evasion","12 ~ 21"],["Critical Damage Defense","123 ~ 148"],
    ["Back Defense","123 ~ 148"],["Front Defense","123 ~ 148"],["Critical Hit Resist","21 ~ 31"],["Block","12 ~ 21"],
    ["MP","46 ~ 60"],["HP","92 ~ 113"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","21 ~ 31"],
  ],
  wisdom: [
    ["Incoming Heal","11.25% ~ 13.01%"],["Double Chance","1.25% ~ 1.51%"],["Endurance","1.87% ~ 2.22%"],["Attack increase","1.25% ~ 1.51%"],
    ["Perfect Resist","2.34% ~ 2.76%"],["Status Effect Resist","4.01% ~ 4.68%"],["Weapon Damage Tolerance","4.5% ~ 5.25%"],
    ["Dexterity","7 ~ 15"],["Constitution","12 ~ 21"],["Willpower","7 ~ 15"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],
    ["Accuracy","26 ~ 37"],["Defense","156 ~ 186"],["Evasion","15 ~ 24"],["Critical Damage Defense","160 ~ 191"],
    ["Back Defense","160 ~ 191"],["Front Defense","160 ~ 191"],["Critical Hit Resist","28 ~ 39"],["Block","16 ~ 25"],
    ["MP","60 ~ 76"],["HP","120 ~ 145"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"],
  ],
};

const helmets = [
  {id:"210360017",name:"Forgotten Helm",grade:"Common",level:"13",defense:"78",hp:"33",imprintPool:"level13",sockets:"1",sellPrice:"29 Gold",enchant:"+5",upgrade:"At +5: Defense 21, HP 8"},
  {id:"210360018",name:"Riverside Helm",grade:"Common",level:"18",defense:"110",hp:"45",imprintPool:"level18",sockets:"1",sellPrice:"40 Gold",enchant:"+5",upgrade:"At +5: Defense 29, HP 11"},
  {id:"210360021",name:"Shade Helm",grade:"Common",level:"13",defense:"78",hp:"33",imprintPool:"level13",sockets:"1",sellPrice:"29 Gold",enchant:"+5",upgrade:"At +5: Defense 21, HP 8"},
  {id:"210360022",name:"Phantasm Helm",grade:"Common",level:"18",defense:"110",hp:"45",imprintPool:"level18",sockets:"1",sellPrice:"40 Gold",enchant:"+5",upgrade:"At +5: Defense 29, HP 11"},
  {id:"210340002",name:"Elder Helm",grade:"Epic",level:"23",requiredLevel:"20",defense:"143",hp:"58",imprintPool:"elder",sockets:"3",sellPrice:"185 Gold",enchant:"+10",upgrade:"At +10: Defense 75, HP 28"},
  {id:"210330001",name:"Wisdom Helm",grade:"Unique",level:"36",requiredLevel:"30",defense:"227",hp:"90",imprintPool:"wisdom",sockets:"4",sellPrice:"726 Gold",enchant:"+15",upgrade:"At +15: Defense 178, HP 64"},
];

const pairs = (entries) => entries.map(([label,value]) => ({label,value}));

export default helmets.map((item) => ({
  id: item.id,
  name: item.name,
  group: "Armor",
  category: "Helmet",
  grade: item.grade,
  itemLevel: item.level,
  requiredLevel: item.requiredLevel || item.level,
  equipType: "Helmet",
  itemType: "Armor",
  icon: "/equipment-icons/" + item.id + ".webp",
  stats: pairs([["Defense",item.defense],["HP",item.hp]]),
  imprints: pairs(imprintPools[item.imprintPool]),
  details: [
    {label:"Binding",value:"Bind on Equip"},
    {label:"Manastone sockets",value:item.sockets},
    {label:"Soul imprint selection",value:"Choose " + item.sockets + " sub-stats"},
    {label:"Sell price",value:item.sellPrice},
    {label:"Enchantable to",value:item.enchant},
    {label:"Region/version",value:"Global Launch Scale Test client · 2026-09-19"},
  ],
  upgrades: item.upgrade,
  source: {
    name: "AION2 Hub independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
}));
