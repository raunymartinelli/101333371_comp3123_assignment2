export const loginUser = (token) => {
    localStorage.setItem('token', token);
};

export const logoutUser = () => {
    localStorage.removeItem('token');
};

export const isUserAuthenticated = () => {
    const token = localStorage.getItem('token');
    // Add your logic here to check for token expiration if needed
    return !!token;
};

export const getToken = () => {
    return localStorage.getItem('token');
};

