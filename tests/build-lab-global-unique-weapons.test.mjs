import test from 'node:test';
import assert from 'node:assert/strict';
import globalUniqueWeapons from '../app/equipment/globalUniqueWeaponData.js';

const abyssalIds=[
  '110130060','110230060','110330060','110430060','110530060','110630060','110730060','110830060','115030058'
];

test('Global Unique weapon catalog retains the original Abyssal family',()=>{
  const abyssal=globalUniqueWeapons.filter(item=>abyssalIds.includes(item.id));
  assert.equal(abyssal.length,9);
  assert.deepEqual(abyssal.map(item=>item.id),abyssalIds);
  assert.ok(abyssal.every(item=>item.region==='GLOBAL'));
  assert.ok(abyssal.every(item=>item.grade==='Unique'&&item.rarityColor==='Yellow'));
  assert.ok(abyssal.every(item=>item.itemLevel==='86'&&item.requiredLevel==='45'));
  assert.ok(abyssal.every(item=>item.verificationStatus==='GLOBAL_CLIENT_CROSSCHECKED'));
});

test('Abyssal family covers eight main weapons and one Guard',()=>{
  const abyssal=globalUniqueWeapons.filter(item=>abyssalIds.includes(item.id));
  const main=abyssal.filter(item=>item.equipType==='MainHand');
  const guard=abyssal.filter(item=>item.equipType==='SubHand');
  assert.equal(main.length,8);
  assert.equal(guard.length,1);
  assert.equal(guard[0].category,'Guard');
  assert.deepEqual(new Set(main.map(item=>item.category)),new Set([
    'Greatsword','Longsword','Dagger','Bow','Spellbook','Orb','Mace','Staff'
  ]));
});

test('current Global Ludra Ranger bow is present without altering Abyssal provenance',()=>{
  const ludra=globalUniqueWeapons.find(item=>item.id==='110420003');
  assert.ok(ludra);
  assert.equal(ludra.name,"Ludra's Fatal Bow");
  assert.equal(ludra.category,'Bow');
  assert.equal(ludra.itemLevel,'102');
  assert.equal(ludra.grade,'Unique');
  assert.equal(ludra.region,'GLOBAL');
  assert.equal(ludra.verificationStatus,'GLOBAL_CURRENT_OBTAINABLE');
  assert.ok(ludra.obtain.includes('Abyssal Forge: Ludra'));
  assert.equal(ludra.stats.find(row=>row.label==='Min Attack').value,'470');
  assert.equal(ludra.stats.find(row=>row.label==='Max Attack').value,'591');
});

test('cross-checked Global weapon rows preserve base stats and provenance',()=>{
  const greatsword=globalUniqueWeapons.find(item=>item.id==='110130060');
  const guard=globalUniqueWeapons.find(item=>item.id==='115030058');
  assert.equal(greatsword.stats.find(row=>row.label==='Min Attack').value,'376');
  assert.equal(greatsword.stats.find(row=>row.label==='Max Attack').value,'508');
  assert.equal(guard.stats.find(row=>row.label==='Attack').value,'177');
  for(const item of globalUniqueWeapons){
    assert.ok(item);
    assert.ok(item.stats.length>0);
    assert.ok(item.imprints.length>0);
    assert.equal(item.source.clientVersion,'1.0.21.0');
    assert.equal(item.source.official,false);
  }
});
