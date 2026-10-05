import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseFixed,
  normalizeStatLabel,
  statsFromSource,
  scoreStats,
  optimizeEquipment
} from '../public/dps-lab-assets/engine.mjs';

test('parses fixed numeric and percent values',()=>{
  assert.deepEqual(parseFixed('100 + 20'),{n:120,unit:''});
  assert.deepEqual(parseFixed('3.5%'),{n:3.5,unit:'%'});
  assert.equal(parseFixed('10-20'),null);
});

test('normalizes Ranger offensive stat labels without swallowing specific boosts',()=>{
  assert.equal(normalizeStatLabel('Weapon Damage Boost'),'Weapon Damage Boost');
  assert.equal(normalizeStatLabel('PvE Damage Boost'),'PvE Damage');
  assert.equal(normalizeStatLabel('Critical Hit'),'Critical Hit');
  assert.equal(normalizeStatLabel('Cooldown Reduction'),'Cooldown Reduction');
});

test('extracts only recognized fixed numeric stats',()=>{
  const stats=statsFromSource({stats:[
    {label:'Attack',value:'120'},
    {label:'Critical Hit',value:'+80'},
    {label:'Random Range',value:'10-20'}
  ]});
  assert.equal(stats.Attack,120);
  assert.equal(stats['Critical Hit'],80);
  assert.equal(stats['Random Range'],undefined);
});

test('breakpoint progress improves score but is capped',()=>{
  const low=scoreStats({Accuracy:500},{baseAccuracy:0,targetAccuracy:1500});
  const hit=scoreStats({Accuracy:1500},{baseAccuracy:0,targetAccuracy:1500});
  const over=scoreStats({Accuracy:3000},{baseAccuracy:0,targetAccuracy:1500});
  assert.ok(hit.score>low.score);
  assert.equal(hit.caps.accuracy,1);
  assert.equal(over.caps.accuracy,1);
});

test('optimizer respects locked equipment and returns ordered top builds',()=>{
  const slots=[{id:'mainHand'},{id:'ring1'}];
  const bowA={id:'a',name:'A',stats:[{label:'Attack',value:'100'}]};
  const bowB={id:'b',name:'B',stats:[{label:'Attack',value:'200'}]};
  const ringA={id:'r1',name:'R1',stats:[{label:'Critical Hit',value:'100'}]};
  const ringB={id:'r2',name:'R2',stats:[{label:'Critical Hit',value:'200'}]};
  const result=optimizeEquipment({
    slots,
    pools:{mainHand:[bowA,bowB],ring1:[ringA,ringB]},
    locks:{mainHand:bowA},
    profile:{targetAccuracy:0,targetCrit:0,targetSpeed:0,targetCdr:0},
    beamWidth:20,
    topK:3
  });
  assert.equal(result[0].gear.mainHand.id,'a');
  assert.equal(result[0].gear.ring1.id,'r2');
  assert.ok(result[0].score>=result[1].score);
  assert.equal(result[0].index,100);
});
