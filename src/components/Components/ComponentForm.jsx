import React, { useState, useContext } from 'react';
import ComponentsContext from '../../contexts/ComponentsContext';
import Component from '../../models/Component';

const ComponentForm = ({ shipId, onClose }) => {
    const { addComponent } = useContext(ComponentsContext);

    const [form, setForm] = useState({
        name: "",
        serialNumber: "",
        installDate: "",
        lastMaintenanceDate: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, serialNumber, installDate, lastMaintenanceDate } = form;
        try {
            console.log(shipId);
            const newComponent = new Component(name,serialNumber,installDate,lastMaintenanceDate, shipId); 
            newComponent.validate();
            addComponent(newComponent);
            onClose();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white/30 backdrop-blur-sm z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Add Component</h2>
                {error && <div className="text-red-600 mb-2">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="font-semibold">Component Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="serialNumber" className="font-semibold">Serial Number</label>
                        <input
                            id="serialNumber"
                            name="serialNumber"
                            type="text"
                            value={form.serialNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="installDate" className="font-semibold">Install Date</label>
                        <input
                            id="installDate"
                            name="installDate"
                            type="date"
                            value={form.installDate}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastMaintenanceDate" className="font-semibold">Last Maintenance Date</label>
                        <input
                            id="lastMaintenanceDate"
                            name="lastMaintenanceDate"
                            type="date"
                            value={form.lastMaintenanceDate}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mt-4 space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Component
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ComponentForm;
