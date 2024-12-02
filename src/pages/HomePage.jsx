/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      HomePage.jsx
* FileDesc:      This component serves as the landing page for the Book Tracker
*                application. It manages user authentication display and navigation
*                options. When no user is logged in, it shows only the sign-in
*                button. Once authenticated, it displays navigation links to add
*                books and view the book list, along with a logout option.
*
* Context Used:
* - user: Current authenticated user object
* - signInWithGithub: Function to handle GitHub sign-in
* - logout: Function to handle user sign-out
********************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
    const { user, signInWithGithub, logout } = useAuth();

    const handleAuth = async () => {
        if (user) {
            await logout();
        } else {
            await signInWithGithub();
        }
    };

    return (
        <div className="home-page">
            <h1 className="header">Welcome to Book Tracker</h1>
            <p>Keep track of your reading journey and see how many books you can read this year!</p>
            <div className="home-actions">
                <button 
                    className="btn"
                    onClick={handleAuth}
                >
                    {user ? 'Logout' : 'Sign in with GitHub'}
                </button>
                {user && (
                    <>
                        <Link to="/add" className="btn">Add Your First Book</Link>
                        <Link to="/books" className="btn">View Your Books</Link>
                    </>
                )}
            </div>
        </div>
    );
}