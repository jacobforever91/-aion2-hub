const source={
  region:"GLOBAL",clientVersion:"2.0.7.0",capturedAt:"2026-10-14",official:false,
  status:"GLOBAL_CLIENT_CROSSCHECKED",primary:"AION 2 Global Database (gaming.tools)",
  crossCheck:"Aion2Builds official-armory aggregate (2026-10-16)",
  note:"High-usage Global accessories refreshed from current client-derived records; usage cross-checked against aggregated public official character pages."
};
const icon=id=>`https://aion2hub.com/api/icon/items/${id}`;
const pairs=rows=>rows.map(([label,value])=>({label,value}));
const accessory=(id,name,category,itemLevel,attack,defense,imprints,obtain=[])=>({
  id,name,region:"GLOBAL",grade:"Unique",rarityColor:"Yellow",group:"Accessories",category,equipType:category,itemType:"Accessories",
  itemLevel:String(itemLevel),requiredLevel:itemLevel>=70?"45":"",icon:icon(id),
  stats:pairs([["Attack",String(attack)],["Defense",String(defense)]]),imprints:pairs(imprints),imprintSlots:4,obtain,
  details:[{label:"Binding",value:itemLevel===51?"Personal Trade Unavailable":"Bind on Pickup"},{label:"Manastone slots",value:"4"},{label:"Region/version",value:"AION 2 Global 2.0.7.0"}],
  verificationStatus:"GLOBAL_207_CROSSCHECKED",source
});

const aulamusNeck=[
 ["Combat Speed","3.24 ~ 3.80"],["Might","9 ~ 17"],["Precision","9 ~ 17"],["Attack","23 ~ 33"],["Critical Hit","35 ~ 47"],["Accuracy","48 ~ 62"],
 ["Defense","280 ~ 329"],["Evasion","28 ~ 39"],["Block","29 ~ 40"],["MP","107 ~ 130"],["HP","216 ~ 255"]
];
const aulamusEar=[
 ["Move Speed","4.80 ~ 5.59"],["Might","7 ~ 15"],["Precision","7 ~ 15"],["Attack","20 ~ 30"],["Critical Hit","30 ~ 42"],["Accuracy","41 ~ 54"],
 ["Defense","240 ~ 283"],["Evasion","24 ~ 35"],["Block","24 ~ 35"],["MP","92 ~ 113"],["HP","185 ~ 220"]
];
const aulamusRing=[
 ["Might","5 ~ 13"],["Precision","5 ~ 13"],["Attack","16 ~ 25"],["Critical Hit","25 ~ 36"],["Accuracy","34 ~ 46"],
 ["Defense","200 ~ 237"],["Evasion","20 ~ 30"],["Block","20 ~ 30"],["MP","76 ~ 94"],["HP","154 ~ 184"]
];
const kromedeNeck=[
 ["Combat Speed","3.54 ~ 4.14"],["Might","10 ~ 19"],["Precision","10 ~ 19"],["Attack","25 ~ 36"],["Critical Hit","39 ~ 52"],["Accuracy","52 ~ 67"],
 ["Defense","306 ~ 359"],["Evasion","30 ~ 42"],["Block","31 ~ 43"],["MP","117 ~ 142"],["HP","236 ~ 278"]
];
const kromedeEar=[
 ["Move Speed","5.25 ~ 6.11"],["Might","8 ~ 16"],["Precision","8 ~ 16"],["Attack","22 ~ 32"],["Critical Hit","33 ~ 45"],["Accuracy","45 ~ 59"],
 ["Defense","262 ~ 308"],["Evasion","26 ~ 37"],["Block","27 ~ 38"],["MP","100 ~ 122"],["HP","202 ~ 239"]
];
const kromedeRing=[
 ["Might","6 ~ 14"],["Precision","6 ~ 14"],["Attack","18 ~ 28"],["Critical Hit","28 ~ 39"],["Accuracy","37 ~ 50"],
 ["Defense","218 ~ 258"],["Evasion","21 ~ 31"],["Block","22 ~ 32"],["MP","84 ~ 104"],["HP","168 ~ 200"]
];

export default [
  {
    id:"311030001",name:"Revelation Amulet",region:"GLOBAL",grade:"Unique",rarityColor:"Yellow",group:"Accessories",category:"Amulet",equipType:"Amulet",itemType:"Accessories",
    itemLevel:"65",icon:icon("311030001"),stats:pairs([["Weapon Damage Boost","10%"],["Perfect Chance","5%"],["Penetration","700"],["Power Shard Damage Bonus","40"]]),
    imprints:[],obtain:["Monolith Resonance","Substance Morph"],details:[{label:"Binding",value:"Personal Trade Unavailable"},{label:"Region/version",value:"AION 2 Global 2.0.7.0"}],
    verificationStatus:"GLOBAL_207_CROSSCHECKED",source
  },
  {
    id:"215230001",name:"Noble Belt",region:"GLOBAL",grade:"Unique",rarityColor:"Yellow",group:"Armor",category:"Belt",equipType:"Belt",itemType:"Accessories",
    itemLevel:"65",icon:icon("215230001"),stats:pairs([["HP Potion Recovery increase","30%"],["Regeneration","5%"],["HP","1100"],["Defense","500"]]),
    imprints:[],obtain:["Strongholds","Substance Morph"],details:[{label:"Binding",value:"Personal Trade Unavailable"},{label:"Region/version",value:"AION 2 Global 2.0.7.0"}],
    verificationStatus:"GLOBAL_207_CROSSCHECKED",source
  },
  accessory("310430046","Ascension Bracelet","Bracelet",51,65,156,[["Critical Hit","9"],["Evasion","12"],["MP","26"],["Natural MP Regen","9"]],["Receiving the Empyrean Lords' Might ascension"]),
  accessory("310130050","Aulamus Necklace","Necklace",70,108,259,aulamusNeck,["Urugugu Canyon","Abyssal Forge: Ludra"]),
  accessory("310230052","Aulamus Earrings","Earring",70,90,216,aulamusEar,["Urugugu Canyon","Abyssal Forge: Ludra"]),
  accessory("310330052","Aulamus Ring","Ring",70,72,172,aulamusRing,["Urugugu Canyon","Abyssal Forge: Ludra"]),
  accessory("310130051","Enraged Kromede Necklace","Necklace",86,133,318,kromedeNeck,["Fire Temple","Abyssal Forge: Ludra"]),
  accessory("310230053","Enraged Kromede Earrings","Earring",86,111,265,kromedeEar,["Fire Temple","Abyssal Forge: Ludra"]),
  accessory("310330053","Enraged Kromede Ring","Ring",86,88,212,kromedeRing,["Fire Temple","Abyssal Forge: Ludra"])
];
