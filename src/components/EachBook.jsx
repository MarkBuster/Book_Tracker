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