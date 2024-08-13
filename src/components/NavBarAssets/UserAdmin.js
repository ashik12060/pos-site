import React, { useState } from 'react';

function UserAdmin() {
  const [users, setUsers] = useState([
    {
      id: 1,
      storeName: 'قمة البروج الأمنية',
      userName: 'Ove Ove',
      mobile: '000',
      email: 'inspirefashion@gmail.com',
      role: 'Cashier',
      createdOn: '29-07-2024',
      status: 'Active',
    },
    {
      id: 2,
      storeName: 'قمة البروج الأمنية',
      userName: 'Salman Raphayel',
      mobile: '9999999999',
      email: 'admin@example.com',
      role: 'Store Admin',
      createdOn: '12-02-2021',
      status: 'Active',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAction = (action, userName) => {
    if (action === 'edit') {
      alert(`Edit user ${userName}`);
    } else if (action === 'delete') {
      alert(`Delete user ${userName}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users/Admin List</h1>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center mb-2 md:mb-0">
          <label htmlFor="show" className="mr-2">Show:</label>
          <select id="show" className="w-16 border-solid border-2 border-indigo-600">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="ml-2">entries</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + New User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">#</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Store Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">User Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Mobile</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Email</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Role</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Created on</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Status</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.id}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.storeName}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.userName}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.mobile}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.email}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.role}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">{user.createdOn}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'Active' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-sm">
                  <select                  
                    className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
                    onChange={(e) => handleAction(e.target.value, user.userName)}
                    defaultValue=""
                  >
                    <option className='' value="" disabled hidden>Action</option>
                    <option className='bg-white text-black p-4 my-2' value="edit">Edit</option>
                    <option className='bg-white text-black p-4' value="delete">Delete</option>
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
                disabled={currentPage === Math.ceil(users.length / usersPerPage)}
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
