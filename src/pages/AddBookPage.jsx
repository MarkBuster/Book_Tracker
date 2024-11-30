import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { NewBookForm } from '../components/NewBookForm';

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