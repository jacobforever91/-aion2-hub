export const RANGER_WEIGHTS = Object.freeze({
  "Attack": 1,
  "Attack Bonus": 1.35,
  "Attack Increase": 12,
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
  goal: "boss",
  potentialMode: "max"
});

export function parseFixed(raw){
  const s=String(raw??"").replace(/,/g,"").trim();
  const m=s.match(/^([+-]?\d+(?:\.\d+)?)(?:\s*\+\s*([+-]?\d+(?:\.\d+)?))?\s*(%)?$/);
  if(!m)return null;
  const n=Number(m[1])+Number(m[2]||0);
  if(!Number.isFinite(n)||Math.abs(n)>=1e12)return null;
  return {n,unit:m[3]||""};
}

export function parseRange(raw,mode="max"){
  const s=String(raw??"").replace(/,/g,"").trim();
  const m=s.match(/^([+-]?\d+(?:\.\d+)?)\s*(%)?\s*(?:~|–|—|-)\s*([+-]?\d+(?:\.\d+)?)\s*(%)?$/);
  if(!m)return null;
  const a=Number(m[1]),b=Number(m[3]);
  if(!Number.isFinite(a)||!Number.isFinite(b))return null;
  const lo=Math.min(a,b),hi=Math.max(a,b);
  const n=mode==="mid"?(lo+hi)/2:mode==="min"?lo:hi;
  return {n,unit:(m[2]||m[4])?"%":""};
}

export function normalizeStatLabel(label){
  const s=String(label||"").trim();
  if(/pvp|jcj/i.test(s))return null;
  if(/resist|tolerance|defen[cs]e|resistencia|tolerancia/i.test(s))return null;
  const tests=[
    [/weapon\s*damage\s*boost|amplificaci[oó]n.*da[nñ]o.*arma/i,"Weapon Damage Boost"],
    [/boss\s*(damage|dmg)|da[nñ]o.*jefe/i,"Boss Damage"],
    [/pve\s*(damage|dmg)|jce.*da[nñ]o/i,"PvE Damage"],
    [/critical\s*damage|crit\s*damage/i,"Critical Damage"],
    [/critical\s*hit|crit\s*hit/i,"Critical Hit"],
    [/combat\s*speed|attack\s*speed/i,"Combat Speed"],
    [/cooldown|reuse\s*time/i,"Cooldown Reduction"],
    [/multi[-\s]*hit/i,"Multi-Hit"],
    [/perfect/i,"Perfect"],
    [/double\s*chance|smite/i,"Double Chance"],
    [/attack\s*increase/i,"Attack Increase"],
    [/attack\s*bonus/i,"Attack Bonus"],
    [/damage\s*boost/i,"Damage Boost"],
    [/accuracy/i,"Accuracy"],
    [/\bmight\b/i,"Might"],
    [/\bprecision\b/i,"Precision"],
    [/^min\s*attack$/i,"Min Attack"],
    [/^max\s*attack$/i,"Max Attack"],
    [/physical\s*attack|\battack\b/i,"Attack"]
  ];
  for(const [re,name] of tests)if(re.test(s))return name;
  return null;
}

function addRows(out,rows,{ranges=false,rangeMode="max"}={}){
  for(const entry of rows||[]){
    const label=Array.isArray(entry)?entry[0]:entry?.label;
    const raw=Array.isArray(entry)?entry[1]:entry?.value;
    const key=normalizeStatLabel(label);
    const parsed=parseFixed(raw)||(ranges?parseRange(raw,rangeMode):null);
    if(!key||!parsed)continue;
    out[key]=(out[key]||0)+parsed.n;
  }
  return out;
}

export function baseStatsFromSource(source){
  return addRows({},source?.stats||[]);
}

export function imprintLineCount(source){
  const explicit=Number(source?.imprintSlots||source?.soulBindLines);
  if(Number.isFinite(explicit)&&explicit>0)return Math.max(1,Math.min(5,Math.floor(explicit)));
  const name=String(source?.name||"");
  if(/Ludra/i.test(name)&&String(source?.group||"").toLowerCase()==="weapon")return 3;
  if(/Dragon Lord/i.test(name))return 5;
  if(String(source?.grade||"").toLowerCase()==="unique")return 4;
  return 0;
}

export function imprintCandidates(source,mode="max"){
  const seen=new Set(),out=[];
  for(const entry of source?.imprints||[]){
    const label=Array.isArray(entry)?entry[0]:entry?.label;
    const raw=Array.isArray(entry)?entry[1]:entry?.value;
    const key=normalizeStatLabel(label);
    const parsed=parseFixed(raw)||parseRange(raw,mode);
    if(!key||!parsed||seen.has(key))continue;
    seen.add(key);
    out.push({key,value:parsed.n,label:String(label||key)});
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

export function pureAttackFromStats(stats={}){
  const flat=Number(stats?.Attack)||0;
  const min=Number(stats?.["Min Attack"])||0;
  const max=Number(stats?.["Max Attack"])||0;
  const weaponAverage=(min||max)?((min+max)/2):0;
  const perfect=Math.max(0,Number(stats?.Perfect)||0)/100;
  const perfectBonus=(min||max)?(Math.max(0,max-min)/2)*Math.min(1,perfect):0;
  return flat+weaponAverage+perfectBonus;
}

export function scoreStats(stats,profile={},weights=RANGER_WEIGHTS){
  const p={...DEFAULT_PROFILE,...profile};
  const might=Number(stats?.Might)||0;
  const precision=Number(stats?.Precision)||0;
  const effective={...stats};
  effective["Attack"]=pureAttackFromStats(stats);
  effective["Attack Increase"]=(Number(effective["Attack Increase"])||0)+(might*0.1);

  let raw=0;
  for(const [key,weight] of Object.entries(weights)){
    let value=Number(effective?.[key])||0;
    if(key==="Boss Damage"&&p.goal!=="boss")value*=0.45;
    raw+=value*weight;
  }

  const precisionMult=1+(precision*0.001);
  const accuracy=((Number(p.baseAccuracy)||0)+(Number(effective?.Accuracy)||0))*precisionMult;
  const crit=((Number(p.baseCrit)||0)+(Number(effective?.["Critical Hit"])||0))*precisionMult;
  const speed=(Number(p.baseSpeed)||0)+(Number(effective?.["Combat Speed"])||0);
  const cdr=(Number(p.baseCdr)||0)+(Number(effective?.["Cooldown Reduction"])||0);
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
    totals:{accuracy,crit,speed,cdr,might,precision,pureAttack:effective["Attack"]},
    caps
  };
}

export function bestImprintStats(source,currentStats={},profile={}){
  const p={...DEFAULT_PROFILE,...profile};
  if(p.potentialMode==="base")return {};
  const slots=imprintLineCount(source);
  if(!slots)return {};
  const candidates=imprintCandidates(source,p.potentialMode==="mid"?"mid":"max");
  let chosen={},remaining=[...candidates];
  for(let i=0;i<slots&&remaining.length;i++){
    let bestIndex=-1,bestGain=-Infinity;
    const before=scoreStats(mergeStats(currentStats,chosen),p).score;
    for(let j=0;j<remaining.length;j++){
      const line=remaining[j];
      const trial=mergeStats(currentStats,chosen,{[line.key]:line.value});
      const gain=scoreStats(trial,p).score-before;
      if(gain>bestGain){bestGain=gain;bestIndex=j;}
    }
    if(bestIndex<0)break;
    const line=remaining.splice(bestIndex,1)[0];
    chosen[line.key]=(chosen[line.key]||0)+line.value;
  }
  return chosen;
}

export function statsFromSource(source,options={},currentStats={},profile={}){
  const base=baseStatsFromSource(source);
  if(!options.includeImprints)return base;
  return mergeStats(base,bestImprintStats(source,mergeStats(currentStats,base),profile));
}

export function sourceOptions(profile={}){
  const p={...DEFAULT_PROFILE,...profile};
  return {includeImprints:p.potentialMode!=="base",rangeMode:p.potentialMode==="mid"?"mid":"max"};
}

export function scoreSources(sources,profile,weights=RANGER_WEIGHTS){
  const opts=sourceOptions(profile);
  let stats={};
  for(const source of sources||[])stats=mergeStats(stats,statsFromSource(source,opts,stats,profile));
  return {stats,...scoreStats(stats,profile,weights)};
}

export function rankSources(sources,profile,limit=10,weights=RANGER_WEIGHTS){
  return [...(sources||[])].map(source=>({source,...scoreSources([source],profile,weights)}))
    .sort((a,b)=>b.score-a.score)
    .slice(0,Math.max(0,limit));
}

export function optimizeEquipment({slots,pools,locks={},profile={},beamWidth=250,topK=5,extraSources=[]}){
  const opts=sourceOptions(profile);
  let seedStats={};
  for(const source of extraSources)seedStats=mergeStats(seedStats,statsFromSource(source,opts,seedStats,profile));
  let beam=[{gear:{},sources:[...extraSources],stats:seedStats,score:scoreStats(seedStats,profile).score}];
  const width=Math.max(10,Math.min(1000,Number(beamWidth)||250));
  for(const slot of slots||[]){
    const locked=locks[slot.id];
    const candidates=locked?[locked]:(pools[slot.id]||[]);
    if(!candidates.length)continue;
    const next=[];
    for(const current of beam){
      for(const item of candidates){
        const itemStats=statsFromSource(item,opts,current.stats,profile);
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
