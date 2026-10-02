/** Pure planner model. Deliberately independent of the existing Build Creator. */
export const STORAGE='daevexus.build-lab.workspace.v1';
export const LIBRARY='daevexus.build-lab.library.v1';
export const VERSION=1;
export const LIMIT=262144;
export const SLOTS=[
 ['mainHand','Weapon','Weapons',null],['offHand','Guard','Weapons',null],
 ['helmet','Helmet','Armor','Helmet'],['shoulders','Pauldrons','Armor','Shoulder'],['chest','Top','Armor','Torso'],['belt','Belt','Armor','Belt'],['pants','Legs','Armor','Pants'],['gloves','Gloves','Armor','Gloves'],['cloak','Cloak','Armor','Cape'],['boots','Shoes','Armor','Boots'],
 ['earring1','Earring 1','Accessories','Earring'],['earring2','Earring 2','Accessories','Earring'],['necklace','Necklace','Accessories','Necklace'],['amulet','Amulet','Accessories','Amulet'],['bracelet','Bracelet 1','Accessories','Bracelet'],['bracelet2','Bracelet 2','Accessories','Bracelet'],['ring1','Ring 1','Accessories','Ring'],['ring2','Ring 2','Accessories','Ring'],['rune1','Rune 1','Accessories','Rune'],['rune2','Rune 2','Accessories','Rune'],
 // Retained only for backward compatibility with old KR/TW Lab drafts.
 ['brooch','Brooch','Accessories','Brooch']
].map(([id,label,family,slot])=>({id,label,family,slot}));
const globalHiddenSlots=new Set(['brooch']);
const krTwHiddenSlots=new Set(['amulet','bracelet2','rune1','rune2']);
const slotAliases={Torso:['torso','breastplate','chest'],Shoulder:['shoulder','pauldrons'],Pants:['pants','greaves','leggings'],Cape:['cape','cloak'],Earring:['earring','earrings'],Ring:['ring','rings']};
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const text=(x,n=120)=>typeof x==='string'?x.slice(0,n):'';
const id=x=>/^[\w-]{1,80}$/.test(String(x||''))?String(x):'';
export const uid=()=>globalThis.crypto?.randomUUID?.()||`lab-${Date.now()}-${Math.random().toString(36).slice(2)}`;
export const clone=x=>JSON.parse(JSON.stringify(x));
export const active=d=>d.variants.find(v=>v.id===d.activeId)||d.variants[0];
export function variant(name='Main setup'){return {id:uid(),name,classSlug:'templar',region:'GLOBAL',faction:'Elyos',level:45,goal:'PvE',gear:{},skills:{},wingId:'',petId:'',petLevel:1,arcana:Array(10).fill(''),paths:{},budgets:{},notes:'',rotation:[]};}
export function newDoc(){const v=variant();return {schema:1,id:uid(),title:'Untitled build',dataVersion:'local-reference-2026-09',activeId:v.id,variants:[v],updatedAt:Date.now()};}
export function normalize(input){
 if(!input||input.schema!==1||!Array.isArray(input.variants)||!input.variants.length)throw new Error('This is not a Build Creator Lab file. Existing-creator drafts are kept separate.');
 if(JSON.stringify(input).length>LIMIT)throw new Error('This build is too large to import.');
 const seen=new Set();
 const variants=input.variants.slice(0,10).map(raw=>{const r=obj(raw),v=variant(text(r.name)||'Variant');v.id=id(r.id)||uid();if(seen.has(v.id))v.id=uid();seen.add(v.id);
 for(const k of ['classSlug','wingId','petId'])v[k]=id(r[k])||(k==='classSlug'?'templar':'');
 v.region=r.region==='KR_TW'?'KR_TW':'GLOBAL';v.faction=r.faction==='Asmodians'?'Asmodians':'Elyos';v.goal=['PvE','PvP','Solo','Support'].includes(r.goal)?r.goal:'PvE';
 v.level=Math.max(1,Math.min(100,Number(r.level)||45));v.petLevel=Math.max(1,Math.min(100,Number(r.petLevel)||1));
 for(const slot of SLOTS){const g=obj(obj(r.gear)[slot.id]);if(id(g.id))v.gear[slot.id]={
  id:id(g.id),
  enchant:Math.max(0,Math.min(30,Number(g.enchant)||0)),
  potential:text(g.potential,120),
  substats:text(g.substats,300),
  philosopherStone:text(g.philosopherStone,180),
  magicstones:text(g.magicstones,300),
  note:text(g.note,600)
 };}
 for(const [key,s] of Object.entries(obj(r.skills)).slice(0,80)){if(!/^\d{6,12}$/.test(key))continue;v.skills[key]={level:Math.max(1,Math.min(100,Number(s?.level)||1)),spec:Object.fromEntries(Object.entries(obj(s?.spec)).filter(([t,n])=>/^\d+$/.test(t)&&Number.isInteger(n)&&n>=0&&n<12))};}
 v.arcana=Array.from({length:10},(_,i)=>id(r.arcana?.[i]));
 for(const [board,path] of Object.entries(obj(r.paths)).slice(0,8)){if(!/^[A-Za-z]{1,30}$/.test(board))continue;v.paths[board]=[...new Set((Array.isArray(path)?path:[]).filter(x=>/^\d{1,2},\d{1,2}$/.test(x)))].slice(0,300);}
 for(const [board,n] of Object.entries(obj(r.budgets))){if(/^[A-Za-z]{1,30}$/.test(board))v.budgets[board]=Math.max(0,Math.min(9999,Number(n)||0));}
 v.notes=text(r.notes,12000);v.rotation=(Array.isArray(r.rotation)?r.rotation:[]).filter(x=>v.skills[x]).slice(0,24);return v;
 });
 return {schema:1,id:id(input.id)||uid(),title:text(input.title)||'Untitled build',dataVersion:text(input.dataVersion,100),activeId:variants.some(v=>v.id===input.activeId)?input.activeId:variants[0].id,variants,updatedAt:Date.now()};
}
export function slotsFor(v,c){
 const hidden=v.region==='GLOBAL'?globalHiddenSlots:krTwHiddenSlots;
 return SLOTS.filter(s=>!hidden.has(s.id)&&(s.id!=='offHand'||c.classes.find(x=>x.slug===v.classSlug)?.offTypes?.length));
}
export function compatible(item,slot,v,c){
 if(!item||item.region!==v.region)return false;
 const cl=c.classes.find(x=>x.slug===v.classSlug);if(!cl)return false;
 const category=String(item.category||item.equipType||'').toLowerCase();
 if(slot.family==='Weapons')return (slot.id==='offHand'?cl.offTypes:cl.mainTypes).includes(category);
 const aliases=slotAliases[slot.slot]||[slot.slot?.toLowerCase()];
 if(!aliases.includes(category)&&!aliases.includes(String(item.equipType).toLowerCase()))return false;
 const restriction=String(item.classRestrictions||'').toLowerCase();
 const namedClasses=c.classes.filter(x=>restriction.includes(x.name.toLowerCase()));
 return !namedClasses.length||restriction.includes(cl.name.toLowerCase());
}
export function selectedItem(v,slot,c){const g=v.gear[slot.id];const item=g&&c.equipment.find(i=>i.id===g.id&&i.region===v.region);return compatible(item,slot,v,c)?item:null;}
export function parseValue(raw){
 const s=String(raw??'').replace(/,/g,'').trim();
 const m=s.match(/^([+-]?\d+(?:\.\d+)?)(?:\s*\+\s*([+-]?\d+(?:\.\d+)?))?\s*(%)?$/);if(!m)return null;
 const n=Number(m[1])+Number(m[2]||0);return Number.isFinite(n)&&Math.abs(n)<1e12?{n,unit:m[3]||''}:null;
}
export function summary(v,c){
 const rows=new Map(),excluded=[];let sourceCount=0;
 function add(item,source){if(!item)return;sourceCount++;const stats=item.stats||[];if(!stats.length)excluded.push(source+': no numeric record');
 for(const entry of stats){const label=Array.isArray(entry)?entry[0]:entry.label,raw=Array.isArray(entry)?entry[1]:entry.value;const p=parseValue(raw);if(!p){excluded.push(source+': '+label+' (not a fixed value)');continue;}
 const normalized=({Defense:'Physical Defense',HP:'Max HP',MP:'Max MP'})[label]||label;const key=normalized+'|'+p.unit;
 const row=rows.get(key)||{key,label:normalized,unit:p.unit,value:0,sources:[]};row.value=Number((row.value+p.n).toFixed(4));row.sources.push({name:source,value:p.n});rows.set(key,row);
 }}
 for(const s of slotsFor(v,c)){const item=selectedItem(v,s,c),g=v.gear[s.id];if(item)add(item,s.label+' · '+item.name);else if(g)excluded.push(s.label+': incompatible or unavailable reference');if(g?.enchant)excluded.push(s.label+': enhancement target not calculated');if(g&&[g.potential,g.substats,g.philosopherStone,g.magicstones].some(Boolean))excluded.push(s.label+': potential, substat and stone targets are planning annotations; not calculated');}
 const w=c.wings.find(x=>x.id===v.wingId&&x.faction===v.faction);if(w){if(w.region===v.region)add(w,'Wings · '+w.name);else excluded.push('Wings: KR/TW reference excluded from Global totals');}
 const p=c.pets.find(x=>x.id===v.petId);if(p){if(p.region!==v.region)excluded.push('Pet: KR/TW reference excluded from Global totals');else{const table=p.detail?.baseStats;const row=table?.rows?.find(r=>Number(r[0])===Number(v.petLevel));if(row)add({stats:(table.columns||[]).slice(1).map((label,i)=>({label,value:row[i+1]}))},'Pet · '+p.name);else excluded.push('Pet: no recorded values at this level');}}
 v.arcana.forEach((id,i)=>{const a=c.arcana.find(x=>x.id===id);if(a){if(a.region===v.region)add(a,'Arcana '+(i+1)+' · '+a.name);else excluded.push('Arcana '+(i+1)+': region mismatch');}});
 if(Object.keys(v.skills).length)excluded.push('Skill/passive effects are not included in these flat sums');
 if(Object.values(v.paths).some(a=>a.length))excluded.push('Daevanion node bonuses have no verified amounts; not added');
 return {rows:[...rows.values()].sort((a,b)=>a.label.localeCompare(b.label)),excluded:[...new Set(excluded)],sourceCount};
}
export function differences(a,b){const x=new Map(a.rows.map(r=>[r.key,r])),y=new Map(b.rows.map(r=>[r.key,r]));return [...new Set([...x.keys(),...y.keys()])].map(key=>({key,label:(y.get(key)||x.get(key)).label,unit:(y.get(key)||x.get(key)).unit,a:x.get(key)?.value||0,b:y.get(key)?.value||0,delta:Number(((y.get(key)?.value||0)-(x.get(key)?.value||0)).toFixed(4))}));}
export function boardNodes(v,c,name){const cl=c.classes.find(x=>x.slug===v.classSlug);const key=cl?.name==='Spiritmaster'?'Elementalist':cl?.name;const raw=c.boards[key]?.[name]||c.boards[cl?.name]?.[name]||[];return raw.map(([r,col,label,grade,cost,start])=>({id:r+','+col,r,col,label,grade,cost:Number(cost)||0,start:!!start}));}
const adjacent=(a,b)=>Math.abs(a.r-b.r)+Math.abs(a.col-b.col)===1;
export function toggleNode(nodes,path,target,budget=0){
 const root=nodes.find(n=>n.start),dest=nodes.find(n=>n.id===target);if(!root||!dest||dest.start)return path;
 const map=new Map(nodes.map(n=>[n.id,n]));let selected=new Set(path.filter(id=>map.has(id)&&id!==root.id));
 if(selected.has(target)){
 selected.delete(target);const reachable=new Set([root.id]),todo=[root];while(todo.length){const here=todo.pop();for(const n of nodes)if(selected.has(n.id)&&!reachable.has(n.id)&&adjacent(here,n)){reachable.add(n.id);todo.push(n);}}return [...selected].filter(id=>reachable.has(id));
 }
 // Dijkstra: cheapest orthogonally connected route through the imported board.
 const dist=new Map([[root.id,0]]),prev=new Map(),remaining=new Set(nodes.map(n=>n.id));
 while(remaining.size){let here=null,best=Infinity;for(const id of remaining)if((dist.get(id)??Infinity)<best){best=dist.get(id);here=map.get(id);}if(!here)break;remaining.delete(here.id);if(here.id===target)break;
 for(const n of nodes)if(remaining.has(n.id)&&adjacent(here,n)){const score=best+(selected.has(n.id)?0:n.cost);if(score<(dist.get(n.id)??Infinity)){dist.set(n.id,score);prev.set(n.id,here.id);}}}
 if(!dist.has(target))throw new Error('This node is disconnected in the current reference board.');
 let cursor=target;while(cursor&&cursor!==root.id){selected.add(cursor);cursor=prev.get(cursor);}const cost=[...selected].reduce((n,id)=>n+map.get(id).cost,0);if(budget>0&&cost>budget)throw new Error('This path exceeds your planning budget. Increase the budget or remove nodes first.');return [...selected];
}
export function skillLevels(info){return [...new Set((info?.levels||[]).map(x=>Number(x.level)).filter(n=>Number.isFinite(n)&&n>0))].sort((a,b)=>a-b);}
export function skillView(info,level){const data=info?.levels?.find(x=>Number(x.level)===Number(level));let description=info?.description||'';
 if(info?.descriptionTemplate&&data?.token_values){let missing=false;const draft=info.descriptionTemplate.replace(/\{([^{}]+)\}/g,(_,key)=>{if(data.token_values[key]==null){missing=true;return '';}return String(data.token_values[key]);});if(!missing)description=draft;}
 const rows=[];if(data)for(const [key,label,unit] of [['dmg_min','Min damage',''],['dmg_max','Max damage',''],['heal_min','Min healing',''],['heal_max','Max healing',''],['cooldown','Cooldown',' s'],['casting_time','Casting time',' s'],['cost_mp','MP cost','']]){if(data[key]!=null)rows.push({label,value:data[key]+unit});}
 return {description:description.replace(/\\n/g,'\n'),rows,known:!!data};
}
export async function shareCode(doc){const raw=new TextEncoder().encode(JSON.stringify(normalize(doc)));if(raw.length>LIMIT)throw new Error('Build too large; export a JSON file instead.');let bytes=raw,prefix='j.';
 if(typeof CompressionStream!=='undefined'){bytes=new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());prefix='z.';}
 let str='';for(const b of bytes)str+=String.fromCharCode(b);return prefix+btoa(str).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
}
export async function readShare(code){if(code.length>LIMIT*2)throw new Error('Share link is too large.');const prefix=code.slice(0,2);if(!['j.','z.'].includes(prefix))throw new Error('Unrecognized share format.');const s=atob(code.slice(2).replaceAll('-','+').replaceAll('_','/'));let bytes=Uint8Array.from(s,c=>c.charCodeAt(0));
 if(prefix==='z.'){if(typeof DecompressionStream==='undefined')throw new Error('This browser cannot open compressed links. Use a JSON export instead.');const reader=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')).getReader();const chunks=[];let size=0;try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>LIMIT)throw new Error('Decompressed build exceeds the import limit.');chunks.push(value);}}finally{await reader.cancel().catch(()=>{});}bytes=new Uint8Array(size);let at=0;for(const c of chunks){bytes.set(c,at);at+=c.length;}}
 if(bytes.length>LIMIT)throw new Error('Build exceeds the import limit.');return normalize(JSON.parse(new TextDecoder().decode(bytes)));
}
