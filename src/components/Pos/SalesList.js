import { useState } from 'react';

function SalesList() {
  const [salesData] = useState([
    { icon: 'shopping-bag', label: 'TOTAL INVOICES', value: '188' },
    { icon: 'dollar-sign', label: 'TOTAL INVOICES AMOUNT', value: '101.06M - SR' },
    { icon: 'credit-card', label: 'TOTAL RECEIVED AMOUNT', value: '101.05M - SR' },
    { icon: 'minus-circle', label: 'TOTAL SALES DUE', value: '4.77K - SR' },
  ]);

  const [saleInfo, setSaleInfo] = useState([
    {
      salesDate: '03-08-2024',
      dueDate: '',
      salesCode: 'SL187',
      referenceNo: '',
      customerName: 'Walk-in customer',
      total: 1012.00,
      paidPayment: 1012.00,
      paymentStatus: 'Paid',
      createdBy: 'Salman',
      action: 'Action',
      dropdownOpen: false, 
    },
    {
              salesDate: '03-08-2024',
              dueDate: '',
              salesCode: 'SL187',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 1012.00,
              paidPayment: 1012.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '02-08-2024',
              dueDate: '',
              salesCode: 'SL186',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 4.00,
              paidPayment: 4.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '02-08-2024',
              dueDate: '',
              salesCode: 'SL185',
              referenceNo: '',
              customerName: 'Monir',
              total: 3.00,
              paidPayment: 3.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '02-08-2024',
              dueDate: '',
              salesCode: 'SL184',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 15.00,
              paidPayment: 15.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '02-08-2024',
              dueDate: '',
              salesCode: 'SL183',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 15.00,
              paidPayment: 15.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '30-07-2024',
              dueDate: '',
              salesCode: 'SL182',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 1000.00,
              paidPayment: 1000.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '30-07-2024',
              dueDate: '',
              salesCode: 'SL181',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 4.00,
              paidPayment: 4.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '27-07-2024',
              dueDate: '',
              salesCode: 'SL180',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 3.00,
              paidPayment: 3.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '15-07-2024',
              dueDate: '',
              salesCode: 'SL179',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 3247.00,
              paidPayment: 3247.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
            {
              salesDate: '15-07-2024',
              dueDate: '',
              salesCode: 'SL178',
              referenceNo: '',
              customerName: 'Walk-in customer',
              total: 5933.00,
              paidPayment: 5933.00,
              paymentStatus: 'Paid',
              createdBy: 'Salman',
              action: 'Action',
            },
          ]);

  const toggleDropdown = (index) => {
    setSaleInfo((prevSaleInfo) =>
      prevSaleInfo.map((item, i) =>
        i === index ? { ...item, dropdownOpen: !item.dropdownOpen } : item
      )
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = saleInfo.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(saleInfo.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sales List</h1>
      <div className="grid grid-cols-2 gap-4">
        {salesData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white rounded-full p-2 mr-2">
                <i className={`fa fa-${item.icon}`}></i>
              </span>
              <span className="text-gray-600 font-bold">{item.label}</span>
            </div>
            <div className="text-3xl font-bold text-blue-500">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Sales Records</h1>

        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            New Sales
          </button>
        </div>

        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Sales Date</th>
              <th className="px-4 py-2">Due Date</th>
              <th className="px-4 py-2">Sales Code</th>
              <th className="px-4 py-2">Reference No.</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Paid Payment</th>
              <th className="px-4 py-2">Payment Status</th>
              <th className="px-4 py-2">Created by</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.salesDate}</td>
                <td className="border px-4 py-2">{item.dueDate}</td>
                <td className="border px-4 py-2">{item.salesCode}</td>
                <td className="border px-4 py-2">{item.referenceNo}</td>
                <td className="border px-4 py-2">{item.customerName}</td>
                <td className="border px-4 py-2">{item.total}</td>
                <td className="border px-4 py-2">{item.paidPayment}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      item.paymentStatus === 'Paid'
                        ? 'bg-green-400 text-white'
                        : 'bg-red-400 text-white'
                    }`}
                  >
                    {item.paymentStatus}
                  </span>
                </td>
                <td className="border px-4 py-2">{item.createdBy}</td>
                <td className="border px-4 py-2 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {item.action}
                  </button>
                  {item.dropdownOpen && (
                    <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">View Details</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Edit</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Delete</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Print</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Email</li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {saleInfo.length} entries
          </p>
          <nav className="flex justify-center mt-4">
            <ul className="inline-flex -space-x-px">
              <li className="page-item">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-3 rounded-l"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <button
                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-3 rounded-r ${
                      currentPage === number ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-3 rounded-r"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === pageNumbers.length}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SalesList;
