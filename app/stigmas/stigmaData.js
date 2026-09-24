// Keep the provisional Asia/Taiwan catalog separate from class-wide skill data.
// When Global data is available, replace this catalog without changing the browser UI.
export const stigmaCatalogSource = {
  catalogVersion: 1,
  updatedAt: "2026-09-24",
  region: "Taiwan",
  language: "Community English translation",
  label: "Taiwan guidebook data cross-checked against community class catalogs",
  sources: ["Taiwan guidebook mirror", "Community class catalog"],
  status: "provisional",
};

export const stigmaCatalog = {
  templar: [
    ["Armor of Balance", "12200000"], ["Assault Fury", "12700000"], ["Battlefield Banner", "12450000"],
    ["Comrade in Arms", "12250000"], ["Doom Shield", "12070000"], ["Empyrean Lord’s Punishment", "12310000"],
    ["Executing Blade", "12410000"], ["Grapple", "12220000"], ["Nezekan’s Shield", "12320000"],
    ["Noble Armor", "12230000"], ["Second Skin", "12190000"], ["Shield of Protection", "12110000"],
    ["Taunt", "12120000"],
  ].map(([name, id]) => ({name, id})),
  gladiator: [
    ["Wrath Wave", "11240000"], ["Lunge Stance", "11400000"], ["Zikel’s Blessing", "11250000"],
    ["Focused Block", "11110000"], ["Armor of Balance", "11130000"], ["Blade Toss", "11080000"],
    ["Tenaciousness", "11380000"], ["Lifestealing Blade", "11340000"], ["Rage Burst", "11390000"],
    ["Wave Armor", "11410000"], ["Forced Restraint", "11430000"], ["Assault Strike", "11700000"],
    ["Fracturing Rush", "11450000"],
  ].map(([name, id]) => ({name, id})),
  assassin: [
    ["Savage Fang", "13270000"], ["Swift Contract", "13390000"], ["Smoke Bomb", "13250000"],
    ["Evasion Stance", "13080000"], ["Spiral Slice", "13280000"], ["Shadow Walk", "13180000"],
    ["Throw Shadowblade", "13020000"], ["Triniel’s Dagger", "13300000"], ["Aerial Bind", "13230000"],
    ["Illusive Clone", "13310000"], ["Evasion Contract", "13370000"], ["Assault Ambush", "13700000"],
    ["Shadowstep", "13140000"],
  ].map(([name, id]) => ({name, id})),
  ranger: [
    ["Arrow Storm", "14270000"], ["Vaizel’s Authority", "14310000"], ["Bow of Blessing", "14220000"],
    ["Ambush Kick", "14120000"], ["Ensnaring Trap", "14180000"], ["Illusory Arrow", "14150000"],
    ["Stealth", "14190000"], ["Sealing Arrow", "14160000"], ["Mother Nature’s Breath", "14350000"],
    ["Griffon Arrow", "14060000"], ["Explosive Arrow", "14360000"], ["Assault Smite", "14700000"],
    ["Supporting Fire", "14380000"],
  ].map(([name, id]) => ({name, id})),
  sorcerer: [
    ["Divine Burst", "15360000"], ["Steel Barrier", "15160000"], ["Element Enhancement", "15400000"],
    ["Curse: Tree", "15140000"], ["Arctic Armor", "15230000"], ["Soul Freeze", "15130000"],
    ["Cold Storm", "15200000"], ["Fire Wall", "15390000"], ["Lumiel’s Space", "15300000"],
    ["Delayed Explosion", "15320000"], ["Glacial Smite", "15120000"], ["Assault Bombardment", "15700000"],
    ["Hibernation", "15410000"],
  ].map(([name, id]) => ({name, id})),
  spiritmaster: [
    ["Jointstrike: Destructive Attack", "16240000"], ["Flame Blessing", "16370000"], ["Summon: Ancient Spirit", "16250000"],
    ["Jointstrike: Corrode", "16150000"], ["Kaisinel’s Power", "16360000"], ["Siphon", "16060000"],
    ["Cry of Terror", "16080000"], ["Cursed Cloud", "16220000"], ["Seize Magic", "16230000"],
    ["Magic Block", "16260000"], ["Assault Terror", "16700000"], ["Command: Proxy", "16170000"],
    ["Enhance: Spirit’s Benediction", "16190000"],
  ].map(([name, id]) => ({name, id})),
  cleric: [
    ["Power Burst", "17280000"], ["Absolution", "17290000"], ["Benevolence", "17160000"],
    ["Prayer of Amplification", "17430000"], ["Summon Resurrection", "17390000"], ["Earth Punishment", "17400000"],
    ["Salvation", "17270000"], ["Root", "17190000"], ["Light of Protection", "17410000"],
    ["Yustiel’s Power", "17420000"], ["Voice of Doom", "17300000"], ["Assault Mark", "17700000"],
    ["Noble Aura", "17440000"],
  ].map(([name, id]) => ({name, id})),
  chanter: [
    ["Obliterate", "18220000"], ["Undefeated Mantra", "18190000"], ["Focused Defense", "18140000"],
    ["Sprint Mantra", "18160000"], ["Fracturing Blow", "18130000"], ["Marchutan’s Wrath", "18330000"],
    ["Impeding Authority", "18240000"], ["Ensnaring Mark", "18230000"], ["Healing Touch", "18170000"],
    ["Power of the Storm", "18250000"], ["Guardian Blessing", "18420000"], ["Assault Shock", "18700000"],
    ["Barrier Spell", "18440000"],
  ].map(([name, id]) => ({name, id})),
};
