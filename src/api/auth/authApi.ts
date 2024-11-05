import axiosInstance from '../axiosInstance';
import { SignInRequest, SignInResponse, SignupRequest, SignupResponse } from './types';

export const login = async (credentials: SignInRequest): Promise<SignInResponse> => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/auth/signup', data);
  return response.data;
};
