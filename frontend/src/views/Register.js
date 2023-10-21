import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegistration = async () => {
        if (!name || !username || !password || !confirmPassword || !email) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        // TODO: Send registration details to server

        // TODO: If successful, redirect to login page or handle errors
    };

    return (
        <div className="register-container">
            <h2>Register for EmoTunes</h2>
            <div className="register-form">
                <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                <button onClick={handleRegistration}>Register</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Link to="/login" className="login-link">Already have an account? Login</Link>
            </div>
        </div>
    );
}

export default Register;
