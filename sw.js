const cacheName = 'portfolio-cache';
const filesToCache = [
  '/',
  'index.html',
  'manifest.json',
  'css/style.css',
  'js/script.js',
  'images/background.jpg',
  'images/icons/favicon48x48.png',
  'images/icons/favicon96x96.png',
  'images/icons/favicon144x144.png',
  'images/icons/favicon192x192.png',
  'images/icons/favicon310x310.png',
  'images/icons/favicon512x512.png'
];

self.addEventListener('install', function(event) {
  // Menyimpan file yang perlu di-cache
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Cache berhasil di-install');
        return cache.addAll(filesToCache).catch(error => {
          console.error('Error adding to cacheeeee', error);
        });
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
