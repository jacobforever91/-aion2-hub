// Standalone Global-only document; never changes the existing site's layout or creator.
export const dynamic = 'force-static';
export function GET() {
  return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#0b1017">
<title>Global Build Creator Lab · DAEVEXUS</title>
<link rel="stylesheet" href="/build-lab-assets/lab-review.css?v=2">
<link rel="stylesheet" href="/build-lab-assets/lab-global.css?v=1">
<style>button{justify-content:center}</style>
<script type="importmap">{"imports":{"/build-lab-assets/model.mjs":"/build-lab-assets/global-model.mjs?v=1"}}</script>
</head><body>
<div id="app"><div class="boot"><span class="crest">✦</span><h1>Build Creator Lab</h1><p>Loading the Global reference catalog…</p></div></div>
<div id="toast" role="status" aria-live="polite"></div>
<dialog id="dialog" aria-label="Build editor dialog"></dialog>
<input id="import-file" type="file" accept="application/json,.json" hidden>
<noscript>This interactive planner needs JavaScript. The existing website is unchanged.</noscript>
<script type="module" src="/build-lab-assets/global-entry.mjs?v=1"></script>
</body></html>`, {headers:{'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'}});
}
