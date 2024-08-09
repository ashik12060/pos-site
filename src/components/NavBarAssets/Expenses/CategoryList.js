// import React from 'react';

// const categories = [
//     { categoryName: 'Mele Tang Road', description: 'Lunch Cost', status: 'Active' },
//     { categoryName: 'Ads', description: '', status: 'Active' },
// ];

// const CategoryList = () => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-xl font-bold">Expense Category List</h1>
//                 <div className="px-4 py-2">
//                     <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Copy</button>
//                     <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Excel</button>
//                     <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">PDF</button>
//                     <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Print</button>
//                     <button className="bg-green-500 text-white py-2 px-4 rounded">CSV</button>
//                 </div>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded">+ New Category</button>
//             </div>
//             <div className="bg-white shadow rounded overflow-hidden">
//                 <table className="min-w-full table-auto">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                                 <input type="checkbox" className="form-checkbox" />
//                             </th>
//                             <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category Name</th>
//                             <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Description</th>
//                             <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
//                             <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {categories.map((category, index) => (
//                             <tr key={index} className="border-b">
//                                 <td className="px-4 py-2">
//                                     <input type="checkbox" className="form-checkbox" />
//                                 </td>
//                                 <td className="px-4 py-2">{category.categoryName}</td>
//                                 <td className="px-4 py-2">{category.description}</td>
//                                 <td className="px-4 py-2">
//                                     <span className="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//                                         {category.status}
//                                     </span>
//                                 </td>
//                                 <td className="px-4 py-2">
//                                     <button className="bg-blue-500 text-white py-1 px-2 rounded">Action</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
               
//             </div>
//             <div className="flex justify-between items-center mt-4">
//                 <span>Showing 1 to {categories.length} of {categories.length} entries</span>
//                 <div>
//                     <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">Previous</button>
//                     <span className="mx-2">1</span>
//                     <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">Next</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CategoryList;


import React, { useState } from 'react';

const categories = [
    { id: 1, categoryName: 'Mele Tang Road', description: 'Lunch Cost', status: 'Active' },
    { id: 2, categoryName: 'Ads', description: '', status: 'Active' },
];

const CategoryList = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(null);

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
        alert('Deleting selected items');
        // Implement delete functionality
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h1 className="text-xl font-bold mb-4 md:mb-0">Expense Category List</h1>
                <div className="flex flex-wrap items-center space-x-2">
                        <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">Copy</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">Excel</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">PDF</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 md:mb-0">Print</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded">CSV</button>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">+ New Category</button>
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
                                            setSelectedCategories(categories.map((category) => category.id));
                                        } else {
                                            setSelectedCategories([]);
                                        }
                                    }}
                                    checked={
                                        selectedCategories.length === categories.length
                                    }
                                />
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category Name</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Description</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
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
                                <td className="px-4 py-2 relative">
                                    <button
                                        onClick={() => toggleDropdown(category.id)}
                                        className="bg-blue-500 text-white py-1 px-2 rounded relative"
                                    >
                                        Action
                                        {dropdownOpen === category.id && (
                                            <div 
                                                className="absolute right-0 top-0 mt-0 w-28 bg-white border rounded shadow-lg z-10"
                                                style={{ transform: 'translateY(-100%)' }}
                                            >
                                                <ul className="py-1">
                                                    <li
                                                        className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                                        onClick={() => alert('Edit Clicked')}
                                                    >
                                                        <i className="fas fa-edit text-blue-500 mr-2"></i>Edit
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                                        onClick={() => alert('Delete Clicked')}
                                                    >
                                                        <i className="fas fa-trash text-red-500 mr-2"></i>Delete
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </button>
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
                <span>Showing 1 to {categories.length} of {categories.length} entries</span>
                <div>
                    <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">Previous</button>
                    <span className="mx-2">1</span>
                    <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded">Next</button>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;
