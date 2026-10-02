import test from 'node:test';
import assert from 'node:assert/strict';
import {statGroupFor,groupSummaryRows} from '../public/build-lab-assets/review-model.mjs';

test('loadout stat grouping classifies common combat labels',()=>{
  assert.equal(statGroupFor('Attack'),'Offense');
  assert.equal(statGroupFor('PvE Damage Boost'),'Offense');
  assert.equal(statGroupFor('Physical Defense'),'Defense');
  assert.equal(statGroupFor('Critical Hit Resist'),'Defense');
  assert.equal(statGroupFor('Max HP'),'Vitals & Recovery');
  assert.equal(statGroupFor('Natural MP Regen'),'Vitals & Recovery');
  assert.equal(statGroupFor('Might'),'Attributes');
  assert.equal(statGroupFor('Willpower'),'Attributes');
  assert.equal(statGroupFor('Combat Speed'),'Speed & Utility');
  assert.equal(statGroupFor('Cooldown Reduction'),'Speed & Utility');
});

test('grouped loadout stats preserve rows and display order',()=>{
  const rows=[
    {label:'Combat Speed',value:2},
    {label:'Defense',value:3},
    {label:'Attack',value:4},
    {label:'HP',value:5},
    {label:'Might',value:6},
    {label:'Custom stat',value:7},
  ];
  const groups=groupSummaryRows(rows);
  assert.deepEqual(groups.map(g=>g.name),['Offense','Defense','Vitals & Recovery','Attributes','Speed & Utility','Other']);
  assert.equal(groups.flatMap(g=>g.rows).length,rows.length);
  assert.equal(groups[0].rows[0].label,'Attack');
});
