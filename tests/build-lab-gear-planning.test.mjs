import test from 'node:test';
import assert from 'node:assert/strict';
import {newDoc,normalize,active} from '../public/build-lab-assets/model.mjs';
import {compareSystems} from '../public/build-lab-assets/review-model.mjs';

const catalog={classes:[{slug:'templar',name:'Templar',mainTypes:['sword'],offTypes:['shield'],skills:[]}],equipment:[{id:'10000001',name:'Planner Sword',region:'GLOBAL',category:'sword',stats:[]}],wings:[],pets:[],arcana:[],boards:{}};

test('advanced equipment planning fields survive normalization',()=>{
  const d=newDoc();
  active(d).gear.mainHand={id:'10000001',enchant:12,potential:'Tier target',substats:'Attack / Crit',philosopherStone:'Stone target',magicstones:'Attack x3',note:'Farm later'};
  const out=normalize(d);
  assert.deepEqual(active(out).gear.mainHand,{
    id:'10000001',
    enchant:12,
    potential:'Tier target',
    substats:'Attack / Crit',
    philosopherStone:'Stone target',
    magicstones:'Attack x3',
    note:'Farm later'
  });
});

test('advanced equipment planning fields are length-bounded',()=>{
  const d=newDoc();
  active(d).gear.mainHand={id:'10000001',potential:'p'.repeat(500),substats:'s'.repeat(500),philosopherStone:'x'.repeat(500),magicstones:'m'.repeat(500),note:'n'.repeat(1000)};
  const g=active(normalize(d)).gear.mainHand;
  assert.equal(g.potential.length,120);
  assert.equal(g.substats.length,300);
  assert.equal(g.philosopherStone.length,180);
  assert.equal(g.magicstones.length,300);
  assert.equal(g.note.length,600);
});

test('variant comparison surfaces equipment tuning changes',()=>{
  const a=active(newDoc());
  const b=structuredClone(a);
  a.gear.mainHand={id:'10000001',enchant:0,potential:'',substats:'',philosopherStone:'',magicstones:'',note:''};
  b.gear.mainHand={id:'10000001',enchant:10,potential:'High roll',substats:'Attack',philosopherStone:'Chosen stone',magicstones:'Crit x2',note:'Done'};
  const rows=compareSystems(a,b,catalog);
  for(const label of ['Weapon · enhancement target','Weapon · potential target','Weapon · substat targets','Weapon · Philosopher Stone','Weapon · Magicstones','Weapon · planning note']){
    assert.ok(rows.some(row=>row.label===label),label);
  }
});
