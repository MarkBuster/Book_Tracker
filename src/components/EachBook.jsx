/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      EachBook.jsx
* FileDesc:      This component renders a single book item with checkbox for 
*                completion status, book details (title, author, summary), 
*                and a delete button. It handles user interactions for marking 
*                books as read and deletion.
*
* Props:
* - id: Unique identifier for the book
* - title: Book's title
* - author: Book's author
* - summary: Optional book summary
* - completed: Boolean indicating if book is read
* - toggleBook: Function to update book's completion status
* - deleteBook: Function to remove book from list
********************************************/

import PropTypes from 'prop-types';

export function EachBook({ completed, id, title, author, summary, toggleBook, deleteBook }) {
    return (
        <li>
            <label>
                <input type="checkbox" 
                    checked={completed}
                    onChange={e => toggleBook(id, e.target.checked)}  
                />
                <div className="book-details">
                    <h3>{title}</h3>
                    <p className="author">{author}</p>
                    <p className="summary">{summary}</p>
                </div>
            </label>
            <button 
                onClick={() => deleteBook(id)}
                className="btn btn-danger"
            >Delete</button>
        </li>
    )
}

EachBook.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    summary: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    toggleBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
}