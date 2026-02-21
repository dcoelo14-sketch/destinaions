self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("destinations-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "images/icon-192.png",
        "images/icon-512.png",
        "images/gauche.png",
        "images/droite.png",
        "images/2emedroite.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
