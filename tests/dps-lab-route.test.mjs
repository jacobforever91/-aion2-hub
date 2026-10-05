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
  assert.match(html,/engine\.mjs\?v=3/);
});

test('Best Build Finder keeps the simple mobile action and 20-slot summary UI', async()=>{
  const html=await GET().text();
  assert.match(html,/FIND BEST BUILD/);
  assert.match(html,/valid slots filled/);
  assert.match(html,/RANGER CORE · GLOBAL META CROSS-CHECK/);
});
