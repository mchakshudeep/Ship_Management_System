import React, { useState } from "react";
import ShipList from "../components/Ships/ShipList";
import ShipForm from "../components/Ships/ShipForm";

const ShipsPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Ships</h1>
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Ship
      </button>

      {showModal && <ShipForm onClose={() => setShowModal(false)} />}

      <ShipList />
    </div>
  );
};

export default ShipsPage;
