import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useTheme from '@/store/theme';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import QrCode from '@/components/QrCode';
const MyStudentProfile: React.FC = () => {
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

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
