import React, { useState } from 'react';
import ApiService from '../api/ApiService';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage = () => {
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        gender: '',
        salary: ''

    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData({...employeeData, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ApiService.createEmployee(employeeData);
            console.log(response);
            navigate('/employees');
        } catch (error) {
            console.error("Error creating employee:", error);
        }
    };

    return (
        <div className="employee-form-container">
            <h2 className="employee-form-title">Add Employee</h2>
            <form onSubmit={handleSubmit} className="employee-form">
                <div className="form-field">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employeeData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employeeData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={employeeData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={employeeData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label>Salary:</label>
                    <input
                        type="number"
                        name="salary"
                        value={employeeData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="submit-button">Save</button>
                    <button type="button" onClick={() => navigate('/employees')} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployeePage;
