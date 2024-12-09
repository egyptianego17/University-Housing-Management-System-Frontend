import{a as r,e as u,j as e}from"./index-1KCgOHEr.js";import{a as g}from"./authApi-OITqaPXZ.js";import{c as d,a as j,d as h,e as v,f as y,g as b,h as N}from"./index-DqsRmVEp.js";import{H as p,S as k}from"./Sidebar-Bw-eZ0B8.js";import{a as w}from"./authorization-BlDMQRev.js";import{u as S}from"./App-Dzi0qYM0.js";import{C as m}from"./Container-bl68IEM2.js";import{R as F,C as P}from"./Row-CySPXppY.js";import"./index-D6LXQ_U_.js";const D=async()=>(await g.get("/student/getMyProfile")).data,E=()=>{const[a,i]=r.useState(null),[n,l]=r.useState(!0),[t,x]=r.useState(null),[c]=u(),f=c==="dark";return r.useEffect(()=>{(async()=>{try{const o=await D();i(o),l(!1)}catch(o){console.error("Error fetching profile data:",o),x("تعذر تحميل البيانات. حاول مرة أخرى."),l(!1)}})().then(o=>o)},[]),n?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"text-lg font-semibold text-gray-700 dark:text-gray-300",children:"جاري تحميل البيانات..."})}):t?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"text-red-600 bg-red-100 p-4 rounded-lg",children:t})}):e.jsx("div",{dir:"rtl",className:`min-h-screen flex items-center justify-center ${f?"dark":""} bg-gray-100 dark:bg-gray-900 transition-all duration-300`,children:e.jsxs("div",{className:"p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx(d,{size:50,className:"mb-3 text-blue-600 dark:text-blue-400 mx-auto"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"الملف الشخصي"})]}),e.jsx("div",{className:"space-y-4",children:a&&e.jsxs(e.Fragment,{children:[e.jsx(s,{icon:e.jsx(d,{}),label:"الاسم الأول",value:a.firstName}),e.jsx(s,{icon:e.jsx(d,{}),label:"الاسم الأوسط",value:a.middleName}),e.jsx(s,{icon:e.jsx(d,{}),label:"اسم العائلة",value:a.lastName}),e.jsx(s,{icon:e.jsx(j,{}),label:"البريد الإلكتروني",value:a.email}),e.jsx(s,{icon:e.jsx(h,{}),label:"رقم الهاتف",value:a.mobileNumber}),e.jsx(s,{icon:e.jsx(v,{}),label:"الرقم القومي",value:a.nationalId}),e.jsx(s,{icon:e.jsx(y,{}),label:"الكلية",value:a.faculty}),e.jsx(s,{icon:e.jsx(b,{}),label:"الغرفة",value:a.room}),e.jsx(s,{icon:e.jsx(N,{}),label:"الطابق",value:a.floor.toString()})]})})]})})},s=({label:a,value:i,icon:n})=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm",children:[e.jsx("div",{className:"text-blue-600 dark:text-blue-400",children:n}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"text-gray-700 dark:text-gray-300 font-semibold",children:[a,":"]}),e.jsx("div",{className:"text-gray-900 dark:text-white",children:i})]})]}),B=()=>{const[a]=u(),[i,n]=r.useState(!0),l=a==="dark",t=S();return r.useEffect(()=>{(async()=>{try{await w("STUDENT")||t("/login")}catch(c){console.error("Token validation failed:",c),t("/login")}})().then(()=>n(!1))},[t]),i?e.jsx(m,{fluid:!0,className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",background:l?"var(--dark-sea-green)":"var(--mint)"},children:e.jsx("div",{children:"Loading..."})}):e.jsxs(m,{fluid:!0,className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",background:l?"var(--dark-sea-green)":"var(--mint)"},children:[e.jsx(p,{}),e.jsx(k,{}),e.jsx(F,{className:"w-100",children:e.jsx(P,{xs:12,md:6,lg:4,className:"mx-auto",children:e.jsx(E,{})})})]})};export{B as default};