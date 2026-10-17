import test from 'node:test';
import assert from 'node:assert/strict';
import rows from '../app/equipment/globalBakarmaData.js';
const get=id=>{const x=rows.find(r=>r.id===id);assert.ok(x,id);return x;};
const stat=(x,k)=>x.stats.find(r=>r.label===k)?.value;

test('Global 2.0.7 Bakarma set covers all seven armor slots',()=>{
  assert.equal(rows.length,7);
  assert.deepEqual(new Set(rows.map(x=>x.category)),new Set(['Helmet','Shoulder','Torso','Pants','Gloves','Boots','Cape']));
  assert.ok(rows.every(x=>x.itemLevel==='54'&&x.requiredLevel==='45'));
  assert.ok(rows.every(x=>x.source.clientVersion==='2.0.7.0'));
  assert.ok(rows.every(x=>x.verificationStatus==='GLOBAL_207_CROSSCHECKED'));
});
test('Bakarma base stats use current client values',()=>{
  assert.equal(stat(get('210130038'),'Defense'),'397');
  assert.equal(stat(get('210130038'),'HP'),'216');
  assert.equal(stat(get('210230038'),'Defense'),'331');
  assert.equal(stat(get('210230038'),'HP'),'162');
  assert.equal(stat(get('210330038'),'Defense'),'298');
  assert.equal(stat(get('210430038'),'Defense'),'298');
  for(const id of ['210530038','210630038','210730038'])assert.equal(stat(get(id),'Defense'),'265');
});
test('Bakarma optimizer-relevant Soul Binding rows are retained',()=>{
  assert.equal(get('210130038').imprints.find(x=>x.label==='Damage Boost').value,'4.43 ~ 5.16');
  assert.equal(get('210530038').imprints.find(x=>x.label==='Combat Speed').value,'4.89 ~ 5.69');
  assert.equal(get('210430038').imprints.find(x=>x.label==='Critical Damage Boost').value,'8.70 ~ 10.08');
});
