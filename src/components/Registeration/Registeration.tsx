import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { studentRegisteration } from '@/api/auth';
import { RegisterationRequest } from '@/api/auth/types';
import { FaUserAlt } from 'react-icons/fa';
import useTheme from '@/store/theme';
import { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRegister = async (registrationRequest: RegisterationRequest) => {
    try {
      const response = await studentRegisteration(registrationRequest);
      console.log('Registration successful:', response);
      setSuccessMessage('تم التسجيل بنجاح! سيتم توجيهك إلى صفحة تسجيل الدخول.');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };


  const handleClick = () => {
    formik.handleSubmit();
  };
  const formik = useFormik({
    initialValues: {
      password: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      gender: 'MALE',
      birthDate: '',
      mobileNumber: '',
      nationalId: '',
      nationalIdImageUrl: '',
      address: '',
      faculty: '',
      grade: 0,
      lastYearAcademicGrade: 0,
      disability: false,
      studentIdImageUrl: '',
      room: '',
      floor: 0,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'يجب أن تكون كلمة المرور على الأقل 8 أحرف.')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'يجب أن تحتوي كلمة المرور على أحرف وأرقام ورمز خاص.')
        .required('يرجى إدخال كلمة المرور.'),
      firstName: Yup.string().min(3, 'يجب أن يكون الاسم الأول على الأقل 3 أحرف.').max(25, 'يجب ألا يزيد الاسم الأول عن 25 حرفاً.').required('أدخل الاسم الأول.'),
      middleName: Yup.string().min(3, 'يجب أن يكون الاسم الأوسط على الأقل 3 أحرف.').max(25, 'يجب ألا يزيد الاسم الأوسط عن 25 حرفاً.').required('أدخل الاسم الأوسط.'),
      lastName: Yup.string().min(3, 'يجب أن يكون الاسم الأخير على الأقل 3 أحرف.').max(25, 'يجب ألا يزيد الاسم الأخير عن 25 حرفاً.').required('أدخل الاسم الأخير.'),
      email: Yup.string().email('صيغة البريد الإلكتروني غير صحيحة.').required('يرجى إدخال البريد الإلكتروني.'),
      gender: Yup.mixed().oneOf(['MALE', 'FEMALE'], 'يرجى اختيار جنس صحيح.').required('يرجى اختيار الجنس.'),
      birthDate: Yup.date().required('أدخل تاريخ الميلاد.'),
      mobileNumber: Yup.string()
        .matches(/^01[0-2,5][0-9]{8}$/, 'رقم الهاتف غير صالح.')
        .required('أدخل رقم الهاتف.'),
      nationalId: Yup.string().length(14, 'يجب أن يكون الرقم القومي 14 رقماً.').required('أدخل الرقم القومي.'),
      nationalIdImageUrl: Yup.string().url('يرجى إدخال رابط صورة صالح.'),
      address: Yup.string().min(5, 'يجب أن يكون العنوان على الأقل 5 أحرف.').max(100, 'يجب ألا يزيد العنوان عن 100 حرف.').required('أدخل العنوان.'),
      faculty: Yup.string().min(2, 'يجب أن تكون الكلية على الأقل حرفين.').max(25, 'يجب ألا تزيد الكلية عن 25 حرفاً.').required('أدخل الكلية.'),
      grade: Yup.number().min(0, 'يجب ألا يقل التقدير عن 0.').max(100, 'يجب ألا يزيد التقدير عن 100.').required('أدخل التقدير العام.'),
      lastYearAcademicGrade: Yup.number().min(0, 'يجب ألا يقل التقدير عن 0.').max(100, 'يجب ألا يزيد التقدير عن 100.').required('أدخل تقدير السنة السابقة.'),
      disability: Yup.boolean(),
      studentIdImageUrl: Yup.string().url('يرجى إدخال رابط صورة صالح.'),
      room: Yup.string().required('أدخل رقم الغرفة.'),
      floor: Yup.number().min(0, 'يجب ألا يقل رقم الطابق عن 0.').max(10, 'يجب ألا يزيد رقم الطابق عن 10.').required('أدخل رقم الطابق.'),
    }),
    onSubmit: (values) => {
      const gender: 'MALE' | 'FEMALE' = values.gender.toUpperCase() as 'MALE' | 'FEMALE';
      const registrationRequest: RegisterationRequest = {
        ...values,
        gender, 
      };
      console.log('Registration request:', registrationRequest);
      handleRegister(registrationRequest);
    },
  });

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'dark' : ''
      } px-4 bg-gray-100 dark:bg-gray-900 transition-all duration-300 pt-5 pb-5`}
    >
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300">
        <div className="text-center mb-6">
          <FaUserAlt size={40} className="mb-3 text-gray-500 dark:text-gray-200 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">تسجيل حساب جديد</h2>
        </div>
        
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 text-center">
            {successMessage}
          </div>
        )}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">الاسم الأول</label>
            <input
              id="firstName"
              type="text"
              {...formik.getFieldProps('firstName')}
              className={`p-2 rounded border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.firstName && formik.errors.firstName && <span className="text-red-500 text-sm">{formik.errors.firstName}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="middleName" className="text-gray-700 dark:text-gray-300">الاسم الأوسط</label>
            <input
              id="middleName"
              type="text"
              {...formik.getFieldProps('middleName')}
              className={`p-2 rounded border ${formik.touched.middleName && formik.errors.middleName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.middleName && formik.errors.middleName && <span className="text-red-500 text-sm">{formik.errors.middleName}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">الاسم الأخير</label>
            <input
              id="lastName"
              type="text"
              {...formik.getFieldProps('lastName')}
              className={`p-2 rounded border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.lastName && formik.errors.lastName && <span className="text-red-500 text-sm">{formik.errors.lastName}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-300">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className={`p-2 rounded border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.email && formik.errors.email && <span className="text-red-500 text-sm">{formik.errors.email}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-gray-700 dark:text-gray-300">الجنس</label>
            <select
              id="gender"
              {...formik.getFieldProps('gender')}
              className={`p-2 rounded border ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">اختر الجنس</option>
              <option value="MALE">ذكر</option>
              <option value="FEMALE">أنثى</option>
            </select>
            {formik.touched.gender && formik.errors.gender && <span className="text-red-500 text-sm">{formik.errors.gender}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="birthDate" className="text-gray-700 dark:text-gray-300">تاريخ الميلاد</label>
            <input
              id="birthDate"
              type="date"
              {...formik.getFieldProps('birthDate')}
              className={`p-2 rounded border ${formik.touched.birthDate && formik.errors.birthDate ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.birthDate && formik.errors.birthDate && <span className="text-red-500 text-sm">{formik.errors.birthDate}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="mobileNumber" className="text-gray-700 dark:text-gray-300">رقم الهاتف</label>
            <input
              id="mobileNumber"
              type="text"
              {...formik.getFieldProps('mobileNumber')}
              className={`p-2 rounded border ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber && <span className="text-red-500 text-sm">{formik.errors.mobileNumber}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="nationalId" className="text-gray-700 dark:text-gray-300">الرقم القومي</label>
            <input
              id="nationalId"
              type="text"
              {...formik.getFieldProps('nationalId')}
              className={`p-2 rounded border ${formik.touched.nationalId && formik.errors.nationalId ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.nationalId && formik.errors.nationalId && <span className="text-red-500 text-sm">{formik.errors.nationalId}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-gray-700 dark:text-gray-300">العنوان</label>
            <input
              id="address"
              type="text"
              {...formik.getFieldProps('address')}
              className={`p-2 rounded border ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.address && formik.errors.address && <span className="text-red-500 text-sm">{formik.errors.address}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="faculty" className="text-gray-700 dark:text-gray-300">الكلية</label>
            <input
              id="faculty"
              type="text"
              {...formik.getFieldProps('faculty')}
              className={`p-2 rounded border ${formik.touched.faculty && formik.errors.faculty ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.faculty && formik.errors.faculty && <span className="text-red-500 text-sm">{formik.errors.faculty}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="grade" className="text-gray-700 dark:text-gray-300">التقدير العام</label>
            <input
              id="grade"
              type="number"
              {...formik.getFieldProps('grade')}
              className={`p-2 rounded border ${formik.touched.grade && formik.errors.grade ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.grade && formik.errors.grade && <span className="text-red-500 text-sm">{formik.errors.grade}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastYearAcademicGrade" className="text-gray-700 dark:text-gray-300">تقدير السنة السابقة</label>
            <input
              id="lastYearAcademicGrade"
              type="number"
              {...formik.getFieldProps('lastYearAcademicGrade')}
              className={`p-2 rounded border ${formik.touched.lastYearAcademicGrade && formik.errors.lastYearAcademicGrade ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.lastYearAcademicGrade && formik.errors.lastYearAcademicGrade && <span className="text-red-500 text-sm">{formik.errors.lastYearAcademicGrade}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 dark:text-gray-300">كلمة المرور</label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps('password')}
              className={`p-2 rounded border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.password && formik.errors.password && <span className="text-red-500 text-sm">{formik.errors.password}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="disability" className="text-gray-700 dark:text-gray-300">هل لديك إعاقة؟</label>
            <input
              id="disability"
              type="checkbox"
              {...formik.getFieldProps('disability')}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            {formik.touched.disability && formik.errors.disability && <span className="text-red-500 text-sm">{formik.errors.disability}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="room" className="text-gray-700 dark:text-gray-300">رقم الغرفة</label>
            <input
              id="room"
              type="number"
              {...formik.getFieldProps('room')}
              className={`p-2 rounded border ${formik.touched.room && formik.errors.room ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.room && formik.errors.room && <span className="text-red-500 text-sm">{formik.errors.room}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="floor" className="text-gray-700 dark:text-gray-300">رقم الطابق</label>
            <input
              id="floor"
              type="number"
              {...formik.getFieldProps('floor')}
              className={`p-2 rounded border ${formik.touched.floor && formik.errors.floor ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.floor && formik.errors.floor && <span className="text-red-500 text-sm">{formik.errors.floor}</span>}
          </div>
          <button
            type="button" 
            onClick={handleClick} 
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            تسجيل
          </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
