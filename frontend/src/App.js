import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmployeeListPage from './pages/EmployeeListPage';
import AddEmployeePage from './pages/AddEmployeePage';
import ViewEmployeePage from './pages/ViewEmployeePage';
import UpdateEmployeePage from './pages/UpdateEmployeePage';
import NavigationBar from './components/NavigationBar';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                    path="/employees"
                    element={
                        <PrivateRoute>
                            <EmployeeListPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/add-employee"
                    element={
                        <PrivateRoute>
                            <AddEmployeePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/view-employee/:id"
                    element={
                        <PrivateRoute>
                            <ViewEmployeePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/update-employee/:id"
                    element={
                        <PrivateRoute>
                            <UpdateEmployeePage />
                        </PrivateRoute>
                    }
                />
                {/* ...other routes */}
            </Routes>
        </Router>
    );
};

export default App;
