import useTheme from '@/store/theme';
import { IDetectedBarcode } from '@yudiel/react-qr-scanner';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import QrScanner from '@/components/QrScanner/QrScanner';
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/api';
import { motion } from 'motion/react';
import ConditionalAlert from '@/components/ConditionalAlert';
import { useNavigate } from 'react-router-dom';
import { checkTokenStatus, getRole } from '@/api/auth';
import { Container } from 'react-bootstrap';

interface TokenStatusResponse {
  status: string;
  firstName?: string;
}

export default function AttendanceScanner() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [theme] = useTheme();
  const [isLoading, setIsLoading] = useState(true);
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

        const role = await getRole(token);
        if (role !== 'ATTENDANCE_MANAGER') {
          navigate('/login');
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        navigate('/login');
      }
    };

    verifyToken().then(() => setIsLoading(false));
  }, [navigate]);

  if (isLoading) {
    return (
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          background: isDarkMode ? 'var(--dark-sea-green)' : 'var(--mint)',
        }}
      >
        <div>Loading...</div>
      </Container>
    );
  }
  if (!response) return null;

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
