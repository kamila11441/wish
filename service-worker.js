self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let d={title:'someone',body:'Someone is thinking about you 💭',url:'./index.html'};try{if(e.data)d={...d,...e.data.json()}}catch(_){}
e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'./icon-192.png',badge:'./icon-192.png',tag:'wish-ping',data:{url:d.url}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const u=new URL((e.notification.data&&e.notification.data.url)||'./',self.registration.scope).href;
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs)if(c.url.startsWith(self.registration.scope))return c.focus();return self.clients.openWindow(u)}))});
