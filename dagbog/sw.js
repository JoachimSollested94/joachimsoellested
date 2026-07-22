/* Smertedagbog er flyttet til ../mindag/ — denne service worker rydder op efter sig selv. */
const CACHE = 'smertedagbog-v2-redirect';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  /* altid netværk — så videresendelsen til Min dag slår igennem */
});
