import React, { createContext, useEffect, useState } from 'react';

const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedComponents = localStorage.getItem('components');
        if (storedComponents) {
            try {
                const parsedComponents = JSON.parse(storedComponents);
                setComponents(parsedComponents);
            } catch (err) {
                console.error('Failed to parse components:', err);
            }
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('components', JSON.stringify(components));
        }
    }, [components, loading]);

    const addComponent = (newComponent) => {
        setComponents(prev => [...prev, newComponent]);
    };

    const editComponent = (updatedComponent) => {
        setComponents(prev =>
            prev.map(c => c.componentId === updatedComponent.componentId ? updatedComponent : c)
        );
    };

    const deleteComponent = (componentId) => {
        setComponents(prev =>
            prev.filter(c => c.componentId !== componentId)
        );
    };


    const getComponentsByShipId = (shipId) => {
        return components.filter(c => c.shipId === shipId);
    };

    return (
        <ComponentsContext.Provider value={{ components, addComponent, editComponent, deleteComponent, getComponentsByShipId }}>
            {children}
        </ComponentsContext.Provider>
    );
};

export default ComponentsContext;
