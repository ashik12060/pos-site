import React, { useState } from 'react';

function AddExpenses() {
  const [expenseDate, setExpenseDate] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [category, setCategory] = useState('');
  const [expenseFor, setExpenseFor] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Expense submitted:', {
      expenseDate,
      referenceNo,
      category,
      expenseFor,
      paymentType,
      account,
      amount,
      note,
    });
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expenseDate" className="block text-gray-700 font-medium mb-2">
              Expense Date *
            </label>
            <input
              type="date"
              id="expenseDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="referenceNo" className="block text-gray-700 font-medium mb-2">
              Reference No.
            </label>
            <input
              type="text"
              id="referenceNo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={referenceNo}
              onChange={(e) => setReferenceNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Ads">Ads</option>
            </select>
          </div>
          <div>
            <label htmlFor="note" className="block text-gray-700 font-medium mb-2">
              Note
            </label>
            <textarea
              id="note"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="expenseFor" className="block text-gray-700 font-medium mb-2">
              Expense for *
            </label>
            <input
              type="text"
              id="expenseFor"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={expenseFor}
              onChange={(e) => setExpenseFor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="paymentType" className="block text-gray-700 font-medium mb-2">
              Payment Type *
            </label>
            <select
              id="paymentType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="">Select Payment Type</option>
              <option value="CASH">CASH</option>
            </select>
          </div>
          <div>
            <label htmlFor="account" className="block text-gray-700 font-medium mb-2">
              Account
            </label>
            <select
              id="account"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            >
              <option value="">Select Account</option>
              <option value="-None-">-None-</option>
            </select>
          </div>
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
              Amount *
            </label>
            <input
              type="number"
              id="amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpenses;