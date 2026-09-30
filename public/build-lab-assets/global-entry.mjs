import {normalize, uid} from './global-model.mjs?v=1';
import {migrateGlobalStorage} from './global-policy.mjs?v=1';

// Global keys keep all pre-existing regional work safe, including mixed-region libraries.
try {
  migrateGlobalStorage(localStorage, normalize, {
    workspace: 'daevexus.build-lab.workspace.v1',
    library: 'daevexus.build-lab.library.v1'
  }, uid);
} catch {
  // Storage may be blocked or full; the existing UI still supports exporting new work.
}

// Remove the retired control whenever the reusable reviewed template re-renders.
// CSS suppresses it before the observer runs, so it never flashes or takes up space.
const app = document.getElementById('app');
const dialog = document.getElementById('dialog');
function applyGlobalUI() {
  app.querySelectorAll('[data-field="region"]').forEach(node => (node.closest('label') || node).remove());
  if (dialog.dataset.kind === 'sources') {
    const title = [...dialog.querySelectorAll('.scope h3')].find(node => node.textContent === 'Regional safeguards');
    if (title) {
      title.textContent = 'Global-only catalog';
      const paragraph = title.nextElementSibling;
      if (paragraph?.tagName === 'P') paragraph.textContent = 'This workspace supports Global only. Records from other regions are not offered or added to totals. Missing Global records remain pending. Older regional drafts are preserved separately and are never relabeled as Global.';
    }
  }
  // The current source has no Global wing/pet records. Preserve sections, not foreign values.
  for (const kind of ['wings', 'pets']) {
    const button = app.querySelector(`.collection-actions [data-action="pick"][data-kind="${kind}"]`);
    if (button && document.documentElement.dataset[kind + 'Pending'] === 'true') {
      button.disabled = true;
      button.textContent = 'Global data pending';
      button.title = 'No Global record is available yet. Other-region values are not substituted.';
    }
  }
}
const observer = new MutationObserver(applyGlobalUI);
observer.observe(app, {childList: true});
observer.observe(dialog, {childList: true});
document.addEventListener('change', event => {
  if (event.target?.dataset?.field === 'region') {
    event.stopImmediatePropagation();
    event.target.value = 'GLOBAL';
    applyGlobalUI();
  }
}, true);

// Refresh the same catalog URL before the reviewed UI starts, preventing a cached
// regional response from exposing old options during the Global-only transition.
try {
  const response = await fetch('/build-lab/catalog', {cache: 'reload', signal: AbortSignal.timeout(20000)});
  if (!response.ok) throw new Error('The Global catalog could not be loaded.');
  const catalog = await response.json();
  if (catalog.region !== 'GLOBAL') throw new Error('The Global-only update is still publishing. Please retry.');
  for (const kind of ['wings', 'pets']) document.documentElement.dataset[kind + 'Pending'] = String(!catalog[kind]?.length);
  await import('./lab-review.mjs?v=2-global1');
  applyGlobalUI();
} catch (error) {
  const box = document.createElement('div'); box.className = 'boot';
  const title = document.createElement('h1'); title.textContent = 'Build Creator Lab';
  const message = document.createElement('p'); message.textContent = error.message || 'The Global editor could not be loaded.';
  const retry = document.createElement('button'); retry.textContent = 'Retry Global editor'; retry.className = 'gold'; retry.onclick = () => location.reload();
  box.append(title, message, retry); app.replaceChildren(box);
}
