import React from "react";

const ComponentDeleteModal = ({ isOpen, onClose, onDelete, component }) => {
    if (!isOpen) return null;

    const handleDelete = () => {
        if (component && component.componentId) {
            onDelete(component.componentId);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
                <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                <p className="mb-4">
                    Are you sure you want to delete component <strong>{component?.name}</strong>?
                </p>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        disabled={!component || !component.componentId}
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComponentDeleteModal;
