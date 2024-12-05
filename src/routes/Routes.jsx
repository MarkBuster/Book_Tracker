/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      Routes.jsx 
* FileDesc:      This file configures the application's routing system and
*                authentication protection. It defines all available routes
*                and wraps authenticated routes with PrivateRoute component
*                to ensure only logged-in users can access protected features.
*
* Protected Routes:
* - /books: Book list page
* - /add: Add new book page
*
* Public Routes:
* - /: Home page
* - /*: NotFound page (404)
********************************************/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import App from "../App";
import HomePage from "../pages/HomePage";
import BookListPage from "../pages/BookListPage";
import AddBookPage from "../pages/AddBookPage";
import NotFound from "../components/NotFound";
import { useAuth } from "../contexts/AuthContext";

/**
 * Higher-order component that protects routes requiring authentication.
 * Redirects to home page if user is not authenticated.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Protected route components
 * @returns {JSX.Element} Protected route or redirect
 */
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

/**
 * Main routing component that configures all application routes.
 * Wraps the app in authentication provider and sets up protected routes.
 * 
 * @component
 * @returns {JSX.Element} Configured router with all application routes
 */
export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="books" element={
              <PrivateRoute>
                <BookListPage />
              </PrivateRoute>
            } />
            <Route path="add" element={
              <PrivateRoute>
                <AddBookPage />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}