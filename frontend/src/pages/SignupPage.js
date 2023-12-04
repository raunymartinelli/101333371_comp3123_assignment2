import React, { useState } from 'react';
import ApiService from '../api/ApiService';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
    const [userData, setUserData] = useState({
        user: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ApiService.register(userData);
            console.log('Signup successful', response.data);
            navigate('/AddEmployee'); // Redirect to login page after successful signup
        } catch (error) {
            console.error("Signup failed:", error.response || error.message);
            // Here you can set an error state and display it to the user
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-field">
                    <label>User:</label>
                    <input
                        type="text" // Changed from "user" to "text"
                        name="user"
                        value={userData.user}
                        onChange={handleChange}
                        required
                    />
                </div> {/* This closing tag was missing */}
                <div className="form-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Include additional fields here */}
                <button type="submit" className="submit-button">Sign Up</button>
                <div className="links">
                    <a href="/login">Already got an account? Login</a>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
