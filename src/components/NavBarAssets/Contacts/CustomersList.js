import React, { useState } from 'react';

const CustomersList = () => {
  const [customers, setCustomers] = useState([
    {
      id: 'CU0015',
      name: 'Kamru',
      mobile: '01624554822',
      email: '',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CU0012',
      name: 'Manir',
      mobile: '01728557197',
      email: '',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'Cuboss',
      name: 'home furniture',
      mobile: '01706050252',
      email: '',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '400.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CUooDe',
      name: 'Arefin',
      mobile: '',
      email: 'arafin_pmd@yahoo.com',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'Cuboos',
      name: 'Mehedi',
      mobile: '789456125',
      email: 'abo@gmail.com',
      location: '',
      creditLimit: '200.00',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CU0007',
      name: 'Hasan',
      mobile: '',
      email: '',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CU000e',
      name: 'test002',
      mobile: '098778769',
      email: '',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '180.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CU000s',
      name: 'Raju',
      mobile: '',
      email: '',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '80.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CU000k',
      name: 'Taipur Rahman Topu',
      mobile: '01529944218',
      email: 'hoquedigtal2400@gmail.com',
      location: '',
      creditLimit: 'No Limit',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
    {
      id: 'CU0004',
      name: 'HM Sabbir Arnob',
      mobile: '01710798855',
      email: 'sa.emc.studio@gmail.com',
      location: '',
      creditLimit: '215.00',
      previousDue: '0.00',
      salesReturnDue: '0.00',
      advance: '0.00',
      status: 'Active',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
   

    
      // <div className="container mx-auto p-4">
      //   <h1 className="text-2xl font-bold mb-4">Customers List</h1>
  
      //   <div className="flex flex-col sm:flex-row justify-between mb-4">
      //     <div className="mb-2 sm:mb-0">
      //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      //         + New Customer
      //       </button>
      //     </div>
      //     <div>
      //       <input
      //         type="text"
      //         placeholder="Search"
      //         className="border rounded py-2 px-3 w-full sm:w-auto"
      //       />
      //     </div>
      //   </div>
  
      //   <div className="overflow-x-auto">
      //     <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
      //       <thead className="bg-gray-50 border-b border-gray-300">
      //         <tr>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Limit</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Previous Due</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales Return Due(+)</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advance</th>
      //           <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
      //           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
      //         </tr>
      //       </thead>
      //       <tbody className="bg-white">
      //         {currentItems.map((customer) => (
      //           <tr key={customer.id}>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
      //               <input type="checkbox" className="mr-2" />
      //               {customer.id}
      //             </td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.name}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.mobile}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.email}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.location}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.creditLimit}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.previousDue}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.salesReturnDue}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.advance}</td>
      //             <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
      //               <span
      //                 className={`inline-block rounded-full px-2 py-1 text-xs font-semibold leading-none ${
      //                   customer.status === 'Active'
      //                     ? 'bg-green-100 text-green-800'
      //                     : 'bg-red-100 text-red-800'
      //                 }`}
      //               >
      //                 {customer.status}
      //               </span>
      //             </td>
      //             <td className="px-4 py-2 whitespace-nowrap">
      //               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      //                 Action
      //               </button>
      //             </td>
      //           </tr>
      //         ))}
      //       </tbody>
      //     </table>
      //   </div>
  
      //   <div className="mt-4">
      //     <p className="text-gray-600">
      //       Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {customers.length} entries
      //     </p>
      //     <nav className="flex justify-center mt-2">
      //       <ul className="flex space-x-1">
      //         <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      //           <button
      //             className="page-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      //             onClick={() => paginate(currentPage - 1)}
      //           >
      //             Previous
      //           </button>
      //         </li>
      //         {Array.from({ length: Math.ceil(customers.length / itemsPerPage) }, (_, i) => (
      //           <li
      //             key={i}
      //             className={`page-item ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      //           >
      //             <button
      //               className="page-link py-2 px-4 rounded"
      //               onClick={() => paginate(i + 1)}
      //             >
      //               {i + 1}
      //             </button>
      //           </li>
      //         ))}
      //         <li className={`page-item ${currentPage === Math.ceil(customers.length / itemsPerPage) ? 'disabled' : ''}`}>
      //           <button
      //             className="page-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      //             onClick={() => paginate(currentPage + 1)}
      //           >
      //             Next
      //           </button>
      //         </li>
      //       </ul>
      //     </nav>
      //   </div>
      // </div>




      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers List</h1>

      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="mb-2 sm:mb-0">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            + New Customer
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded py-2 px-3 w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Limit</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Previous Due</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales Return Due(+)</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advance</th>
              <th className="px-4 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentItems.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                  <input type="checkbox" className="mr-2" />
                  {customer.id}
                </td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.name}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.mobile}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.email}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.location}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.creditLimit}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.previousDue}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.salesReturnDue}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">{customer.advance}</td>
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold leading-none ${
                      customer.status === 'Active'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <p className="text-gray-600">
          Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {customers.length} entries
        </p>
        <nav className="flex flex-wrap justify-center mt-2 space-x-2">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(customers.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              className={`py-2 px-4 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentPage === Math.ceil(customers.length / itemsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => currentPage < Math.ceil(customers.length / itemsPerPage) && paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(customers.length / itemsPerPage)}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
    
  );
};

export default CustomersList;