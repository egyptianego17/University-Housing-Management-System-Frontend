import{e as c,a as g,j as r}from"./index-D8aWpDMp.js";import{u as b,c as N,a,b as p,d as y,e as o,f}from"./index.esm-DHIxz2Hq.js";import{s as j}from"./authApi-zIXH8Ve0.js";import{F}from"./index-BUUJEDmq.js";import{u as k}from"./App-CDwrLgWx.js";import{C as v,R as $}from"./Row-rosHv78N.js";import{C as w}from"./Col-BYUXbEJk.js";import"./index-BJfaFLSw.js";import"./axiosInstance-CSnntCs6.js";const I=()=>{const d=k(),[l]=c(),n=l==="dark",[i,x]=g.useState(null),u=async t=>{try{const s=await j(t);console.log("Registration successful:",s),x("تم التسجيل بنجاح! سيتم توجيهك إلى صفحة تسجيل الدخول."),setTimeout(()=>{d("/login")},2e3)}catch(s){console.error("Error during registration:",s)}},h=()=>{e.handleSubmit()},e=b({initialValues:{password:"",firstName:"",middleName:"",lastName:"",email:"",gender:"MALE",birthDate:"",mobileNumber:"",nationalId:"",nationalIdImageUrl:"",address:"",faculty:"",grade:0,lastYearAcademicGrade:0,disability:!1,studentIdImageUrl:"",room:"",floor:0},validationSchema:N({password:a().min(8,"يجب أن تكون كلمة المرور على الأقل 8 أحرف.").matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,"يجب أن تحتوي كلمة المرور على أحرف وأرقام ورمز خاص.").required("يرجى إدخال كلمة المرور."),firstName:a().min(3,"يجب أن يكون الاسم الأول على الأقل 3 أحرف.").max(25,"يجب ألا يزيد الاسم الأول عن 25 حرفاً.").required("أدخل الاسم الأول."),middleName:a().min(3,"يجب أن يكون الاسم الأوسط على الأقل 3 أحرف.").max(25,"يجب ألا يزيد الاسم الأوسط عن 25 حرفاً.").required("أدخل الاسم الأوسط."),lastName:a().min(3,"يجب أن يكون الاسم الأخير على الأقل 3 أحرف.").max(25,"يجب ألا يزيد الاسم الأخير عن 25 حرفاً.").required("أدخل الاسم الأخير."),email:a().email("صيغة البريد الإلكتروني غير صحيحة.").required("يرجى إدخال البريد الإلكتروني."),gender:p().oneOf(["MALE","FEMALE"],"يرجى اختيار جنس صحيح.").required("يرجى اختيار الجنس."),birthDate:y().required("أدخل تاريخ الميلاد."),mobileNumber:a().matches(/^01[0-2,5][0-9]{8}$/,"رقم الهاتف غير صالح.").required("أدخل رقم الهاتف."),nationalId:a().length(14,"يجب أن يكون الرقم القومي 14 رقماً.").required("أدخل الرقم القومي."),nationalIdImageUrl:a().url("يرجى إدخال رابط صورة صالح."),address:a().min(5,"يجب أن يكون العنوان على الأقل 5 أحرف.").max(100,"يجب ألا يزيد العنوان عن 100 حرف.").required("أدخل العنوان."),faculty:a().min(2,"يجب أن تكون الكلية على الأقل حرفين.").max(25,"يجب ألا تزيد الكلية عن 25 حرفاً.").required("أدخل الكلية."),grade:o().min(0,"يجب ألا يقل التقدير عن 0.").max(100,"يجب ألا يزيد التقدير عن 100.").required("أدخل التقدير العام."),lastYearAcademicGrade:o().min(0,"يجب ألا يقل التقدير عن 0.").max(100,"يجب ألا يزيد التقدير عن 100.").required("أدخل تقدير السنة السابقة."),disability:f(),studentIdImageUrl:a().url("يرجى إدخال رابط صورة صالح."),room:a().required("أدخل رقم الغرفة."),floor:o().min(0,"يجب ألا يقل رقم الطابق عن 0.").max(10,"يجب ألا يزيد رقم الطابق عن 10.").required("أدخل رقم الطابق.")}),onSubmit:t=>{const s=t.gender.toUpperCase(),m={...t,gender:s};console.log("Registration request:",m),u(m)}});return r.jsx("div",{dir:"rtl",className:`min-h-screen flex items-center justify-center ${n?"dark":""} px-4 bg-gray-100 dark:bg-gray-900 transition-all duration-300 pt-5 pb-5`,children:r.jsxs("div",{className:"p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx(F,{size:40,className:"mb-3 text-gray-500 dark:text-gray-200 mx-auto"}),r.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"تسجيل حساب جديد"})]}),i&&r.jsx("div",{className:"bg-green-100 text-green-800 p-4 rounded-lg mb-4 text-center",children:i}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"firstName",className:"text-gray-700 dark:text-gray-300",children:"الاسم الأول"}),r.jsx("input",{id:"firstName",type:"text",...e.getFieldProps("firstName"),className:`p-2 rounded border ${e.touched.firstName&&e.errors.firstName?"border-red-500":"border-gray-300"}`}),e.touched.firstName&&e.errors.firstName&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.firstName})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"middleName",className:"text-gray-700 dark:text-gray-300",children:"الاسم الأوسط"}),r.jsx("input",{id:"middleName",type:"text",...e.getFieldProps("middleName"),className:`p-2 rounded border ${e.touched.middleName&&e.errors.middleName?"border-red-500":"border-gray-300"}`}),e.touched.middleName&&e.errors.middleName&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.middleName})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"lastName",className:"text-gray-700 dark:text-gray-300",children:"الاسم الأخير"}),r.jsx("input",{id:"lastName",type:"text",...e.getFieldProps("lastName"),className:`p-2 rounded border ${e.touched.lastName&&e.errors.lastName?"border-red-500":"border-gray-300"}`}),e.touched.lastName&&e.errors.lastName&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.lastName})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"email",className:"text-gray-700 dark:text-gray-300",children:"البريد الإلكتروني"}),r.jsx("input",{id:"email",type:"email",...e.getFieldProps("email"),className:`p-2 rounded border ${e.touched.email&&e.errors.email?"border-red-500":"border-gray-300"}`}),e.touched.email&&e.errors.email&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.email})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"gender",className:"text-gray-700 dark:text-gray-300",children:"الجنس"}),r.jsxs("select",{id:"gender",...e.getFieldProps("gender"),className:`p-2 rounded border ${e.touched.gender&&e.errors.gender?"border-red-500":"border-gray-300"}`,children:[r.jsx("option",{value:"",children:"اختر الجنس"}),r.jsx("option",{value:"MALE",children:"ذكر"}),r.jsx("option",{value:"FEMALE",children:"أنثى"})]}),e.touched.gender&&e.errors.gender&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.gender})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"birthDate",className:"text-gray-700 dark:text-gray-300",children:"تاريخ الميلاد"}),r.jsx("input",{id:"birthDate",type:"date",...e.getFieldProps("birthDate"),className:`p-2 rounded border ${e.touched.birthDate&&e.errors.birthDate?"border-red-500":"border-gray-300"}`}),e.touched.birthDate&&e.errors.birthDate&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.birthDate})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"mobileNumber",className:"text-gray-700 dark:text-gray-300",children:"رقم الهاتف"}),r.jsx("input",{id:"mobileNumber",type:"text",...e.getFieldProps("mobileNumber"),className:`p-2 rounded border ${e.touched.mobileNumber&&e.errors.mobileNumber?"border-red-500":"border-gray-300"}`}),e.touched.mobileNumber&&e.errors.mobileNumber&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.mobileNumber})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"nationalId",className:"text-gray-700 dark:text-gray-300",children:"الرقم القومي"}),r.jsx("input",{id:"nationalId",type:"text",...e.getFieldProps("nationalId"),className:`p-2 rounded border ${e.touched.nationalId&&e.errors.nationalId?"border-red-500":"border-gray-300"}`}),e.touched.nationalId&&e.errors.nationalId&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.nationalId})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"address",className:"text-gray-700 dark:text-gray-300",children:"العنوان"}),r.jsx("input",{id:"address",type:"text",...e.getFieldProps("address"),className:`p-2 rounded border ${e.touched.address&&e.errors.address?"border-red-500":"border-gray-300"}`}),e.touched.address&&e.errors.address&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.address})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"faculty",className:"text-gray-700 dark:text-gray-300",children:"الكلية"}),r.jsx("input",{id:"faculty",type:"text",...e.getFieldProps("faculty"),className:`p-2 rounded border ${e.touched.faculty&&e.errors.faculty?"border-red-500":"border-gray-300"}`}),e.touched.faculty&&e.errors.faculty&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.faculty})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"grade",className:"text-gray-700 dark:text-gray-300",children:"التقدير العام"}),r.jsx("input",{id:"grade",type:"number",...e.getFieldProps("grade"),className:`p-2 rounded border ${e.touched.grade&&e.errors.grade?"border-red-500":"border-gray-300"}`}),e.touched.grade&&e.errors.grade&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.grade})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"lastYearAcademicGrade",className:"text-gray-700 dark:text-gray-300",children:"تقدير السنة السابقة"}),r.jsx("input",{id:"lastYearAcademicGrade",type:"number",...e.getFieldProps("lastYearAcademicGrade"),className:`p-2 rounded border ${e.touched.lastYearAcademicGrade&&e.errors.lastYearAcademicGrade?"border-red-500":"border-gray-300"}`}),e.touched.lastYearAcademicGrade&&e.errors.lastYearAcademicGrade&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.lastYearAcademicGrade})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"password",className:"text-gray-700 dark:text-gray-300",children:"كلمة المرور"}),r.jsx("input",{id:"password",type:"password",...e.getFieldProps("password"),className:`p-2 rounded border ${e.touched.password&&e.errors.password?"border-red-500":"border-gray-300"}`}),e.touched.password&&e.errors.password&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.password})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"disability",className:"text-gray-700 dark:text-gray-300",children:"هل لديك إعاقة؟"}),r.jsx("input",{id:"disability",type:"checkbox",...e.getFieldProps("disability"),className:"w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"}),e.touched.disability&&e.errors.disability&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.disability})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"room",className:"text-gray-700 dark:text-gray-300",children:"رقم الغرفة"}),r.jsx("input",{id:"room",type:"number",...e.getFieldProps("room"),className:`p-2 rounded border ${e.touched.room&&e.errors.room?"border-red-500":"border-gray-300"}`}),e.touched.room&&e.errors.room&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.room})]}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("label",{htmlFor:"floor",className:"text-gray-700 dark:text-gray-300",children:"رقم الطابق"}),r.jsx("input",{id:"floor",type:"number",...e.getFieldProps("floor"),className:`p-2 rounded border ${e.touched.floor&&e.errors.floor?"border-red-500":"border-gray-300"}`}),e.touched.floor&&e.errors.floor&&r.jsx("span",{className:"text-red-500 text-sm",children:e.errors.floor})]}),r.jsx("button",{type:"button",onClick:h,className:"w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition",children:"تسجيل"})]})})},C=()=>{const[d]=c(),l=d==="dark";return r.jsx(v,{fluid:!0,className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",background:l?"var(--dark-sea-green)":"var(--mint)"},children:r.jsx($,{className:"w-100",children:r.jsx(w,{xs:12,md:6,lg:4,className:"mx-auto",children:r.jsx(I,{})})})})};export{C as default};
