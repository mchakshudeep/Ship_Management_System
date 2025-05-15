import React from 'react';

const ShipDetails = ({ ship }) => {
    if (!ship) return null;

    return (
        <div className="space-y-4">
            <div>
                <label className="font-semibold">Ship ID:</label>
                <p>{ship.shipId}</p>
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
    );
};

export default ShipDetails;
