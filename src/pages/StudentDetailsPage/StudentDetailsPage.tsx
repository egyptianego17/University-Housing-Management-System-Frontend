import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Checkbox, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import useTheme from '@/store/theme';
import StudentDetails from '@/components/StudentDetails';
import { getStudentByEncryptedId, StudentProfileInterface } from '@/api/student';
import authorize from '@/utils/authorization';
import { Container } from 'react-bootstrap';

const StudentAttendancePage = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState<StudentProfileInterface | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const isAuthorized = await authorize('ATTENDANCE_MANAGER');
        if (!isAuthorized) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        navigate('/login');
      }
    };
    verifyToken().then(() => setIsLoading(false));
  }, [navigate]);

  useEffect(() => {
    async function fetchStudentDetails() {
      const [studentInfo] = await Promise.all([getStudentByEncryptedId(String(id))]);
      if (!studentInfo) navigate('/NOT FOUND');
      setStudentData(studentInfo);
    }
    try {
      fetchStudentDetails();
    } catch (err) {
      navigate('/NOT-FOUND');
    }
  }, [id, navigate]);

  if (isLoading) {
    return (
      <Container
        fluid
        className="flex items-center justify-center"
        style={{
          minHeight: '100vh',
          background: isDarkMode ? 'var(--dark-sea-green)' : 'var(--mint)',
        }}
      >
        <div>Loading...</div>
      </Container>
    );
  }
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark' : ''}
        dark:bg-gray-900 dark:text-white bg-white text-gray-800`}
    >
      <MainHeader isDarkMode={isDarkMode} />
      <SecondaryHeader isDarkMode={isDarkMode} />

      <div className="p-8 pt-2">
        <StudentDetails studentData={studentData}>
          <div className="space-y-4 w-full max-w-md transition-all duration-300">
            <div
              dir="rtl"
              className="flex flex-col p-4 rounded-lg shadow-md dark:bg-gray-700 dark:text-white bg-gray-50 text-gray-600"
            >
              <div className="font-semibold">الوجبات:</div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="breakfast" color={isDarkMode ? 'info' : 'primary'} />
                  <label htmlFor="breakfast" className="ml-2">
                    الإفطار
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="lunch" color={isDarkMode ? 'info' : 'primary'} />
                  <label htmlFor="lunch" className="ml-2">
                    الغداء
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="dinner" color={isDarkMode ? 'info' : 'primary'} />
                  <label htmlFor="dinner" className="ml-2">
                    العشاء
                  </label>
                </div>
              </div>
            </div>
          </div>
          <SaveButton isDarkMode={isDarkMode} />
        </StudentDetails>
      </div>
    </motion.div>
  );
};

function MainHeader({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className={`sticky top-0 z-10 w-full shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <Header />
      <Sidebar />
    </div>
  );
}

function SecondaryHeader({ isDarkMode }: { isDarkMode: boolean }) {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center justify-between px-4 py-2 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack className={`${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`} />
      </IconButton>
      <Typography
        variant="h6"
        className={`font-semibold text-center w-full ${
          isDarkMode ? 'text-blue-400' : 'text-blue-600'
        }`}
      >
        تسجيل غياب الطالب
      </Typography>
    </div>
  );
}
function SaveButton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center justify-center`}
    >
      <button
        className={`px-6 py-3 rounded-lg text-lg font-medium ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
        } text-white shadow-lg transition-all w-full`}
      >
        حفظ الغياب
      </button>
    </motion.div>
  );
}

export default StudentAttendancePage;
