import React, { useState, useContext } from "react";
import ShipsContext from "../../contexts/ShipsContext";
import Ship from "../../models/Ship"; // Import your Ship class

const ShipForm = ({ onClose }) => {
  const { addShip } = useContext(ShipsContext);

  const [form, setForm] = useState({
    name: "",
    imoNumber: "",
    flag: "",
    status: "Active",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, imoNumber, flag, status } = form;

    try {
      const newShip = new Ship(name, imoNumber, flag, status); // Use the Ship class
      newShip.validate(); // optional validation method
      addShip(newShip);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Add New Ship</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Ship Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter ship name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="imoNumber" className="block font-medium mb-1">
              IMO Number
            </label>
            <input
              id="imoNumber"
              name="imoNumber"
              placeholder="Enter IMO number"
              value={form.imoNumber}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="flag" className="block font-medium mb-1">
              Flag
            </label>
            <input
              id="flag"
              name="flag"
              placeholder="Enter flag"
              value={form.flag}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="status" className="block font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Ship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipForm;
