// import React, { useState } from "react";

// function ExpenseList() {
//   const [entriesPerPage, setEntriesPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   const data = [
//     {
//       adjustmentDate: "15-07-2024",
//       referenceNo: "123456",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "10-07-2024",
//       referenceNo: "789012",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "10-07-2024",
//       referenceNo: "345678",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "07-07-2024",
//       referenceNo: "901234",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "06-07-2024",
//       referenceNo: "567890",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "04-07-2024",
//       referenceNo: "123456",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "26-05-2024",
//       referenceNo: "789012",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "26-05-2024",
//       referenceNo: "345678",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "23-05-2024",
//       referenceNo: "901234",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "22-05-2024",
//       referenceNo: "567890",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "21-05-2024",
//       referenceNo: "123456",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "20-05-2024",
//       referenceNo: "789012",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "19-05-2024",
//       referenceNo: "345678",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "18-05-2024",
//       referenceNo: "901234",
//       createdBy: "Salman",
//     },
//     {
//       adjustmentDate: "17-05-2024",
//       referenceNo: "567890",
//       createdBy: "Salman",
//     },
//   ];

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const filtered = data.filter((item) =>
//       item.adjustmentDate.includes(e.target.value)
//     );
//     setFilteredData(filtered);
//   };

//   const handleEntriesPerPageChange = (e) => {
//     setEntriesPerPage(parseInt(e.target.value));
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * entriesPerPage;
//   const endIndex = startIndex + entriesPerPage;

//   const displayedData = searchTerm
//     ? filteredData.slice(startIndex, endIndex)
//     : data.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(
//     searchTerm ? filteredData.length : data.length / entriesPerPage
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Stock Adjustment List</h1>
//       <div className="flex mb-4">
//         <div className="flex-1 mr-2">
//           <input
//             type="text"
//             className="w-full px-3 py-2 border rounded-md"
//             placeholder="Search by Date"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//         <div className="flex-1">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
//             onClick={() => {
//               // Handle "New Stock Adjustment" button click
//             }}
//           >
//             New Stock Adjustment
//           </button>
//         </div>
//       </div>

//       <div className="flex mb-4">
//         <div className="mr-2">
//           <label htmlFor="entriesPerPage">Show</label>
//           <select
//             id="entriesPerPage"
//             className="px-2 py-1 border rounded-md"
//             value={entriesPerPage}
//             onChange={handleEntriesPerPageChange}
//           >
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//             <option value="100">100</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="entriesPerPage">entries</label>
//         </div>
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border"></th>
//             <th className="px-4 py-2 border">Adjustment Date</th>
//             <th className="px-4 py-2 border">Reference No.</th>
//             <th className="px-4 py-2 border">Created by</th>
//             <th className="px-4 py-2 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {displayedData.map((item, index) => (
//             <tr key={index}>
//               <td className="px-4 py-2 border">
//                 <input type="checkbox" />
//               </td>
//               <td className="px-4 py-2 border">{item.adjustmentDate}</td>
//               <td className="px-4 py-2 border">{item.referenceNo}</td>
//               <td className="px-4 py-2 border">{item.createdBy}</td>
//               <td className="px-4 py-2 border">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
//                   onClick={() => {
//                     // Handle "Action" button click
//                   }}
//                 >
//                   Action
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-4">
//         <p className="text-gray-500">
//           Showing {startIndex + 1} to {endIndex} of{" "}
//           {searchTerm ? filteredData.length : data.length} entries
//         </p>
//       </div>

//       <div className="mt-4 flex justify-center">
//         <button
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mr-2"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2 ${
//               currentPage === page ? "bg-blue-700" : ""
//             }`}
//             onClick={() => handlePageChange(page)}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ExpenseList;


import React from 'react';

const expenses = [
    { date: '26-05-2024', category: 'Mele Tang Road', referenceNo: '', expenseFor: 'Lunch Cost', amount: 1200.00, account: '', note: '', createdBy: 'Salman' },
    { date: '15-05-2024', category: 'Ads', referenceNo: '', expenseFor: 'bill', amount: 200.00, account: '', note: '', createdBy: 'Shanto' },
    { date: '26-04-2024', category: 'Ads', referenceNo: '', expenseFor: 'Ads', amount: 353.00, account: 'Bkash', note: '', createdBy: 'Chris' },
];

const ExpenseList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Expenses List</h1>
                <div className="px-4 py-2">
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Copy</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Excel</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">PDF</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Print</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded">CSV</button>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">+ New Expense</button>
            </div>
            <div className="bg-white shadow rounded overflow-hidden">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Reference No.</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Expense for</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Amount</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Account</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Note</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Created by</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{expense.date}</td>
                                <td className="px-4 py-2">{expense.category}</td>
                                <td className="px-4 py-2">{expense.referenceNo}</td>
                                <td className="px-4 py-2">{expense.expenseFor}</td>
                                <td className="px-4 py-2">{expense.amount.toFixed(2)}</td>
                                <td className="px-4 py-2">{expense.account}</td>
                                <td className="px-4 py-2">{expense.note}</td>
                                <td className="px-4 py-2">{expense.createdBy}</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 text-white py-1 px-2 rounded">Action</button>
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100">
                            <td className="px-4 py-2 font-semibold" colSpan="4">Total</td>
                            <td className="px-4 py-2 font-semibold">{expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</td>
                            <td colSpan="4"></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default ExpenseList;
