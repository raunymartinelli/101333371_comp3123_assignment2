import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isUserAuthenticated } from '../utils/auth';


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    return isUserAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;


