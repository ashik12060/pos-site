import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StockAdjustmentDetails = () => {
  const [items, setItems] = useState([{ id: 1, name: "Savlon ", quantity: 2 }]);

  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseInt(newQuantity, 10);
    setItems(updatedItems);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const handleEditClick = (item) => {
    navigate("/stock-adjustment/update", { state: { item } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Adjustment Details</h1>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Soft Forests</h2>
          <p>Al Amerat, City:Mahayil</p>
          <p>Phone: 09090909, Mobile: 0193983282929</p>
          <p>Email: abcd@ab.com</p>
          <p>Tax Number: 090909</p>
        </div>
        <div className="text-right">
          <p className="font-bold">Reference No.:</p>
          <p className="font-bold">Date: 21-08-2024 02:23:17 pm</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 table-auto">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-2 text-left w-32">#</th>
              <th className="p-2 text-left">Item Name</th>
              <th className="p-2 text-left w-32">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td className="p-2 text-left">{index + 1}</td>
                <td className="p-2 text-left">{item.name}</td>
                <td className="p-2 text-left">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) =>
                      handleQuantityChange(index, event.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 w-full md:w-24"
                  />
                </td>
              </tr>
            ))}
            <tr className="bg-gray-300">
              <td colSpan="2" className="p-2 text-right font-bold">
                Total
              </td>
              <td className="p-2 text-left font-bold">{calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <label htmlFor="note" className="block mb-1 text-lg font-semibold">
          Note:
        </label>

        <button
          onClick={() => handleEditClick()}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default StockAdjustmentDetails;
