/* Visbody & Mounjaro Tracker: service worker
 *
 * - Pages: network first (3.5 s timeout) so updates arrive as soon as you're online, falling back to the
 *   cached copy so the app opens instantly with no signal.
 * - Same-origin files (icons, manifest): cached, refreshed in the background.
 * - CDN libraries (Tailwind, Chart.js, Font Awesome): pre-cached on first install and then served from cache.
 *
 * User data lives in IndexedDB / localStorage, never in these caches, so updating the app can't touch it.
 * Bump VERSION when you change this file or the pre-cache lists.
 */
const VERSION = 'v8.1.0';
const SHELL_CACHE = `vmt-shell-${VERSION}`;
const RUNTIME_CACHE = 'vmt-runtime';

const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon-v2.png',
  './apple-touch-icon-167-v2.png',
  './apple-touch-icon-152-v2.png',
  './favicon-32.png'
];

// `cors` must match how index.html requests each file: Tailwind has no crossorigin attribute (no-cors),
// the others do (cors). A response cached under the wrong mode can't be reused.
const CDN_ASSETS = [
  { url: 'https://cdn.tailwindcss.com/3.4.17', cors: false },
  { url: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.js', cors: true },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', cors: true },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2', cors: true },
  // PDF reader for the Visbody import. index.html fetches these with cors, so they are cached the same way.
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', cors: true },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js', cors: true }
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);
    // One missing file must not stop the whole install (addAll rejects if any single file 404s)
    await Promise.allSettled(SHELL_ASSETS.map(u => shell.add(u)));

    const runtime = await caches.open(RUNTIME_CACHE);
    await Promise.allSettled(CDN_ASSETS.map(async ({ url, cors }) => {
      const res = await fetch(url, { mode: cors ? 'cors' : 'no-cors' });
      if (res.ok || res.type === 'opaque') await runtime.put(url, res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('vmt-shell-') && k !== SHELL_CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
  });
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const refresh = fetch(request).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
    return res;
  }).catch(() => null);
  return cached || (await refresh) || Response.error();
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // Page loads
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const res = await withTimeout(fetch(request), 3500);
        if (res.ok) (await caches.open(SHELL_CACHE)).put('./index.html', res.clone());
        return res;
      } catch (err) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, SHELL_CACHE));
    return;
  }

  // CDN libraries and font files
  if (/(^|\.)(cdn\.tailwindcss\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com)$/.test(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
  }
});
