const source = {
  region: "GLOBAL",
  clientVersion: "1.0.21.0",
  capturedAt: "2026-09-30",
  official: false,
  status: "GLOBAL_CLIENT_CROSSCHECKED",
  primary: "AION 2 Global Database (gaming.tools)",
  crossCheck: "Gamers4Life AION 2 gear-family browser",
  note: "IDs, names, grade, level and slot family were cross-checked between independent client-derived Global references. Base stats come from the Global 1.0.21.0 item records. Keep separate from first-party VERIFIED data."
};

const source207 = {
  region: "GLOBAL",
  clientVersion: "2.0.7.0",
  capturedAt: "2026-10-14",
  official: false,
  status: "GLOBAL_CLIENT_CROSSCHECKED",
  primary: "AION 2 Global Database (gaming.tools)",
  crossCheck: "Aion2Builds official-armory aggregate (2026-10-16)",
  note: "Base stats are from current Global client-derived records. Current usage is independently observed in aggregated public official character pages."
};

const commonImprints = [
  ["Combat Speed", "10.63 ~ 12.29"],
  ["Damage Boost", "5.95 ~ 6.91"],
  ["Multi-hit Chance", "7.87 ~ 9.12"],
  ["Weapon Damage Boost", "7.87 ~ 9.12"],
  ["Status Effect Chance", "21 ~ 24.22"],
  ["Might", "21 ~ 31"],
  ["Precision", "21 ~ 31"],
  ["Attack", "36 ~ 48"],
  ["Critical Hit", "56 ~ 71"],
  ["Critical Attack", "78 ~ 97"],
  ["Back Attack", "78 ~ 97"],
  ["Front Attack", "78 ~ 97"],
  ["Accuracy", "75 ~ 93"],
  ["Block", "45 ~ 59"],
  ["MP", "168 ~ 200"],
  ["HP", "337 ~ 395"],
];

const guardImprints = [
  ["Combat Speed", "8.26 ~ 9.57"],
  ["Damage Boost", "4.76 ~ 5.54"],
  ["Multi-hit Chance", "6.30 ~ 7.32"],
  ["Weapon Damage Boost", "6.30 ~ 7.32"],
  ["Status Effect Chance", "16.80 ~ 19.39"],
  ["Might", "16 ~ 25"],
  ["Precision", "16 ~ 25"],
  ["Attack", "29 ~ 40"],
  ["Critical Hit", "44 ~ 58"],
  ["Critical Attack", "63 ~ 79"],
  ["Back Attack", "63 ~ 79"],
  ["Front Attack", "63 ~ 79"],
  ["Accuracy", "60 ~ 76"],
  ["Block", "36 ~ 48"],
  ["MP", "134 ~ 161"],
  ["HP", "270 ~ 318"],
];

const pairs = (rows) => rows.map(([label, value]) => ({label, value}));
const icon = (id) => `https://aion2hub.com/api/icon/items/${id}`;

const spiritforgedImprints = [
  ["Might", "15"],
  ["Critical Hit", "16"],
  ["Block", "23"],
  ["MP", "57"],
];
const spiritforgedGuardImprints = [
  ["Might", "10"],
  ["Accuracy", "30"],
  ["Block", "15"],
  ["HP", "120"],
];
const bakarmaGuardImprints = [
  ["Combat Speed", "6.85 ~ 7.95"], ["Damage Boost", "3.94 ~ 4.60"],
  ["Multi-hit Chance", "5.22 ~ 6.07"], ["Weapon Damage Boost", "5.22 ~ 6.07"],
  ["Status Effect Chance", "13.92 ~ 16.08"], ["Might", "13 ~ 22"], ["Precision", "13 ~ 22"],
  ["Attack", "24 ~ 35"], ["Critical Hit", "37 ~ 50"], ["Critical Attack", "52 ~ 67"],
  ["Back Attack", "52 ~ 67"], ["Front Attack", "52 ~ 67"], ["Accuracy", "49 ~ 63"],
  ["Block", "30 ~ 42"], ["MP", "111 ~ 135"], ["HP", "223 ~ 263"],
];
const vakronGuardImprints = [
  ["Combat Speed", "7.56 ~ 8.76"], ["Damage Boost", "4.35 ~ 5.07"],
  ["Multi-hit Chance", "5.76 ~ 6.69"], ["Weapon Damage Boost", "5.76 ~ 6.69"],
  ["Status Effect Chance", "15.36 ~ 17.73"], ["Might", "15 ~ 24"], ["Precision", "15 ~ 24"],
  ["Attack", "26 ~ 37"], ["Critical Hit", "40 ~ 53"], ["Critical Attack", "57 ~ 73"],
  ["Back Attack", "57 ~ 73"], ["Front Attack", "57 ~ 73"], ["Accuracy", "55 ~ 70"],
  ["Block", "33 ~ 45"], ["MP", "122 ~ 147"], ["HP", "247 ~ 291"],
];

const currentMain = (id,name,category,range,stats) => ({
  id,name,region:"GLOBAL",grade:"Unique",rarityColor:"Yellow",group:"Weapon",category,itemType:category,
  equipType:"MainHand",itemLevel:"45",requiredLevel:"",tier:"1",icon:icon(id),stats:pairs(stats),
  imprints:pairs(spiritforgedImprints),imprintSlots:4,
  obtain:["Observed on current Global characters (official armory aggregate)"],
  details:[
    {label:"Weapon range",value:range},{label:"Manastone slots",value:"4"},{label:"Godstone slots",value:"1"},
    {label:"Binding",value:"Personal Trade Unavailable"},{label:"Region/version",value:"AION 2 Global 2.0.7.0"}
  ],
  verificationStatus:"GLOBAL_207_CROSSCHECKED",source:source207
});

const currentGuard = (id,name,itemLevel,stats,imprints,obtain) => ({
  id,name,region:"GLOBAL",grade:"Unique",rarityColor:"Yellow",group:"Weapon",category:"Guard",itemType:"Guard",
  equipType:"SubHand",itemLevel:String(itemLevel),requiredLevel:"45",tier:itemLevel>=54?"2":"1",icon:icon(id),
  stats:pairs(stats),imprints:pairs(imprints),imprintSlots:4,obtain,
  details:[
    {label:"Manastone slots",value:"4"},{label:"Godstone slots",value:"1"},
    {label:"Region/version",value:"AION 2 Global 2.0.7.0"}
  ],
  verificationStatus:"GLOBAL_207_CROSSCHECKED",source:source207
});

const main = (id, name, category, range, stats) => ({
  id,
  name,
  region: "GLOBAL",
  grade: "Unique",
  rarityColor: "Yellow",
  group: "Weapon",
  category,
  itemType: category,
  equipType: "MainHand",
  itemLevel: "86",
  requiredLevel: "45",
  tier: "2",
  icon: icon(id),
  stats: pairs(stats),
  imprints: pairs(commonImprints),
  details: [
    {label: "Weapon range", value: range},
    {label: "Manastone slots", value: "4"},
    {label: "Godstone slots", value: "1"},
    {label: "Binding", value: "Bind on pickup"},
    {label: "Sell price", value: "55,000 Kina (Bound)"},
    {label: "Region/version", value: "AION 2 Global 1.0.21.0"},
  ],
  verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
  source,
});

export default [
  currentMain("110130048","Spiritforged Greatsword","Greatsword","1.5 m",[
    ["Min Attack","195"],["Max Attack","263"],["Accuracy","100"],["Critical Hit","150"],["Block","150"],
    ["Parry Damage Reduction Rate","33%"],["Parry Damage Reduction Amount","100000"]
  ]),
  currentMain("110230048","Spiritforged Longsword","Longsword","1.3 m",[
    ["Min Attack","183"],["Max Attack","229"],["Accuracy","150"],["Critical Hit","50"],["Block","200"],
    ["Parry Damage Reduction Rate","27%"],["Shield Block Damage Reduction Rate","40%"],
    ["Parry Damage Reduction Amount","100000"],["Shield Block Damage Reduction Amount","100000"]
  ]),
  currentMain("110330048","Spiritforged Dagger","Dagger","1 m",[
    ["Min Attack","160"],["Max Attack","206"],["Accuracy","50"],["Critical Hit","200"],["Block","50"],
    ["Parry Damage Reduction Rate","24%"],["Parry Damage Reduction Amount","100000"]
  ]),
  currentMain("110430048","Spiritforged Bow","Bow","20 m",[
    ["Min Attack","177"],["Max Attack","223"],["Accuracy","100"],["Critical Hit","100"],["Block","0"],
    ["Parry Damage Reduction Rate","24%"],["Parry Damage Reduction Amount","100000"]
  ]),
  currentMain("110530048","Spiritforged Spellbook","Spellbook","20 m",[
    ["Min Attack","206"],["Max Attack","229"],["Accuracy","100"],["Critical Hit","100"],["Block","0"],
    ["Parry Damage Reduction Rate","21%"],["Parry Damage Reduction Amount","100000"]
  ]),
  currentMain("110630047","Spiritforged Orb","Orb","20 m",[
    ["Min Attack","137"],["Max Attack","275"],["Accuracy","50"],["Critical Hit","150"],["Block","0"],
    ["Parry Damage Reduction Rate","21%"],["Parry Damage Reduction Amount","100000"]
  ]),
  currentMain("110730047","Spiritforged Mace","Mace","20 m",[
    ["Min Attack","160"],["Max Attack","206"],["Accuracy","100"],["Critical Hit","50"],["Block","50"],
    ["Parry Damage Reduction Rate","27%"],["Shield Block Damage Reduction Rate","40%"],
    ["Parry Damage Reduction Amount","100000"],["Shield Block Damage Reduction Amount","100000"]
  ]),
  currentMain("110830048","Spiritforged Staff","Staff","1.3 m",[
    ["Min Attack","183"],["Max Attack","252"],["Accuracy","75"],["Critical Hit","100"],["Block","125"],
    ["Parry Damage Reduction Rate","30%"],["Parry Damage Reduction Amount","100000"]
  ]),
  currentGuard("115030040","Spiritforged Guard",45,[["Attack","92"],["Accuracy","50"],["Critical Hit","50"]],spiritforgedGuardImprints,
    ["Observed on current Global characters (official armory aggregate)"]),
  currentGuard("115030038","Bakarma Guard",54,[["Attack","110"],["Accuracy","50"],["Critical Hit","50"]],bakarmaGuardImprints,
    ["Draupnir","Gear Change Voucher: Draupnir"]),
  currentGuard("115030052","Vakron Guard",70,[["Attack","144"],["Accuracy","50"],["Critical Hit","50"]],vakronGuardImprints,
    ["Vakron Sky Island","Abyssal Forge: Ludra"]),
  main("110130060", "Abyssal Claymore", "Greatsword", "1.5 m", [
    ["Min Attack", "376"], ["Max Attack", "508"], ["Accuracy", "100"], ["Critical Hit", "150"], ["Block", "150"],
    ["Parry Damage Reduction Rate", "33%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  main("110230060", "Abyssal Longsword", "Longsword", "1.3 m", [
    ["Min Attack", "354"], ["Max Attack", "442"], ["Accuracy", "150"], ["Critical Hit", "50"], ["Block", "200"],
    ["Parry Damage Reduction Rate", "27%"], ["Shield Block Damage Reduction Rate", "40%"],
    ["Parry Damage Reduction Amount", "100000"], ["Shield Block Damage Reduction Amount", "100000"],
  ]),
  main("110330060", "Abyssal Dagger", "Dagger", "1 m", [
    ["Min Attack", "309"], ["Max Attack", "398"], ["Accuracy", "50"], ["Critical Hit", "200"], ["Block", "50"],
    ["Parry Damage Reduction Rate", "24%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  main("110430060", "Abyssal Bow", "Bow", "20 m", [
    ["Min Attack", "343"], ["Max Attack", "431"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"],
    ["Parry Damage Reduction Rate", "24%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  main("110530060", "Abyssal Spellbook", "Spellbook", "20 m", [
    ["Min Attack", "398"], ["Max Attack", "442"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"],
    ["Parry Damage Reduction Rate", "21%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  main("110630060", "Abyssal Orb", "Orb", "20 m", [
    ["Min Attack", "265"], ["Max Attack", "530"], ["Accuracy", "50"], ["Critical Hit", "150"], ["Block", "0"],
    ["Parry Damage Reduction Rate", "21%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  main("110730060", "Abyssal Mace", "Mace", "20 m", [
    ["Min Attack", "309"], ["Max Attack", "398"], ["Accuracy", "100"], ["Critical Hit", "50"], ["Block", "50"],
    ["Parry Damage Reduction Rate", "27%"], ["Shield Block Damage Reduction Rate", "40%"],
    ["Parry Damage Reduction Amount", "100000"], ["Shield Block Damage Reduction Amount", "100000"],
  ]),
  main("110830060", "Abyssal Staff", "Staff", "1.3 m", [
    ["Min Attack", "354"], ["Max Attack", "486"], ["Accuracy", "75"], ["Critical Hit", "100"], ["Block", "125"],
    ["Parry Damage Reduction Rate", "30%"], ["Parry Damage Reduction Amount", "100000"],
  ]),
  {
    id: "115030058",
    name: "Abyssal Guard",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Guard",
    itemType: "Guard",
    equipType: "SubHand",
    itemLevel: "86",
    requiredLevel: "45",
    tier: "2",
    icon: icon("115030058"),
    stats: pairs([["Attack", "177"], ["Accuracy", "50"], ["Critical Hit", "50"]]),
    imprints: pairs(guardImprints),
    details: [
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Bind on pickup"},
      {label: "Sell price", value: "55,000 Kina (Bound)"},
      {label: "Region/version", value: "AION 2 Global 1.0.21.0"},
    ],
    verificationStatus: "GLOBAL_CLIENT_CROSSCHECKED",
    source,
  },
  {
    id: "110420003",
    name: "Ludra's Fatal Bow",
    region: "GLOBAL",
    grade: "Unique",
    rarityColor: "Yellow",
    group: "Weapon",
    category: "Bow",
    itemType: "Bow",
    equipType: "MainHand",
    itemLevel: "102",
    requiredLevel: "45",
    tier: "4",
    icon: icon("110420003"),
    stats: pairs([
      ["Min Attack", "470"], ["Max Attack", "591"], ["Accuracy", "100"], ["Critical Hit", "100"], ["Block", "0"],
      ["Parry Damage Reduction Rate", "24%"], ["Parry Damage Reduction Amount", "100000"],
    ]),
    imprints: pairs([
      ["Combat Speed", "11.23 ~ 12.98"],
      ["Damage Boost", "6.29 ~ 7.30"],
      ["Multi-hit Chance", "8.32 ~ 9.64"],
      ["Weapon Damage Boost", "8.32 ~ 9.64"],
      ["Status Effect Chance", "22.20 ~ 25.60"],
      ["Might", "22 ~ 32"],
      ["Precision", "22 ~ 32"],
      ["Attack", "38 ~ 51"],
      ["Critical Hit", "59 ~ 75"],
      ["Accuracy", "79 ~ 98"],
      ["HP", "357 ~ 418"],
    ]),
    obtain: ["Abyssal Forge: Ludra", "Abyssal Forge: Weapon Selection Chest (Bound)"],
    details: [
      {label: "Weapon range", value: "20 m"},
      {label: "Manastone slots", value: "4"},
      {label: "Godstone slots", value: "1"},
      {label: "Binding", value: "Bind on pickup"},
      {label: "Region/version", value: "AION 2 Global 1.0.21.0"},
    ],
    verificationStatus: "GLOBAL_CURRENT_OBTAINABLE",
    source: {
      ...source,
      primary: "AION 2 Global Database (gaming.tools)",
      note: "Current Global acquisition cross-check: Abyssal Forge: Ludra / weapon selection chest."
    },
  }
];
