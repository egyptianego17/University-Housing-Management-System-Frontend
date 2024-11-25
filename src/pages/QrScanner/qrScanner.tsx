// @important: Style this Page. [Dark & light modes]
import { useEffect, useReducer } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScannerState } from 'html5-qrcode';
import { Container, Row } from 'react-bootstrap';
import useTheme from '@/store/theme';
import { Alert } from '@mui/material';
import './qr-scanner.css';

interface reducerDto {
  scanResult?: string | null;
  error: boolean;
  errorMessage?: string | null;
}
interface actionDto {
  type: ActioTypeOption;
  payload?: string | null;
}
enum ActioTypeOption {
  SET_RESULT = 'qr-scan/save-result',
  SET_ERROR = 'error/set',
  RESET_ERROR = 'error/reset',
  SET_ERROR_MESSAGE = 'error/set-message',
}

const initialState: reducerDto = {
  scanResult: null,
  error: false,
  errorMessage: null,
};

function reducer(state: reducerDto, action: actionDto): reducerDto {
  const { type, payload } = action;
  switch (type) {
    case ActioTypeOption.SET_RESULT:
      return { ...state, scanResult: payload };
    case ActioTypeOption.SET_ERROR:
      return { ...state, error: true, errorMessage: payload ? payload : null };
    case ActioTypeOption.RESET_ERROR:
      return { ...state, error: false };
    case ActioTypeOption.SET_ERROR_MESSAGE:
      return { ...state, errorMessage: payload };
    default:
      throw new Error('Use of unsupported reducer type');
  }
}

async function saveAttendance(payload: number) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/attendance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: payload, date: new Date().toISOString() }),
  });
  return await res.json();
}

export default function QrScanner() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: { width: 500, height: 500 },
        fps: 5,
      },
      false,
    );
    scanner.render(handleScanSuccess, undefined);

    function displayErrorMessage(message: string) {
      dispatch({ type: ActioTypeOption.SET_ERROR, payload: message });
      setTimeout(() => {
        dispatch({ type: ActioTypeOption.RESET_ERROR });
        if (scanner.getState() !== Html5QrcodeScannerState.SCANNING) {
          scanner.render(handleScanSuccess, undefined);
        }
      }, 3000);
    }
    async function handleScanSuccess(result: string) {
      try {
        if (Number.isNaN(result)) {
          scanner.clear();
          displayErrorMessage('مسح رمز الاستجابة السريعة غير صالح. يرجى المحاولة مرة أخرى');
          return;
        }
        dispatch({ type: ActioTypeOption.SET_RESULT, payload: result });
        const data = await saveAttendance(+result);
        if (data.statusCode === 404) {
          console.log('To-Do: Handle this error');
          displayErrorMessage('الطالب غير مسجل, اعد المحاوله');
        }
      } catch (err) {
        console.log('ERROR: ' + err);
        dispatch({ type: ActioTypeOption.SET_ERROR });
      }
    }
    return () => {};
  }, []);

  return (
    <Container
      fluid
      className={`flex flex-col gap-52 justify-center items-center min-h-screen px-4 ${
        isDarkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      <Row
        id="reader"
        className="sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 border-4 border-white rounded-lg"
      />
      <Row className="z-100">
        {state.error ? (
          <Alert variant="outlined" severity="error">
            {state.errorMessage ? state.errorMessage : 'Error taking attendance, try again'}
          </Alert>
        ) : null}
      </Row>
    </Container>
  );
}
