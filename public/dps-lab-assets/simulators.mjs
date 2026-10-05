import {pureAttackFromStats} from './engine.mjs';

export const RANGER_SIM_PRESET=Object.freeze({
  active:{deadshot:20,gale:20,drill:16,tempest:16,snipe:16,marking:12},
  passive:{focusedEye:33,huntersResolve:29},
  stigma:{vaizel:20,bow:10,supporting:10,griffon:10},
  skills:{
    deadshot:{flat:2741*3,coef:1.883*3,cd:12,precision:1.35},
    gale:{flat:2796,coef:2.035,cd:10},
    drill:{flat:1266,coef:1.155,cd:5,activations:2,bleedFlat:493,bleedCoef:.45,bleedTicks:60},
    marking:{flat:1296,coef:1.463,cd:15},
    tempest:{flat:614,coef:.567},
    snipe:{flat:436,coef:.396},
    supporting:{flat:243,coef:.432,expectedShots:30},
    griffon:{flat:964,coef:1.71,cd:30,burnFlat:482,burnCoef:.855,burnTicks:30}
  }
});

function clamp(value,min,max){return Math.max(min,Math.min(max,Number(value)||0));}
function castsInWindow(cooldown,seconds,cdrPct=0){
  const effective=Math.max(.25,Number(cooldown||1)*(1-clamp(cdrPct,0,60)/100));
  return Math.max(1,Math.ceil(Number(seconds||0)/effective));
}
export function expectedCritFactor(critStat,critDamageBoost=0){
  const chance=clamp((Number(critStat)||0)/2000,0,.8);
  const bossAdjustedCritDamage=Math.max(1,1.5+(Number(critDamageBoost)||0)/100-.25);
  return 1+chance*(bossAdjustedCritDamage-1);
}
export function expectedMultiFactor(sheetMulti=0,bowUptime=0){
  const chance=clamp(.20+(Number(sheetMulti)||0)/100+(.50*bowUptime),0,1);
  return 1+(chance*.125);
}

export function simulateRangerDps(entry,options={}){
  const s=entry?.stats||{},t=entry?.evaluation?.totals||{},P=RANGER_SIM_PRESET.skills;
  const bowUptime=10/60,vaizelUptime=10/60;
  const passive=RANGER_SIM_PRESET.passive;
  const focusedPve=passive.focusedEye;
  const focusedPveAverage=focusedPve*(1+(.5*vaizelUptime));
  const huntersResolveCrit=passive.huntersResolve+5;
  const pureAttack=Number(t.pureAttack)||pureAttackFromStats(s)||0;
  const weaponDamageBoost=Number(s["Weapon Damage Boost"])||0;
  const might=Number(s.Might)||0;
  const baseAttackIncrease=(Number(s["Attack Increase"])||0)+(might*.1);
  const attackBonus=Number(options.attackBonus)||0;
  const cdrBonus=Number(options.cdrBonus)||0;
  const markingCrit=300,bowCrit=200;
  const avgCrit=(Number(t.crit)||0)+markingCrit+(bowCrit*bowUptime);
  const avgBowAttack=((Number(t.crit)||0)+markingCrit+bowCrit)*.10*bowUptime;
  const attackPower=((pureAttack*(1+weaponDamageBoost/100))+attackBonus+avgBowAttack)
    *(1+(baseAttackIncrease+(20*vaizelUptime))/100);
  const damageBucket=1+((Number(s["Damage Boost"])||0)+(Number(s["PvE Damage"])||0)+(Number(s["Boss Damage"])||0)+7+focusedPveAverage)/100;
  const critFactor=expectedCritFactor(avgCrit,(Number(s["Critical Damage"])||0)+huntersResolveCrit);
  const multiFactor=expectedMultiFactor(Number(s["Multi-Hit"])||0,bowUptime);
  const directCommon=damageBucket*critFactor*multiFactor;
  const dotCommon=damageBucket;
  const direct=(flat,coef,mult=1)=>(flat+attackPower*coef)*directCommon*mult;
  const dot=(flat,coef)=>(flat+attackPower*coef)*dotCommon;
  const cdr=(Number(t.cdr)||0)+cdrBonus;

  const deadCasts=castsInWindow(P.deadshot.cd,60,cdr);
  const galeCasts=castsInWindow(P.gale.cd,60,cdr);
  const drillCasts=castsInWindow(P.drill.cd,60,cdr);
  const markingCasts=castsInWindow(P.marking.cd,60,cdr);
  const griffonCasts=castsInWindow(P.griffon.cd,60,cdr);

  const dead=direct(P.deadshot.flat,P.deadshot.coef,P.deadshot.precision)*deadCasts;
  const gale=direct(P.gale.flat,P.gale.coef)*galeCasts;
  const drillDirect=direct(P.drill.flat,P.drill.coef)*drillCasts*P.drill.activations;
  const drillBleed=dot(P.drill.bleedFlat,P.drill.bleedCoef)*P.drill.bleedTicks;
  const marking=direct(P.marking.flat,P.marking.coef)*markingCasts;
  const supporting=direct(P.supporting.flat,P.supporting.coef)*P.supporting.expectedShots;
  const griffonDirect=direct(P.griffon.flat,P.griffon.coef)*griffonCasts;
  const griffonBurn=dot(P.griffon.burnFlat,P.griffon.burnCoef)*P.griffon.burnTicks;

  const effectiveSpeed=(Number(t.speed)||0)+7;
  const actionBudget=Math.max(0,Math.floor(60*(1+effectiveSpeed/100)));
  const fixedActions=deadCasts+galeCasts+drillCasts+markingCasts+griffonCasts+3;
  const filler=Math.max(0,actionBudget-fixedActions);
  const tempestCount=Math.ceil(filler/2),snipeCount=Math.floor(filler/2);
  const tempest=direct(P.tempest.flat,P.tempest.coef,1.12)*tempestCount;
  const snipe=direct(P.snipe.flat,P.snipe.coef)*snipeCount;
  const damage60=dead+gale+drillDirect+drillBleed+marking+supporting+griffonDirect+griffonBurn+tempest+snipe;

  const burstCrit=(Number(t.crit)||0)+markingCrit+bowCrit;
  const burstCritFactor=expectedCritFactor(burstCrit,(Number(s["Critical Damage"])||0)+huntersResolveCrit);
  const burstMulti=expectedMultiFactor(Number(s["Multi-Hit"])||0,1);
  const burstDamageBucket=1+((Number(s["Damage Boost"])||0)+(Number(s["PvE Damage"])||0)+(Number(s["Boss Damage"])||0)+7+(focusedPve*1.5))/100;
  const burstBowAttack=burstCrit*.10;
  const burstAttack=((pureAttack*(1+weaponDamageBoost/100))+attackBonus+burstBowAttack)
    *(1+(baseAttackIncrease+20)/100);
  const burstDirectCommon=burstDamageBucket*burstCritFactor*burstMulti;
  const bd=(flat,coef,mult=1)=>(flat+burstAttack*coef)*burstDirectCommon*mult;
  const bdot=(flat,coef)=>(flat+burstAttack*coef)*burstDamageBucket;
  const supporting10=10;
  const damage10=
    bd(P.deadshot.flat,P.deadshot.coef,P.deadshot.precision)+
    bd(P.gale.flat,P.gale.coef)+
    (bd(P.drill.flat,P.drill.coef)*4)+
    bd(P.marking.flat,P.marking.coef)+
    bd(P.griffon.flat,P.griffon.coef)+
    (bd(P.supporting.flat,P.supporting.coef)*supporting10)+
    (bdot(P.drill.bleedFlat,P.drill.bleedCoef)*10)+
    (bdot(P.griffon.burnFlat,P.griffon.burnCoef)*10)+
    (bd(P.tempest.flat,P.tempest.coef,1.12)*3)+
    (bd(P.snipe.flat,P.snipe.coef)*2);

  return {
    dps:damage60/60,burst:damage10/10,damage60,pureAttack,attackPower,
    counts:{marking:markingCasts,deadshot:deadCasts,gale:galeCasts,drill:drillCasts,griffon:griffonCasts,supporting:1,tempest:tempestCount,snipe:snipeCount},
    confidence:"BETA v0.4"
  };
}

export function simulateOffensiveProxy(entry,{goal="boss"}={}){
  const s=entry?.stats||{},t=entry?.evaluation?.totals||{};
  const pureAttack=Number(t.pureAttack)||pureAttackFromStats(s)||0;
  const weaponDamageBoost=Number(s["Weapon Damage Boost"])||0;
  const might=Number(s.Might)||0;
  const attackIncrease=(Number(s["Attack Increase"])||0)+(might*.1);
  const attack=(pureAttack*(1+weaponDamageBoost/100))*(1+attackIncrease/100);
  const damage=1+((Number(s["Damage Boost"])||0)+(Number(s["PvE Damage"])||0)+(goal==="boss"?(Number(s["Boss Damage"])||0):0))/100;
  const crit=expectedCritFactor(Number(t.crit)||0,Number(s["Critical Damage"])||0);
  const multi=expectedMultiFactor(Number(s["Multi-Hit"])||0,0);
  const speed=1+clamp(Number(t.speed)||0,0,150)/100;
  const cdr=1+(clamp(Number(t.cdr)||0,0,60)/100)*.65;
  return {score:Math.max(0,attack*damage*crit*multi*speed*cdr),confidence:"PROXY v0.1"};
}
