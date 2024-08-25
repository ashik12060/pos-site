import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomersList = () => {
  const [customers, setCustomers] = useState([
    {
      id: "CU0015",
      name: "Kamru",
      mobile: "01624554822",
      email: "contact@contact.com",
      
      creditLimit: "No Limit",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CU0012",
      name: "Manir",
      mobile: "01728557197",
      email: "contact@contact.com",
      
      creditLimit: "No Limit",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "Cuboss",
      name: "home furniture",
      mobile: "01706050252",
      email: "contact@contact.com",
      
      creditLimit: "No Limit",
      previousDue: "400.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CUooDe",
      name: "Arefin",
      mobile: "",
      email: "arafin_pmd@yahoo.com",
      
      creditLimit: "No Limit",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "Cuboos",
      name: "Mehedi",
      mobile: "789456125",
      email: "abo@gmail.com",
      
      creditLimit: "200.00",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CU0007",
      name: "Hasan",
      mobile: "",
      email: "contact@contact.com",
      
      creditLimit: "No Limit",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CU000e",
      name: "test002",
      mobile: "098778769",
      email: "contact@contact.com",
      
      creditLimit: "No Limit",
      previousDue: "180.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CU000s",
      name: "Raju",
      mobile: "",
      email: "contact@contact.com",
      
      creditLimit: "No Limit",
      previousDue: "80.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CU000k",
      name: "Taipur Rahman Topu",
      mobile: "01529944218",
      email: "hoquedigtal2400@gmail.com",
      
      creditLimit: "No Limit",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
    {
      id: "CU0004",
      name: "HM Sabbir Arnob",
      mobile: "01710798855",
      email: "sa.emc.studio@gmail.com",
      
      creditLimit: "215.00",
      previousDue: "0.00",
      salesReturnDue: "0.00",
      advance: "0.00",
      status: "Active",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleStatus = (customerId) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === customerId
          ? {
              ...customer,
              status: customer.status === "Active" ? "Inactive" : "Active",
            }
          : customer
      )
    );
    setStatusMessage(
      `Customer ${customerId} status changed to ${
        customers.find((c) => c.id === customerId).status === "Active"
          ? "Inactive"
          : "Active"
      }`
    );
  };

  const handleCheckboxChange = (customerId) => {
    setSelectedCustomers((prevSelected) =>
      prevSelected.includes(customerId)
        ? prevSelected.filter((id) => id !== customerId)
        : [...prevSelected, customerId]
    );
  };

  const handleDelete = () => {
    setCustomers((prevCustomers) =>
      prevCustomers.filter(
        (customer) => !selectedCustomers.includes(customer.id)
      )
    );
    setSelectedCustomers([]);
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-4">Customers List</h1>

      {statusMessage && (
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded mb-4">
          {statusMessage}
        </div>
      )}

      {selectedCustomers.length > 0 && (
        <div className="mb-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDelete}
          >
            Delete Selected
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="mb-2 sm:mb-0">
          <Link to='/add-customer' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            + New Customer
          </Link>
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
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Select
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer ID
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Credit Limit
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Previous Due
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sales Return Due(+)
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Advance
              </th>
              <th className="px-2 py-2 border-r border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentItems.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-100">
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={() => handleCheckboxChange(customer.id)}
                  />
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.id}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.name}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.mobile}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.email}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.creditLimit}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.previousDue}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.salesReturnDue}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  {customer.advance}
                </td>
                <td className="px-2 py-2 border-r border-gray-300 whitespace-nowrap">
                  <button
                    className={`w-20 ${
                      customer.status === "Active"

                        ? "bg-green-700 text-white"
                        : "bg-red-500 text-white"
                    } font-semibold py-1 px-2 rounded`}
                    onClick={() => toggleStatus(customer.id)}
                  >
                    {customer.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="flex">
          <button
            className="px-3 py-1 mx-1 border rounded"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 mx-1 border rounded"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(customers.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomersList;
