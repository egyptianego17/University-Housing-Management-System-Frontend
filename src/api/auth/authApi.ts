import axiosInstance from '../axiosInstance';
import {
  SignInRequest,
  SignInResponse,
  RegisterationRequest,
  RegisterationResponse,
  TokenStatusCheckResponse,
} from './types';

export const login = async (credentials: SignInRequest): Promise<SignInResponse> => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

export const studentRegisteration = async (
  data: RegisterationRequest,
): Promise<RegisterationResponse> => {
  const response = await axiosInstance.post('auth/student/signup', data);
  return response.data;
};

export const checkTokenStatus = async (): Promise<TokenStatusCheckResponse> => {
  const response = await axiosInstance.get('/auth/token/status');
  return response.data;
};

export const getRole = async (token: string | null): Promise<any> => {
  try {
    const response = await axiosInstance.get('/user/getRole', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching role:', error);
    throw error;
  }
};
