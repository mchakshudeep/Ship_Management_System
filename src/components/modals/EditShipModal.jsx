import React from "react";

const EditShipModal = ({ editingShip, setEditingShip, handleEditSubmit }) => {
    return (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-md relative">
                <h2 className="text-xl font-bold mb-4">Edit Ship</h2>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={editingShip.name}
                            onChange={(e) =>
                                setEditingShip({ ...editingShip, name: e.target.value })
                            }
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">IMO Number</label>
                        <input
                            type="text"
                            value={editingShip.imoNumber}
                            onChange={(e) =>
                                setEditingShip({ ...editingShip, imoNumber: e.target.value })
                            }
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Flag</label>
                        <input
                            type="text"
                            value={editingShip.flag}
                            onChange={(e) =>
                                setEditingShip({ ...editingShip, flag: e.target.value })
                            }
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Status</label>
                        <select
                            value={editingShip.status}
                            onChange={(e) =>
                                setEditingShip({ ...editingShip, status: e.target.value })
                            }
                            className="w-full border p-2 rounded"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Maintenance">Maintenance</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setEditingShip(null)}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
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

export default EditShipModal;
