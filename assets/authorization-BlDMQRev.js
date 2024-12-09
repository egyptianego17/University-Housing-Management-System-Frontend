import{c as a}from"./authApi-OITqaPXZ.js";async function s(t){if(!localStorage.getItem("token"))return!1;const{status:e,role:o}=await a();return e==="Token is valid"&&o===t}export{s as a};
