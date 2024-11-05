import axiosInstance from '../axiosInstance';
import { StudentProfileInterface } from './types';

export const getMyStudentProfile = async (): Promise<StudentProfileInterface> => {
  const response = await axiosInstance.get('/student/getMyProfile');
  return response.data;
};
