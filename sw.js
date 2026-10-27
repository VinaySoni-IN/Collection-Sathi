/* Collection Sathi service worker
 *
 * Strategy:
 *   - Navigations (the app itself)  : network-first, so a new deploy is picked
 *     up on the next load. Falls back to cache when offline.
 *   - Everything else (icons, fonts, vendor JS): stale-while-revalidate, so
 *     the app opens instantly and still works with no connection.
 *
 * Bump CACHE_VERSION on every release. The activate handler deletes any cache
 * that does not match, which is what stops this worker from serving a stale
 * index.html forever.
 */

const CACHE_VERSION = "v2";
const CACHE_NAME = "collection-sathi-" + CACHE_VERSION;

const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./favicon-64.png",
  "./vendor/html2canvas.min.js"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        // addAll() is atomic: one 404 would skip the whole install, so add
        // each entry individually and tolerate the odd missing asset.
        return Promise.all(PRECACHE.map(function (url) {
          return cache.add(new Request(url, { cache: "reload" })).catch(function () {});
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (key) {
          if (key !== CACHE_NAME) return caches.delete(key);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("message", function (event) {
  if (event.data === "skip-waiting") self.skipWaiting();
});

function isNavigation(request) {
  return request.mode === "navigate" ||
         (request.method === "GET" && request.headers.get("accept") &&
          request.headers.get("accept").indexOf("text/html") !== -1);
}

self.addEventListener("fetch", function (event) {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;   // let the network handle cross-origin

  // ---- navigations: network first, cache as fallback ----
  if (isNavigation(request)) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put("./index.html", copy);
            });
          }
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (cached) {
            return cached || caches.match("./index.html");
          });
        })
    );
    return;
  }

  // ---- assets: stale-while-revalidate ----
  event.respondWith(
    caches.match(request).then(function (cached) {
      const network = fetch(request)
        .then(function (response) {
          if (response && response.status === 200 && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(request, copy);
            });
          }
          return response;
        })
        .catch(function () { return cached; });

      return cached || network;
    })
  );
});
