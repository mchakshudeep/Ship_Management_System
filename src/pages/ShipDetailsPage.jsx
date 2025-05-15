import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShipsContext from '../contexts/ShipsContext';
import ShipDetails from '../components/Ships/ShipDetails';
import ComponentList from '../components/Components/ComponentList';
import ComponentForm from '../components/Components/ComponentForm'; 

const ShipDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getShipById } = useContext(ShipsContext);
    const ship = getShipById(id);
    const [isComponentFormVisible, setIsComponentFormVisible] = useState(false); 

    if (!ship) {
        return <div className="p-4">Ship not found.</div>;
    }

    const toggleComponentForm = () => {
        setIsComponentFormVisible(!isComponentFormVisible); 
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6">Ship Details</h1>

     
            <ShipDetails ship={ship} />

            <div className="mt-6 space-x-4">
                <button
                    onClick={() => navigate('/ships')}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back to Ships
                </button>
                <button
                    onClick={toggleComponentForm}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Component
                </button>
            </div>

    
            {isComponentFormVisible && <ComponentForm shipId={id} onClose={toggleComponentForm} />}

            <ComponentList shipId={id} />
        </div>
    );
};

export default ShipDetailsPage;
