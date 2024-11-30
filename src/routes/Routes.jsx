import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import BookListPage from "../pages/BookListPage";
import AddBookPage from "../pages/AddBookPage";
import NotFound from "../components/NotFound";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
          <Route path="books" element={<BookListPage />} />
          <Route path="add" element={<AddBookPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}