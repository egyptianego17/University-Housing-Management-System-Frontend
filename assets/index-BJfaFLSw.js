const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BkD8Irnc.js","assets/index-D8aWpDMp.js","assets/index.esm-K17AAc00.js","assets/App-CDwrLgWx.js","assets/App-lHF3S28Z.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const v="modulepreload",w=function(e){return"/"+e},p={},g=function(t,r,s){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.allSettled(r.map(l=>{if(l=w(l),l in p)return;p[l]=!0;const u=l.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":v,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((h,y)=>{c.addEventListener("load",h),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return o.then(n=>{for(const a of n||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function T(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),r}var d={exports:{}};d.exports=m;d.exports.isMobile=m;d.exports.default=m;const O=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,P=/CrOS/,_=/android|ipad|playbook|silk/i;function m(e){e||(e={});let t=e.ua;if(!t&&typeof navigator<"u"&&(t=navigator.userAgent),t&&t.headers&&typeof t.headers["user-agent"]=="string"&&(t=t.headers["user-agent"]),typeof t!="string")return!1;let r=O.test(t)&&!P.test(t)||!!e.tablet&&_.test(t);return!r&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&t.indexOf("Macintosh")!==-1&&t.indexOf("Safari")!==-1&&(r=!0),r}var x=d.exports;const $=E(x),M=$(),L="Nezam",S="auther-email@gmail.com",A={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${S}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},C={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:M?3:4},D={delay:300,minimumLoading:700},N={image:"/cover.png",description:"Starter kit for modern web applications"},z="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function f(){return Math.floor(Math.random()*256)}function R(){const e=f(),t=f(),r=f();return[`rgb(${e}, ${t}, ${r})`,`rgb(${255-e}, ${255-t}, ${255-r})`]}function k(){const[e,t]=R(),r=["font-size: 40px",`color: ${e}`,`border: 1px solid ${t}`,`background-color: ${t}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${L} ===`,r)}Promise.all([g(()=>import("./index-BkD8Irnc.js"),__vite__mapDeps([0,1,2])),g(()=>import("./App-CDwrLgWx.js").then(e=>e.V),__vite__mapDeps([3,1,4]))]).then(([{default:e},{default:t}])=>{e(t)});k();export{g as _,E as a,z as b,j as c,N as d,S as e,T as g,D as l,A as m,C as n,L as t};
