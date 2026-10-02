/** Read-only presentation helpers. No synthetic game values or combat formulas. */
import {SLOTS,slotsFor,selectedItem,boardNodes,skillLevels,skillView,parseValue} from './model.mjs';
export const boundedInt=(value,min,max,fallback=min)=>Number.isFinite(Number(value))?Math.max(min,Math.min(max,Math.floor(Number(value)))):fallback;
export function pairs(rows){return (Array.isArray(rows)?rows:[]).map(r=>Array.isArray(r)?{label:r[0],value:r[1]}:r).filter(r=>r&&r.label&&r.value!=null).map(r=>({label:String(r.label),value:String(r.value)}));}
export function petLevels(pet){return [...new Set((pet?.detail?.baseStats?.rows||[]).map(r=>Number(r[0])).filter(n=>Number.isInteger(n)&&n>0))].sort((a,b)=>a-b);}
export function collectionRows(item,kind,level=1){
 if(kind!=='pets')return pairs(item?.stats);
 const table=item?.detail?.baseStats, row=table?.rows?.find(r=>Number(r[0])===Number(level));
 return row?pairs((table.columns||[]).slice(1).map((label,i)=>[label,row[i+1]])):[];
}
export function recordStatus(row){return parseValue(row.value)?'fixed':/[~–]|\d\s*-\s*\d/.test(row.value)?'range':'unknown';}
export function detailForSkill(info,level){
 const base=skillView(info,level), row=info?.levels?.find(r=>Number(r.level)===Number(level));
 const rows=base.rows.map(r=>r.label==='Casting time'&&row&&Number(row.casting_time)===0?{...r,value:'Instant'}:r);
 for(const [key,label] of [['cost_hp','HP cost'],['cost_dp','DP cost']])if(Number(row?.[key])>0)rows.push({label,value:String(row[key])});
 // Merge minimum/maximum into one honest value or range, never a fabricated DPS.
 for(const [minLabel,maxLabel,label] of [['Min damage','Max damage','Damage'],['Min healing','Max healing','Healing']]){
  const i=rows.findIndex(r=>r.label===minLabel),j=rows.findIndex(r=>r.label===maxLabel);
  if(i>=0&&j>=0){const low=rows[i].value,high=rows[j].value;rows[i]={label,value:low===high?low:low+' – '+high};rows.splice(j,1);}
 }
 // A record with no level table can still expose source-labelled flat stats.
 if(!rows.length)rows.push(...pairs(info?.stats));
 return {...base,rows,details:pairs(info?.details).filter(r=>!/^(max level|required level)$/i.test(r.label)),chain:(Array.isArray(info?.chain)?info.chain:[]).filter(r=>r?.name)};
}
export function buildChecks(v,c,cache={}){
 const notes=[], validSlots=slotsFor(v,c),classInfo=c.classes.find(x=>x.slug===v.classSlug);
 const add=(label,kind='warning')=>notes.push({label,kind});
 if(!classInfo)add('Selected class is absent from this reference catalog.');
 for(const slot of SLOTS){const g=v.gear[slot.id];if(!g)continue;const item=selectedItem(v,slot,c);
  if(!validSlots.some(s=>s.id===slot.id)||!item){add(slot.label+': saved item is unavailable or incompatible.');continue;}
  if(Number(item.requiredLevel)>Number(v.level))add(item.name+': requires reference level '+item.requiredLevel+' (planned '+v.level+').');
 }
 for(const [id,s] of Object.entries(v.skills)){
  if(!classInfo?.skills?.some(x=>x.id===id)){add('Skill '+id+': not part of the selected class reference.');continue;}
  const info=cache[id],levels=skillLevels(info);
  if(!info)add((classInfo.skills.find(x=>x.id===id)?.name||id)+': open the skill to check its recorded levels and requirements.','info');
  if(Number(info?.requiredLevel)>v.level)add((classInfo.skills.find(x=>x.id===id)?.name||id)+': requires reference level '+info.requiredLevel+'.');
  if(info&&levels.length&&!levels.includes(s.level))add((classInfo.skills.find(x=>x.id===id)?.name||id)+': level '+s.level+' is not in the loaded reference.');
  const tiers=new Map();(info?.specialties||[]).forEach(t=>tiers.set(Number(t.level),(tiers.get(Number(t.level))||0)+1));
  for(const [unlock,count] of tiers)if(unlock<=s.level&&count>1&&classInfo.skills.find(x=>x.id===id)?.type!=='stigma'&&(s.spec[unlock]==null||s.spec[unlock]>=count))add((classInfo.skills.find(x=>x.id===id)?.name||id)+': choose a specialization at Lv. '+unlock+'.','info');
 }
 if(v.wingId){const w=c.wings.find(x=>x.id===v.wingId);if(!w)add('Saved wings are not in this catalog.');else if(w.faction!==v.faction)add('Selected wings belong to a different faction.');}
 if(v.petId){const p=c.pets.find(x=>x.id===v.petId);if(!p)add('Saved pet is not in this catalog.');else if(petLevels(p).length&&!petLevels(p).includes(v.petLevel))add('No pet stats are recorded at Lv. '+v.petLevel+'.');}
 v.arcana.forEach((id,i)=>{if(!id)return;const card=c.arcana.find(x=>x.id===id);if(!card||card.region!==v.region)add('Arcana slot '+(i+1)+': unavailable for this region.');});
 for(const [board,path] of Object.entries(v.paths)){
  const nodes=boardNodes(v,c,board),map=new Map(nodes.map(n=>[n.id,n]));
  if(path.some(id=>!map.has(id)))add(board+': some saved nodes are not in the current board.');
  const cost=nodes.filter(n=>path.includes(n.id)).reduce((n,x)=>n+x.cost,0);
  if(v.budgets[board]>0&&cost>v.budgets[board])add(board+': current route is '+(cost-v.budgets[board])+' over your planning budget.');
 }
 return notes;
}
export function compareSystems(a,b,c){
 const rows=[],add=(system,label,first,second)=>{if(first!==second)rows.push({system,label,a:first||'None',b:second||'None'});};
 for(const [key,label] of [['classSlug','Class'],['region','Region'],['faction','Faction'],['level','Planned level'],['goal','Goal']])add('Character',label,String(a[key]),String(b[key]));
 const name=(collection,id)=>collection.find(x=>x.id===id)?.name||(id?'Unavailable · '+id:'None');
 for(const slot of SLOTS){
  const first=selectedItem(a,slot,c),second=selectedItem(b,slot,c);
  add('Equipment',slot.label,first?.name||'Empty',second?.name||'Empty');
  add('Equipment',slot.label+' · enhancement target',a.gear[slot.id]?'+'+(a.gear[slot.id].enchant||0):'',b.gear[slot.id]?'+'+(b.gear[slot.id].enchant||0):'');
  add('Equipment',slot.label+' · potential target',a.gear[slot.id]?.potential||'',b.gear[slot.id]?.potential||'');
  add('Equipment',slot.label+' · substat targets',a.gear[slot.id]?.substats||'',b.gear[slot.id]?.substats||'');
  add('Equipment',slot.label+' · Philosopher Stone',a.gear[slot.id]?.philosopherStone||'',b.gear[slot.id]?.philosopherStone||'');
  add('Equipment',slot.label+' · Magicstones',a.gear[slot.id]?.magicstones||'',b.gear[slot.id]?.magicstones||'');
  add('Equipment',slot.label+' · planning note',a.gear[slot.id]?.note||'',b.gear[slot.id]?.note||'');
 }
 const skillList=c.classes.flatMap(x=>x.skills||[]);
 for(const id of new Set([...Object.keys(a.skills),...Object.keys(b.skills)])){
  const skill=name(skillList,id);add('Skills',skill,a.skills[id]?'Lv. '+a.skills[id].level:'Not selected',b.skills[id]?'Lv. '+b.skills[id].level:'Not selected');
  for(const level of new Set([...Object.keys(a.skills[id]?.spec||{}),...Object.keys(b.skills[id]?.spec||{})])){
   const option=s=>s?.spec[level]==null?'Not chosen':'Option '+(s.spec[level]+1)+(Number(level)>s.level?' (locked)':'');
   add('Skills',skill+' · Lv. '+level,option(a.skills[id]),option(b.skills[id]));
  }
 }
 add('Collections','Wings',name(c.wings,a.wingId),name(c.wings,b.wingId));
 add('Collections','Pet',name(c.pets,a.petId)+(a.petId?' · Lv. '+a.petLevel:''),name(c.pets,b.petId)+(b.petId?' · Lv. '+b.petLevel:''));
 for(let i=0;i<10;i++)add('Collections','Arcana '+(i+1),name(c.arcana,a.arcana[i]),name(c.arcana,b.arcana[i]));
 for(const board of new Set([...Object.keys(a.paths),...Object.keys(b.paths)])){
  const x=[...(a.paths[board]||[])].sort(),y=[...(b.paths[board]||[])].sort();
  if(JSON.stringify(x)!==JSON.stringify(y)){const describe=(v,p,other)=>{const nodes=boardNodes(v,c,board);const changed=p.filter(id=>!other.includes(id)).map(id=>{const n=nodes.find(n=>n.id===id);return (n?.label||'Unavailable node')+' ['+id+']';});return p.length+' nodes · cost '+nodes.filter(n=>p.includes(n.id)).reduce((s,n)=>s+n.cost,0)+(changed.length?' · Unique nodes: '+changed.join('; '):'');};rows.push({system:'Daevanion',label:board,a:describe(a,x,y),b:describe(b,y,x)});}
  add('Daevanion',board+' · planning budget',a.budgets[board]?String(a.budgets[board]):'Unlimited',b.budgets[board]?String(b.budgets[board]):'Unlimited');
 }
 add('Guide','Opening sequence',a.rotation.map(id=>name(skillList,id)).join(' → '),b.rotation.map(id=>name(skillList,id)).join(' → '));
 if(a.notes!==b.notes)rows.push({system:'Guide',label:'Build notes',a:a.notes?'Notes saved ('+a.notes.length+' characters)':'No notes',b:b.notes?'Notes saved ('+b.notes.length+' characters)':'No notes'});
 return rows;
}
