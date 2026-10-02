import test from 'node:test';
import assert from 'node:assert/strict';
import globalUniqueWeapons from '../app/equipment/globalUniqueWeaponData.js';

test('first Global Unique weapon batch contains the Abyssal weapon family',()=>{
  assert.equal(globalUniqueWeapons.length,9);
  assert.deepEqual(globalUniqueWeapons.map(item=>item.id),[
    '110130060','110230060','110330060','110430060','110530060','110630060','110730060','110830060','115030058'
  ]);
  assert.ok(globalUniqueWeapons.every(item=>item.region==='GLOBAL'));
  assert.ok(globalUniqueWeapons.every(item=>item.grade==='Unique'&&item.rarityColor==='Yellow'));
  assert.ok(globalUniqueWeapons.every(item=>item.itemLevel==='86'&&item.requiredLevel==='45'));
  assert.ok(globalUniqueWeapons.every(item=>item.verificationStatus==='GLOBAL_CLIENT_CROSSCHECKED'));
  assert.equal(new Set(globalUniqueWeapons.map(item=>item.id)).size,9);
});

test('Abyssal weapon batch covers eight main weapons and one Guard',()=>{
  const main=globalUniqueWeapons.filter(item=>item.equipType==='MainHand');
  const guard=globalUniqueWeapons.filter(item=>item.equipType==='SubHand');
  assert.equal(main.length,8);
  assert.equal(guard.length,1);
  assert.equal(guard[0].category,'Guard');
  assert.deepEqual(new Set(main.map(item=>item.category)),new Set([
    'Greatsword','Longsword','Dagger','Bow','Spellbook','Orb','Mace','Staff'
  ]));
});

test('cross-checked Global weapon rows preserve base stats and provenance',()=>{
  const greatsword=globalUniqueWeapons.find(item=>item.id==='110130060');
  const guard=globalUniqueWeapons.find(item=>item.id==='115030058');
  assert.equal(greatsword.stats.find(row=>row.label==='Min Attack').value,'376');
  assert.equal(greatsword.stats.find(row=>row.label==='Max Attack').value,'508');
  assert.equal(guard.stats.find(row=>row.label==='Attack').value,'177');
  for(const item of globalUniqueWeapons){
    assert.ok(item.stats.length>0);
    assert.ok(item.imprints.length>0);
    assert.equal(item.source.clientVersion,'1.0.21.0');
    assert.equal(item.source.official,false);
  }
});
