/* RL-80 offline support: keeps a copy of the app on the phone.
   Online it always fetches the latest version first (and refreshes the copy); offline it uses the copy. */
const CACHE='rl80-v2';
const CORE=['./','index.html','sounds.js','manifest.webmanifest','fonts/fonts.css',
  'fonts/BarlowCondensed-500.woff2','fonts/BarlowCondensed-600.woff2','fonts/BarlowCondensed-700.woff2',
  'fonts/Michroma-400.woff2','fonts/ShareTechMono-400.woff2',
  'icons/apple-touch-icon.png','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  const fromCache=()=>caches.match(r,{ignoreSearch:true}).then(m=>m||(r.mode==='navigate'?caches.match('index.html'):undefined));
  const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res});
  // wait up to 4 s for the network, then fall back to the saved copy
  e.respondWith(Promise.race([net,new Promise(res=>setTimeout(()=>fromCache().then(m=>m&&res(m)),4000))]).catch(()=>fromCache()));
});
