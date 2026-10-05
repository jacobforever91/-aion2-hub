import test from 'node:test';
import assert from 'node:assert/strict';
import {CLASS_CYCLE,classForRun,objectiveForClass,reportMarkdown} from '../scripts/dps-bot-cycle.mjs';
import {optimizeEquipmentDeep} from '../public/dps-lab-assets/engine.mjs';

test('hourly bot rotates all eight classes then starts again',()=>{
  assert.equal(CLASS_CYCLE.length,8);
  assert.equal(classForRun(1),'ranger');
  assert.equal(classForRun(2),'sorcerer');
  assert.equal(classForRun(8),'assassin');
  assert.equal(classForRun(9),'ranger');
});

test('Ranger and Sorcerer use beta DPS objectives while unfinished class models stay proxy-labeled',()=>{
  assert.equal(objectiveForClass('ranger').kind,'DPS BETA');
  assert.match(objectiveForClass('ranger').confidence,/BETA/);
  assert.equal(objectiveForClass('sorcerer').kind,'DPS BETA');
  assert.match(objectiveForClass('sorcerer').confidence,/BETA/);
  assert.equal(objectiveForClass('templar').kind,'DPS PROXY');
  assert.match(objectiveForClass('templar').confidence,/PROXY/);
});

test('deep optimizer can rank by a supplied combat objective instead of heuristic score',()=>{
  const slots=[{id:'main'}];
  const highAttack={id:'attack',stats:[{label:'Attack',value:'500'}]};
  const highCrit={id:'crit',stats:[{label:'Critical Hit',value:'900'}]};
  const rows=optimizeEquipmentDeep({
    slots,
    pools:{main:[highAttack,highCrit]},
    profile:{targetAccuracy:0,targetCrit:0,targetSpeed:0,targetCdr:0},
    beamWidth:20,
    topK:2,
    maxPasses:1,
    objective:entry=>Number(entry.stats['Critical Hit'])||0
  });
  assert.equal(rows[0].gear.main.id,'crit');
  assert.equal(rows[0].searchMeta.objective,'custom');
});

test('hourly report never presents proxy classes as validated DPS',()=>{
  const md=reportMarkdown({
    className:'Templar',classSlug:'templar',goal:'boss',kind:'DPS PROXY',confidence:'PROXY v0.1',
    durationMs:55*60*1000,evaluations:100,iterations:2,improvements:1,filledSlots:20,slotCount:20,
    weapon:'Test Sword',missingSlots:[],bestScore:12345
  });
  assert.match(md,/experimental DPS proxy/);
  assert.match(md,/does not have a validated rotation simulator yet/);
  assert.doesNotMatch(md,/Best simulated 60s DPS:/);
});

test('beta DPS reports are separated from both calibrated DPS and proxy scores',()=>{
  const md=reportMarkdown({
    className:'Sorcerer',classSlug:'sorcerer',goal:'boss',kind:'DPS BETA',confidence:'BETA v0.1',
    durationMs:55*60*1000,evaluations:250,iterations:4,improvements:3,filledSlots:20,slotCount:20,
    weapon:'Test Spellbook',missingSlots:[],bestScore:43210
  });
  assert.match(md,/Best beta simulated 60s DPS/);
  assert.match(md,/\/s/);
  assert.match(md,/not a guaranteed combat-meter parse/);
  assert.doesNotMatch(md,/experimental DPS proxy/);
});
