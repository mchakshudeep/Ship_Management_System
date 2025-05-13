import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShipsContext from '../contexts/ShipsContext';

const EditShipPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getShipById, editShip } = useContext(ShipsContext);
    const [error, setError] = useState("");
    
    const [form, setForm] = useState({
        name: "",
        imoNumber: "",
        flag: "",
        status: "Active"
    });

    useEffect(() => {
        const ship = getShipById(id);
        if (ship) {
            setForm(ship);
        }
    }, [id, getShipById]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.imoNumber || !form.flag) {
            setError("All fields are required.");
            return;
        }
        editShip(id, form);
        navigate('/ships');
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6">Edit Ship</h1>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">IMO Number</label>
                    <input
                        name="imoNumber"
                        value={form.imoNumber}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Flag</label>
                    <input
                        name="flag"
                        value={form.flag}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Status</label>
                    <select
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
                <div className="space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/ships')}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditShipPage;