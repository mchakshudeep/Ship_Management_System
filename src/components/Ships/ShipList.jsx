import React, { useContext } from "react";
import ShipsContext from "../../contexts/ShipsContext";
import { useNavigate } from "react-router-dom";

const ShipList = () => {
    const { ships, deleteShip } = useContext(ShipsContext);
    const navigate = useNavigate();

    if (ships.length === 0) {
        return <div className="p-4">No ships found.</div>;
    }

    const handleEdit = (id) => {
        navigate(`/ships/edit/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this ship?")) {
            deleteShip(id);
        }
    };

    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white shadow rounded">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Ship Id</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">IMO Number</th>
                        <th className="px-4 py-2">Flag</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ships.map((ship) => (
                        <tr key={ship.id} className="border-t">
                            <td className="px-4 py-2">{ship.id}</td>
                            <td className="px-4 py-2">{ship.name}</td>
                            <td className="px-4 py-2">{ship.imoNumber}</td>
                            <td className="px-4 py-2">{ship.flag}</td>
                            <td className="px-4 py-2">{ship.status}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button 
                                    onClick={() => handleEdit(ship.id)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(ship.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShipList;