import{a as l,e as c,j as e}from"./index-ILF2lsdH.js";import{a as j}from"./axiosInstance-CSnntCs6.js";import{c as i,a as f,d as h,e as g,f as b,g as v,h as y}from"./index-BP1s7M9D.js";import{H as p,S as N}from"./Sidebar-BI-ASQRW.js";import{C as k,R as w}from"./Row-6L6qyxyA.js";import{C as F}from"./Col-B1RHUx9X.js";import"./index-Bgm1C6Ig.js";import"./App-89X6Ylm9.js";const P=async()=>(await j.get("/student/getMyProfile")).data,S=()=>{const[a,t]=l.useState(null),[n,o]=l.useState(!0),[d,x]=l.useState(null),[m]=c(),u=m==="dark";return l.useEffect(()=>{(async()=>{try{const r=await P();t(r),o(!1)}catch(r){console.error("Error fetching profile data:",r),x("تعذر تحميل البيانات. حاول مرة أخرى."),o(!1)}})().then(r=>r)},[]),n?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"text-lg font-semibold text-gray-700 dark:text-gray-300",children:"جاري تحميل البيانات..."})}):d?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"text-red-600 bg-red-100 p-4 rounded-lg",children:d})}):e.jsx("div",{dir:"rtl",className:`min-h-screen flex items-center justify-center ${u?"dark":""} bg-gray-100 dark:bg-gray-900 transition-all duration-300`,children:e.jsxs("div",{className:"p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx(i,{size:50,className:"mb-3 text-blue-600 dark:text-blue-400 mx-auto"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"الملف الشخصي"})]}),e.jsx("div",{className:"space-y-4",children:a&&e.jsxs(e.Fragment,{children:[e.jsx(s,{icon:e.jsx(i,{}),label:"الاسم الأول",value:a.firstName}),e.jsx(s,{icon:e.jsx(i,{}),label:"الاسم الأوسط",value:a.middleName}),e.jsx(s,{icon:e.jsx(i,{}),label:"اسم العائلة",value:a.lastName}),e.jsx(s,{icon:e.jsx(f,{}),label:"البريد الإلكتروني",value:a.email}),e.jsx(s,{icon:e.jsx(h,{}),label:"رقم الهاتف",value:a.mobileNumber}),e.jsx(s,{icon:e.jsx(g,{}),label:"الرقم القومي",value:a.nationalId}),e.jsx(s,{icon:e.jsx(b,{}),label:"الكلية",value:a.faculty}),e.jsx(s,{icon:e.jsx(v,{}),label:"الغرفة",value:a.room}),e.jsx(s,{icon:e.jsx(y,{}),label:"الطابق",value:a.floor.toString()})]})})]})})},s=({label:a,value:t,icon:n})=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm",children:[e.jsx("div",{className:"text-blue-600 dark:text-blue-400",children:n}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"text-gray-700 dark:text-gray-300 font-semibold",children:[a,":"]}),e.jsx("div",{className:"text-gray-900 dark:text-white",children:t})]})]}),B=()=>{const[a]=c(),t=a==="dark";return e.jsxs(k,{fluid:!0,className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",background:t?"var(--dark-sea-green)":"var(--mint)"},children:[e.jsx(p,{}),e.jsx(N,{}),e.jsx(w,{className:"w-100",children:e.jsx(F,{xs:12,md:6,lg:4,className:"mx-auto",children:e.jsx(S,{})})})]})};export{B as default};
