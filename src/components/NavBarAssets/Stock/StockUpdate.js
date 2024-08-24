import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState({ name: '', quantity: 0 });

  useEffect(() => {
    if (location.state?.item) {
      setItem(location.state.item);
    }
  }, [location.state]);

  const handleNameChange = (event) => {
    setItem({ ...item, name: event.target.value });
  };

  const handleQuantityChange = (event) => {
    setItem({ ...item, quantity: parseInt(event.target.value, 10) });
  };

  const handleSave = () => {
    console.log('Item saved:', item);
    navigate(-1); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 text-lg font-semibold">
          Item Name:
        </label>
        <input
          id="name"
          type="text"
          value={item.name}
          onChange={handleNameChange}
          className="border border-gray-300 rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block mb-1 text-lg font-semibold">
          Quantity:
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded px-2 py-1 w-full"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default EditItem;
