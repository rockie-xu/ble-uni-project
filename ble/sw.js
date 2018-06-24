var cacheName = 'blue-app';
var filesToCache = [
    '/',
    '/ble/index.html',
    '/ble/styles.css',
    '/ble/icon.png',
    '/ble/info.html',
    '/ble/info.css',
    '/ble/bulb/bulb.html',
    '/ble/bulb/bulb.js',
    '/ble/bulb/styles.css',
    '/ble/bulb/images/icon.png'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] ...update');
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});