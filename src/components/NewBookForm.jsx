/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      NewBookForm.jsx
* FileDesc:      This component provides a form for adding new books to the 
*                reading list. It manages form state for title, author, and 
*                summary inputs using React useState hooks. The form prevents 
*                empty submissions and clears input fields after successful 
*                submission.
*
* Props:
* - onSubmit: Function that receives (title, author, summary) to create new book
*
* State:
* - newBook: Stores the book title input
* - newBookAuthor: Stores the author input
* - newBookSummary: Stores the summary input
********************************************/

import React from "react"
import { useState } from "react"
import PropTypes from 'prop-types'

/**
 * Form component for adding new books with title, author, and summary inputs.
 * Manages its own form state and validates input before submission.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {function(string, string, string): void} props.onSubmit - Handler for form submission
 * @returns {JSX.Element} Rendered form for adding new books
 */
export function NewBookForm(props){
    const [newBook, setNewBook] = useState('')
    const [newBookAuthor, setNewBookAuthor] = useState('')
    const [newBookSummary, setNewBookSummary] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (newBook.trim() === "") return

        props.onSubmit(newBook, newBookAuthor, newBookSummary)
        
        setNewBook('')
        setNewBookAuthor('')
        setNewBookSummary('')
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor='item'>New Book</label>
                <div id="item">
                    <input  
                        placeholder="Title"
                        value={newBook} 
                        onChange={e => setNewBook(e.target.value)} 
                        type="text" 
                    />
                    <input  
                        placeholder="Author"
                        value={newBookAuthor} 
                        onChange={e => setNewBookAuthor(e.target.value)} 
                        type="text"
                    />
                    <textarea  
                        placeholder="Summary / Notes"
                        value={newBookSummary} 
                        onChange={e => setNewBookSummary(e.target.value)} 
                        type="text"  
                    />
                </div>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}

NewBookForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}