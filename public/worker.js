var CACHE_NAME = "pwa-task-manager";
var urlsToCache = ["/", "/completed"];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (!response) {
        return fetch(event.request);
      }
      const date = new Date(response.headers.get("date"));
      // if cached file is older than 6 hours
      if (Date.now() > date.getTime() + 1000 * 60 * 60 * 6) {
        return fetch(event.request);
      }

      return response;
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["pwa-task-manager"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
