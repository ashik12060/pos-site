import React, { useState } from 'react';

const Stock = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const entries = [
    { adjustmentDate: '15-07-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '10-07-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '10-07-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '07-07-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '06-07-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '04-07-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '26-05-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '26-05-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '23-05-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
    { adjustmentDate: '22-05-2024', referenceNo: '12345678', createdBy: 'Salman', action: 'Action' },
  ];

  const filteredEntries = entries.filter((entry) =>
    entry.adjustmentDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Stock Adjustment List</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <label htmlFor="warehouse" className="text-gray-600">Warehouse:</label>
            <select id="warehouse" className="border rounded px-3 py-2 mt-1">
              <option value="all">-All Warehouses-</option>
             
            </select>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {}}
            >
              New Stock Adjustment
            </button>
           
          </div>
          
        </div>
        <hr />
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <label htmlFor="entriesPerPage" className="text-gray-600 mr-2">Show:</label>
            <select
              id="entriesPerPage"
              value={entriesPerPage}
              onChange={handleEntriesPerPageChange}
              className="border rounded px-3 py-2"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-gray-600 ml-2">entries</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Adjustment Date</th>
                <th className="px-4 py-2">Reference No.</th>
                <th className="px-4 py-2">Created by</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">{entry.adjustmentDate}</td>
                  <td className="px-4 py-2">{entry.referenceNo}</td>
                  <td className="px-4 py-2">{entry.createdBy}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {}}
                    >
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(filteredEntries.length / entriesPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2 ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredEntries.length / entriesPerPage)}
          >
            Next
          </button>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Showing {indexOfFirstEntry + 1} to {indexOfLastEntry} of {filteredEntries.length} entries
        </p>
      </div>
    </div>
  );
};

export default Stock;