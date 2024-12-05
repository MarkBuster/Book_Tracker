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
} from 'firebase/auth';

const AuthContext = createContext();

/**
 * Provider component that makes authentication context available to child components.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with auth context
 * @returns {JSX.Element} Authentication context provider
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();//firebase auth instance function

  // Set up listener for authentication state changes when component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  // Function to handle GitHub sign-in
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Github:", error);
      throw error;
    }
  };

  // Function to handle user sign-out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  // An object with all the auth-related data and functions
  const value = {
    user,
    loading,
    signInWithGithub,
    logout
  };

  // Provide the auth data to all child components
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to access authentication context.
 * 
 * @returns {AuthContextType} Authentication context value
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};