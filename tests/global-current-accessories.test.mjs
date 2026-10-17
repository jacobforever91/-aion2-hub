import test from 'node:test';
import assert from 'node:assert/strict';
import rows from '../app/equipment/globalCurrentAccessoriesData.js';
const get=id=>{const x=rows.find(r=>r.id===id);assert.ok(x,id);return x;};
const stat=(x,k)=>x.stats.find(r=>r.label===k)?.value;

test('current high-usage accessory snapshot is Global 2.0.7',()=>{
  assert.ok(rows.length>=9);
  assert.ok(rows.every(x=>x.source.clientVersion==='2.0.7.0'));
  assert.ok(rows.every(x=>x.verificationStatus==='GLOBAL_207_CROSSCHECKED'));
});
test('Ascension and Aulamus use current base stats',()=>{
  assert.equal(stat(get('310430046'),'Attack'),'65');
  assert.equal(stat(get('310430046'),'Defense'),'156');
  assert.deepEqual([stat(get('310130050'),'Attack'),stat(get('310130050'),'Defense')],['108','259']);
  assert.deepEqual([stat(get('310230052'),'Attack'),stat(get('310230052'),'Defense')],['90','216']);
  assert.deepEqual([stat(get('310330052'),'Attack'),stat(get('310330052'),'Defense')],['72','172']);
});
test('Enraged Kromede uses current base stats',()=>{
  assert.deepEqual([stat(get('310130051'),'Attack'),stat(get('310130051'),'Defense')],['133','318']);
  assert.deepEqual([stat(get('310230053'),'Attack'),stat(get('310230053'),'Defense')],['111','265']);
  assert.deepEqual([stat(get('310330053'),'Attack'),stat(get('310330053'),'Defense')],['88','212']);
});
test('Revelation Amulet and Noble Belt remain current and provenance-labeled',()=>{
  assert.equal(stat(get('311030001'),'Weapon Damage Boost'),'10%');
  assert.equal(stat(get('311030001'),'Perfect Chance'),'5%');
  assert.equal(stat(get('215230001'),'HP'),'1100');
  assert.equal(stat(get('215230001'),'Defense'),'500');
});
