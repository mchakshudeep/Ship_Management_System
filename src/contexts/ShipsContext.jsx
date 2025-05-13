// contexts/ShipsContext.jsx
import React, { createContext, useState, useEffect } from "react";

const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load ships from localStorage on first render
  useEffect(() => {
    const storedShips = localStorage.getItem("ships");
    if (storedShips) {
      try {
        setShips(JSON.parse(storedShips));
      } catch (err) {
        console.error("Failed to parse ships:", err);
      }
    }
    setLoading(false);
  }, []);

  // Save ships to localStorage whenever ships state changes
  useEffect(() => {
    if(!loading){
      localStorage.setItem("ships", JSON.stringify(ships));
    }
  }, [ships]);

  // Add a new ship
  const addShip = (ship) => {
    setShips(prev => [
      ...prev,
      { ...ship, id: `S-${Date.now().toString(36)}` } // simple unique id
    ]);
  };

  // Edit an existing ship
  const editShip = (id, updatedShip) => {
    setShips(prev =>
      prev.map(ship => (ship.id === id ? { ...ship, ...updatedShip } : ship))
    );
  };

  // Delete a ship
  const deleteShip = (id) => {
    setShips(prev => prev.filter(ship => ship.id !== id));
  };

  // Get a ship by ID
  const getShipById = (id) => ships.find(ship => ship.id === id);

  return (
    <ShipsContext.Provider value={{
      ships,
      addShip,
      editShip,
      deleteShip,
      getShipById
    }}>
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsContext;