if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const d=e=>i(e,l),u={module:{uri:l},exports:o,require:d};s[l]=Promise.all(n.map((e=>u[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-CFFtMwWK.js",revision:null},{url:"assets/App-DJDcaR6S.css",revision:null},{url:"assets/authApi-zIXH8Ve0.js",revision:null},{url:"assets/axiosInstance-CSnntCs6.js",revision:null},{url:"assets/index-_0MCU0Ez.js",revision:null},{url:"assets/index-B1kilaVt.js",revision:null},{url:"assets/index-B1Zr0_JA.js",revision:null},{url:"assets/index-BI6KM0mc.js",revision:null},{url:"assets/index-C4h7QJL_.js",revision:null},{url:"assets/index-CD1UIBn6.js",revision:null},{url:"assets/index-CFtkpiB8.js",revision:null},{url:"assets/index-CiCowP5D.js",revision:null},{url:"assets/index-CsnrBmE6.js",revision:null},{url:"assets/index-D9tR-Smo.js",revision:null},{url:"assets/index-DErGWjQw.js",revision:null},{url:"assets/index-DJ4oj_YV.js",revision:null},{url:"assets/index-HbMOuMg-.js",revision:null},{url:"assets/index-nMrJRqiL.js",revision:null},{url:"assets/index.esm-DIbkBIAo.js",revision:null},{url:"assets/index.esm-Pg1TZG9d.js",revision:null},{url:"assets/Meta-DoBx1Fln.js",revision:null},{url:"assets/Row-rkit50yV.js",revision:null},{url:"assets/workbox-window.prod.es5-B_6ZJHoI.js",revision:null},{url:"index.html",revision:"34f7e223fd53331d64223dee66f35c4b"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"icon512_maskable.png",revision:"89e111c5105f10bf48ffe8f0967be02b"},{url:"icon512_rounded.png",revision:"eba6ce3a8e388e592b96fd4c9b472907"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"icon512_maskable.png",revision:"89e111c5105f10bf48ffe8f0967be02b"},{url:"icon512_rounded.png",revision:"eba6ce3a8e388e592b96fd4c9b472907"},{url:"manifest.webmanifest",revision:"cc6892919d10f1e57d87574ad4b25e6b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
