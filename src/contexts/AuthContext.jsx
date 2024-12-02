/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      AuthContext.jsx
* FileDesc:      This file implements authentication context and provider using
*                Firebase Authentication with GitHub as the OAuth provider. It
*                manages user authentication state and provides authentication
*                functions throughout the application. The context includes
*                user state, loading state, sign-in, and logout functionality.
*
* Context Values:
* - user: Current authenticated user object or null
* - loading: Boolean indicating authentication state loading
* - signInWithGithub: Function to handle GitHub OAuth sign-in
* - logout: Function to handle user sign-out
********************************************/

import { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  signInWithPopup, 
  GithubAuthProvider, 
  signOut,
  onAuthStateChanged,
  inMemoryPersistence,
  setPersistence 
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
    //   await setPersistence(auth, inMemoryPersistence);
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Github:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGithub,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};