/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      BookListPage.jsx
* FileDesc:      This page component displays the user's book list and provides
*                functionality to manage books. It uses outlet context to access
*                book data and management functions. The component includes a
*                clear list button and renders the BookList component with
*                necessary props for book interactions.
*
* Context Used:
* - books: Array of user's books
* - toggleBook: Function to mark books as read/unread
* - deleteBook: Function to remove individual books
* - clearBookList: Function to remove all books
*
********************************************/

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