import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useTheme from '@/store/theme';
import StudentProfile from '../../components/StudentProfile/index';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import { checkTokenStatus, getRole } from '@/api/auth';
import { useNavigate } from 'react-router-dom';

interface TokenStatusResponse {
  status: string;
  firstName?: string;
}

const MyStudentProfile: React.FC = () => {
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
        if (role !== 'STUDENT') {
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

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: isDarkMode ? 'var(--dark-sea-green)' : 'var(--mint)',
      }}
    >
      <Header />
      <Sidebar />
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <StudentProfile />
        </Col>
      </Row>
    </Container>
  );
};

export default MyStudentProfile;
