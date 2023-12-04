// This component is similar to AddEmployeePage but for updating
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../api/ApiService';
import './UpdateEmployeePage.css';

const UpdateEmployeePage = () => {
    const { id } = useParams();
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        salary: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await ApiService.getEmployeeById(id);
                setEmployeeData(response.data.data);
            } catch (error) {
                console.error("Error fetching employee:", error);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Attempting to save:', employeeData); // Debug: Log the current state
        try {
            const response = await ApiService.updateEmployee(id, employeeData);
            console.log('Save successful', response.data); // Debug: Log the response
            navigate('/employees'); // Redirect to employees list
        } catch (error) {
            console.error("Error updating employee:", error); // Debug: Log any error
            // Implement how you wish to handle the error (e.g., show a message to the user)
        }
    };

    return (
        <div className="update-employee-container">
            <h2 className="update-employee-title">Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employeeData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employeeData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={employeeData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={employeeData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Salary:</label>
                    <input
                        type="number"
                        name="salary"
                        value={employeeData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Save</button>
                <button type="button" onClick={() => navigate('/employees')} className="cancel-button">Cancel</button>
            </form>
        </div>
    );
};

export default UpdateEmployeePage;
