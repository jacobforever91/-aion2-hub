import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";

async function loadClassData(){
  const source=await readFile(new URL("../app/classes/classData.js",import.meta.url),"utf8");
  const url="data:text/javascript;base64,"+Buffer.from(source).toString("base64");
  return import(url);
}

test("all eight original classes expose the canonical 12 Active 13 Stigma 10 Passive groups",async()=>{
  const {classData,skillCatalogIds}=await loadClassData();
  for(const slug of ["templar","gladiator","assassin","ranger","sorcerer","spiritmaster","cleric","chanter"]){
    assert.equal(classData[slug].active.length,12,slug+" active");
    assert.equal(classData[slug].stigmas.length,13,slug+" stigmas");
    assert.equal(classData[slug].passive.length,10,slug+" passive");
    assert.equal(skillCatalogIds[slug].active.length,12,slug+" active IDs");
    assert.equal(skillCatalogIds[slug].stigma.length,13,slug+" stigma IDs");
    assert.equal(skillCatalogIds[slug].passive.length,10,slug+" passive IDs");
    assert.equal(classData[slug].active.includes("Dodge"),false,slug+" Dodge is a shared/system skill");
  }
});

test("previously missing Templar and Spiritmaster Stigmas are mounted with canonical IDs",async()=>{
  const {classData,skillCatalogIds}=await loadClassData();
  const templarIndex=skillCatalogIds.templar.stigma.indexOf("12410000");
  assert.equal(classData.templar.stigmas[templarIndex],"Executing Blade");
  const spiritIndex=skillCatalogIds.spiritmaster.stigma.indexOf("16190000");
  assert.equal(classData.spiritmaster.stigmas[spiritIndex],"Enhance: Spirit's Benediction");
});
