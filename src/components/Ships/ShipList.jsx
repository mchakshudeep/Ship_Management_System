import React, { useContext, useState } from "react";
import ShipsContext from "../../contexts/ShipsContext";

import DeleteShipModal from "../modals/DeleteShipModal";
import EditShipModal from "../modals/EditShipModal";


const ShipList = () => {
    const { ships, deleteShip, editShip } = useContext(ShipsContext);
    const [showModal, setShowModal] = useState(false);
    const [shipToDelete, setShipToDelete] = useState(null);
    const [editingShip, setEditingShip] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [searchParameter, setSearchParameter] = useState("name"); // New state for selected search parameter

    const handleDeleteClick = (id) => {
        setShipToDelete(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        if (shipToDelete) {
            deleteShip(shipToDelete);
            setShipToDelete(null);
            setShowModal(false);
        }
    };

    const cancelDelete = () => {
        setShipToDelete(null);
        setShowModal(false);
    };

    const handleEdit = (ship) => {
        setEditingShip(ship);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editShip(editingShip.id, editingShip);
        setEditingShip(null); // Close the modal
    };

    // Updated filteredShips logic to filter based on selected parameter
    const filteredShips = ships.filter((ship) => {
        const searchValue = ship[searchParameter]?.toLowerCase() || "";
        const matchesSearch = searchValue.includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || ship.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const isEmpty = filteredShips.length === 0;

    return (
        <div className="overflow-x-auto p-4">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                <input
                    type="text"
                    placeholder={`Search by ${searchParameter}...`} // Dynamic placeholder
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-2 py-1 rounded w-full md:w-1/2"
                />
                <select
                    value={searchParameter}
                    onChange={(e) => setSearchParameter(e.target.value)}
                    className="border px-2 py-1 rounded w-full md:w-1/4"
                >
                    <option value="name">Name</option>
                    <option value="imoNumber">IMO Number</option>
                    <option value="flag">Flag</option>
                    <option value="status">Status</option>
                </select>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border px-2 py-1 rounded w-full md:w-1/4"
                >
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Maintenance">Maintenance</option>
                </select>
            </div>
            {isEmpty ? (
                <div className="p-4 text-center text-gray-500">No ships found.</div>
            ) : (
                <table className="min-w-full bg-white shadow rounded">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Ship Id</th>
                            <th className="px-4 py-2">Ship Name</th>
                            <th className="px-4 py-2">IMO Number</th>
                            <th className="px-4 py-2">Flag</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredShips.map((ship) => (
                            <tr key={ship.id} className="border-t">
                                <td className="px-4 py-2">{ship.id}</td>
                                <td className="px-4 py-2">{ship.name}</td>
                                <td className="px-4 py-2">{ship.imoNumber}</td>
                                <td className="px-4 py-2">{ship.flag}</td>
                                <td className="px-4 py-2">{ship.status}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(ship)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(ship.id)}
                                        className="bg-red-600 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {editingShip && (
                <EditShipModal
                    editingShip={editingShip}
                    setEditingShip={setEditingShip}
                    handleEditSubmit={handleEditSubmit}
                />
            )}

            <DeleteShipModal
                show={showModal}
                onCancel={cancelDelete}
                onConfirm={confirmDelete}
            />
        </div>
    );
};

export default ShipList;
