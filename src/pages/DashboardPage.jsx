// pages/DashboardPage.jsx
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
const DashboardPage = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
            <button
                onClick={handleLogout}
                className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
        </div>
    );
};
export default DashboardPage;