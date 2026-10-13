const CACHE = 'floatsting-v13-flexible-forms';
const ASSETS = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './icon.svg',
  './manifest.json',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './art/gale.webp',
  './art/fang.webp',
  './art/ember.webp',
  './art/tide.webp',
  './art/volt.webp',
  './art/granite.webp',
  './art/still.webp',
  './fonts/fonts.css',
  './fonts/dela.woff2',
  './fonts/hanken-400.woff2',
  './fonts/hanken-500.woff2',
  './fonts/hanken-600.woff2',
  './fonts/hanken-700.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.startsWith('floatsting-') && k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Cache-first for the complete offline app and its local artwork and fonts.
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) {
          try { c.put(req, copy); } catch (err) {}
        });
        return res;
      }).catch(function () { return cached; });
    })
  );
});
