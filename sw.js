self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('tilemap-editor-store').then((cache) => cache.addAll([
      '/index.html',
      '/src/tilemap-editor.js',
      '/src/styles.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
