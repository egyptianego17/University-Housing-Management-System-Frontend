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
  
  export interface SignupRequest {
    email: string;
    password: string;
  }
  
  export interface SignupResponse {
    message: string;
    success: boolean;
  }  