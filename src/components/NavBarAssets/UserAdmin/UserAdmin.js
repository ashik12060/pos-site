import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UserAdmin() {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [users]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = users.filter(product => product._id !== id);
          setUser(remaining);
          toast.success('Successfully Delete');
        });
    }
  };

  const handleAction = (actionType, id) => {
    switch (actionType) {
      case 'edit':
        navigate(`/user/edit`);
        break;

      case 'delete':
        handleDelete(id);

        break;
      default:
        alert('Unknown action');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users/Admin List</h1>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center mb-2 md:mb-0">
          <label htmlFor="show" className="mr-2">
            Show:
          </label>
          <select
            id="show"
            className="w-16 border-solid border-2 border-indigo-600"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="ml-2">entries</span>
        </div>
        <Link
          to="/user/add"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + New User
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                #
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Store Name
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                User Name
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Mobile
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Email
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Role
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Created on
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Status
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {user.storeName}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {user.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {user.phone}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {user.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {user.role}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  {user.date}
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-200 text-green-70
                    }`}
                  >
                    Active
                  </span>
                  {/* <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-200 text-green-700'
                        : 'bg-red-200 text-red-700'
                    }`}
                  >
                    {user.status}
                  </span> */}
                </td>

                <td className="px-4 py-2">
                  <select
                    className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                    onChange={e => handleAction(e.target.value, user._id)}
                  >
                    <option value="">Action</option>
                    <option value="edit">Edit</option>
                    <option
                      // onClick={() => handleDelete(user._id)}
                      value="delete"
                    >
                      Delete{' '}
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <nav aria-label="Page navigation">
          <ul className="inline-flex -space-x-px">
            <li className="page-item">
              <button
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <button
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={() => paginate(currentPage)}
              >
                {currentPage}
              </button>
            </li>
            <li className="page-item">
              <button
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(users.length / usersPerPage)
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default UserAdmin;
