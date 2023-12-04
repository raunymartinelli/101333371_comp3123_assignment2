// This component is rendered when navigating to "/view-employee/:id"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../api/ApiService';
import './ViewEmployeePage.css'

const ViewEmployeePage = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await ApiService.getEmployeeById(id);
                console.log(response.data)
                setEmployee(response.data.data);
            } catch (error) {
                console.error("Error fetching employee details:", error);
            }
        };

        fetchEmployee();
    }, [id]);

    return (
        <div className="view-employee-container">
            <h2 className="view-employee-title">View Employee Details</h2>
            {employee ? (
                <>
                    <p className="employee-detail"><span>First Name:</span> {employee.first_name}</p>
                    <p className="employee-detail"><span>Last Name:</span> {employee.last_name}</p>
                    <p className="employee-detail"><span>Email:</span> {employee.email}</p>
                    <p className="employee-detail"><span>Gender:</span> {employee.gender}</p>
                    <p className="employee-detail"><span>Salary:</span> {employee.salary}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ViewEmployeePage;

