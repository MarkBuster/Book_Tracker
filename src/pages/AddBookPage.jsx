/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      AddBookPage.jsx
* FileDesc:      This page component handles the addition of new books to the
*                user's reading list. It receives the addBook function from
*                outlet context and uses React Router's navigation to redirect
*                to the books list after successful submission. The component
*                integrates with NewBookForm for data collection.
*
* Context Used:
* - addBook: Function to add new book to database
********************************************/

import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { NewBookForm } from '../components/NewBookForm';

/**
 * Renders the add book page with form and handles navigation after submission.
 * Uses outlet context to access book management functions.
 * 
 * @component
 * @returns {JSX.Element} Rendered add book page
 */
export default function AddBookPage() {
    const { addBook } = useOutletContext();
    const navigate = useNavigate();
    
    const handleSubmit = (title, author, summary) => {
        addBook(title, author, summary);
        navigate('/books');
    };

    return (
        <div className="add-book-page">
            <h1 className="header">Add New Book</h1>
            <NewBookForm onSubmit={handleSubmit} />
        </div>
    );
}