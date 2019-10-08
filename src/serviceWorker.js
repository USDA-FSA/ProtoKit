self.addEventListener('install', evt => {
  console.log('SW installed');
});

self.addEventListener('activate', evt => {
  console.log('SW activated');
});