const CacheName = "Cache:v1";

self.addEventListener("install", (event) => {
  console.log("ServiceWorker install;", event);
});

self.addEventListener("activate", (event) => {
  console.log("ServiceWorker activate;", event);
});

const networkFailingBackToCache = async (request) => {
  const cache = await caches.open(CacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (err) {
    console.log(err);
    return cache.match(request);
  }
};

self.addEventListener("fetch", (event) => {
  console.log("fetch to;", event.request.url);
  event.respondWith(networkFailingBackToCache(event.request));
});
