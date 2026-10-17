import test from 'node:test';
import assert from 'node:assert/strict';
import meta from '../app/meta/globalMetaSnapshot.js';

test('current Global meta snapshot is dated and provenance-labeled',()=>{
  assert.equal(meta.region,'GLOBAL');
  assert.equal(meta.patchDate,'2026-10-13');
  assert.equal(meta.sampledAt,'2026-10-16');
  assert.equal(meta.sampleSize,1600);
  assert.equal(meta.perClassSample,200);
  assert.equal(meta.confidence,'OFFICIAL_SAMPLE_AGGREGATE');
  assert.equal(meta.latestClientReference.version,'2.0.7.0');
  assert.equal(meta.latestClientReference.updatedAt,'2026-10-14');
});

test('Ranger snapshot includes exact current observed averages',()=>{
  const active=Object.fromEntries(meta.ranger.active.map(x=>[x.name,x]));
  const passive=Object.fromEntries(meta.ranger.passive.map(x=>[x.name,x]));
  const stigma=Object.fromEntries(meta.ranger.stigma.map(x=>[x.name,x]));
  assert.equal(active['Deadshot'].avgLevel,13.3);
  assert.equal(active['Drill Dart'].avgLevel,13.6);
  assert.equal(passive['Focused Eye'].avgLevel,13.6);
  assert.equal(passive["Hunter's Resolve"].avgLevel,13.5);
  assert.equal(stigma["Vaizel's Authority"].usedBy,91.5);
  assert.equal(stigma['Bow of Blessing'].avgLevel,7.2);
  assert.equal(stigma['Supporting Fire'].usedBy,62);
});

test('all eight classes expose observed top Stigma references',()=>{
  assert.deepEqual(Object.keys(meta.topStigmasByClass).sort(),[
    'assassin','chanter','cleric','gladiator','ranger','sorcerer','spiritmaster','templar'
  ]);
  for(const rows of Object.values(meta.topStigmasByClass)){
    assert.ok(rows.length>=4);
    assert.ok(rows.every(x=>Number.isFinite(x.usedBy)&&Number.isFinite(x.avgLevel)));
  }
});
