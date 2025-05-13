// pages/LoginPage.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import LoginForm from "../components/Authentication/LoginForm";

const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();

  useEffect(() => {
    if (user && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [user, navigate,location]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default LoginPage;