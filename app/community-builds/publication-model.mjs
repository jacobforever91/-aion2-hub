/** Publication preparation only. Never writes to either creator's storage. */
export const PREVIEWS_KEY = 'daevexus.community.previews.v1';
export const WORKSPACE_KEY = 'daevexus.build-lab.global.workspace.v1';
export const LIBRARY_KEY = 'daevexus.build-lab.global.library.v1';
export const CLASSES = ['Gladiator','Templar','Assassin','Ranger','Sorcerer','Spiritmaster','Cleric','Chanter'];
export const MODES = ['PvE','PvP','Solo','Support'];
const MAX_DOCUMENT = 262144;
const text = (value, max) => typeof value === 'string' ? value.trim().slice(0,max) : '';
const object = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
export function selectedVariant(doc, id = doc?.activeId) {
  return Array.isArray(doc?.variants) ? doc.variants.find(v => v?.id === id) || doc.variants[0] : null;
}
export function validDocument(doc) {
  try {
    return !!(doc && doc.schema === 1 && typeof doc.id === 'string' && doc.id.length <= 80 &&
      (doc.title == null || typeof doc.title === 'string') && Array.isArray(doc.variants) && doc.variants.length > 0 && doc.variants.length <= 10 &&
      doc.variants.every(v => v && typeof v.id === 'string' && v.id.length <= 80 && typeof v.classSlug === 'string' && (v.name == null || typeof v.name === 'string') && (v.goal == null || typeof v.goal === 'string')) &&
      JSON.stringify(doc).length <= MAX_DOCUMENT);
  } catch { return false; }
}
export function className(variant) {
  return CLASSES.find(name => name.toLowerCase() === variant?.classSlug?.toLowerCase()) || 'Unknown class';
}
export function selectionCounts(variant) {
  const v = object(variant);
  return {
    equipment: Object.values(object(v.gear)).filter(g => typeof g?.id === 'string' && g.id).length,
    skills: Object.keys(object(v.skills)).length,
    collections: Number(!!v.wingId) + Number(!!v.petId) + (Array.isArray(v.arcana) ? v.arcana.filter(Boolean).length : 0),
    nodes: Object.values(object(v.paths)).reduce((n,p) => n + (Array.isArray(p) ? p.length : 0),0),
  };
}
/** Bounded reads; corrupted/full/blocked storage is surfaced and never reset. */
export function readDrafts(storage) {
  const warnings = [], documents = new Map();
  for (const [key,limit,isLibrary] of [[LIBRARY_KEY,MAX_DOCUMENT * 30,true],[WORKSPACE_KEY,MAX_DOCUMENT,false]]) {
    try {
      const raw = storage.getItem(key);
      if (!raw) continue;
      if (raw.length > limit) throw new Error('large');
      const parsed = JSON.parse(raw);
      if (isLibrary && !Array.isArray(parsed)) throw new Error('shape');
      for (const doc of (isLibrary ? parsed.slice(0,30) : [parsed])) {
        if (!validDocument(doc)) { warnings.push('Some local builds could not be read. Their original files were not changed.'); continue; }
        const previous = documents.get(doc.id);
        if (!previous || Number(doc.updatedAt || 0) >= Number(previous.updatedAt || 0)) documents.set(doc.id,doc);
      }
    } catch { warnings.push('Some local builds could not be read. Their original files were not changed.'); }
  }
  return {documents:[...documents.values()].sort((a,b) => Number(b.updatedAt || 0)-Number(a.updatedAt || 0)),warnings:[...new Set(warnings)]};
}
/** Copies just one variant. Free-text private notes never enter a publication preview. */
export function makePreview(doc, fields, now = Date.now()) {
  if (!validDocument(doc)) throw new Error('Select a valid Build Lab draft.');
  const source = selectedVariant(doc,fields.variantId);
  if (!source || source.region !== 'GLOBAL' || className(source) === 'Unknown class') throw new Error('Choose a Global variant with a supported class.');
  const title = text(fields.title,120);
  if (!title) throw new Error('Give the build a name.');
  const mode = MODES.includes(fields.mode) ? fields.mode : 'PvE';
  const variant = {id:source.id,name:text(source.name,120),classSlug:source.classSlug,region:'GLOBAL',faction:source.faction === 'Asmodians' ? 'Asmodians' : 'Elyos',level:source.level,goal:mode,gear:{},skills:JSON.parse(JSON.stringify(object(source.skills))),wingId:text(source.wingId,80),petId:text(source.petId,80),petLevel:source.petLevel,arcana:Array.isArray(source.arcana) ? source.arcana.slice(0,10) : [],paths:JSON.parse(JSON.stringify(object(source.paths))),budgets:JSON.parse(JSON.stringify(object(source.budgets))),notes:'',rotation:[]};
  for (const [slot,gear] of Object.entries(object(source.gear))) {
    if (typeof gear?.id === 'string') variant.gear[slot] = {id:text(gear.id,80),enchant:gear.enchant,note:''};
  }
  const id = globalThis.crypto?.randomUUID?.() || `preview-${now}-${Math.random().toString(36).slice(2)}`;
  return {schema:1,id,sourceId:doc.id,title,description:text(fields.description,3000),mode,className:className(source),region:'GLOBAL',state:'private-preview',verification:'pending',updatedAt:now,
    build:{schema:1,id,title,dataVersion:text(doc.dataVersion,100),activeId:variant.id,variants:[variant],updatedAt:now}};
}
export function readPreviews(storage) {
  const raw = storage.getItem(PREVIEWS_KEY);
  if (!raw) return [];
  if (raw.length > MAX_DOCUMENT * 30) throw new Error('Saved previews are too large. They have not been changed.');
  let data;
  try { data = JSON.parse(raw); } catch { throw new Error('Saved previews could not be read. They have not been changed.'); }
  if (!Array.isArray(data) || data.length > 30 || data.some(x => x?.state !== 'private-preview' || !validDocument(x.build) || typeof x.title !== 'string' || typeof x.id !== 'string' || (x.description != null && typeof x.description !== 'string'))) throw new Error('Saved previews could not be read. They have not been changed.');
  return data;
}
export function savePreview(storage, preview) {
  if (preview?.state !== 'private-preview' || !validDocument(preview.build)) throw new Error('Invalid publication preview.');
  const current = readPreviews(storage);
  const previous = current.find(x => x.id === preview.id || (x.sourceId === preview.sourceId && x.build.activeId === preview.build.activeId));
  if (previous) preview = {...preview,id:previous.id,build:{...preview.build,id:previous.id}};
  if (current.length >= 30 && !previous) throw new Error('This device has 30 previews. Export a backup before preparing more.');
  const next = [preview,...current.filter(x => x.id !== preview.id)];
  storage.setItem(PREVIEWS_KEY,JSON.stringify(next));
  return next;
}
