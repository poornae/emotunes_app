import React from 'react';
import { Link } from 'react-router-dom';
import '../views/LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to EmoTunes!</h1>
                <p>Discover songs based on your emotions.</p>
            </header>
            <div className="landing-actions">
                <Link to="/login" className="landing-button login-button">Login</Link>
                <Link to="/register" className="landing-button register-button">Register</Link>
            </div>
        </div>
    );
}

export default LandingPage;
