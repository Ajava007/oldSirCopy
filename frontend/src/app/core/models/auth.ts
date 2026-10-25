export interface AuthResponse {
  token: string;
  tokenType: string;
  username: string;
  fullName: string;
  role: string;
  expiresInMs: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  fullName: string;
  password: string;
}
