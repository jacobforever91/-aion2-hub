import test from 'node:test';
import assert from 'node:assert/strict';
import {GET} from '../app/test-zone/dps-lab/route.js';

test('Best Build Finder ships its current-candidate filter before the optimizer uses it', async()=>{
  const response=GET();
  assert.equal(response.status,200);
  const html=await response.text();
  const definition=html.indexOf('function currentCandidate(item)');
  const use=html.indexOf('currentCandidate(i)');
  assert.ok(definition>=0,'currentCandidate definition is missing');
  assert.ok(use>definition,'currentCandidate must be defined before buildPools uses it');
  assert.match(html,/engine\.mjs\?v=5/);
});

test('Best Build Finder keeps the simple mobile action and 20-slot summary UI', async()=>{
  const html=await GET().text();
  assert.match(html,/FIND BEST BUILD/);
  assert.match(html,/valid slots filled/);
  assert.match(html,/PREBUILT · RNG-PVE-BOSS-01/);
});

test('complete prebuilt Ranger view includes every visual combat system', async()=>{
  const html=await GET().text();
  assert.match(html,/WINGS · PET · TITLE · GENUS/);
  assert.match(html,/CORE SKILLS/);
  assert.match(html,/STIGMAS/);
  assert.match(html,/ROTATION PRIORITY/);
  assert.match(html,/20-SLOT EQUIPMENT/);
  assert.match(html,/ARCANA · 5 SLOTS/);
  assert.match(html,/DAEVANION · PRIORITY NODES/);
  assert.match(html,/OPTIMIZER STATS/);
  assert.match(html,/Talisra Wings/);
  assert.match(html,/Aullaeu Shaman/);
  assert.match(html,/Unbound by Genus/);
});

test('visual Ranger build ships the expected skill stigma and Arcana icons', async()=>{
  const html=await GET().text();
  for(const id of ['14010000','14110000','14050000','14340000','14020000','14310000','14220000','14380000','14060000']){
    assert.match(html,new RegExp('skill-icon\\/'+id));
  }
  for(const id of ['810130001','810230001','810330001','810430002','810530001']){
    assert.match(html,new RegExp('icon\\/items\\/'+id));
  }
  assert.match(html,/function renderDaevanion\(\)/);
  assert.match(html,/function wireVisualPicks\(\)/);
  assert.match(html,/engine\.mjs\?v=5/);
});

test('Ranger prebuilt shows simulated DPS, exact rotation and stigma target levels', async()=>{
  const html=await GET().text();
  assert.match(html,/SIMULATION RESULT/);
  assert.match(html,/Simulated DPS · 60s/);
  assert.match(html,/Burst DPS · 10s/);
  assert.match(html,/60s Damage/);
  assert.match(html,/Rotation used by the DPS model/);
  assert.match(html,/Vaizel Lv20 → Bow of Blessing Lv20 → Supporting Fire Lv20 → Marking Shot Lv12/);
  assert.match(html,/Deadshot Lv20 \(full charge\)/);
  assert.match(html,/Vaizel's Authority<\/strong><span class="stigmaLevel">Lv\.20 · PRIORITY #1/);
  assert.match(html,/Bow of Blessing<\/strong><span class="stigmaLevel">Lv\.20 · PRIORITY #2/);
  assert.match(html,/Supporting Fire<\/strong><span class="stigmaLevel">Lv\.20 · PRIORITY #3/);
  assert.match(html,/Griffon Arrow<\/strong><span class="stigmaLevel">Lv\.20 · PRIORITY #4/);
  assert.match(html,/function simulateRangerDps\(r\)/);
  assert.match(html,/function renderCombatSummary\(r\)/);
});
