export interface AuthResponse {
  token: string;
  tokenType: string;
  username: string;
  fullName: string;
  role: string;
  expiresInMs?: number;
}

export interface BackendUser {
  userName: string;
  userFirstName?: string | null;
  userLastName?: string | null;
  email: string;
  enabled: boolean;
  roles: string[];
  dateCreated?: string | null;
}

export interface BackendLoginResponse {
  jwtToken: string;
  user: BackendUser;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
}
