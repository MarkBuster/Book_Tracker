import { useEffect, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import { ref, onValue, set } from "firebase/database";
import { database } from "./firebase";
import "./styles.css";


export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksRef = ref(database, 'books');
    
    const closeListener = onValue(booksRef, (snapshot) => {
      // When we get new data from Firebase:
      const data = snapshot.val() || {};
      // Convert the data
      const booksArray = Object.entries(data).map(([id, book]) => ({
        id,
        ...book
      }));
      
      if (JSON.stringify(booksArray) !== JSON.stringify(books)) {
        setBooks(booksArray);
      }
    });
  
    return () => closeListener();
  }, [books]);

  function addBook(title, author, summary) {
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      summary,
      completed: false
    };
    
    setBooks(currentBooks => [...currentBooks, newBook]);
    
    const bookRef = ref(database, `books/${newBook.id}`);
    set(bookRef, newBook);
  }
  
  function toggleBook(id, completed) {
    setBooks(currentBooks => currentBooks.map(book => 
      book.id === id ? { ...book, completed } : book
    ));
    
    const bookRef = ref(database, `books/${id}`);
    const book = books.find(b => b.id === id);
    set(bookRef, { ...book, completed });
  }
  
  function deleteBook(id) {
    setBooks(currentBooks => currentBooks.filter(book => book.id !== id));
    
    const bookRef = ref(database, `books/${id}`);
    set(bookRef, null);
  }
  
  function clearBookList() {
    setBooks([]);
    
    const booksRef = ref(database, 'books');
    set(booksRef, null);
  }

return (
  <div className="app-container">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Book List</Link></li>
        <li><Link to="/add">Add Book</Link></li>
      </ul>
    </nav>
    <main>
      <Outlet context={{ 
        books, 
        addBook, 
        toggleBook, 
        deleteBook, 
        clearBookList 
      }}/>
    </main>
  </div>
)
}

App.propTypes = {
books: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    summary: PropTypes.string,
    completed: PropTypes.bool.isRequired
  })
)
}