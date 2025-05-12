import React from "react";
import ShipList from "../components/Ships/ShipList";

const ShipsPage = () => (
    console.log("ShipsPage"),
  <div className="max-w-4xl mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-4">Ships</h1>
    <ShipList />
    {/* Later: Add button for "Add Ship" and forms here */}
  </div>
);

export default ShipsPage;