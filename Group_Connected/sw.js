const CACHE_NAME = 'vpop-cache-v1';

// Step 1: Install and save the core app interface layout to the device storage
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['/']))
  );
});

// Step 2: Actively fetch assets from storage first to keep the app lightning fast
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
