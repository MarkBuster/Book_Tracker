import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import App from "../App";
import HomePage from "../pages/HomePage";
import BookListPage from "../pages/BookListPage";
import AddBookPage from "../pages/AddBookPage";
import NotFound from "../components/NotFound";
import { useAuth } from "../contexts/AuthContext";

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