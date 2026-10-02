import test from 'node:test';
import assert from 'node:assert/strict';
import {variant,slotsFor} from '../public/build-lab-assets/model.mjs';

const catalog={classes:[{slug:'templar',name:'Templar',mainTypes:['sword'],offTypes:['shield']}]};

test('Global Build Lab exposes the 20-slot loadout',()=>{
  const v=variant();
  v.region='GLOBAL';
  const ids=slotsFor(v,catalog).map(slot=>slot.id);
  assert.equal(ids.length,20);
  for(const id of ['belt','amulet','bracelet2','rune1','rune2']) assert.ok(ids.includes(id));
  assert.ok(!ids.includes('brooch'));
});

test('KR/TW compatibility keeps the legacy Brooch layout',()=>{
  const v=variant();
  v.region='KR_TW';
  const ids=slotsFor(v,catalog).map(slot=>slot.id);
  assert.equal(ids.length,17);
  assert.ok(ids.includes('brooch'));
  for(const id of ['amulet','bracelet2','rune1','rune2']) assert.ok(!ids.includes(id));
});
