import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { BookList } from '../components/BookList';

export default function BookListPage() {
    const { books, toggleBook, deleteBook, clearBookList } = useOutletContext();
    
    return (
        <div className="book-list-page">
            <h1 className="header">Book List</h1>
            <button 
                className="btn clear-list-btn"
                onClick={clearBookList}
            >Clear List</button>
            <BookList 
                books={books} 
                toggleBook={toggleBook} 
                deleteBook={deleteBook}
            />
        </div>
    );
}