import React, { useContext, useState } from 'react';
import ComponentsContext from '../../contexts/ComponentsContext';
import ComponentEditModal from '../modals/ComponentEditModal';
import ComponentDeleteModal from '../modals/ComponentDeleteModal';

const ShipComponentsList = ({ shipId }) => {
    const { getComponentsByShipId, editComponent, deleteComponent } = useContext(ComponentsContext);
    const components = getComponentsByShipId(shipId);

    const [selectedComponent, setSelectedComponent] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = (component) => {
        setSelectedComponent(component);
        setEditModalOpen(true);
    };

    const handleDelete = (component) => {
        setSelectedComponent(component);
        setDeleteModalOpen(true);
    };

    const handleSaveEdit = (updatedComponent) => {
        editComponent(updatedComponent);
        setEditModalOpen(false);
        setSelectedComponent(null);
    };

    const handleConfirmDelete = (componentId) => {
        deleteComponent(componentId);
        setDeleteModalOpen(false);
        setSelectedComponent(null);
    };

    if (!components || components.length === 0) {
        return <p>No components found for this ship.</p>;
    }

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Components</h2>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border-b px-4 py-2 text-left">Component Id</th>
                        <th className="border-b px-4 py-2 text-left">Name</th>
                        <th className="border-b px-4 py-2 text-left">Serial Number</th>
                        <th className="border-b px-4 py-2 text-left">Install Date</th>
                        <th className="border-b px-4 py-2 text-left">Last Maintenance Date</th>
                        <th className="border-b px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {components.map((component) => (
                        <tr key={component.componentId}>
                            <td className="border-b px-4 py-2">{component.componentId}</td>
                            <td className="border-b px-4 py-2">{component.name}</td>
                            <td className="border-b px-4 py-2">{component.serialNumber}</td>
                            <td className="border-b px-4 py-2">{component.installationDate}</td>
                            <td className="border-b px-4 py-2">{component.lastMaintenanceDate}</td>
                            <td className="border-b px-4 py-2 space-x-2">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleEdit(component)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                                    onClick={() => handleDelete(component)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {editModalOpen && selectedComponent && (
                <ComponentEditModal
                    isOpen={editModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleSaveEdit}
                    component={selectedComponent}
                />
            )}

            {/* Delete Modal */}
            {deleteModalOpen && selectedComponent && (
                <ComponentDeleteModal
                    isOpen={deleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onDelete={handleConfirmDelete}
                    component={selectedComponent}
                />
            )}
        </div>
    );
};

export default ShipComponentsList;
