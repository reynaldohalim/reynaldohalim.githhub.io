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
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll(filesToCache)
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request)
              .then(function(res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function(cache) {
                    cache.put(event.request.url, res.clone());
                    return res;
                  })
              })
              .catch(function(err) {
                return caches.open(CACHE_STATIC_NAME)
                  .then(function(cache) {
                    return cache.match('/offline.html');
                  });
              });
          }
        })
    );
  });
