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
  const attackBonus=options.attackBonus==null?60:Number(options.attackBonus)||0;
  const cdrBonus=options.cdrBonus==null?4:Number(options.cdrBonus)||0;
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

export const SORCERER_SIM_PRESET=Object.freeze({
  // v0.1 uses client-visible level-1 skill potencies plus the documented Lv16 specialty breakpoints
  // as a normalized benchmark. It is useful for ranking gear, but is not combat-log calibrated.
  active:{firestorm:16,blaze:16,hellfire:16,iceChain:16,winter:16,frost:16,frostBurst:16,bittercold:16,wish:16},
  skills:{
    firestorm:{flat:114,cd:5,mult:1.75},
    blaze:{flat:198,cd:5,mult:1},
    hellfire:{flat:3412,cd:30,mult:1},
    iceChain:{flat:79,cd:0,mult:1.12},
    winter:{flat:275,cd:30,mult:1},
    frost:{flat:178,cd:25,mult:1},
    frostBurst:{flat:395,cd:10,mult:1},
    bittercold:{flat:238,cd:15,mult:1},
    flameArrow:{flat:62,cd:0,mult:1}
  }
});

export function simulateSorcererDps(entry){
  const s=entry?.stats||{},t=entry?.evaluation?.totals||{},P=SORCERER_SIM_PRESET.skills;
  const pureAttack=Number(t.pureAttack)||pureAttackFromStats(s)||0;
  const weaponDamageBoost=Number(s["Weapon Damage Boost"])||0;
  const might=Number(s.Might)||0;
  const attackIncrease=(Number(s["Attack Increase"])||0)+(might*.1);
  const attackPower=pureAttack*(1+weaponDamageBoost/100)*(1+attackIncrease/100);
  const gearScale=Math.max(.25,1+(attackPower/1000));
  const wishUptime=10/60;
  const wishAttack=1+(.20*wishUptime);
  const winterPveUptime=5/30;
  const damageBucket=1+((Number(s["Damage Boost"])||0)+(Number(s["PvE Damage"])||0)+(Number(s["Boss Damage"])||0)+(20*winterPveUptime))/100;
  const critFactor=expectedCritFactor(Number(t.crit)||0,Number(s["Critical Damage"])||0);
  const multiFactor=expectedMultiFactor(Number(s["Multi-Hit"])||0,0);
  const common=gearScale*wishAttack*damageBucket*critFactor*multiFactor;
  const cdr=Number(t.cdr)||0;
  const hit=(skill,count=1)=>skill.flat*skill.mult*common*count;

  const firestormCasts=castsInWindow(P.firestorm.cd,60,cdr);
  const blazeCasts=castsInWindow(P.blaze.cd,60,cdr);
  const hellfireCasts=castsInWindow(P.hellfire.cd,60,cdr);
  const winterCasts=castsInWindow(P.winter.cd,60,cdr);
  const frostCasts=castsInWindow(P.frost.cd,60,cdr);
  const bittercoldCasts=castsInWindow(P.bittercold.cd,60,cdr);
  const frostBurstBase=castsInWindow(P.frostBurst.cd,60,cdr);
  // NPC Frost is guaranteed; each Frost cast can reset Frost Burst once in this benchmark.
  const frostBurstCasts=frostBurstBase+frostCasts;

  const effectiveSpeed=(Number(t.speed)||0)+(10*wishUptime);
  const actionBudget=Math.max(0,Math.floor(60*(1+effectiveSpeed/100)));
  const fixedActions=firestormCasts+blazeCasts+hellfireCasts+winterCasts+frostCasts+bittercoldCasts+frostBurstCasts+1; // Wish
  const filler=Math.max(0,actionBudget-fixedActions);
  const flameFill=Math.ceil(filler*.6),iceFill=Math.max(0,filler-flameFill);

  const damage60=
    hit(P.firestorm,firestormCasts)+
    hit(P.blaze,blazeCasts)+
    hit(P.hellfire,hellfireCasts)+
    hit(P.winter,winterCasts)+
    hit(P.frost,frostCasts)+
    hit(P.bittercold,bittercoldCasts)+
    hit(P.frostBurst,frostBurstCasts)+
    hit(P.flameArrow,flameFill)+
    hit(P.iceChain,iceFill);

  return {
    dps:damage60/60,
    damage60,
    attackPower,
    counts:{firestorm:firestormCasts,blaze:blazeCasts,hellfire:hellfireCasts,winter:winterCasts,frost:frostCasts,bittercold:bittercoldCasts,frostBurst:frostBurstCasts,flameArrow:flameFill,iceChain:iceFill},
    confidence:"BETA v0.1 · normalized client-skill benchmark"
  };
}


export const SPIRITMASTER_SIM_PRESET=Object.freeze({
  active:{coldShock:16,combustion:16,soulCry:16,elementalFusion:16,fireSpirit:16},
  skills:{
    coldShock:{flat:54},combustion:{flat:63},soulCry:{flat:246,cd:35},
    elementalFusion:{flat:1075,interval:12,chargeMult:3,refundChance:.25},
    fireSpiritSkill:{flat:68,uses60:8,statMult:1.20}
  }
});

export function simulateSpiritmasterDps(entry){
  const s=entry?.stats||{},t=entry?.evaluation?.totals||{},P=SPIRITMASTER_SIM_PRESET.skills;
  const pureAttack=Number(t.pureAttack)||pureAttackFromStats(s)||0;
  const weaponDamageBoost=Number(s["Weapon Damage Boost"])||0;
  const might=Number(s.Might)||0;
  const attackIncrease=(Number(s["Attack Increase"])||0)+(might*.1);
  const attackPower=pureAttack*(1+weaponDamageBoost/100)*(1+attackIncrease/100);
  const gearScale=Math.max(.25,1+(attackPower/1000));
  const damageBucket=1+((Number(s["Damage Boost"])||0)+(Number(s["PvE Damage"])||0)+(Number(s["Boss Damage"])||0))/100;
  const common=gearScale*damageBucket*expectedCritFactor(Number(t.crit)||0,Number(s["Critical Damage"])||0)*expectedMultiFactor(Number(s["Multi-Hit"])||0,0);
  const hit=(skill,count=1,mult=1)=>skill.flat*common*count*mult;
  const soulCasts=castsInWindow(P.soulCry.cd,60,Number(t.cdr)||0);
  const fusionCasts=Math.max(1,Math.floor(60/P.elementalFusion.interval))*(1+P.elementalFusion.refundChance);
  const spiritUses=P.fireSpiritSkill.uses60;
  const actionBudget=Math.max(0,Math.floor(60*(1+(Number(t.speed)||0)/100)));
  const fixedActions=soulCasts+Math.ceil(fusionCasts);
  const filler=Math.max(0,actionBudget-fixedActions);
  const combustion=Math.ceil(filler*.6),coldShock=Math.max(0,filler-combustion);
  const damage60=hit(P.soulCry,soulCasts)+hit(P.elementalFusion,fusionCasts,P.elementalFusion.chargeMult)+hit(P.fireSpiritSkill,spiritUses,P.fireSpiritSkill.statMult)+hit(P.combustion,combustion)+hit(P.coldShock,coldShock);
  return {dps:damage60/60,damage60,attackPower,counts:{soulCry:soulCasts,elementalFusion:fusionCasts,fireSpiritSkill:spiritUses,combustion,coldShock},confidence:"BETA v0.1 · Global client skill benchmark"};
}


function betaClassContext(entry,bonuses={}){
  const s=entry?.stats||{},t=entry?.evaluation?.totals||{};
  const pureAttack=Number(t.pureAttack)||pureAttackFromStats(s)||0;
  const weaponDamageBoost=Number(s["Weapon Damage Boost"])||0;
  const might=Number(s.Might)||0;
  const attackIncrease=(Number(s["Attack Increase"])||0)+(might*.1)+(Number(bonuses.attackPct)||0);
  const attackPower=pureAttack*(1+weaponDamageBoost/100)*(1+attackIncrease/100);
  const gearScale=Math.max(.25,1+(attackPower/1000));
  const baseDamagePct=(Number(s["Damage Boost"])||0)+(Number(s["PvE Damage"])||0)+(Number(s["Boss Damage"])||0)+(Number(bonuses.pvePct)||0);
  const critStat=(Number(t.crit)||0)+(Number(bonuses.critStat)||0);
  const critDamage=(Number(s["Critical Damage"])||0)+(Number(bonuses.critDamage)||0);
  const critChance=clamp(critStat/2000,0,.8);
  const critExpected=expectedCritFactor(critStat,critDamage);
  const critGuaranteed=Math.max(1,1.5+critDamage/100-.25);
  const baseMulti=Number(s["Multi-Hit"])||0;
  const hit=(flat,{count=1,mult=1,crit=false,multi=false,multiBonus=0,extraPve=0}={})=>{
    const damage=gearScale*(1+(baseDamagePct+extraPve)/100);
    const critFactor=crit?critGuaranteed:critExpected;
    const multiFactor=multi?1.125:expectedMultiFactor(baseMulti+multiBonus,0);
    return Number(flat||0)*Number(mult||1)*Number(count||1)*damage*critFactor*multiFactor;
  };
  const dot=(flat,{count=1,mult=1,extraPve=0}={})=>Number(flat||0)*Number(mult||1)*Number(count||1)*gearScale*(1+(baseDamagePct+extraPve)/100);
  return {s,t,pureAttack,attackPower,critChance,cdr:Number(t.cdr)||0,actionBudget:Math.max(0,Math.floor(60*(1+(Number(t.speed)||0)/100))),hit,dot};
}

export const CLERIC_SIM_PRESET=Object.freeze({
  skills:{
    earth:{flat:50},judgment:{flat:81},mark:{flat:59,dot:74,cd:10,ticks:20},
    torment:{flat:138,dot:173,cd:20,ticks:26},condemnation:{flat:325,cd:3},
    bolt:{flat:2963,cd:45,mult:1.20}
  }
});

export function simulateClericDps(entry){
  const P=CLERIC_SIM_PRESET.skills,ctx=betaClassContext(entry);
  const mark=castsInWindow(P.mark.cd,60,ctx.cdr),torment=castsInWindow(P.torment.cd,60,ctx.cdr);
  const condemnation=castsInWindow(P.condemnation.cd,60,ctx.cdr),bolt=castsInWindow(P.bolt.cd,60,ctx.cdr);
  const fixed=mark+torment+condemnation+bolt;
  const filler=Math.max(0,ctx.actionBudget-fixed),judgment=Math.ceil(filler*.6),earth=filler-judgment;
  const damage60=ctx.hit(P.mark.flat,{count:mark})+ctx.dot(P.mark.dot,{count:P.mark.ticks*mark})+
    ctx.hit(P.torment.flat,{count:torment})+ctx.dot(P.torment.dot,{count:P.torment.ticks*torment})+
    ctx.hit(P.condemnation.flat,{count:condemnation,multi:true})+
    ctx.hit(P.bolt.flat,{count:bolt,mult:P.bolt.mult,crit:true})+
    ctx.hit(P.judgment.flat,{count:judgment})+ctx.hit(P.earth.flat,{count:earth});
  return {dps:damage60/60,damage60,attackPower:ctx.attackPower,counts:{mark,torment,condemnation,bolt,judgment,earth},confidence:"BETA v0.1 · Global client skill benchmark"};
}

export const CHANTER_SIM_PRESET=Object.freeze({
  skills:{
    spinning:{flat:2347,cd:22},wave:{flat:538,cd:15},rushing:{flat:112,cd:15,chargeMult:3},
    dark:{flat:215},onslaught:{flat:74}
  }
});

export function simulateChanterDps(entry){
  const P=CHANTER_SIM_PRESET.skills;
  const prelim=betaClassContext(entry);
  const spinning=castsInWindow(P.spinning.cd,60,prelim.cdr);
  const ctx=betaClassContext(entry,{critDamage:Math.min(30,15*Math.min(2,spinning))*0.70});
  const wave=castsInWindow(P.wave.cd,60,ctx.cdr),rushing=castsInWindow(P.rushing.cd,60,ctx.cdr);
  const fixed=spinning+wave+rushing;
  const filler=Math.max(0,ctx.actionBudget-fixed),onslaught=Math.ceil(filler*.3),dark=filler-onslaught;
  const damage60=ctx.hit(P.spinning.flat,{count:spinning,crit:true})+
    ctx.hit(P.wave.flat,{count:wave,multi:true})+
    ctx.hit(P.rushing.flat,{count:rushing,mult:P.rushing.chargeMult,multi:true})+
    ctx.hit(P.dark.flat,{count:dark,crit:true})+
    ctx.hit(P.onslaught.flat,{count:onslaught,multiBonus:50});
  return {dps:damage60/60,damage60,attackPower:ctx.attackPower,counts:{spinning,wave,rushing,dark,onslaught},confidence:"BETA v0.1 · Global client skill benchmark"};
}

export const TEMPLAR_SIM_PRESET=Object.freeze({
  skills:{judgment:{flat:227},annihilate:{flat:719,cd:10,bossMult:2},warding:{flat:353,cd:25},vicious:{flat:79}}
});

export function simulateTemplarDps(entry){
  const P=TEMPLAR_SIM_PRESET.skills,ctx=betaClassContext(entry);
  const annihilate=castsInWindow(P.annihilate.cd,60,ctx.cdr),warding=castsInWindow(P.warding.cd,60,ctx.cdr);
  const fixed=annihilate+warding;
  const filler=Math.max(0,ctx.actionBudget-fixed),judgment=Math.ceil(filler*.7),vicious=filler-judgment;
  const damage60=ctx.hit(P.annihilate.flat,{count:annihilate,mult:P.annihilate.bossMult})+
    ctx.hit(P.warding.flat,{count:warding})+
    ctx.hit(P.judgment.flat,{count:judgment,crit:true})+
    ctx.hit(P.vicious.flat,{count:vicious,multiBonus:50});
  return {dps:damage60/60,damage60,attackPower:ctx.attackPower,counts:{annihilate,warding,judgment,vicious},confidence:"BETA v0.1 · Global client boss benchmark"};
}

export const GLADIATOR_SIM_PRESET=Object.freeze({
  skills:{ruinous:{flat:2387,cd:45,buffSeconds:20},rush:{flat:330,cd:10},crushing:{flat:206,cd:20},overhead:{flat:174},keen:{flat:51}}
});

export function simulateGladiatorDps(entry){
  const P=GLADIATOR_SIM_PRESET.skills,pre=betaClassContext(entry);
  const ruinous=castsInWindow(P.ruinous.cd,60,pre.cdr);
  const buffUptime=clamp((ruinous*P.ruinous.buffSeconds)/60,0,1);
  const ctx=betaClassContext(entry,{pvePct:20*buffUptime,critStat:100*buffUptime});
  const rush=castsInWindow(P.rush.cd,60,ctx.cdr);
  const crushingBase=castsInWindow(P.crushing.cd,60,ctx.cdr);
  const crushing=crushingBase*(1+ctx.critChance*.35);
  const fixed=ruinous+rush+Math.ceil(crushing);
  const filler=Math.max(0,ctx.actionBudget-fixed),overhead=Math.ceil(filler*.7),keen=filler-overhead;
  const damage60=ctx.hit(P.ruinous.flat,{count:ruinous,multi:true})+
    ctx.hit(P.rush.flat,{count:rush})+
    ctx.hit(P.crushing.flat,{count:crushing})+
    ctx.hit(P.overhead.flat,{count:overhead,crit:true})+
    ctx.hit(P.keen.flat,{count:keen,multiBonus:50});
  return {dps:damage60/60,damage60,attackPower:ctx.attackPower,counts:{ruinous,rush,crushing,overhead,keen},confidence:"BETA v0.1 · Global client skill benchmark"};
}

export const ASSASSIN_SIM_PRESET=Object.freeze({
  skills:{explosion:{flat:967,cd:7},shadowstrike:{flat:52,cd:20},heart:{flat:111,cd:5},quick:{flat:58}}
});

export function simulateAssassinDps(entry){
  const P=ASSASSIN_SIM_PRESET.skills,pre=betaClassContext(entry);
  const shadowstrike=castsInWindow(P.shadowstrike.cd,60,pre.cdr);
  const ctx=betaClassContext(entry,{critDamage:20*clamp((shadowstrike*5)/60,0,1)});
  const explosion=castsInWindow(P.explosion.cd,60,ctx.cdr);
  const heartBase=castsInWindow(P.heart.cd,60,ctx.cdr);
  const heart=heartBase*clamp(.35+ctx.critChance*.65,.35,1);
  const fixed=shadowstrike+explosion+Math.ceil(heart);
  const quick=Math.max(0,ctx.actionBudget-fixed);
  const damage60=ctx.hit(P.explosion.flat,{count:explosion,multiBonus:50})+
    ctx.hit(P.shadowstrike.flat,{count:shadowstrike})+
    ctx.hit(P.heart.flat,{count:heart,multi:true})+
    ctx.hit(P.quick.flat,{count:quick,crit:true,multiBonus:50});
  return {dps:damage60/60,damage60,attackPower:ctx.attackPower,counts:{explosion,shadowstrike,heart,quick},confidence:"BETA v0.1 · Global client skill benchmark"};
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
