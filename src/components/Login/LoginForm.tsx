import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import useTheme from '@/store/theme';

interface LoginFormProps {
  onLogin: (values: LoginValues) => void;
}

interface LoginValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [theme] = useTheme();

  const formik = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  const isDarkMode = theme === 'dark';

  return (
    <div className={`p-4 rounded ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="text-center mb-4">
        <FaUserAlt
          size={40}
          className="mb-3"
          color={isDarkMode ? 'var(--isabelline)' : 'var(--coral)'}
        />
        <h2>Login</h2>
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>
            <FaEnvelope /> Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={!!(formik.touched.email && formik.errors.email)}
            className={isDarkMode ? 'input-dark' : 'input-light'}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label>
            <FaLock /> Password
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={!!(formik.touched.password && formik.errors.password)}
            className={isDarkMode ? 'input-dark' : 'input-light'}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Row className="mt-3">
          <Col>
            <Button type="submit" className="button-primary w-100">
              Login
            </Button>
          </Col>
        </Row>

        <Row className="mt-3 text-center">
          <Col>
            <Button variant="link" className="text-link">
              Forgot Password?
            </Button>
          </Col>
          <Col>
            <Button variant="link" className="text-link">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LoginForm;
