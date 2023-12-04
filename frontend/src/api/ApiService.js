import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3004',
    headers: {
        'Content-Type': 'application/json',

    },
});

const ApiService = {
    // Auth endpoints
    login: (credentials) => api.post('/login', credentials),
    register: (userData) => api.post('/register', userData),

    // Employee endpoints
    getEmployees: () => api.get('/api/v1/emp/employees'),
    getEmployeeById: (id) => api.get(`/api/v1/emp/employees/${id}`),
    createEmployee: (employeeData) => api.post('/api/v1/emp/employees', employeeData),
    updateEmployee: (id, employeeData) => api.put(`/api/v1/emp/employees/${id}`, employeeData),
    deleteEmployee: (id) => api.delete(`/api/v1/emp/employees/${id}`),


};

export default ApiService;
