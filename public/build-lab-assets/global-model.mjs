/** Import-map facade: the reviewed UI remains reusable; this entry is exclusively Global. */
import * as base from './model.mjs?global-base=1';
import {GLOBAL, requireGlobal, globalCatalog} from './global-policy.mjs?v=1';
export * from './model.mjs?global-base=1';
export {STORAGE, LIBRARY} from './global-policy.mjs?v=1';
export function normalize(input) {return base.normalize(requireGlobal(input));}
export async function readShare(code) {
  if (typeof code !== 'string' || code.length > base.LIMIT * 2) throw new Error('Share link is too large.');
  const prefix = code.slice(0, 2);
  if (!['j.', 'z.'].includes(prefix)) throw new Error('Unrecognized share format.');
  const text = atob(code.slice(2).replaceAll('-', '+').replaceAll('_', '/'));
  let bytes = Uint8Array.from(text, c => c.charCodeAt(0));
  if (prefix === 'z.') {
    if (typeof DecompressionStream === 'undefined') throw new Error('Use a JSON export in this browser.');
    const reader = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')).getReader();
    const chunks = []; let size = 0;
    try {
      while (true) {
        const {done, value} = await reader.read(); if (done) break;
        size += value.length;
        if (size > base.LIMIT) throw new Error('Decompressed build exceeds the import limit.');
        chunks.push(value);
      }
    } finally {await reader.cancel().catch(() => {});}
    bytes = new Uint8Array(size); let offset = 0;
    for (const chunk of chunks) {bytes.set(chunk, offset); offset += chunk.length;}
  }
  if (bytes.length > base.LIMIT) throw new Error('Build exceeds the import limit.');
  return normalize(JSON.parse(new TextDecoder().decode(bytes)));
}
export async function shareCode(doc) {return base.shareCode(normalize(doc));}
export function compatible(item, slot, variant, catalog) {
  return variant.region === GLOBAL && item?.region === GLOBAL && base.compatible(item, slot, variant, catalog);
}
export function selectedItem(variant, slot, catalog) {
  return variant.region === GLOBAL ? base.selectedItem(variant, slot, globalCatalog(catalog)) : null;
}
export function summary(variant, catalog) {
  if (variant.region !== GLOBAL) return {rows: [], excluded: ['Only Global builds can contribute to this summary.'], sourceCount: 0};
  return base.summary(variant, globalCatalog(catalog));
}
