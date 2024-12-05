import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenStatus } from '@/api/auth'; // Assuming this is the endpoint function
import useTheme from '@/store/theme';

interface TokenStatusResponse {
  status: string;
  firstName?: string;
}

const CheckTokenPage: React.FC = () => {
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();
  const [response, setResponse] = useState<TokenStatusResponse | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const res = await checkTokenStatus();
        if (res.status === 'Token is valid' && res.firstName) {
          setResponse(res);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        navigate('/login');
      }
    };

    verifyToken();
  }, [navigate]);

  const handleContinue = () => {
    navigate('/student/myprofile');
  };

  const handleNewLogin = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  if (!response) return null;

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDarkMode ? 'dark' : ''
      } bg-gray-100 dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            مرحباً، {response.firstName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            هل تريد المتابعة بحسابك الحالي أو تسجيل الدخول بحساب جديد؟
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleContinue}
            className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            المتابعة بحسابي
          </button>
          <button
            onClick={handleNewLogin}
            className="w-full py-2 text-blue-600 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 transition"
          >
            تسجيل الدخول بحساب جديد
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckTokenPage;
