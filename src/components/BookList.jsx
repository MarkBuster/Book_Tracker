import PropTypes from 'prop-types';
import { EachBook } from "./EachBook"

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