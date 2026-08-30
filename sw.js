// =============================================
//   SERVICE WORKER - IBN FAHRESY Trading Academy
// =============================================

const CACHE_NAME = 'ibn-fahresy-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/student-dashboard.html',
  '/student-login.html',
  '/register.html',
  '/payment.html',
  '/trading-tools.html',
  '/signals.html',
  '/mentorship.html',
  '/group-access.html',
  '/about.html',
  '/contact.html',
  '/terms.html',
  '/style.css',
  '/script.js',
  '/images/logo.jpg',
  '/images/fonder.jpg',
  '/images/logo-192x192.png',
  '/images/logo-512x512.png',
  '/google2daedc01f3d058e3.html',
  '/sitemap.xml'
];

// Install Service Worker - Cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('✅ Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate Service Worker - Clean old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch - Serve from cache if available
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});