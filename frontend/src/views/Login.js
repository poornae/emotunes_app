import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        // Basic validation
        if (!username || !password) {
            setErrorMessage('Please enter both username and password.');
            return;
        }

        // TODO: Send login details to server for authentication

        // TODO: If successful, redirect to dashboard or handle errors
    };

    return (
        <div className="login-container">
            <h2>Login to EmoTunes</h2>
            <div className="login-form">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            </div>
        </div>
    );
}

export default Login;
