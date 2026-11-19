// ProClaVet - Service Worker de integración (v36)
// Los recursos del atlas y axis se copian sin modificaciones desde ProClaVet/main.
const C="vetanatomy-v39-integracion";
const CORE=[
  "./",
  "index.html",
  "css/styles.css",
  "js/app.js",
  "data/equino.json",
  "data/fichas_miembro_pelviano_1.json",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "assets/laminas/atlas-equino-c1.svg",
  "assets/laminas/axis-equino-c2.svg"
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(C).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith("vetanatomy-")&&k!==C).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;

  const fresh=[
    "/data/equino.json",
    "/data/fichas_miembro_pelviano_1.json",
    "/js/app.js",
    "/index.html"
  ].some(path=>url.pathname.endsWith(path));

  e.respondWith(caches.open(C).then(async cache=>{
    const hit=await cache.match(req);
    if(fresh){
      try{
        const res=await fetch(req,{cache:"no-store"});
        if(res.ok)await cache.put(req,res.clone());
        if(!res.ok&&hit)return hit;
        return res;
      }catch(err){
        if(hit)return hit;
        const fallback=await cache.match("./index.html");
        if(fallback)return fallback;
        throw err;
      }
    }
    if(hit)return hit;
    const res=await fetch(req);
    if(res.ok||res.type==="opaque")await cache.put(req,res.clone());
    return res;
  }));
});
