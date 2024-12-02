/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      App.jsx
* FileDesc:      This is the root component of the Book Tracker application.
*                It manages the global state of books using Firebase Realtime
*                Database, provides CRUD operations for books, and handles the
*                main navigation layout. All book management functions are
*                passed down through React Router's Outlet context. This component
*                does not receive props as it serves as the top-level state
*                manager for the application.
*
* State:
* - books: Array of book objects synchronized with Firebase
*
* Functions:
* - addBook: Creates new book with given title, author, summary
* - toggleBook: Updates book's completed status
* - deleteBook: Removes specific book by ID
* - clearBookList: Removes all books
*
* Firebase Operations:
* - Real-time synchronization with database
* - CRUD operations for book management
* 
* Dependencies:
* - Firebase Realtime Database
* - React Router for navigation
********************************************/

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