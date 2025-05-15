import React, { useState, useEffect } from "react";

const ComponentEditModal = ({ isOpen, onClose, onSave, component }) => {
    const [editedComponent, setEditedComponent] = useState(component);

    useEffect(() => {
        setEditedComponent(component);
    }, [component]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedComponent(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedComponent);
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Component</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={editedComponent.name || ''}
                        onChange={handleChange}
                        placeholder="Component Name"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="serialNumber"
                        value={editedComponent.serialNumber || ''}
                        onChange={handleChange}
                        placeholder="Serial Number"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="date"
                        name="installationDate"
                        value={editedComponent.installationDate || ''}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="date"
                        name="lastMaintenanceDate"
                        value={editedComponent.lastMaintenanceDate || ''}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <div className="mt-6 flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ComponentEditModal;
