const CACHE_NAME = "gb-collection-v1";

self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

// Basic cache-first strategy so the app also opens if offline,
// and (more importantly) so Chrome recognizes this as an installable PWA.
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        if (response && response.status === 200 && event.request.method === "GET") {
          var responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(function() {
        return cached;
      });
    })
  );
});
