import React, { createContext, useState, useEffect } from "react";
import Ship from "../models/Ship"; // Ship model ko import karenge

const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load ships from localStorage on first render
  useEffect(() => {
    const storedShips = localStorage.getItem("ships");
    if (storedShips) {
      try {
        const parsedShips = JSON.parse(storedShips);
        setShips(parsedShips);
      } catch (err) {
        console.error("Failed to parse ships:", err);
      }
    }
    setLoading(false);
  }, []);

  
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("ships", JSON.stringify(ships));
    }
  }, [ships]);

  
  const addShip = (newShip) => {
    setShips((prev) => [...prev, newShip]);
  };


  const editShip = (id, updatedShip) => {
   setShips((prev) =>
      prev.map((ship) => (ship.shipId === id ? { ...ship, ...updatedShip } : ship))
    );
  };


  const deleteShip = (id) => {
    setShips((prev) => prev.filter((ship) => ship.shipId !== id));
  };


  const getShipById = (id) => ships.find((ship) => ship.shipId === id);

  return (
    <ShipsContext.Provider
      value={{
        ships,
        addShip,
        editShip,
        deleteShip,
        getShipById,
      }}
    >
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsContext;
