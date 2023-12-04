
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    const navigate = useNavigate(); // useNavigate is called inside the component.

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // This will navigate to the login route.
    };

    return (
        <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            {localStorage.getItem('token') ? (
                <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
            ) : (
                <NavLink to="/login"></NavLink>
            )}
            {localStorage.getItem('token') && <NavLink to="/employees">Employees</NavLink>}
        </nav>
    );
};

export default NavigationBar;
