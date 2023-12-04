import React, { useState } from 'react';
import ApiService from '../api/ApiService';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(credentials);
            const response = await ApiService.login(credentials);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/employees');
        } catch (error) {
            setError('Login failed: Invalid email or password');
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="signup-container"> {/* Use the same container class */}
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="signup-form"> {/* Use the same form class */}
                <div className="form-field">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Login</button> {/* Use the same button class */}
                <div className="links"> {/* Use the same links class */}
                    <a href="/signup">Don't have an account? Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
