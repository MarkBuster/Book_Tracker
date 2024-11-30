import { useState } from "react"
import PropTypes from 'prop-types'

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
                        placeholder="Book Summary"
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