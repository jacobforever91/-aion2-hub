export const RANGER_WEIGHTS = Object.freeze({
  "Attack": 1,
  "Attack Bonus": 1.35,
  "Might": 11,
  "Accuracy": 0.18,
  "Critical Hit": 0.16,
  "Critical Damage": 6.5,
  "Weapon Damage Boost": 13,
  "Damage Boost": 12,
  "Boss Damage": 14,
  "PvE Damage": 12,
  "Combat Speed": 8,
  "Cooldown Reduction": 7.5,
  "Multi-Hit": 6,
  "Perfect": 6,
  "Double Chance": 6
});

export const DEFAULT_PROFILE = Object.freeze({
  baseAccuracy: 0,
  baseCrit: 0,
  baseSpeed: 0,
  baseCdr: 0,
  targetAccuracy: 1500,
  targetCrit: 1600,
  targetSpeed: 88.1,
  targetCdr: 33,
  goal: "boss"
});

export function parseFixed(raw){
  const s=String(raw??"").replace(/,/g,"").trim();
  const m=s.match(/^([+-]?\d+(?:\.\d+)?)(?:\s*\+\s*([+-]?\d+(?:\.\d+)?))?\s*(%)?$/);
  if(!m)return null;
  const n=Number(m[1])+Number(m[2]||0);
  if(!Number.isFinite(n)||Math.abs(n)>=1e12)return null;
  return {n,unit:m[3]||""};
}

export function normalizeStatLabel(label){
  const s=String(label||"").trim();
  const tests=[
    [/weapon\s*damage\s*boost/i,"Weapon Damage Boost"],
    [/boss\s*(damage|dmg)/i,"Boss Damage"],
    [/pve\s*(damage|dmg)/i,"PvE Damage"],
    [/critical\s*damage|crit\s*damage/i,"Critical Damage"],
    [/critical\s*hit|crit\s*hit/i,"Critical Hit"],
    [/combat\s*speed|attack\s*speed/i,"Combat Speed"],
    [/cooldown|reuse\s*time/i,"Cooldown Reduction"],
    [/multi[-\s]*hit/i,"Multi-Hit"],
    [/perfect/i,"Perfect"],
    [/double\s*chance|smite/i,"Double Chance"],
    [/attack\s*bonus/i,"Attack Bonus"],
    [/damage\s*boost/i,"Damage Boost"],
    [/accuracy/i,"Accuracy"],
    [/\bmight\b/i,"Might"],
    [/max\s*attack|physical\s*attack|\battack\b/i,"Attack"]
  ];
  for(const [re,name] of tests)if(re.test(s))return name;
  return null;
}

export function statsFromSource(source){
  const out={};
  for(const entry of source?.stats||[]){
    const label=Array.isArray(entry)?entry[0]:entry?.label;
    const raw=Array.isArray(entry)?entry[1]:entry?.value;
    const key=normalizeStatLabel(label);
    const parsed=parseFixed(raw);
    if(!key||!parsed)continue;
    out[key]=(out[key]||0)+parsed.n;
  }
  return out;
}

export function mergeStats(...objects){
  const out={};
  for(const obj of objects)for(const [key,value] of Object.entries(obj||{}))out[key]=(out[key]||0)+(Number(value)||0);
  return out;
}

function progress(value,target){
  const t=Math.max(0,Number(target)||0);
  if(!t)return 1;
  return Math.max(0,Math.min(1,(Number(value)||0)/t));
}

export function scoreStats(stats,profile={},weights=RANGER_WEIGHTS){
  const p={...DEFAULT_PROFILE,...profile};
  let raw=0;
  for(const [key,weight] of Object.entries(weights)){
    let value=Number(stats?.[key])||0;
    if(key==="Boss Damage"&&p.goal!=="boss")value*=0.45;
    raw+=value*weight;
  }
  const accuracy=(Number(p.baseAccuracy)||0)+(Number(stats?.["Accuracy"])||0);
  const crit=(Number(p.baseCrit)||0)+(Number(stats?.["Critical Hit"])||0);
  const speed=(Number(p.baseSpeed)||0)+(Number(stats?.["Combat Speed"])||0);
  const cdr=(Number(p.baseCdr)||0)+(Number(stats?.["Cooldown Reduction"])||0);
  const caps={
    accuracy:progress(accuracy,p.targetAccuracy),
    crit:progress(crit,p.targetCrit),
    speed:progress(speed,p.targetSpeed),
    cdr:progress(cdr,p.targetCdr)
  };
  const breakpointScore=360*caps.accuracy+360*caps.crit+260*caps.speed+260*caps.cdr;
  return {
    score:raw+breakpointScore,
    rawScore:raw,
    breakpointScore,
    totals:{accuracy,crit,speed,cdr},
    caps
  };
}

export function scoreSources(sources,profile,weights=RANGER_WEIGHTS){
  let stats={};
  for(const source of sources||[])stats=mergeStats(stats,statsFromSource(source));
  return {stats,...scoreStats(stats,profile,weights)};
}

export function rankSources(sources,profile,limit=10,weights=RANGER_WEIGHTS){
  return [...(sources||[])].map(source=>({source,...scoreSources([source],profile,weights)}))
    .sort((a,b)=>b.score-a.score)
    .slice(0,Math.max(0,limit));
}

export function optimizeEquipment({slots,pools,locks={},profile={},beamWidth=250,topK=5,extraSources=[]}){
  let beam=[{gear:{},sources:[...extraSources],stats:mergeStats(...extraSources.map(statsFromSource)),score:0}];
  const width=Math.max(10,Math.min(1000,Number(beamWidth)||250));
  for(const slot of slots||[]){
    const locked=locks[slot.id];
    const candidates=locked?[locked]:(pools[slot.id]||[]);
    if(!candidates.length)continue;
    const next=[];
    for(const current of beam){
      for(const item of candidates){
        const itemStats=statsFromSource(item);
        const stats=mergeStats(current.stats,itemStats);
        const evaluated=scoreStats(stats,profile);
        next.push({
          gear:{...current.gear,[slot.id]:item},
          sources:[...current.sources,item],
          stats,
          score:evaluated.score,
          evaluation:evaluated
        });
      }
    }
    next.sort((a,b)=>b.score-a.score);
    beam=next.slice(0,width);
  }
  beam.sort((a,b)=>b.score-a.score);
  const top=beam.slice(0,Math.max(1,topK));
  const best=top[0]?.score||1;
  return top.map((entry,index)=>({
    ...entry,
    rank:index+1,
    index:best>0?100*entry.score/best:100,
    evaluation:entry.evaluation||scoreStats(entry.stats,profile)
  }));
}
