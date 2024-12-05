import useTheme from '@/store/theme';
import { IDetectedBarcode } from '@yudiel/react-qr-scanner';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import QrScanner from '@/components/QrScanner/QrScanner';
import { useState } from 'react';
import axiosInstance from '@/api';
import { motion } from 'motion/react';
import ConditionalAlert from '@/components/ConditionalAlert';

export default function AttendanceScanner() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  async function handleScan(result: IDetectedBarcode[]) {
    const scanResult = result[0].rawValue;
    try {
      const res = await axiosInstance.post('/attendance/create', {
        userId: scanResult,
        date: new Date().toISOString(),
      });
      if (res.status === 201) {
        setIsSubmitted(true);
      }
    } catch (err: any) {
      if (err.status === 400) {
        setErrorMessage('رمز الدخول غير صحيح');
      } else if (err.status === 500) {
        setErrorMessage('تعذر تسجيل الطالب, حاول مجددا');
      } else if (err.status === 409) {
        setErrorMessage('الطالب مسجل بالفعل');
      } else {
        setErrorMessage('تعذر الاتصال بالخادم, حاول مرة اخرى');
      }
    } finally {
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage(null);
      }, 2500);
    }
  }

  return (
    <motion.div
      layout={true}
      className={`h-svh grid grid-rows-[auto,1fr,.1fr] ${
        isDarkMode ? 'dark' : ''
      } bg-white dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="sticky top-0 z-10 w-full bg-gray-100 shadow-md">
        <Header />
        <Sidebar />
      </div>
      <div
        className={`flex flex-col items-center justify-center ${
          isDarkMode ? 'dark' : ''
        } bg-white dark:bg-gray-900 transition-all duration-300`}
      >
        <QrScanner onScan={handleScan} isDarkMode={isDarkMode} />
      </div>
      <ConditionalAlert type="error" condition={errorMessage !== null} message={errorMessage} />
      <ConditionalAlert type="success" condition={isSubmitted} message={'تم تسجيل الطالب بنجاح'} />
    </motion.div>
  );
}
