import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthState } from '../types/auth';
import { 
  signInWithEmail, 
  signUpWithEmail,
  signOut as authSignOut, 
  getCurrentUser, 
  subscribeToAuthChanges 
} from '../services/auth';

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    getCurrentUser()
      .then(user => setState({ user, loading: false }))
      .catch(() => setState({ user: null, loading: false }));

    const unsubscribe = subscribeToAuthChanges((user) => {
      setState({ user, loading: false });
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { user } = await signInWithEmail(email, password);
    setState({ user, loading: false });
  };

  const signUp = async (email: string, password: string) => {
    const { user } = await signUpWithEmail(email, password);
    setState({ user, loading: false });
  };

  const signOut = async () => {
    await authSignOut();
    setState({ user: null, loading: false });
  };

  if (state.loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};