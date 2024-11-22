import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// const expenses = [
//   {
//     date: "26-05-2024",
//     category: "Mele Tang Road",
//     referenceNo: "",
//     expenseFor: "Lunch Cost",
//     amount: 1200.0,
//     account: "",
//     note: "",
//     createdBy: "Salman",
//   },
//   {
//     date: "15-05-2024",
//     category: "Ads",
//     referenceNo: "",
//     expenseFor: "bill",
//     amount: 200.0,
//     account: "",
//     note: "",
//     createdBy: "Shanto",
//   },
//   {
//     date: "26-04-2024",
//     category: "Ads",
//     referenceNo: "",
//     expenseFor: "Ads",
//     amount: 353.0,
//     account: "Bkash",
//     note: "",
//     createdBy: "Chris",
//   },
// ];

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/expense`)
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, [expenses]);

  const filteredEntries = entries.filter(entry =>
    entry.adjustmentDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEntries.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const handleAction = (actionType, entry, id) => {
    switch (actionType) {
      case 'edit':
        navigate(`/expense-list/update`);
        break;

      case 'delete':
        const proceed = window.confirm('Are You Sure ?');
        if (proceed) {
          const url = `http://localhost:5000/expenseDelete/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
              const remaining = expenses.filter(product => product._id !== id);
              setExpenses(remaining);
              toast.success('Successfully Delete ');
            });
        }
        break;
      default:
        alert('Unknown action');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Expenses List</h1>
        <div className="px-4 py-2">
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">
            Copy
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">
            Excel
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">
            PDF
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">
            Print
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            CSV
          </button>
        </div>
        <Link
          to="/expense-list/add"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          + New Expense
        </Link>
      </div>
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Reference No.
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Expense for
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Account
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Note
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Created by
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{expense?.expenseDate}</td>
                <td className="px-4 py-2">{expense?.category}</td>
                <td className="px-4 py-2">{expense?.referenceNo}</td>
                <td className="px-4 py-2">{expense?.expenseFor}</td>
                {/* <td className="px-4 py-2">{expense.amount.toFixed(2)}</td> */}
                <td className="px-4 py-2">{expense?.amount}</td>
                <td className="px-4 py-2">{expense?.account}</td>
                <td className="px-4 py-2">{expense?.note}</td>
                <td className="px-4 py-2">Nahid</td>
                <td className="px-4 py-2">
                  <select
                    className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                    onChange={e => handleAction(e.target.value, expense?._id)}
                  >
                    <option value="">Action</option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="px-4 py-2 font-semibold" colSpan="4">
                Total
              </td>
              <td className="px-4 py-2 font-semibold">
                {/* {expenses
                  .reduce((total, expense) => total + expense?.amount, 0)
                  .toFixed(2)} */}
              </td>
              <td colSpan="4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
