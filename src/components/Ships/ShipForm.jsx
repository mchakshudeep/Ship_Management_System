import React, { useState, useContext } from "react";
import ShipsContext from "../../contexts/ShipsContext";

const ShipForm = ({ onSuccess }) => {
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
    // Basic validation
    if (!form.name || !form.imoNumber || !form.flag) {
      setError("All fields are required.");
      return;
    }
    addShip(form);
    setForm({ name: "", imoNumber: "", flag: "", status: "Active" });
    setError("");
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Add New Ship</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <div className="mb-2">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <input
          name="imoNumber"
          placeholder="IMO Number"
          value={form.imoNumber}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <input
          name="flag"
          placeholder="Flag"
          value={form.flag}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Ship
      </button>
    </form>
  );
};

export default ShipForm;