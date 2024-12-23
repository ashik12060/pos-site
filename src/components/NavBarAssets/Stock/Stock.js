import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Stock = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {

  //   const fetchData = () => {

  //     const data = [
  //       { adjustmentDate: "15-07-2024", referenceNo: "12345678", createdBy: "Salman" },
  //       { adjustmentDate: "10-07-2024", referenceNo: "87654321", createdBy: "Ayesha" },
  //       { adjustmentDate: "10-07-2024", referenceNo: "23456789", createdBy: "John" },
  //       { adjustmentDate: "07-07-2024", referenceNo: "34567890", createdBy: "Anna" },
  //       { adjustmentDate: "06-07-2024", referenceNo: "45678901", createdBy: "Mia" },
  //       { adjustmentDate: "04-07-2024", referenceNo: "56789012", createdBy: "James" },
  //       { adjustmentDate: "26-05-2024", referenceNo: "67890123", createdBy: "Ali" },
  //       { adjustmentDate: "26-05-2024", referenceNo: "78901234", createdBy: "Noah" },
  //       { adjustmentDate: "23-05-2024", referenceNo: "89012345", createdBy: "Zara" },
  //       { adjustmentDate: "22-05-2024", referenceNo: "90123456", createdBy: "Emma" },
  //     ];
  //     setEntries(data);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/stock`)
      .then(res => res.json())
      .then(data => setEntries(data));
  }, [entries]);

  const filteredEntries = entries.filter(entry =>
    entry.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEntries.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesPerPageChange = event => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  const handleAction = (actionType, entry, id) => {
    switch (actionType) {
      case 'view':
        navigate(`/stock-adjustment/details`);
        break;
      case 'edit':
        alert(`Editing entry with reference no: ${entry.referenceNo}`);
        break;
      case 'delete':
        // alert(`Deleting entry with reference no: ${entry.referenceNo}`);
        const proceed = window.confirm('Are You Sure ?');
        if (proceed) {
          const url = `http://localhost:5000/stock/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
              const remaining = entries.filter(product => product._id !== id);
              setEntries(remaining);
              toast.success('Successfully Delete ');
            });
        }
        break;
      default:
        alert('Unknown action');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Stock Adjustment List
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div className="mb-4 md:mb-0">
            <label htmlFor="warehouse" className="text-gray-600">
              Warehouse:
            </label>
            <select id="warehouse" className="border rounded px-3 py-2 mt-1">
              <option value="all">-All Warehouses-</option>
            </select>
          </div>
          <div>
            <Link
              to="/stock/add"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert('New Stock Adjustment')}
            >
              <span className="text-xl font-bold">+</span> New Stock Adjustment
            </Link>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <label htmlFor="entriesPerPage" className="text-gray-600 mr-2">
              Show:
            </label>
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
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2 w-full md:w-64"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="px-4 py-2">Select</th>
                <th className="px-4 py-2">Adjustment Date</th>
                <th className="px-4 py-2">Reference No.</th>
                <th className="px-4 py-2">Created by</th>
                <th className="px-4 py-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">{entry.date}</td>
                  <td className="px-4 py-2">{entry.referenceNo}</td>
                  <td className="px-4 py-2">Jhon</td>
                  <td className="px-4 py-2 text-right">
                    <select
                      className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                      onChange={e =>
                        handleAction(e.target.value, entry, entry._id)
                      }
                    >
                      <option value="">Action</option>
                      <option value="view">View</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mb-2 md:mb-0 cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex flex-wrap justify-center md:justify-start mb-2 md:mb-0">
            {Array.from({
              length: Math.ceil(filteredEntries.length / entriesPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2 mb-2 md:mb-0 ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredEntries.length / entriesPerPage)
            }
          >
            Next
          </button>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Showing {indexOfFirstEntry + 1} to{' '}
          {Math.min(indexOfLastEntry, filteredEntries.length)} of{' '}
          {filteredEntries.length} entries
        </p>
      </div>
    </div>
  );
};

export default Stock;
