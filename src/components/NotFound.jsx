/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      NotFound.jsx
* FileDesc:      This component renders a 404 error page when users attempt
*                to access non-existent routes. It displays an error message
*                and provides a button to return to the home page using
*                React Router's Link component.
********************************************/

import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders a 404 page with error message and home page link.
 * 
 * @component
 * @returns {JSX.Element} Rendered 404 error page
 */
export default function NotFound() {
    return (
        <div className="not-found">
            <h1 className="header">Page Not Found!</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="btn">
                Return Home
            </Link>
        </div>
    );
}