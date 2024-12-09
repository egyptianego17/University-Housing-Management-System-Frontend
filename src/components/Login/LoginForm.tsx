import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import useTheme from '@/store/theme';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { SignInRequest } from '../../api/auth/types';

const LoginForm: React.FC = () => {
  const [theme] = useTheme();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();

  const formik = useFormik<SignInRequest>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('بريد إلكتروني غير صحيح.').required('ادخل البريد الإلكتروني'),
      password: Yup.string()
        .min(8, 'يجب أن تكون كلمة السر على الأقل 8 حروف.')
        .required('ادخل كلمة السر'),
    }),
    onSubmit: (values) => {
      handleLogin(values.email, values.password);
    },
  });

  const handleLogin = async (email: string, password: string) => {
    setErrorMessage(null);
    try {
      const response = await login({ email, password });
      console.log('Login successful:', response);

      const token = response.token || '';
      const role = response.role || '';

      localStorage.setItem('token', token);
      if (role === 'STUDENT') {
        navigate('/student/myprofile');
      } else if (role === 'ATTENDANCE_MANAGER') {
        navigate('/attendance-manager/scan');
      }
    } catch (error: any) {
      console.error('Login failed:', error);

      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;

        if (errorMessage.includes('Invalid credentials.')) {
          setErrorMessage('البيانات غير صحيحة، يرجى مراجعة كلمة السر.');
        } else if (errorMessage.includes('User with email')) {
          setErrorMessage('المستخدم الذي يحمل هذا البريد الإلكتروني غير موجود.');
        } else {
          setErrorMessage(errorMessage);
        }
      } else {
        setErrorMessage('حدث خطأ غير متوقع.');
      }
    }
  };

  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDarkMode ? 'dark' : ''
      } bg-gray-100 dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300">
        <div className="text-center mb-6">
          <FaUserAlt size={40} className="mb-3 text-gray-500 dark:text-gray-200 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">تسجيل الدخول</h2>
        </div>

        {errorMessage && (
          <div className="mb-4 p-2 text-red-600 bg-red-200 rounded">{errorMessage}</div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-300 flex items-center gap-1"
            >
              <FaEnvelope />
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ادخل البريد الإلكتروني"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`p-2 rounded border ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-700 dark:text-gray-300 flex items-center gap-1"
            >
              <FaLock />
              كلمة السر
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="ادخل الرقم السري"
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`p-2 rounded border ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500 text-sm">{formik.errors.password}</span>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            تسجيل الدخول
          </button>

          <div className="flex justify-between mt-4 text-blue-600 dark:text-blue-400">
            {/* <button type="button" className="hover:underline">
              نسيت كلمة السر ؟
            </button> */}
            <button
              type="button"
              className="hover:underline"
              onClick={() => navigate('/student/register')}
            >
              تسجيل حساب جديد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
