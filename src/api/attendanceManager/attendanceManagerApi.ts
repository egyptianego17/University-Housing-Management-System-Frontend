import axiosInstance from '../axiosInstance';
import { AttendanceRecordI } from './types';

export async function getAttendanceRecord(
  studentId: string,
  date: string,
): Promise<AttendanceRecordI> {
  const response = await axiosInstance.get(`attendance/${studentId}/${date}`);
  return response.data;
}
