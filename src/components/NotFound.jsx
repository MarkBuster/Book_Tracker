import React from "react";
import { Link } from "react-router-dom";

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