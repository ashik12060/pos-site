import React, { useState } from "react";

function ProfitLossReport() {
  const [startDate, setStartDate] = useState("July 14, 2024");
  const [endDate, setEndDate] = useState("August 12, 2024");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleAction = (actionType, entry) => {
    switch (actionType) {
      case "excel":
        break;

      case "pdf":
        break;
      default:
        alert("Unknown action");
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className=" p-4 rounded-md ">
        <h2 className="text-xl font-bold mb-2">Profit & Loss Report</h2>
        <div className="flex gap-2 mb-4">
          <label htmlFor="startDate">Select Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            className="border rounded-md px-2 py-1"
          />
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            className="border rounded-md px-2 py-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 ">
          <div className="p-4 rounded-md  shadow-lg">
            <div className="bg-white   p-3 mb-4">
              <td className="px-4 py-2 flex justify-end">
                <select
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                  onChange={(e) => handleAction(e.target.value)}
                >
                  <option value="">Export</option>
                  <option value="excel">Excel</option>
                  <option value="pdf">PDF</option>
                </select>
              </td>
              <h3 className="text-lg font-bold mb-2">Income</h3>
              <ul className="list-disk pl-0">
                <li className="mb-1 border-b py-2">
                  Gross Profit: <span className="float-right">10,329.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Net Profit: <span className="float-right">5,636.00</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-3">
              <td className="px-4 py-2 flex justify-end">
                <select
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                  onChange={(e) => handleAction(e.target.value)}
                >
                  <option value="">Export</option>
                  <option value="edit">Excel</option>
                  <option value="delete">PDF</option>
                </select>
              </td>
              <h3 className="text-lg font-bold mt-4 mb-2">Opening Stock</h3>
              <ul className="list-disk pl-0">
                <li className="mb-1 border-b py-2">
                  Purchase: <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Purchase: <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Purchase Tax: <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Other Charges of Purchase:{" "}
                  <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Discount on Purchase:{" "}
                  <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Paid Payment: <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Purchase Due: <span className="float-right">0.00</span>
                </li>
              </ul>
              <h3 className="text-lg font-bold mt-4 mb-2">Purchase Return</h3>
              <ul className="list-disk pl-0">
                <li className="mb-1 border-b py-2">
                  Total Purchase Return:{" "}
                  <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Purchase Return Tax:{" "}
                  <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Other Charges of Purchase Return:{" "}
                  <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Total Discount on Purchase Return:{" "}
                  <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Paid Payment: <span className="float-right">0.00</span>
                </li>
                <li className="mb-1 border-b py-2">
                  Purchase Return Due: <span className="float-right">0.00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-lg">
            <td className="px-4 py-2 flex justify-end">
              <select
                className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-30"
                onChange={(e) => handleAction(e.target.value)}
              >
                <option value="">Export</option>
                <option value="edit">Excel</option>
                <option value="delete">PDF</option>
              </select>
            </td>
            <h3 className="text-lg font-bold mb-2">Expense</h3>
            <ul className="list-disk pl-0">
              <li className="mb-1 border-b py-2">
                Sales: <span className="float-right">105,502.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Total Sales Tax: <span className="float-right">653.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Total Other Charges of Sales:{" "}
                <span className="float-right">120.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Total Discount on Sales:{" "}
                <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Coupon Discount: <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Paid Payment: <span className="float-right">105,555.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Sales Due: <span className="float-right">9,155.00</span>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-2">Sales Return</h3>
            <ul className="list-disk pl-0">
              <li className="mb-1 border-b py-2">
                Total Sales Return: <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Total Sales Return Tax:{" "}
                <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Total Other Charges of Sales Return:{" "}
                <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Coupon Discount: <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Total Discount on Sales Return:{" "}
                <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Paid Payment: <span className="float-right">0.00</span>
              </li>
              <li className="mb-1 border-b py-2">
                Sales Return Due: <span className="float-right">0.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfitLossReport;
