import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PurchaseList = () => {

  const [purchases, setPurchases] = useState([
    {
      purchaseDate: "15-07-2024",
      purchaseCode: "PU0004",
      purchaseStatus: "Received",
      referenceNo: "FLSDHFoHFAFD",
      supplierName: "EZ tech",
      total: "1200.00",
      paidAmount: "0.00",
      paymentStatus: "Unpaid",
      createdBy: "Salman",
    },

    {
      purchaseDate: "20-08-2024",
      purchaseCode: "PU0005",
      purchaseStatus: "Pending",
      referenceNo: "SKJDGH348",
      supplierName: "Tech Supplies",
      total: "1500.00",
      paidAmount: "500.00",
      paymentStatus: "Partially Paid",
      createdBy: "Ayesha",
    },
    {
      purchaseDate: "25-08-2024",
      purchaseCode: "PU0006",
      purchaseStatus: "Completed",
      referenceNo: "DKSDJ34F",
      supplierName: "Mega Store",
      total: "2000.00",
      paidAmount: "2000.00",
      paymentStatus: "Paid",
      createdBy: "John",
    },
  ]);
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
        <Link to='/new-purchase' className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-700">
          New Purchase
        </Link>
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
          {purchases.map((purchase, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{purchase.purchaseDate}</td>
              <td className="px-4 py-2 border">{purchase.purchaseCode}</td>
              <td className="px-4 py-2 border">{purchase.purchaseStatus}</td>
              <td className="px-4 py-2 border">{purchase.referenceNo}</td>
              <td className="px-4 py-2 border">{purchase.supplierName}</td>
              <td className="px-4 py-2 border">{purchase.total}</td>
              <td className="px-4 py-2 border">{purchase.paidAmount}</td>
              <td
                className={`px-4 py-2 border text-center font-semibold ${
                  purchase.paymentStatus === "Paid"
                    ? "bg-green-500"
                    : purchase.paymentStatus === "Partially Paid"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {purchase.paymentStatus}
              </td>
              <td className="px-4 py-2 border">{purchase.createdBy}</td>
              <td className="px-4 py-2 border text-sm">
                <select className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  <option value="">Action</option>
                  <option className="bg-white text-black p-4 my-2" value="view">
                    View
                  </option>
                  <option className="bg-white text-black p-4 my-2" value="edit">
                    Edit
                  </option>
                  <option className="bg-white text-black p-4 my-2" value="print">
                    Print
                  </option>
                  <option className="bg-white text-black p-4" value="delete">
                    Delete
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PurchaseList;
