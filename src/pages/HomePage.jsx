import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="home-page">
            <h1 className="header">Welcome to Book Tracker</h1>
            <p>Keep track of your reading journey and see how many books you can read this year!</p>
            <div className="home-actions">
                <Link to="/add" className="btn">
                    Add Your First Book
                </Link>
                <Link to="/books" className="btn">
                    View Your Books
                </Link>
            </div>
        </div>
    );
}