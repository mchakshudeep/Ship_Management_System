import React, { useContext } from "react";
import ShipsContext from "../../contexts/ShipsContext";

const ShipList = () => {
  const { ships } = useContext(ShipsContext);

  if (ships.length === 0) {
    return <div className="p-4">No ships found.</div>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">IMO Number</th>
            <th className="px-4 py-2">Flag</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {ships.map((ship) => (
            <tr key={ship.id} className="border-t">
              <td className="px-4 py-2">{ship.name}</td>
              <td className="px-4 py-2">{ship.imoNumber}</td>
              <td className="px-4 py-2">{ship.flag}</td>
              <td className="px-4 py-2">{ship.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipList;