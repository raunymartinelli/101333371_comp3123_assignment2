import React, { useEffect, useState } from 'react';
import ApiService from '../api/ApiService';
import { Link } from 'react-router-dom';
import './EmployeeListPage.css';

const EmployeeListPage = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        ApiService.getEmployees()
            .then((response) => {
                console.log(response.data.data);
                setEmployees(response.data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = async (id) => {
        try {
            await ApiService.deleteEmployee(id);
            setEmployees(employees.filter((employee) => employee.id !== id));
        } catch (error) {
            console.error("Error deleting employee:", error);
            // Handle the error appropriately
        }
    };

    return (
        <div className="signup-container"> {/* Use the same container class as SignupPage */}
            <h2 className="employee-list-title">Employee List</h2>
            <div className="employee-list">
                {employees && employees.map((employee) => (
                    <div className="form-field employee-item" key={employee.id}>
                        <span className="employee-name">{employee.first_name} {employee.last_name}</span>
                        <div className="employee-action-links">
                            <Link to={`/view-employee/${employee._id}`}>View</Link>
                            <Link to={`/update-employee/${employee._id}`}>Edit</Link>
                            <button onClick={() => handleDelete(employee._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/add-employee" className="submit-button add-employee-link">Add New Employee</Link>
        </div>
    );
};


export default EmployeeListPage;
