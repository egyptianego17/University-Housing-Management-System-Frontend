import { useEffect, useReducer } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Col, Container, Row } from 'react-bootstrap';
import useTheme from '@/store/theme';
import { Alert } from '@mui/material';
import './qr-scanner.css';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';

interface reducerDto {
  scanResult?: string | null;
  error: boolean;
  errorMessage?: string | null;
  isSuccess: boolean;
}
interface actionDto {
  type: ActioTypeOption;
  payload?: string | null;
}
enum ActioTypeOption {
  SET_RESULT = 'qr-scan/save-result',
  RESET_RESULT = 'qr-scan/reset-result',
  SET_ERROR = 'error/set',
  RESET_ERROR = 'error/reset',
  SET_ERROR_MESSAGE = 'error/set-message',
  SET_SUCCESS = 'success/set',
  RESET_SUCCESS = 'success/reset',
}

const initialState: reducerDto = {
  scanResult: null,
  isSuccess: false,
  error: false,
  errorMessage: null,
};

function reducer(state: reducerDto, action: actionDto): reducerDto {
  const { type, payload } = action;
  switch (type) {
    case ActioTypeOption.SET_RESULT:
      return { ...state, scanResult: payload };
    case ActioTypeOption.RESET_RESULT:
      return { ...state, scanResult: null };
    case ActioTypeOption.SET_ERROR:
      return { ...state, error: true, errorMessage: payload ? payload : null };
    case ActioTypeOption.RESET_ERROR:
      return { ...state, error: false };
    case ActioTypeOption.SET_ERROR_MESSAGE:
      return { ...state, errorMessage: payload };
    case ActioTypeOption.SET_SUCCESS:
      return { ...state, isSuccess: true };
    case ActioTypeOption.RESET_SUCCESS:
      return { ...state, isSuccess: false };
    default:
      throw new Error('Use of unsupported reducer type');
  }
}

export default function QrScanner() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  function displayErrorMessage(message: string) {
    dispatch({ type: ActioTypeOption.SET_ERROR, payload: message });
    setTimeout(() => {
      dispatch({ type: ActioTypeOption.RESET_ERROR });
      dispatch({ type: ActioTypeOption.RESET_RESULT });
    }, 2000);
  }

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: { width: 500, height: 500 },
        fps: 5,
      },
      undefined,
    );
    scanner.render(handleScanSuccess, undefined);

    async function handleScanSuccess(result: string) {
      try {
        if (Number.isNaN(result)) {
          displayErrorMessage('مسح رمز الاستجابة السريعة غير صالح. يرجى المحاولة مرة أخرى');
          return;
        }
        dispatch({ type: ActioTypeOption.SET_RESULT, payload: result });
      } catch (err) {
        dispatch({ type: ActioTypeOption.SET_ERROR });
      }
    }
    return () => {
      scanner.clear();
    };
  }, []);

  useEffect(() => {
    async function saveAttendance(payload: number) {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/attendance`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: payload, date: new Date().toISOString() }),
        });
        return await res.json();
      } catch (err: any) {
        if (String(err.message).includes('Failed to fetch')) {
          displayErrorMessage('تعذر الاتصال, حاول مجددا');
        }
      }
    }
    let timer: NodeJS.Timeout;
    if (state.scanResult !== null) {
      saveAttendance(Number(state.scanResult)).then((data) => {
        if (data.statusCode === 404) {
          displayErrorMessage('الطالب غير مسجل');
          return;
        }
        dispatch({ type: ActioTypeOption.SET_SUCCESS });
        timer = setTimeout(() => dispatch({ type: ActioTypeOption.RESET_SUCCESS }), 2000);
      });
    }
    return () => {
      clearTimeout(timer);
      dispatch({ type: ActioTypeOption.RESET_ERROR });
    };
  }, [state.scanResult]);

  return (
    <>
      <Header />
      <Sidebar />
      <Container
        fluid
        className={`flex flex-col items-center justify-center min-h-screen px-4 ${
          isDarkMode ? 'dark' : ''
        } bg-gray-100 dark:bg-gray-900 transition-all duration-300`}
      >
        <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-4xl transition-all duration-300">
          <Row className="mb-6">
            <Col>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                ماسح رمز الاستجابة السريعة
              </h2>
            </Col>
          </Row>
          <Row className="w-100">
            <Col xs={12} md={6} lg={4} className="flex justify-center items-center mt-14 w-100">
              <div id="reader" className="scanner-box text-gray-800 dark:text-white text-center" />
            </Col>
          </Row>
          <Row className="mt-6">
            {state.error && (
              <Alert
                variant="outlined"
                severity="error"
                className="text-red-600 dark:text-red-400 bg-red-200 dark:bg-red-800 rounded p-2"
              >
                {state.errorMessage
                  ? state.errorMessage
                  : 'مسح رمز الاستجابة السريعة غير صالح. يرجى المحاولة مرة أخرى'}
              </Alert>
            )}
            {state.isSuccess ? (
              <Alert
                severity="success"
                className="text-blue-600 dark:text-blue-400 bg-blue-200 dark:bg-blue-800 rounded p-2"
              >
                تم تسجيل بيانات الطالب بنجاح
              </Alert>
            ) : null}
          </Row>
        </div>
      </Container>
    </>
  );
}
