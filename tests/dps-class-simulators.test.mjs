import test from 'node:test';
import assert from 'node:assert/strict';
import {
  simulateRangerDps,simulateSorcererDps,simulateSpiritmasterDps,simulateClericDps,
  simulateChanterDps,simulateTemplarDps,simulateGladiatorDps,simulateAssassinDps
} from '../public/dps-lab-assets/simulators.mjs';

const entry={
  stats:{
    Attack:1200,'Weapon Damage Boost':10,'Attack Increase':12,'Damage Boost':15,
    'PvE Damage':10,'Boss Damage':10,'Critical Damage':20,'Multi-Hit':12
  },
  evaluation:{totals:{pureAttack:1200,crit:1000,speed:35,cdr:20}}
};

const sims=[
  ['Ranger',simulateRangerDps],['Sorcerer',simulateSorcererDps],['Spiritmaster',simulateSpiritmasterDps],
  ['Cleric',simulateClericDps],['Chanter',simulateChanterDps],['Templar',simulateTemplarDps],
  ['Gladiator',simulateGladiatorDps],['Assassin',simulateAssassinDps]
];

for(const [name,simulate] of sims){
  test(name+' class simulator returns a positive finite 60s DPS benchmark',()=>{
    const out=simulate(entry);
    assert.ok(Number.isFinite(out.dps),name+' dps finite');
    assert.ok(out.dps>0,name+' dps positive');
    assert.ok(Number.isFinite(out.damage60),name+' damage60 finite');
    assert.ok(out.damage60>0,name+' damage60 positive');
    assert.match(out.confidence,/BETA/i,name+' beta label');
  });
}
