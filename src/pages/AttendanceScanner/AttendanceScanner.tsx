import useTheme from '@/store/theme';
import { Alert } from '@mui/material';
import { IDetectedBarcode } from '@yudiel/react-qr-scanner';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import QrScanner from '@/components/QrScanner/QrScanner';
import { useState } from 'react';
import axiosInstance from '@/api';

export default function AttendanceScanner() {
  const [isError, setError] = useState(false);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  async function handleScan(result: IDetectedBarcode[]) {
    const scanResult = result[0].rawValue;
    try {
      const res = await axiosInstance.post('/attendance/create', {
        userId: scanResult,
        date: new Date().toISOString(),
      });
      console.log(res);
    } catch (err: any) {
      if (err.status === 400) {
        setError(true);
      }
    }
  }

  return (
    <div className="h-screen grid grid-rows-[auto,1fr,auto]">
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
        {isError ? (
          <Alert
            variant="outlined"
            severity="error"
            className="text-red-600 dark:text-red-400 bg-red-200 dark:bg-red-800 rounded p-2 w-fit"
          >
            الطالب غير مسجل
          </Alert>
        ) : null}
      </div>
    </div>
  );
}
