// Observed Global meta snapshot.
// This is an aggregate of public official AION 2 character pages, not an NC recommendation.
// Keep it separate from client-data coefficients and from editorial build advice.
export const GLOBAL_META_SNAPSHOT = Object.freeze({
  region: "GLOBAL",
  patchDate: "2026-10-13",
  sampledAt: "2026-10-16",
  sampleSize: 1600,
  perClassSample: 200,
  confidence: "OFFICIAL_SAMPLE_AGGREGATE",
  source: {
    name: "Aion2Builds official-armory aggregate",
    url: "https://aion2builds.com/database/skills/",
    upstream: "Public official AION 2 character pages",
    note: "Top 200 level-45 characters per class by combat power; aggregate usage and average levels only."
  },
  latestClientReference: {
    version: "2.0.7.0",
    updatedAt: "2026-10-14",
    confidence: "THIRD_PARTY_CLIENT_DATA",
    source: "https://aion2.gaming.tools/"
  },
  ranger: {
    observedGear: {
      sampleSize:200,
      sampledAt:"2026-10-16",
      slots:{
        mainHand:{name:"Spiritforged Bow",share:41,medianEnchant:10,p90Enchant:12},
        offHand:{name:"Spiritforged Guard",share:40.5,medianEnchant:10,p90Enchant:10},
        helmet:{name:"Vakron Helm",share:24.1,medianEnchant:5,p90Enchant:10},
        shoulders:{name:"Liberator Pauldrons",share:21.1,medianEnchant:5,p90Enchant:10},
        chest:{name:"Bakarma Breastplate",share:45.2,medianEnchant:5,p90Enchant:10},
        pants:{name:"Vakron Greaves",share:23.6,medianEnchant:5,p90Enchant:10},
        gloves:{name:"Bakarma Gloves",share:21,medianEnchant:5,p90Enchant:10},
        boots:{name:"Bakarma Boots",share:24,medianEnchant:5,p90Enchant:10},
        cloak:{name:"Bakarma Cloak",share:24.6,medianEnchant:5,p90Enchant:10},
        necklace:{name:"Pilgrim Necklace",share:24.1,medianEnchant:5,p90Enchant:10},
        earring1:{name:"Liberator Earrings",share:23,medianEnchant:5,p90Enchant:10},
        earring2:{name:"Liberator Earrings",share:30.5,medianEnchant:5,p90Enchant:10},
        ring1:{name:"Aulamus Ring",share:23,medianEnchant:5,p90Enchant:10},
        ring2:{name:"Liberator Ring",share:25.5,medianEnchant:5,p90Enchant:10},
        bracelet1:{name:"Ascension Bracelet",share:39.5,medianEnchant:8,p90Enchant:10},
        bracelet2:{name:"Liberator Bracelet",share:34,medianEnchant:5,p90Enchant:10},
        belt:{name:"Noble Belt",share:62.5,medianEnchant:0,p90Enchant:5},
        amulet:{name:"Revelation Amulet",share:80,medianEnchant:0,p90Enchant:7},
        rune1:{name:"Clash Rune",share:100,medianEnchant:2,p90Enchant:4},
        rune2:{name:"Clash Rune",share:100,medianEnchant:2,p90Enchant:3}
      },
      wings:[{name:"Ultimate Daeva Wings",share:38.5}],
      pets:[{name:"Pagati",share:33.5},{name:"Tayga",share:5.5},{name:"Papis",share:2.5}]
    },
    active: [
      {name:"Snare Shot",usedBy:97,avgLevel:12.2},
      {name:"Snipe",usedBy:100,avgLevel:13.7},
      {name:"Tempest Shot",usedBy:99.5,avgLevel:13.6},
      {name:"Marking Shot",usedBy:99,avgLevel:12.1},
      {name:"Drill Dart",usedBy:99.5,avgLevel:13.6},
      {name:"Arrow Scattershot",usedBy:88,avgLevel:9.1},
      {name:"Gale Arrow",usedBy:99,avgLevel:13.4},
      {name:"Explosion Trap",usedBy:93,avgLevel:8.6},
      {name:"Burst Arrow",usedBy:99.5,avgLevel:13.2},
      {name:"Suppressing Arrow",usedBy:90.5,avgLevel:9.3},
      {name:"Deadshot",usedBy:99.5,avgLevel:13.3},
      {name:"Defiance",usedBy:0,avgLevel:6.6}
    ],
    passive: [
      {name:"Vigilant Eye",usedBy:100,avgLevel:10.5},
      {name:"Concentrated Fire",usedBy:100,avgLevel:12.3},
      {name:"Wind Vigor",usedBy:100,avgLevel:9.5},
      {name:"Focused Eye",usedBy:100,avgLevel:13.6},
      {name:"Hunter's Resolve",usedBy:100,avgLevel:13.5},
      {name:"Unyielding Resolve",usedBy:100,avgLevel:6.4},
      {name:"Rooting Eye",usedBy:100,avgLevel:11.5},
      {name:"Melee Fire",usedBy:100,avgLevel:11.6},
      {name:"Revitalization Contract",usedBy:100,avgLevel:7.1},
      {name:"Hunter's Soul",usedBy:100,avgLevel:13.1}
    ],
    stigma: [
      {name:"Vaizel's Authority",usedBy:91.5,avgLevel:9.8},
      {name:"Bow of Blessing",usedBy:83,avgLevel:7.2},
      {name:"Supporting Fire",usedBy:62,avgLevel:6.7},
      {name:"Explosive Arrow",usedBy:53,avgLevel:5.7},
      {name:"Griffon Arrow",usedBy:49.5,avgLevel:5.5},
      {name:"Arrow Storm",usedBy:24.5,avgLevel:4.9},
      {name:"Illusory Arrow",usedBy:4.5,avgLevel:5.7},
      {name:"Stealth",usedBy:3.5,avgLevel:2.9},
      {name:"Ensnaring Trap",usedBy:2.5,avgLevel:6.0},
      {name:"Mother Nature's Breath",usedBy:1.5,avgLevel:3.7},
      {name:"Ambush Kick",usedBy:0.5,avgLevel:1.0},
      {name:"Assault Smite",usedBy:0.5,avgLevel:3.0},
      {name:"Sealing Arrow",usedBy:0.5,avgLevel:1.0}
    ]
  },
  topStigmasByClass: {
    gladiator: [
      {name:"Lunge Stance",usedBy:83.5,avgLevel:9.2},
      {name:"Rage Burst",usedBy:83,avgLevel:6.3},
      {name:"Zikel's Blessing",usedBy:82,avgLevel:8.5},
      {name:"Focused Block",usedBy:43.5,avgLevel:4.4}
    ],
    templar: [
      {name:"Doom Shield",usedBy:60.5,avgLevel:6.3},
      {name:"Noble Armor",usedBy:57.5,avgLevel:8.7},
      {name:"Battlefield Banner",usedBy:52.5,avgLevel:8.2},
      {name:"Empyrean Lord's Punishment",usedBy:51,avgLevel:7.5}
    ],
    assassin: [
      {name:"Illusive Clone",usedBy:85.5,avgLevel:9.6},
      {name:"Swift Contract",usedBy:83,avgLevel:7.0},
      {name:"Triniel's Dagger",usedBy:76,avgLevel:7.3},
      {name:"Savage Fang",usedBy:66,avgLevel:5.3}
    ],
    ranger: [
      {name:"Vaizel's Authority",usedBy:91.5,avgLevel:9.8},
      {name:"Bow of Blessing",usedBy:83,avgLevel:7.2},
      {name:"Supporting Fire",usedBy:62,avgLevel:6.7},
      {name:"Explosive Arrow",usedBy:53,avgLevel:5.7},
      {name:"Griffon Arrow",usedBy:49.5,avgLevel:5.5}
    ],
    chanter: [
      {name:"Undefeated Mantra",usedBy:96,avgLevel:12.5},
      {name:"Sprint Mantra",usedBy:90.5,avgLevel:5.2},
      {name:"Power of the Storm",usedBy:67,avgLevel:5.9},
      {name:"Marchutan's Wrath",usedBy:41.5,avgLevel:4.4}
    ],
    cleric: [
      {name:"Light of Protection",usedBy:74.5,avgLevel:8.8},
      {name:"Earth Punishment",usedBy:69,avgLevel:8.9},
      {name:"Noble Aura",usedBy:57,avgLevel:6.8},
      {name:"Summon Resurrection",usedBy:51.5,avgLevel:4.2},
      {name:"Prayer of Amplification",usedBy:48.5,avgLevel:6.9}
    ],
    sorcerer: [
      {name:"Element Enhancement",usedBy:93,avgLevel:10.2},
      {name:"Delayed Explosion",usedBy:77,avgLevel:6.5},
      {name:"Fire Wall",usedBy:76,avgLevel:6.4},
      {name:"Cold Storm",usedBy:55,avgLevel:5.6}
    ],
    spiritmaster: [
      {name:"Summon: Ancient Spirit",usedBy:89.5,avgLevel:10.2},
      {name:"Enhance: Spirit's Benediction",usedBy:79.5,avgLevel:6.3},
      {name:"Jointstrike: Corrode",usedBy:74,avgLevel:5.3},
      {name:"Flame Blessing",usedBy:49.5,avgLevel:6.2},
      {name:"Jointstrike: Destructive Attack",usedBy:41.5,avgLevel:5.1}
    ]
  }
});

export default GLOBAL_META_SNAPSHOT;
