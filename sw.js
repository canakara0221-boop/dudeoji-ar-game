// 두더지 잡기 PWA 서비스워커 — 홈 화면 설치 + 기본 오프라인
const CACHE = 'dudeoji-v3';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // 네트워크 우선(AI 모델은 CDN), 실패 시 캐시 폴백
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
