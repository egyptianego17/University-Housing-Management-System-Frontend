export interface AttendanceRecordI {
  status: 'PRESENT' | 'ABSENT';
  date: Date;
  userId: number;
  tookBreakfast: boolean;
  tookDinner: boolean;
  tookLunch: boolean;
}
