import React from 'react';
import LoginForm from '../../components/Login/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';
import useTheme from '@/store/theme';

const LoginPage: React.FC = () => {
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  const handleLogin = (values: { email: string; password: string }) => {
    console.log('Login values:', values);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: isDarkMode ? 'var(--dark-sea-green)' : 'var(--mint)',
      }}
    >
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <LoginForm onLogin={handleLogin} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
