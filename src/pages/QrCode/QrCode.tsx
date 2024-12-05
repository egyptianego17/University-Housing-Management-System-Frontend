import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useTheme from '@/store/theme';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import QrCode from '@/components/QrCode';
import { useNavigate } from 'react-router-dom';
import authorize from '@/utils/authorization';

const MyStudentProfile: React.FC = () => {
  const [theme] = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const isAuthorized = await authorize('STUDENT');
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
          <QrCode />
        </Col>
      </Row>
    </Container>
  );
};

export default MyStudentProfile;
