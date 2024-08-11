import React, { useState } from 'react';

function SalesReport() {
  const [fromDate, setFromDate] = useState('26-02-2022');
  const [toDate, setToDate] = useState('');
  const [customerName, setCustomerName] = useState('CU/02/0001-Walk-in customer');

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  // Sample data for table rows
  const tableData = [
    {
      id: 1,
      date: '09-08-2022',
      invoiceNo: 'SL/2021/02/24',
      referencedBillNo: '',
      description: 'Item: Sandisk 32GB USB 2.0 Flash Drive',
      qty: 1,
      billAmt: 3.00,
      receive: 0.00,
      total: 3.00,
    },
    {
      id: 2,
      date: '09-08-2022',
      invoiceNo: 'Receive',
      referencedBillNo: 'SL/2021/02/24',
      description: 'Payment Type: Cash\nNote: Paid By Cash',
      qty: 0,
      billAmt: 0.00,
      receive: 3.00,
      total: 0.00,
    },
    {
      id: 3,
      date: '09-08-2022',
      invoiceNo: 'Receive',
      referencedBillNo: 'SL/2021/02/25',
      description: 'Payment Type: Cash\nNote: Paid By Cash',
      qty: 0,
      billAmt: 0.00,
      receive: 3.00,
      total: -3.00,
    },
  ];

  // Calculate the totals
  const totalBillAmt = tableData.reduce((sum, item) => sum + item.billAmt, 0);
  const totalReceive = tableData.reduce((sum, item) => sum + item.receive, 0);
  const totalTotal = tableData.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Sales & Payment Report</h1>
      <div className="flex justify-between mb-4">
        <div className="w-1/2">
          <label htmlFor="fromDate" className="block text-gray-700 font-bold mb-2">
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="toDate" className="block text-gray-700 font-bold mb-2">
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700 font-bold mb-2">
          Customer Name
        </label>
        <input
          type="text"
          id="customerName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={customerName}
          onChange={handleCustomerNameChange}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
          Show
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4" onClick={handleSubmit}>
          Close
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Records Table</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Invoice No.</th>
                <th className="px-4 py-2 text-left">Referenced Bill No.</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Qty</th>
                <th className="px-4 py-2 text-left">Bill Amt(-SR)</th>
                <th className="px-4 py-2 text-left">Receive(-SR)</th>
                <th className="px-4 py-2 text-left">Total(-SR)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-2 text-left">{row.id}</td>
                  <td className="px-4 py-2 text-left">{row.date}</td>
                  <td className="px-4 py-2 text-left">{row.invoiceNo}</td>
                  <td className="px-4 py-2 text-left">{row.referencedBillNo}</td>
                  <td className="px-4 py-2 text-left">{row.description}</td>
                  <td className="px-4 py-2 text-left">{row.qty}</td>
                  <td className="px-4 py-2 text-left">{row.billAmt.toFixed(2)}</td>
                  <td className="px-4 py-2 text-left">{row.receive.toFixed(2)}</td>
                  <td className="px-4 py-2 text-left">{row.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td className="px-4 py-2 text-center font-bold" colSpan="6">Total</td>
                <td className="px-4 py-2 text-left font-bold">{totalBillAmt.toFixed(2)}</td>
                <td className="px-4 py-2 text-left font-bold">{totalReceive.toFixed(2)}</td>
                <td className="px-4 py-2 text-left font-bold">{totalTotal.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default SalesReport;
