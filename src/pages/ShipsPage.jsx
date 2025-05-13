import React, { useState } from "react";
import ShipList from "../components/Ships/ShipList";
import ShipForm from "../components/Ships/ShipForm";

const ShipsPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Ships</h1>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {showForm ? "Hide Form" : "Add Ship"}
      </button>
      {showForm && <ShipForm onSuccess={() => setShowForm(false)} />}
      <ShipList />
    </div>
  );
};

export default ShipsPage;