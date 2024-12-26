import { supabase } from '../lib/supabase';
import { AuthError, User } from '../types/auth';

export async function signUpWithEmail(email: string, password: string): Promise<{ user: User }> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new AuthError(error.message);
    }

    if (!data.user) {
      throw new AuthError('No user data returned');
    }

    return {
      user: {
        id: data.user.id,
        email: data.user.email ?? '',
      }
    };
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    throw new AuthError('Failed to sign up');
  }
}

export async function signInWithEmail(email: string, password: string): Promise<{ user: User }> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new AuthError(error.message);
    }

    if (!data.user) {
      throw new AuthError('No user data returned');
    }

    return {
      user: {
        id: data.user.id,
        email: data.user.email ?? '',
      }
    };
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    throw new AuthError('Failed to sign in');
  }
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new AuthError(error.message);
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      throw new AuthError(error.message);
    }

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email ?? '',
    };
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    throw new AuthError('Failed to get current user');
  }
}

export function subscribeToAuthChanges(callback: (user: User | null) => void) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
      callback({
        id: session.user.id,
        email: session.user.email ?? '',
      });
    } else {
      callback(null);
    }
  });

  return () => subscription.unsubscribe();
}