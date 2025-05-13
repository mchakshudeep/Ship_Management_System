import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShipsContext from '../contexts/ShipsContext';

const ShipDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getShipById } = useContext(ShipsContext);
    const ship = getShipById(id);

    if (!ship) {
        return <div className="p-4">Ship not found.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6">Ship Details</h1>
            <div className="space-y-4">
                <div>
                    <label className="font-semibold">Ship ID:</label>
                    <p>{ship.id}</p>
                </div>
                <div>
                    <label className="font-semibold">Name:</label>
                    <p>{ship.name}</p>
                </div>
                <div>
                    <label className="font-semibold">IMO Number:</label>
                    <p>{ship.imoNumber}</p>
                </div>
                <div>
                    <label className="font-semibold">Flag:</label>
                    <p>{ship.flag}</p>
                </div>
                <div>
                    <label className="font-semibold">Status:</label>
                    <p>{ship.status}</p>
                </div>
            </div>
            <div className="mt-6 space-x-4">
                <button
                    onClick={() => navigate('/ships')}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back to Ships
                </button>
                <button
                    onClick={() => navigate(`/ships/edit/${ship.id}`)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                    Edit Ship
                </button>
            </div>
        </div>
    );
};

export default ShipDetailsPage;