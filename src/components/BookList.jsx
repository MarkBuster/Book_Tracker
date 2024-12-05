/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024  
* FileName:      BookList.jsx
* FileDesc:      This component renders a list of books and handles empty state. 
*                It receives an array of book objects and functions for toggling 
*                completion status and deletion. Each book is rendered using the 
*                EachBook child component.
*
* Props:
* - books: Array of book objects containing id, title, author, summary, completed
* - toggleBook: Function to toggle a book's completed status
* - deleteBook: Function to remove a book from the list
********************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { EachBook } from "./EachBook"

/**
 * Renders a list of books or displays "No Books" message if empty.
 * Uses EachBook component to render individual book items.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Book[]} props.books - Array of book objects to display
 * @param {function(string, boolean): void} props.toggleBook - Function to toggle book completion status
 * @param {function(string): void} props.deleteBook - Function to delete a book
 * @returns {JSX.Element} Rendered list of books or empty state message
 */
export function BookList({ books, toggleBook, deleteBook }) {
    return (
        <ul className="list">
            {books.length === 0 && "No Books"}
            {books.map(book => (
                <EachBook 
                    key={book.id}
                    {...book}
                    toggleBook={toggleBook} 
                    deleteBook={deleteBook}
                />
            ))}
        </ul>
    )
}

BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            summary: PropTypes.string,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
}