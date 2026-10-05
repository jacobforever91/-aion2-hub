const source = {
  region: "GLOBAL",
  clientVersion: "1.0.21.0",
  capturedAt: "2026-10-05",
  official: false,
  status: "GLOBAL_CURRENT_OBTAINABLE",
  primary: "AION 2 Global Database (gaming.tools)",
  note: "Current Global client-derived records. Acquisition cross-checked against Vakron Sky Island reward tables."
};

const icon = (id) => `https://aion2hub.com/api/icon/items/${id}`;
const pairs = (rows) => rows.map(([label,value]) => ({label,value}));

const row = (id,name,category,defense,hp,imprints) => ({
  id,
  name,
  region: "GLOBAL",
  grade: "Unique",
  rarityColor: "Yellow",
  group: "Armor",
  category,
  itemType: "Armor",
  equipType: category,
  itemLevel: "70",
  requiredLevel: "45",
  tier: "2",
  icon: icon(id),
  stats: pairs([["Defense",String(defense)],["HP",String(hp)]]),
  imprints: pairs(imprints),
  obtain: ["Vakron Sky Island"],
  details: [
    {label:"Manastone slots",value:"4"},
    {label:"Binding",value:"Bind on pickup"},
    {label:"Region/version",value:"AION 2 Global 1.0.21.0"}
  ],
  verificationStatus: "GLOBAL_CURRENT_OBTAINABLE",
  source
});

export default [
  row("210330052","Vakron Helm","Helmet",447,175,[
    ["Incoming Heal","14.40 ~ 16.63"],["Double Chance","1.60 ~ 1.91"],["Endurance","2.40 ~ 2.83"],["Attack increase","1.60 ~ 1.91"],
    ["Perfect Resist","3 ~ 3.52"],["Status Effect Resist","5.14 ~ 5.98"],["Weapon Damage Tolerance","5.76 ~ 6.69"],
    ["Dexterity","9 ~ 17"],["Constitution","15 ~ 24"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","25 ~ 36"],
    ["Accuracy","34 ~ 46"],["Defense","200 ~ 237"],["Evasion","20 ~ 30"],["Critical Damage Defense","205 ~ 243"],
    ["Back Defense","205 ~ 243"],["Front Defense","205 ~ 243"],["Critical Hit Resist","36 ~ 48"],["Block","20 ~ 30"],
    ["MP","76 ~ 94"],["HP","154 ~ 184"],["Natural MP Regen","18 ~ 28"],["Natural HP Regen","36 ~ 48"]
  ]),
  row("210430052","Vakron Pauldrons","Shoulder",447,175,[
    ["Critical Damage Boost","9.60 ~ 11.11"],["Regeneration","1.44 ~ 1.73"],["Double Chance","1.28 ~ 1.54"],["Defense increase","1.92 ~ 2.28"],
    ["Endurance Penetration","1.44 ~ 1.73"],["Status Effect Resist","4.11 ~ 4.80"],["Perfect Resist","2.40 ~ 2.83"],
    ["Dexterity","13 ~ 22"],["Constitution","8 ~ 16"],["Willpower","17 ~ 27"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],
    ["Accuracy","27 ~ 38"],["Defense","160 ~ 191"],["Evasion","16 ~ 25"],["Critical Damage Defense","164 ~ 196"],
    ["Back Defense","164 ~ 196"],["Front Defense","164 ~ 196"],["Critical Hit Resist","28 ~ 39"],["Block","16 ~ 25"],
    ["MP","61 ~ 77"],["HP","123 ~ 148"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"]
  ]),
  row("210130052","Vakron Breastplate","Torso",596,280,[
    ["Damage Boost","4.89 ~ 5.69"],["Regeneration","2.16 ~ 2.55"],["Perfect Chance","4.32 ~ 5.04"],["Defense increase","2.88 ~ 3.38"],
    ["Double Resist","2.88 ~ 3.38"],["Status Effect Resist","6.17 ~ 7.17"],["Weapon Damage Tolerance","7.20 ~ 8.35"],
    ["Dexterity","10 ~ 19"],["Constitution","17 ~ 27"],["Willpower","8 ~ 16"],["Attack","20 ~ 30"],["Critical Hit","30 ~ 42"],
    ["Accuracy","41 ~ 54"],["Defense","240 ~ 283"],["Evasion","24 ~ 35"],["Critical Damage Defense","246 ~ 290"],
    ["Back Defense","246 ~ 290"],["Front Defense","246 ~ 290"],["Critical Hit Resist","43 ~ 56"],["Block","24 ~ 35"],
    ["MP","92 ~ 113"],["HP","185 ~ 220"],["Natural MP Regen","22 ~ 32"],["Natural HP Regen","43 ~ 56"]
  ]),
  row("210230052","Vakron Greaves","Pants",497,210,[
    ["Damage Tolerance","8.64 ~ 10.01"],["Perfect Chance","3.96 ~ 4.62"],["Endurance","2.64 ~ 3.11"],["Attack increase","1.76 ~ 2.09"],
    ["Double Resist","2.64 ~ 3.11"],["Status Effect Resist","5.65 ~ 6.57"],["Multi-hit Resist","3.96 ~ 4.62"],
    ["Dexterity","8 ~ 16"],["Constitution","13 ~ 22"],["Willpower","10 ~ 19"],["Attack","18 ~ 28"],["Critical Hit","28 ~ 39"],
    ["Accuracy","37 ~ 50"],["Defense","220 ~ 260"],["Evasion","22 ~ 32"],["Critical Damage Defense","226 ~ 267"],
    ["Back Defense","226 ~ 267"],["Front Defense","226 ~ 267"],["Critical Hit Resist","39 ~ 52"],["Block","22 ~ 32"],
    ["MP","84 ~ 104"],["HP","169 ~ 201"],["Natural MP Regen","20 ~ 30"],["Natural HP Regen","39 ~ 52"]
  ]),
  row("210530052","Vakron Gloves","Gloves",398,140,[
    ["Combat Speed","5.40 ~ 6.28"],["Perfect Chance","2.52 ~ 2.97"],["Regeneration","1.26 ~ 1.52"],["Defense increase","1.68 ~ 2"],
    ["Endurance Penetration","1.26 ~ 1.52"],["Status Effect Resist","3.60 ~ 4.21"],["Multi-hit Resist","2.52 ~ 2.97"],
    ["Dexterity","11 ~ 20"],["Constitution","11 ~ 20"],["Willpower","11 ~ 20"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],
    ["Accuracy","24 ~ 35"],["Defense","140 ~ 168"],["Evasion","14 ~ 23"],["Critical Damage Defense","143 ~ 171"],
    ["Back Defense","143 ~ 171"],["Front Defense","143 ~ 171"],["Critical Hit Resist","25 ~ 36"],["Block","14 ~ 23"],
    ["MP","53 ~ 68"],["HP","108 ~ 131"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","25 ~ 36"]
  ]),
  row("210630052","Vakron Boots","Boots",398,140,[
    ["Move Speed","7.68 ~ 8.90"],["Perfect Chance","3.24 ~ 3.80"],["Regeneration","1.62 ~ 1.93"],["Defense increase","2.16 ~ 2.55"],
    ["Perfect Resist","2.70 ~ 3.18"],["Status Effect Resist","4.62 ~ 5.38"],["Endurance Penetration","1.62 ~ 1.93"],
    ["Dexterity","17 ~ 27"],["Constitution","10 ~ 19"],["Willpower","13 ~ 22"],["Attack","15 ~ 24"],["Critical Hit","23 ~ 33"],
    ["Accuracy","30 ~ 42"],["Defense","180 ~ 214"],["Evasion","18 ~ 28"],["Critical Damage Defense","185 ~ 220"],
    ["Back Defense","185 ~ 220"],["Front Defense","185 ~ 220"],["Critical Hit Resist","32 ~ 44"],["Block","18 ~ 28"],
    ["MP","69 ~ 86"],["HP","138 ~ 166"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","32 ~ 44"]
  ]),
  row("210730052","Vakron Cloak","Cape",398,140,[
    ["Critical Damage Tolerance","9.60 ~ 11.11"],["Double Chance","1.28 ~ 1.54"],["Endurance","1.92 ~ 2.28"],["Attack increase","1.28 ~ 1.54"],
    ["Weapon Damage Tolerance","7.20 ~ 8.35"],["Status Effect Resist","4.11 ~ 4.80"],["Endurance Penetration","1.44 ~ 1.73"],
    ["Dexterity","15 ~ 24"],["Constitution","9 ~ 17"],["Willpower","15 ~ 24"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],
    ["Accuracy","27 ~ 38"],["Defense","160 ~ 191"],["Evasion","16 ~ 25"],["Critical Damage Defense","164 ~ 196"],
    ["Back Defense","164 ~ 196"],["Front Defense","164 ~ 196"],["Critical Hit Resist","28 ~ 39"],["Block","16 ~ 25"],
    ["MP","61 ~ 77"],["HP","123 ~ 148"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"]
  ])
];
