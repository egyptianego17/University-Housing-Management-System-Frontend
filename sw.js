if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>n(e,l),d={module:{uri:l},exports:o,require:u};s[l]=Promise.all(i.map((e=>d[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-CAs8Vgeu.js",revision:null},{url:"assets/App-DJDcaR6S.css",revision:null},{url:"assets/authApi-zIXH8Ve0.js",revision:null},{url:"assets/axiosInstance-CSnntCs6.js",revision:null},{url:"assets/index-BEoW-SDq.js",revision:null},{url:"assets/index-Bg9k8qnj.js",revision:null},{url:"assets/index-Blh0WE8Q.js",revision:null},{url:"assets/index-BLpzKu_V.js",revision:null},{url:"assets/index-BLSsApEu.js",revision:null},{url:"assets/index-Bs93dZD-.js",revision:null},{url:"assets/index-Cc4Gu1iA.js",revision:null},{url:"assets/index-CeWVBrn0.js",revision:null},{url:"assets/index-CPTqdNYY.js",revision:null},{url:"assets/index-CvzAYxhh.js",revision:null},{url:"assets/index-D40EPRDm.js",revision:null},{url:"assets/index-D6JyycUv.js",revision:null},{url:"assets/index-FF-QjwnY.js",revision:null},{url:"assets/index-T1TGGSpt.js",revision:null},{url:"assets/index.esm-BALJrSvn.js",revision:null},{url:"assets/index.esm-CJEesFNS.js",revision:null},{url:"assets/Meta-DvMnM7q8.js",revision:null},{url:"assets/Row-5YC0f4xE.js",revision:null},{url:"assets/workbox-window.prod.es5-B_6ZJHoI.js",revision:null},{url:"index.html",revision:"82f1fed2e05625322a1c6e702cd338c5"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"icon512_maskable.png",revision:"89e111c5105f10bf48ffe8f0967be02b"},{url:"icon512_rounded.png",revision:"eba6ce3a8e388e592b96fd4c9b472907"},{url:"pwa-192x192.png",revision:"4ec0e972eebd6f50b45654109ac73e14"},{url:"pwa-512x512.png",revision:"755745b2eb21bcf9b2fa5bad7b2ef7bd"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"44211e4717763cc670fd67fffeef1676"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"icon512_maskable.png",revision:"89e111c5105f10bf48ffe8f0967be02b"},{url:"icon512_rounded.png",revision:"eba6ce3a8e388e592b96fd4c9b472907"},{url:"manifest.webmanifest",revision:"5f056fe5df33d2dd434e9278de046d4e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
