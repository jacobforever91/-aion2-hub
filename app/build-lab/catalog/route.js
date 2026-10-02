// Read-only Global adapter. Existing catalogs and other pages are never changed.
import {classList,classData,classWeapons,skillIconIds} from '../../classes/classData.js';
import equipment from '../../classes/equipmentData.json';
import weapons from '../../equipment/weaponsData.js';
import armor from '../../equipment/armorData.js';
import chest from '../../equipment/chestData.js';
import moreArmor from '../../equipment/armorMoreData.js';
import jewelry from '../../equipment/jewelryData.js';
import brooch from '../../equipment/broochData.js';
import specialSlotData from '../../equipment/specialSlotData.js';
import progression from '../../progression/catalogData.json';
import arcana from '../../arcana/arcana-data.json';
import pets from '../../progression/petIcons.json';
import boards from '../../builds/daevanion-boards.json';
export const dynamic='force-static';
const aliases={Longsword:['longsword','sword'],Shield:['shield','guard','guarder'],Guard:['shield','guard','guarder'],Daggers:['dagger'],Dagger:['dagger']};
const types=w=>w?(aliases[w.name]||[w.name.toLowerCase()]):[];
const pairs=rows=>(Array.isArray(rows)?rows:[]).map(r=>Array.isArray(r)?{label:r[0],value:r[1]}:r).filter(r=>r&&r.label&&r.value!=null).map(r=>({label:String(r.label),value:String(r.value)}));
const normalize=x=>({id:String(x.id),name:x.name||String(x.id),region:x.region||'GLOBAL',grade:x.grade||x.rarity||'Common',category:x.category||x.itemType||'',equipType:x.equipType||'',group:x.group||'',itemLevel:x.itemLevel||'',requiredLevel:x.requiredLevel||'',classRestrictions:x.classRestrictions||'',icon:x.icon||((x.group==='Weapon')?`/equipment-icons/${x.id}.webp`:'/equipment-art/armor.webp'),stats:pairs(x.stats),imprints:pairs(x.imprints),upgrades:x.upgrades||'',obtain:x.obtain||[],details:pairs(x.details)});
export function GET(){
 const items=[...new Map([...(equipment.items||[]),...weapons,...armor,...chest,...moreArmor,...jewelry,...brooch,...specialSlotData].map(x=>[`${x.region||'GLOBAL'}:${x.id}`,normalize(x)])).values()].filter(x=>x.region==='GLOBAL');
 const classes=classList.map(c=>{const d=classData[c.slug],w=classWeapons[c.slug],ids=skillIconIds[c.slug]||[];return {slug:c.slug,name:c.name,role:d.role,mainTypes:[...types(w?.main),...(w?.secondary?.kind==='Alternate main weapon'?types(w.secondary):[])],offTypes:w?.secondary?.kind==='Off-hand'?types(w.secondary):[],skills:[...d.active.map((name,i)=>({id:ids[i],name,type:i<13?'active':'stigma'})),...d.passive.map((name,i)=>({id:ids[d.active.length+i],name,type:'passive'}))].filter(s=>s.id).map(s=>({...s,icon:s.id==='18790000'?'https://aion2.app/db-item-icons/ICON_GL_SKILL_Passive_009.webp':`https://aion2hub.com/api/skill-icon/${s.id}`}))};});
 // Wing/pet snapshots were KR/TW-only in the original adapter. Keep them out until
 // a separate Global record is actually supplied; never relabel them as Global.
 const wings=(progression.wings||[]).filter(x=>x.region==='GLOBAL').map(x=>({...x,id:String(x.id),stats:pairs(x.stats)}));
 const companions=(progression.pets||[]).filter(x=>x.region==='GLOBAL').map(x=>({...x,id:String(x.id),detail:x.detail||{},icon:typeof pets[x.id]==='string'?pets[x.id]:(pets[x.id]?.icon||pets[x.id]?.iconUrl||'')}));
 return Response.json({version:'lab-global-1 / local-reference-2026-09',region:'GLOBAL',source:'DAEVEXUS Global community reference snapshots. Not official Global validation.',classes,equipment:items,wings,pets:companions,
 arcana:(arcana.items||[]).map(x=>normalize({...x,region:x.region||arcana.region||'GLOBAL'})).filter(x=>x.region==='GLOBAL'),boards}, {headers:{'Cache-Control':'public, max-age=0, must-revalidate','X-Content-Type-Options':'nosniff'}});
}
