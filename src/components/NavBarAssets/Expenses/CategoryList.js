import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    categoryName: "Mele Tang Road",
    description: "Lunch Cost",
    status: "Active",
  },
  { id: 2, categoryName: "Ads", description: "", status: "Active" },
];

const CategoryList = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleSelect = (id) => {

    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleDelete = () => {
    alert("Deleting selected items");
  };


  const handleAction = (actionType, entry) => {
    switch (actionType) {
      case "edit":
        navigate(`/expense-category/update`);
        break;
      
      case "delete":
        alert(`Deleting entry with reference no: ${entry.referenceNo}`);
        break;
      default:
        alert("Unknown action");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4 md:mb-0">
          Expense Category List
        </h1>
        <div className="flex flex-wrap items-center space-x-2">
          <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">
            Copy
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">
            Excel
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">
            PDF
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">
            Print
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            CSV
          </button>
        </div>
        <Link
          to="/expense-category/add"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0"
        >
          + New Category
        </Link>
      </div>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories(
                        categories.map((category) => category.id)
                      );
                    } else {
                      setSelectedCategories([]);
                    }
                  }}
                  checked={selectedCategories.length === categories.length}
                />
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Category Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Description
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={() => handleSelect(category.id)}
                    checked={selectedCategories.includes(category.id)}
                  />
                </td>
                <td className="px-4 py-2">{category.categoryName}</td>
                <td className="px-4 py-2">{category.description}</td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {category.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <select
                    className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                    onChange={(e) => handleAction(e.target.value)}
                  >
                    <option value="">Action</option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-2 flex justify-between items-center">
          {selectedCategories.length > 0 && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete Selected
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>
          Showing 1 to {categories.length} of {categories.length} entries
        </span>
        <div>
          <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">
            Previous
          </button>
          <span className="mx-2">1</span>
          <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
