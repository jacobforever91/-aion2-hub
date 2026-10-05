import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {classList,classData,classWeapons} from '../app/classes/classData.js';
import weapons from '../app/equipment/weaponsData.js';
import armor from '../app/equipment/armorData.js';
import chest from '../app/equipment/chestData.js';
import moreArmor from '../app/equipment/armorMoreData.js';
import jewelry from '../app/equipment/jewelryData.js';
import brooch from '../app/equipment/broochData.js';
import specialSlotData from '../app/equipment/specialSlotData.js';
import globalUniqueWeaponData from '../app/equipment/globalUniqueWeaponData.js';
import globalVakronData from '../app/equipment/globalVakronData.js';
import * as model from '../public/build-lab-assets/model.mjs';
import * as engine from '../public/dps-lab-assets/engine.mjs';
import {simulateRangerDps,simulateOffensiveProxy} from '../public/dps-lab-assets/simulators.mjs';

export const CLASS_CYCLE=Object.freeze(['ranger','sorcerer','spiritmaster','cleric','chanter','templar','gladiator','assassin']);

const aliases={Longsword:['longsword','sword'],Shield:['shield','guard','guarder'],Guard:['shield','guard','guarder'],Daggers:['dagger'],Dagger:['dagger']};
const types=w=>w?(aliases[w.name]||[w.name.toLowerCase()]):[];
const pairs=rows=>(Array.isArray(rows)?rows:[]).map(r=>Array.isArray(r)?{label:r[0],value:r[1]}:r).filter(r=>r&&r.label&&r.value!=null).map(r=>({label:String(r.label),value:String(r.value)}));
const normalize=x=>({
  id:String(x.id),name:x.name||String(x.id),region:x.region||'GLOBAL',grade:x.grade||x.rarity||'Common',
  rarityColor:x.rarityColor||'',category:x.category||x.itemType||'',equipType:x.equipType||'',group:x.group||'',
  itemLevel:x.itemLevel||'',requiredLevel:x.requiredLevel||'',classRestrictions:x.classRestrictions||'',
  icon:x.icon||((x.group==='Weapon')?`/equipment-icons/${x.id}.webp`:'/equipment-art/armor.webp'),
  stats:pairs(x.stats),imprints:pairs(x.imprints),upgrades:x.upgrades||'',obtain:x.obtain||[],details:pairs(x.details),
  verificationStatus:x.verificationStatus||'',source:x.source||null
});

async function readJson(relative){
  return JSON.parse(await readFile(new URL(relative,import.meta.url),'utf8'));
}

export async function loadBotCatalog(){
  const equipment=await readJson('../app/classes/equipmentData.json');
  const items=[...new Map([
    ...(equipment.items||[]),...weapons,...armor,...chest,...moreArmor,...jewelry,...brooch,...specialSlotData,...globalUniqueWeaponData,...globalVakronData
  ].map(x=>[`${x.region||'GLOBAL'}:${x.id}`,normalize(x)])).values()]
    .filter(x=>x.region==='GLOBAL'&&(x.grade==='Unique'||(x.category==='Rune'&&x.grade==='Special')));
  const classes=classList.map(c=>{
    const d=classData[c.slug],w=classWeapons[c.slug];
    return {slug:c.slug,name:c.name,role:d.role,mainTypes:[...types(w?.main),...(w?.secondary?.kind==='Alternate main weapon'?types(w.secondary):[])],offTypes:w?.secondary?.kind==='Off-hand'?types(w.secondary):[]};
  });
  return {region:'GLOBAL',classes,equipment:items,wings:[],pets:[],arcana:[],boards:{}};
}

export function classForRun(runNumber=1){
  const n=Math.max(1,Number(runNumber)||1);
  return CLASS_CYCLE[(n-1)%CLASS_CYCLE.length];
}

function currentCandidate(item){
  const obtain=Array.isArray(item?.obtain)?item.obtain:[];
  return !obtain.some(line=>/global acquisition not listed|not yet confirmed/i.test(String(line)));
}
function profile(goal='boss'){
  return {goal,baseAccuracy:0,targetAccuracy:1500,baseCrit:0,targetCrit:1600,baseSpeed:0,targetSpeed:88.1,baseCdr:0,targetCdr:33,potentialMode:'max'};
}
function variant(classSlug){
  return {region:'GLOBAL',classSlug,gear:{},skills:{},arcana:[],paths:{},wingId:'',petId:'',petLevel:1};
}
function makeRng(seed){
  let x=(Number(seed)||1)>>>0;
  if(!x)x=0x9e3779b9;
  return ()=>{x^=x<<13;x^=x>>>17;x^=x<<5;return (x>>>0)/4294967296;};
}
function sampleExploration(sorted,limit,rng,core=10){
  if(sorted.length<=limit)return [...sorted];
  const out=sorted.slice(0,Math.min(core,limit)),pool=sorted.slice(core);
  while(out.length<limit&&pool.length){
    const i=Math.floor(rng()*pool.length);
    out.push(pool.splice(i,1)[0]);
  }
  return out;
}
function gearKey(result,slots){
  return slots.map(s=>String(result?.gear?.[s.id]?.id||'-')).join('|');
}
function formatNumber(value){
  const n=Number(value)||0;
  if(n>=1e6)return (n/1e6).toFixed(2)+'M';
  if(n>=1e3)return (n/1e3).toFixed(1)+'K';
  return n.toFixed(1);
}

export function objectiveForClass(classSlug,goal='boss'){
  if(classSlug==='ranger')return {
    kind:'DPS',
    confidence:'BETA v0.4',
    evaluate:entry=>simulateRangerDps(entry).dps
  };
  return {
    kind:'DPS PROXY',
    confidence:'PROXY v0.1',
    evaluate:entry=>simulateOffensiveProxy(entry,{goal}).score
  };
}

export async function runClassSearch({
  classSlug,
  durationMs=55*60*1000,
  runNumber=1,
  goal='boss',
  onProgress=()=>{}
}={}){
  const catalog=await loadBotCatalog();
  if(!catalog.classes.some(c=>c.slug===classSlug))throw new Error(`Unknown class: ${classSlug}`);
  const v=variant(classSlug),p=profile(goal),slots=model.slotsFor(v,catalog);
  const objective=objectiveForClass(classSlug,goal);
  const rng=makeRng((Number(runNumber)||1)*2654435761);
  const rankedPools={};
  for(const slot of slots){
    rankedPools[slot.id]=catalog.equipment
      .filter(item=>currentCandidate(item)&&model.compatible(item,slot,v,catalog))
      .map(item=>({item,score:engine.scoreSources([item],p).score}))
      .sort((a,b)=>b.score-a.score)
      .map(x=>x.item);
  }
  const missing=slots.filter(slot=>!(rankedPools[slot.id]||[]).length);
  const deadline=Date.now()+Math.max(50,Number(durationMs)||0);
  let best=null,iterations=0,evaluations=0,improvements=0,lastLog=0;
  do{
    const pools={};
    for(const slot of slots){
      const full=rankedPools[slot.id]||[];
      const limit=Math.min(full.length,24+(iterations%4)*4);
      pools[slot.id]=sampleExploration(full,Math.max(1,limit),rng,10);
    }
    const rows=engine.optimizeEquipmentDeep({
      slots,pools,profile:p,beamWidth:Math.min(1000,450+(iterations%4)*150),topK:5,
      extraSources:[],maxPasses:2+(iterations%3),eliteCount:10,objective:objective.evaluate
    });
    const meta=rows[0]?.searchMeta||{};
    evaluations+=Number(meta.evaluations)||0;
    for(const row of rows){
      if(!best||row.score>best.score){best=row;improvements++;onProgress({type:'improvement',iterations,evaluations,best});}
    }
    iterations++;
    if(Date.now()-lastLog>60_000){
      lastLog=Date.now();onProgress({type:'heartbeat',iterations,evaluations,best});
    }
  }while(Date.now()<deadline);

  return {
    classSlug,className:catalog.classes.find(c=>c.slug===classSlug)?.name||classSlug,
    goal,kind:objective.kind,confidence:objective.confidence,durationMs:Number(durationMs),
    iterations,evaluations,improvements,slotCount:slots.length,filledSlots:slots.filter(s=>best?.gear?.[s.id]).length,
    missingSlots:missing.map(s=>s.label),bestScore:Number(best?.score)||0,bestGear:best?.gear||{},
    bestKey:best?gearKey(best,slots):'',weapon:best?.gear?.mainHand?.name||'—'
  };
}

export function reportMarkdown(result){
  const real=result.kind==='DPS';
  const label=real?'Best simulated 60s DPS':'Best experimental DPS proxy';
  const minutes=(Number(result.durationMs)||0)/60000;
  const lines=[
    `## ${result.className} · ${result.goal==='boss'?'PvE Boss':result.goal}`,
    '',
    `**${label}: ${formatNumber(result.bestScore)}${real?' /s':''}**`,
    '',
    `- Model: **${result.confidence}**`,
    `- Search slot: **${minutes.toFixed(1)} minutes**`,
    `- Optimizer evaluations: **${result.evaluations.toLocaleString()}**`,
    `- Search restarts: **${result.iterations.toLocaleString()}**`,
    `- Best improvements: **${result.improvements.toLocaleString()}**`,
    `- Loadout: **${result.filledSlots}/${result.slotCount} slots**`,
    `- Main weapon: **${result.weapon}**`
  ];
  if(!real)lines.push('', '> This class does not have a validated rotation simulator yet. The bot is searching gear with the offensive proxy and will switch to real DPS automatically when its class simulator is added.');
  if(result.missingSlots.length)lines.push('',`Catalog gaps: ${result.missingSlots.join(', ')}`);
  lines.push('',`Next class in cycle: **${CLASS_CYCLE[(CLASS_CYCLE.indexOf(result.classSlug)+1)%CLASS_CYCLE.length]}**`);
  return lines.join('\n');
}

async function main(){
  const runNumber=Number(process.env.DPS_BOT_RUN_NUMBER||process.env.GITHUB_RUN_NUMBER||1);
  const classSlug=process.env.DPS_BOT_CLASS||classForRun(runNumber);
  const minutes=Math.max(.001,Number(process.env.DPS_BOT_DURATION_MINUTES||55));
  const durationMs=process.env.DPS_BOT_DURATION_MS?Number(process.env.DPS_BOT_DURATION_MS):minutes*60_000;
  console.log(`[DAEVEXUS DPS BOT] run=${runNumber} class=${classSlug} budget=${(durationMs/60000).toFixed(2)}m`);
  const result=await runClassSearch({
    classSlug,durationMs,runNumber,goal:process.env.DPS_BOT_GOAL||'boss',
    onProgress:event=>{
      if(event.type==='improvement')console.log(`[best] ${classSlug} ${formatNumber(event.best?.score)} after ${event.evaluations.toLocaleString()} evals`);
      else console.log(`[alive] ${classSlug} iterations=${event.iterations} evals=${event.evaluations.toLocaleString()} best=${formatNumber(event.best?.score)}`);
    }
  });
  const md=reportMarkdown(result);
  await writeFile(process.env.DPS_BOT_REPORT_PATH||'dps-bot-report.md',md+'\n','utf8');
  await writeFile(process.env.DPS_BOT_JSON_PATH||'dps-bot-report.json',JSON.stringify(result,null,2)+'\n','utf8');
  console.log(md);
}

const isMain=process.argv[1]&&pathToFileURL(fileURLToPath(new URL(process.argv[1],import.meta.url))).href===import.meta.url;
if(isMain)main().catch(error=>{console.error(error);process.exitCode=1;});
