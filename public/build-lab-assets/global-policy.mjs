/** Global-only policy for the isolated Build Lab. Never relabel regional records. */
export const GLOBAL = 'GLOBAL';
export const GLOBAL_EQUIPMENT_GRADE = 'Unique';
export const GLOBAL_EQUIPMENT_COLOR = 'Yellow';
export function globalEquipmentEligible(item) {return item?.region === GLOBAL && (item?.grade === GLOBAL_EQUIPMENT_GRADE || (item?.category === 'Rune' && item?.grade === 'Special'));}
export const STORAGE = 'daevexus.build-lab.global.workspace.v1';
export const LIBRARY = 'daevexus.build-lab.global.library.v1';
export const MIGRATED = 'daevexus.build-lab.global.migrated.v1';
export function requireGlobal(input) {
  if (!input || !Array.isArray(input.variants)) throw new Error('This is not a Build Creator Lab file.');
  if (input.variants.some(v => !v || (v.region != null && v.region !== '' && v.region !== GLOBAL))) {
    throw new Error('This creator is Global-only. Builds containing another region cannot be opened; your current build is unchanged.');
  }
  return input;
}
export function globalCatalog(catalog) {
  const filtered = {...catalog, region: GLOBAL};
  filtered.equipment = (Array.isArray(catalog.equipment) ? catalog.equipment : []).filter(globalEquipmentEligible);
  for (const key of ['wings', 'pets', 'arcana']) {
    filtered[key] = (Array.isArray(catalog[key]) ? catalog[key] : []).filter(item => item.region === GLOBAL);
  }
  return filtered;
}
/** Copy supported variants to separate Global storage; original drafts stay byte-for-byte intact. */
export function migrateGlobalStorage(storage, normalize, legacy, makeId) {
  if (storage.getItem(MIGRATED)) return {copied: 0, protected: 0};
  const report = {copied: 0, protected: 0};
  const copy = raw => {
    if (!raw || !Array.isArray(raw.variants)) {report.protected++; return null;}
    const variants = raw.variants.filter(v => v && (v.region == null || v.region === '' || v.region === GLOBAL));
    if (variants.length !== raw.variants.length) report.protected++;
    if (!variants.length) return null;
    const candidate = {...raw, variants};
    if (variants.length !== raw.variants.length) candidate.id = makeId();
    if (!variants.some(v => v.id === candidate.activeId)) candidate.activeId = variants[0].id;
    try {return normalize(requireGlobal(candidate));} catch {report.protected++; return null;}
  };
  const read = key => {
    const raw = storage.getItem(key);
    if (!raw) return null;
    try {return JSON.parse(raw);} catch {report.protected++; return null;}
  };
  if (storage.getItem(STORAGE) === null) {
    const old = read(legacy.workspace);
    if (old) {const doc = copy(old); if (doc) {storage.setItem(STORAGE, JSON.stringify(doc)); report.copied++;}}
  }
  if (storage.getItem(LIBRARY) === null) {
    const old = read(legacy.library);
    if (Array.isArray(old)) {
      const docs = old.map(copy).filter(Boolean);
      storage.setItem(LIBRARY, JSON.stringify(docs)); report.copied += docs.length;
    } else if (old) report.protected++;
  }
  storage.setItem(MIGRATED, JSON.stringify(report));
  return report;
}
