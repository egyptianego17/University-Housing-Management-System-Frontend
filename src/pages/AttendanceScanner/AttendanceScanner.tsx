import useTheme from '@/store/theme';
import { Alert } from '@mui/material';
import { IDetectedBarcode } from '@yudiel/react-qr-scanner';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import QrScanner from '@/components/QrScanner/QrScanner';
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/api';
import { useNavigate } from 'react-router-dom';
import { checkTokenStatus, getRole } from '@/api/auth';
import { Container } from 'react-bootstrap';

interface TokenStatusResponse {
  status: string;
  firstName?: string;
}

export default function AttendanceScanner() {
  const [isError, setError] = useState(false);
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
