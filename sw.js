if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>i(e,l),d={module:{uri:l},exports:o,require:u};s[l]=Promise.all(n.map((e=>d[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-DQFLJsTo.css",revision:null},{url:"assets/App-Dzi0qYM0.js",revision:null},{url:"assets/authApi-OITqaPXZ.js",revision:null},{url:"assets/authorization-BlDMQRev.js",revision:null},{url:"assets/Container-bl68IEM2.js",revision:null},{url:"assets/index-1KCgOHEr.js",revision:null},{url:"assets/index-Bqjuuf_D.js",revision:null},{url:"assets/index-ByC_DBTa.js",revision:null},{url:"assets/index-C0FkUug6.js",revision:null},{url:"assets/index-CWQ6nb_I.js",revision:null},{url:"assets/index-D6LXQ_U_.js",revision:null},{url:"assets/index-dexk4Jdr.js",revision:null},{url:"assets/index-Dh0sGkqp.js",revision:null},{url:"assets/index-DLzv6d39.js",revision:null},{url:"assets/index-DqsRmVEp.js",revision:null},{url:"assets/index-Dtt_mTbu.js",revision:null},{url:"assets/index-DU0zR7kQ.js",revision:null},{url:"assets/index-iV9eHA1a.js",revision:null},{url:"assets/index-K7UJ16VZ.js",revision:null},{url:"assets/index-Kjj8c7hR.js",revision:null},{url:"assets/index-o7wBbJme.js",revision:null},{url:"assets/index-pSEUbZAi.js",revision:null},{url:"assets/index.esm-BpmT3UQX.js",revision:null},{url:"assets/index.esm-XpM9U4gk.js",revision:null},{url:"assets/Meta-BWRPJZOc.js",revision:null},{url:"assets/Row-CySPXppY.js",revision:null},{url:"assets/Sidebar-Bw-eZ0B8.js",revision:null},{url:"assets/workbox-window.prod.es5-B_6ZJHoI.js",revision:null},{url:"index.html",revision:"1bf0245cb15e64737f984ab55ce6be5a"},{url:"apple-touch-icon-180x180.png",revision:"60c68e21a74bbe86e04b320685af1d0d"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"icon512_maskable.png",revision:"89e111c5105f10bf48ffe8f0967be02b"},{url:"icon512_rounded.png",revision:"eba6ce3a8e388e592b96fd4c9b472907"},{url:"maskable-icon-512x512.png",revision:"53d9702d39000996d1d23c75244f3325"},{url:"pwa-192x192.png",revision:"4ec0e972eebd6f50b45654109ac73e14"},{url:"pwa-512x512.png",revision:"755745b2eb21bcf9b2fa5bad7b2ef7bd"},{url:"pwa-64x64.png",revision:"d03ba53ad29459dadf008ae24c7aa396"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"qr-code.png",revision:"5335637c4502b41b13650bac44ea3a6c"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"44211e4717763cc670fd67fffeef1676"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"icon512_maskable.png",revision:"89e111c5105f10bf48ffe8f0967be02b"},{url:"icon512_rounded.png",revision:"eba6ce3a8e388e592b96fd4c9b472907"},{url:"manifest.webmanifest",revision:"5f056fe5df33d2dd434e9278de046d4e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));