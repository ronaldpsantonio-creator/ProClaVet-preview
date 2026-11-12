const C="vetanatomy-v3";
const CORE=["./","index.html","css/styles.css","js/app.js","data/equino.json","manifest.webmanifest"];
self.addEventListener("install",e=>{
 e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
 e.waitUntil(caches.keys()
  .then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))
  .then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET"||new URL(e.request.url).origin!==self.location.origin)return;
 const u=new URL(e.request.url);
 const fresh=["/data/equino.json","/js/app.js","/index.html"].some(p=>u.pathname.endsWith(p));
 e.respondWith(caches.open(C).then(async c=>{
  const hit=await c.match(e.request);
  if(fresh){
   try{
    const r=await fetch(e.request,{cache:"no-store"});
    if(r.ok)c.put(e.request,r.clone());
    return r;
   }catch(err){if(hit)return hit;throw err;}
  }
  if(hit)return hit;
  const r=await fetch(e.request);
  if(r.ok||r.type==="opaque")c.put(e.request,r.clone());
  return r;
 }));
});