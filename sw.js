  const CACHE_NAME = 'startpage-v1';
  const urlsToCache = [
    './',
    './index.html',
    './static/styles/style.css',
    './static/styles/schemes/dracula-dark.css',
    './static/styles/schemes/dracula-light.css',
    './static/styles/schemes/gruvbox.css',
    './static/styles/schemes/nord.css',
    './static/styles/schemes/catppuccin.css',
    './scripts/get_date.js',
    './scripts/get_search_engine.js',
    './scripts/set_colorscheme.js',
    './static/icons/icon.svg',
    './static/icons/calendar.svg',
    './static/icons/close.svg',
    './static/icons/google-drive.svg',
    './static/icons/settings.svg',
    './static/images/img.webp'
  ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Cache each URL individually so that one failure doesn't break the entire install.
        return Promise.all(
          urlsToCache.map(url =>
            cache.add(url).catch(error => {
              // Log and skip problematic resources to allow partial caching.
              console.error('Failed to cache resource during install:', url, error);
            })
          )
        );
      })
      .catch(error => {
        // Log any unexpected errors during the install caching phase.
        console.error('Service worker install failed during caching step:', error);
      })
      .catch(err => console.error('Service worker installation failed:', err))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(error => {
        console.error('Service worker fetch handler failed:', error);
        return new Response('Service unavailable', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
