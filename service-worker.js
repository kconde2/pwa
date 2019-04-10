console.info("Service Worker launched");

// install and add to cache all wanted files
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/data/spacex.json',
                '/index.html',
                '/js/app.js',
                '/js/components/card/card.js',
                '/js/components/card/card.css',
            ]);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.method == 'GET') {
        event.respondWith(
            caches.match(event.request).then(function(resp){
                return resp || fetch(event.request).then(function(response){
                    let responseClone = response.clone();
                    caches.open('v1').then(function(cache) {
                        cache.put(event.request, responseClone);
                    })

                    return response;
                });
            }).catch(function(){
                return caches.match('/index.html');
            })
        );
    }
});
