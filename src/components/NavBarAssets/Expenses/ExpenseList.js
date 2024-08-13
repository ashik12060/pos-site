import React from 'react';

const expenses = [
    { date: '26-05-2024', category: 'Mele Tang Road', referenceNo: '', expenseFor: 'Lunch Cost', amount: 1200.00, account: '', note: '', createdBy: 'Salman' },
    { date: '15-05-2024', category: 'Ads', referenceNo: '', expenseFor: 'bill', amount: 200.00, account: '', note: '', createdBy: 'Shanto' },
    { date: '26-04-2024', category: 'Ads', referenceNo: '', expenseFor: 'Ads', amount: 353.00, account: 'Bkash', note: '', createdBy: 'Chris' },
];

const ExpenseList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Expenses List</h1>
                <div className="px-4 py-2">
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Copy</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Excel</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">PDF</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Print</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded">CSV</button>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">+ New Expense</button>
            </div>
            <div className="bg-white shadow rounded overflow-hidden">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Reference No.</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Expense for</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Amount</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Account</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Note</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Created by</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{expense.date}</td>
                                <td className="px-4 py-2">{expense.category}</td>
                                <td className="px-4 py-2">{expense.referenceNo}</td>
                                <td className="px-4 py-2">{expense.expenseFor}</td>
                                <td className="px-4 py-2">{expense.amount.toFixed(2)}</td>
                                <td className="px-4 py-2">{expense.account}</td>
                                <td className="px-4 py-2">{expense.note}</td>
                                <td className="px-4 py-2">{expense.createdBy}</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 text-white py-1 px-2 rounded">Action</button>
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100">
                            <td className="px-4 py-2 font-semibold" colSpan="4">Total</td>
                            <td className="px-4 py-2 font-semibold">{expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</td>
                            <td colSpan="4"></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default ExpenseList;
