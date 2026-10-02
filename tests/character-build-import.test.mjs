import test from "node:test";
import assert from "node:assert/strict";
import {createBuildFromCharacter,equipmentFromCharacter,classSlugFromOfficial} from "../app/builds/character-import.mjs";
import {buildCharacterResearchSample,classifyCharacterSkill} from "../app/my-character/character-model.mjs";

test("official DP skill category is normalized as Stigma",()=>{
  assert.equal(classifyCharacterSkill("Dp"),"stigma");
  assert.equal(classifyCharacterSkill("DP"),"stigma");
  assert.equal(classifyCharacterSkill("Active"),"active");
  assert.equal(classifyCharacterSkill("Passive"),"passive");
});

test("official Elementalist class maps to the local Spiritmaster slug",()=>{
  assert.equal(classSlugFromOfficial("Elementalist"),"spiritmaster");
  assert.equal(classSlugFromOfficial("Spiritmaster"),"spiritmaster");
});

test("maps the 20 Global equipment slot names into Build Creator slots",()=>{
  const names=["Weapon","Guard","Helmet","Pauldrons","Top","Belt","Legs","Gloves","Cloak","Shoes","Earring","Earring","Necklace","Amulet","Bracelet","Bracelet","Ring","Ring","Rune","Rune"];
  const {gear,unknown}=equipmentFromCharacter(names.map((slotName,index)=>({slotPos:index+1,slotName,id:1000+index,name:slotName+" item"})));
  assert.equal(Object.keys(gear).length,20);
  assert.deepEqual(unknown,[]);
  assert.ok(gear.mainHand);
  assert.ok(gear.offHand);
  assert.ok(gear.earring1&&gear.earring2);
  assert.ok(gear.bracelet&&gear.bracelet2);
  assert.ok(gear.ring1&&gear.ring2);
  assert.ok(gear.rune1&&gear.rune2);
});

test("character import preserves official gear stats progression and equipped DP Stigmas",()=>{
  const character={
    region:"naw",serverId:1201,characterId:"abc",profileUrl:"https://aion2.plaync.com/en-us/characters/1201/abc",
    profile:{name:"Daeva",className:"Elementalist",level:45,serverName:"West"},
    equipment:[
      {slotPos:1,slotName:"Weapon",id:99,name:"Orb",grade:"Unique",detail:{categoryName:"Orb",type:"Orb",mainStats:[{id:"Attack",name:"Attack",minValue:"321",value:"444"}],subStats:[{id:"Critical",name:"Critical Hit",value:"60"}]}},
      {slotPos:14,slotName:"Amulet",id:311030001,name:"Revelation Amulet",grade:"Unique"},
    ],
    skills:[
      {id:16010000,name:"Cold Shock",category:"Active",level:7,acquired:true,equipped:false},
      {id:16190000,name:"Enhance: Spirit's Benediction",category:"Dp",level:5,acquired:true,equipped:true},
      {id:16240000,name:"Jointstrike: Destructive Attack",category:"Dp",level:4,acquired:true,equipped:false},
      {id:16710000,name:"Spirit Strike",category:"Passive",level:3,acquired:true,equipped:false},
    ],
    pet:{id:2,name:"Pet",level:3,icon:"https://assets.example/pet.png"},
    wing:{id:3,name:"Wing",grade:"Unique",enchantLevel:4,icon:"https://assets.example/wing.png"},
    wingSkin:null,
    daevanion:[{id:71,name:"Nezekan",openNodes:2,totalNodes:10,detail:{nodes:[{id:1,open:true}]}}],
  };
  const build=createBuildFromCharacter(character);
  assert.equal(build.classSlug,"spiritmaster");
  assert.equal(build.region,"GLOBAL");
  assert.equal(build.level,45);
  assert.equal(build.gear.mainHand.stats[0].value,"321 – 444");
  assert.equal(build.gear.mainHand.stats[1].value,"60");
  assert.equal(build.gear.amulet.id,"311030001");
  assert.ok(build.skills.includes("active:Cold Shock"));
  assert.ok(build.skills.includes("passive:Spirit Strike"));
  assert.ok(build.skills.includes("stigma:Enhance: Spirit's Benediction"));
  assert.ok(!build.skills.includes("stigma:Jointstrike: Destructive Attack"));
  assert.equal(build.skillLevels["stigma:Enhance: Spirit's Benediction:16190000"],5);
  assert.equal(build.petId,"2");
  assert.equal(build.wingId,"3");
  assert.equal(build.imported.daevanion[0].detail.nodes.length,1);
});

test("research sample keeps slot positions raw categories and normalized categories",()=>{
  const sample=buildCharacterResearchSample({
    region:"naw",serverId:1201,characterId:"abc",profile:{className:"Templar",level:45},
    equipment:[{slotPos:2,slotName:"Guard",id:9,grade:"Unique"}],
    skills:[{id:1,category:"Dp",level:5,needLevel:22,acquired:true,equipped:true}],
    daevanion:[{id:71,name:"Nezekan",openNodes:2,totalNodes:10,detail:{nodes:[{id:1}]}}],
  },"2026-10-02T00:00:00Z");
  assert.equal(sample.equipmentSlots[0].slotPos,2);
  assert.equal(sample.skills[0].category,"Dp");
  assert.equal(sample.skills[0].normalizedCategory,"stigma");
  assert.equal(sample.skillCategories.stigma,1);
  assert.equal(sample.daevanion[0].detailNodes,1);
});
