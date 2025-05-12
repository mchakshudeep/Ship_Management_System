import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const defaultUsers = [
  { id: 1, email: "admin@entnt.com", password: "admin123", role: "Admin" },
  { id: 2, email: "inspector@entnt.com", password: "inspect123", role: "Inspector" },
  { id: 3, email: "engineer@entnt.com", password: "engineer123", role: "Engineer" },
];


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
    // Restore session if user is already logged in
    const session = localStorage.getItem("session");
    if (session) setUser(JSON.parse(session));
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("session", JSON.stringify(foundUser));
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("session");
  };

  if(loading){
    return <div>Loading...</div>; 
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;