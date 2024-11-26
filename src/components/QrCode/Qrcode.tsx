import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import useTheme from '@/store/theme';
import axiosInstance from '@/api/axiosInstance';

const QrCode: React.FC = () => {
  const [theme] = useTheme();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [studentId, setStudentId] = useState('');
  const isDarkMode = theme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchStudentId = async () => {
      setErrorMessage(null);
      try {
        const response = await axiosInstance.get('/student/getQrCode');
        setStudentId(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Failed to fetch QR Code:', error);
          setErrorMessage(
            error.message.includes('Network Error')
              ? 'تعذر تحميل الرمز. تحقق من الاتصال.'
              : 'حدث خطأ غير متوقع.',
          );
        } else {
          console.error('Unexpected error:', error);
          setErrorMessage('حدث خطأ غير متوقع.');
        }
      }
    };

    fetchStudentId();
  }, []);

  useEffect(() => {
    if (canvasRef.current && studentId) {
      QRCode.toCanvas(canvasRef.current, studentId, {
        width: 256,
        color: {
          dark: isDarkMode ? '#ffffff' : '#000000',
          light: isDarkMode ? '#121212' : '#ffffff',
        },
      }).catch((err) => console.error('Failed to generate QR code:', err));
    }
  }, [studentId, isDarkMode]);

  return (
    <div
      dir="rtl"
      className={`flex flex-col items-center justify-center min-h-screen px-4 ${
        isDarkMode ? 'dark' : ''
      } bg-gray-100 dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {isDarkMode ? 'رمز الاستجابة السريعة (الوضع الداكن)' : 'رمز الاستجابة السريعة'}
          </h2>
        </div>

        {errorMessage && (
          <div className="mb-4 p-2 text-red-600 bg-red-200 rounded">{errorMessage}</div>
        )}

        <div className="flex justify-center">
          {studentId ? (
            <canvas ref={canvasRef} />
          ) : (
            <span className="text-gray-500 dark:text-gray-300">جاري تحميل الرمز...</span>
          )}
        </div>

        <div className="mt-4 text-blue-600 dark:text-blue-400 text-center">
          <button
            type="button"
            className="hover:underline"
            onClick={() => window.location.reload()}
          >
            إعادة تحميل
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
