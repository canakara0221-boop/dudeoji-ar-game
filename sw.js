// 디버그 중: 캐시 비활성(항상 최신). 옛 캐시 전부 삭제 + 네트워크 전용.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// fetch 핸들러에서 respondWith 안 함 = 브라우저 기본 네트워크 (SW 캐시 안 함)
self.addEventListener('fetch', () => {});
