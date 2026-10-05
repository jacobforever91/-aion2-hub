import test from 'node:test';
import assert from 'node:assert/strict';
import vakron from '../app/equipment/globalVakronData.js';

const ids=['210330052','210430052','210130052','210230052','210530052','210630052','210730052'];

test('Vakron Global armor set contains seven current Unique pieces',()=>{
  assert.equal(vakron.length,7);
  assert.deepEqual(vakron.map(x=>x.id),ids);
  assert.ok(vakron.every(x=>x.region==='GLOBAL'&&x.grade==='Unique'&&x.itemLevel==='70'));
  assert.ok(vakron.every(x=>x.verificationStatus==='GLOBAL_CURRENT_OBTAINABLE'));
  assert.ok(vakron.every(x=>x.obtain.includes('Vakron Sky Island')));
});

test('Vakron set exposes offensive Soul Imprint candidates used by DPS Lab',()=>{
  const chest=vakron.find(x=>x.id==='210130052');
  const gloves=vakron.find(x=>x.id==='210530052');
  const shoulders=vakron.find(x=>x.id==='210430052');
  assert.equal(chest.imprints.find(x=>x.label==='Damage Boost').value,'4.89 ~ 5.69');
  assert.equal(gloves.imprints.find(x=>x.label==='Combat Speed').value,'5.40 ~ 6.28');
  assert.equal(shoulders.imprints.find(x=>x.label==='Critical Damage Boost').value,'9.60 ~ 11.11');
});
