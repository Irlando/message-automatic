export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface User {
  id: string;
  email: string;
}