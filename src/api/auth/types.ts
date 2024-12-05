export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token?: string;
  message?: string;
  role?: string;
  success: boolean;
}

// types.ts
export interface RegisterationRequest {
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  gender: 'MALE' | 'FEMALE';
  birthDate: string;
  mobileNumber: string;
  nationalId: string;
  nationalIdImageUrl?: string;
  section?: 'MALE' | 'FEMALE' | 'HYBRID';
  address: string;
  faculty: string;
  grade: number;
  lastYearAcademicGrade: number;
  disability?: boolean;
  studentIdImageUrl?: string;
  room: string;
  floor: number;
}

export interface RegisterationResponse {
  message: string;
  success: boolean;
}
export interface TokenStatusCheckResponse {
  status: string;
  firstName: string;
  role: string;
}
