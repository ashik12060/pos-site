import React from 'react';

const PurchaseList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Purchase List</h1>
        <p className="text-gray-600">View/Search Purchase</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-bold">4</p>
          <p className="text-gray-600">Total Invoices</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-bold">1.46K -SR</p>
          <p className="text-gray-600">Total Paid Amount</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-bold">379.28K -SR</p>
          <p className="text-gray-600">Total Invoices Amount</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-bold">377.82K -SR</p>
          <p className="text-gray-600">Total Purchase Due</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <select className="mb-4 md:mb-0 md:w-1/3 p-2 border rounded">
          <option>-All Warehouses-</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-700">
          New Purchase
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Purchase Date</th>
              <th className="px-4 py-2 border">Purchase Code</th>
              <th className="px-4 py-2 border">Purchase Status</th>
              <th className="px-4 py-2 border">Reference No.</th>
              <th className="px-4 py-2 border">Supplier Name</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Paid Amount</th>
              <th className="px-4 py-2 border">Payment Status</th>
              <th className="px-4 py-2 border">Created by</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">15-07-2024</td>
              <td className="px-4 py-2 border">PU0004</td>
              <td className="px-4 py-2 border">Received</td>
              <td className="px-4 py-2 border">FLSDHFoHFAFD</td>
              <td className="px-4 py-2 border">EZ tech</td>
              <td className="px-4 py-2 border">1200.00</td>
              <td className="px-4 py-2 border">0.00</td>
              <td className="px-4 py-2 border">Unpaid</td>
              <td className="px-4 py-2 border">Salman</td>
              {/* <td className="px-4 py-2 border">
                <button className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-700">
                  Action
                </button>
              </td> */}
              <td className="px-4 py-2 border- border-gray-300 text-sm">
                  <select                  
                    className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
                    
                    
                  >
                    <option className='' value=""  >Action</option>
                    <option className='bg-white text-black p-4 my-2' value="view">View</option>
                    <option className='bg-white text-black p-4 my-2' value="edit">Edit</option>
                    <option className='bg-white text-black p-4 my-2' value="print">Print</option>
                    <option className='bg-white text-black p-4' value="delete">Delete</option>
                  </select>
                </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseList;
