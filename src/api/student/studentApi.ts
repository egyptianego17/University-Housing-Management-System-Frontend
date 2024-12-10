import axiosInstance from '../axiosInstance';
import { StudentProfileInterface } from './types';

export const getMyStudentProfile = async (): Promise<StudentProfileInterface> => {
  const response = await axiosInstance.get('/student/getMyProfile');
  return response.data;
};

export const getStudentByEncryptedId = async (id: string): Promise<StudentProfileInterface> => {
  const response = await axiosInstance.get(`/student/${id}`);
  return response.data;
};
