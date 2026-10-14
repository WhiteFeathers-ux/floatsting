const CACHE = 'floatsting-v23-scenes';
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
  './art/gale-poses.webp',
  './art/fang-poses.webp',
  './art/ember-poses.webp',
  './art/tide-poses.webp',
  './art/volt-poses.webp',
  './art/granite-poses.webp',
  './art/still-poses.webp',
  './art/flash-poses.webp',
  './art/still-sunday-poses.webp',
  './art/tide-pair-poses.webp',
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

// Network-first for the app shell so a deploy shows up on the next open; cache is the offline fallback.
var SHELL = /\/(index\.html|app\.js|app\.css|sw\.js|manifest\.json)?$/;

// Cache-first for the local artwork and fonts.
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (req.mode === 'navigate' || (url.origin === location.origin && SHELL.test(url.pathname))) {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { try { c.put(req, copy); } catch (err) {} });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) { return hit || caches.match('./index.html'); });
      })
    );
    return;
  }
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
