const source = {
  region: "GLOBAL",
  clientVersion: "2.0.7.0",
  capturedAt: "2026-10-14",
  official: false,
  status: "GLOBAL_CLIENT_CROSSCHECKED",
  primary: "AION 2 Global Database (gaming.tools)",
  crossCheck: "Aion2Builds official-armory aggregate (2026-10-16)",
  note: "Current Global Bakarma armor. Base stats and Soul Binding ranges are client-derived; current usage is independently observed in public official character pages."
};

const icon=id=>`https://aion2hub.com/api/icon/items/${id}`;
const pairs=rows=>rows.map(([label,value])=>({label,value}));

const pools={
  helm:[
    ["Incoming Heal","13.05 ~ 15.08"],["Double Chance","1.45 ~ 1.74"],["Endurance","2.17 ~ 2.57"],["Attack increase","1.45 ~ 1.74"],
    ["Perfect Resist","2.71 ~ 3.19"],["Status Effect Resist","4.66 ~ 5.43"],["Weapon Damage Tolerance","5.22 ~ 6.07"],
    ["Dexterity","8 ~ 16"],["Constitution","13 ~ 22"],["Willpower","8 ~ 16"],["Attack","15 ~ 24"],["Critical Hit","23 ~ 33"],
    ["Accuracy","31 ~ 43"],["Defense","181 ~ 215"],["Evasion","18 ~ 28"],["Critical Damage Defense","186 ~ 221"],
    ["Back Defense","186 ~ 221"],["Front Defense","186 ~ 221"],["Critical Hit Resist","32 ~ 44"],["Block","18 ~ 28"],
    ["MP","69 ~ 86"],["HP","139 ~ 167"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","32 ~ 44"]
  ],
  shoulder:[
    ["Critical Damage Boost","8.70 ~ 10.08"],["Regeneration","1.30 ~ 1.57"],["Double Chance","1.16 ~ 1.40"],["Defense increase","1.74 ~ 2.07"],
    ["Endurance Penetration","1.30 ~ 1.57"],["Status Effect Resist","3.72 ~ 4.35"],["Perfect Resist","2.17 ~ 2.57"],
    ["Dexterity","12 ~ 21"],["Constitution","7 ~ 15"],["Willpower","15 ~ 24"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],
    ["Accuracy","24 ~ 35"],["Defense","145 ~ 174"],["Evasion","14 ~ 23"],["Critical Damage Defense","149 ~ 178"],
    ["Back Defense","149 ~ 178"],["Front Defense","149 ~ 178"],["Critical Hit Resist","26 ~ 37"],["Block","15 ~ 24"],
    ["MP","55 ~ 70"],["HP","111 ~ 135"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","26 ~ 37"]
  ],
  chest:[
    ["Damage Boost","4.43 ~ 5.16"],["Regeneration","1.95 ~ 2.31"],["Perfect Chance","3.91 ~ 4.57"],["Defense increase","2.61 ~ 3.07"],
    ["Double Resist","2.61 ~ 3.07"],["Status Effect Resist","5.59 ~ 6.50"],["Weapon Damage Tolerance","6.52 ~ 7.57"],
    ["Dexterity","9 ~ 17"],["Constitution","15 ~ 24"],["Willpower","7 ~ 15"],["Attack","18 ~ 28"],["Critical Hit","27 ~ 38"],
    ["Accuracy","37 ~ 50"],["Defense","217 ~ 257"]
  ],
  pants:[
    ["Damage Tolerance","7.83 ~ 9.07"],["Perfect Chance","3.58 ~ 4.19"],["Endurance","2.39 ~ 2.82"],["Attack increase","1.59 ~ 1.90"],
    ["Double Resist","2.39 ~ 2.82"],["Status Effect Resist","5.12 ~ 5.96"],["Multi-hit Resist","3.58 ~ 4.19"],
    ["Dexterity","7 ~ 15"],["Constitution","12 ~ 21"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","25 ~ 36"],
    ["Accuracy","34 ~ 46"],["Defense","199 ~ 236"]
  ],
  gloves:[
    ["Combat Speed","4.89 ~ 5.69"],["Perfect Chance","2.28 ~ 2.69"],["Regeneration","1.14 ~ 1.38"],["Defense increase","1.52 ~ 1.82"],
    ["Endurance Penetration","1.14 ~ 1.38"],["Status Effect Resist","3.26 ~ 3.82"],["Multi-hit Resist","2.28 ~ 2.69"],
    ["Dexterity","10 ~ 19"],["Constitution","10 ~ 19"],["Willpower","10 ~ 19"],["Attack","10 ~ 19"],["Critical Hit","16 ~ 25"],
    ["Accuracy","21 ~ 31"],["Defense","126 ~ 152"],["Evasion","12 ~ 21"],["Critical Damage Defense","130 ~ 157"],
    ["Back Defense","130 ~ 157"],["Front Defense","130 ~ 157"],["Critical Hit Resist","22 ~ 32"],["Block","13 ~ 22"],
    ["MP","48 ~ 62"],["HP","97 ~ 119"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","22 ~ 32"]
  ],
  boots:[
    ["Move Speed","6.96 ~ 8.07"],["Perfect Chance","2.93 ~ 3.44"],["Regeneration","1.46 ~ 1.75"],["Defense increase","1.95 ~ 2.31"],
    ["Perfect Resist","2.44 ~ 2.88"],["Status Effect Resist","4.19 ~ 4.89"],["Endurance Penetration","1.46 ~ 1.75"],
    ["Dexterity","15 ~ 24"],["Constitution","9 ~ 17"],["Willpower","12 ~ 21"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],
    ["Accuracy","28 ~ 39"],["Defense","163 ~ 194"],["Evasion","16 ~ 25"],["Critical Damage Defense","167 ~ 199"],
    ["Back Defense","167 ~ 199"],["Front Defense","167 ~ 199"],["Critical Hit Resist","29 ~ 40"],["Block","16 ~ 25"],
    ["MP","62 ~ 78"],["HP","125 ~ 151"],["Natural MP Regen","15 ~ 24"],["Natural HP Regen","29 ~ 40"]
  ],
  cloak:[
    ["Critical Damage Tolerance","8.70 ~ 10.08"],["Double Chance","1.16 ~ 1.40"],["Endurance","1.74 ~ 2.07"],["Attack increase","1.16 ~ 1.40"],
    ["Weapon Damage Tolerance","6.52 ~ 7.57"],["Status Effect Resist","3.72 ~ 4.35"],["Endurance Penetration","1.30 ~ 1.57"],
    ["Dexterity","13 ~ 22"],["Constitution","8 ~ 16"],["Willpower","13 ~ 22"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],
    ["Accuracy","24 ~ 35"],["Defense","145 ~ 174"],["Evasion","14 ~ 23"],["Critical Damage Defense","149 ~ 178"],
    ["Back Defense","149 ~ 178"],["Front Defense","149 ~ 178"],["Critical Hit Resist","26 ~ 37"],["Block","15 ~ 24"],
    ["MP","55 ~ 70"],["HP","111 ~ 135"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","26 ~ 37"]
  ]
};

const row=(id,name,category,defense,hp,pool)=>({
  id,name,region:"GLOBAL",grade:"Unique",rarityColor:"Yellow",group:"Armor",category,itemType:"Armor",equipType:category,
  itemLevel:"54",requiredLevel:"45",tier:"2",icon:icon(id),
  stats:pairs([["Defense",String(defense)],["HP",String(hp)]]),imprints:pairs(pools[pool]),imprintSlots:4,
  obtain:["Draupnir","Abyssal Forge: Ludra","Bakarma Armor Selection Chest (Bound)","Draupnir: Armor Selection Chest (Bound)"],
  details:[
    {label:"Binding",value:"Bind on Pickup"},{label:"Manastone slots",value:"4"},
    {label:"Soul imprint selection",value:"Choose 4 sub-stats"},{label:"Region/version",value:"AION 2 Global 2.0.7.0"}
  ],
  verificationStatus:"GLOBAL_207_CROSSCHECKED",source
});

export default [
  row("210330038","Bakarma Helm","Helmet",298,135,"helm"),
  row("210430038","Bakarma Pauldrons","Shoulder",298,135,"shoulder"),
  row("210130038","Bakarma Breastplate","Torso",397,216,"chest"),
  row("210230038","Bakarma Greaves","Pants",331,162,"pants"),
  row("210530038","Bakarma Gloves","Gloves",265,108,"gloves"),
  row("210630038","Bakarma Boots","Boots",265,108,"boots"),
  row("210730038","Bakarma Cloak","Cape",265,108,"cloak")
];
