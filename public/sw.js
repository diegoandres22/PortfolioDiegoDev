// Este proyecto no usa service worker. Este archivo existe solo para
// desregistrar cualquier service worker viejo que haya quedado activo
// en el navegador de una versión anterior del sitio (evita el 404
// repetido en /sw.js y limpia caches obsoletos).
self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(keys.map((key) => caches.delete(key)));
            await self.registration.unregister();

            const clientsList = await self.clients.matchAll({ type: "window" });
            clientsList.forEach((client) => client.navigate(client.url));
        })()
    );
});
