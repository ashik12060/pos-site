import React, { useState } from 'react';

function NewPurchase() {
  const [warehouse, setWarehouse] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [unitCost, setUnitCost] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [otherCharges, setOtherCharges] = useState('');
  const [discountOnAll, setDiscountOnAll] = useState('');
  const [note, setNote] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentNote, setPaymentNote] = useState('');
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', {
      warehouse,
      supplierName,
      referenceNo,
      purchaseDate,
      itemName,
      quantity,
      purchasePrice,
      discount,
      taxAmount,
      unitCost,
      totalAmount,
      otherCharges,
      discountOnAll,
      note,
      paymentType,
      paymentDate,
      paymentNote,
      amount,
      account,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Invoice</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="warehouse" className="block text-gray-700 text-sm font-bold mb-2">
              Warehouse
            </label>
            <input
              type="text"
              id="warehouse"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="supplierName" className="block text-gray-700 text-sm font-bold mb-2">
              Supplier Name
            </label>
            <select
              id="supplierName"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">-Select-</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="referenceNo" className="block text-gray-700 text-sm font-bold mb-2">
              Reference No.
            </label>
            <input
              type="text"
              id="referenceNo"
              value={referenceNo}
              onChange={(e) => setReferenceNo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="purchaseDate" className="block text-gray-700 text-sm font-bold mb-2">
              Purchase Date
            </label>
            <input
              type="date"
              id="purchaseDate"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Purchase Price (-SR)</th>
                <th className="px-4 py-2">Discount (-SR)</th>
                <th className="px-4 py-2">Tax Amount</th>
                <th className="px-4 py-2">Unit Cost</th>
                <th className="px-4 py-2">Total Amount</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={taxAmount}
                    onChange={(e) => setTaxAmount(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={unitCost}
                    onChange={(e) => setUnitCost(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="otherCharges" className="block text-gray-700 text-sm font-bold mb-2">
              Other Charges
            </label>
            <input
              type="text"
              id="otherCharges"
              value={otherCharges}
              onChange={(e) => setOtherCharges(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="discountOnAll" className="block text-gray-700 text-sm font-bold mb-2">
              Discount on All
            </label>
            <input
              type="text"
              id="discountOnAll"
              value={discountOnAll}
              onChange={(e) => setDiscountOnAll(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="note" className="block text-gray-700 text-sm font-bold mb-2">
            Note
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Previous Payments Information:</h2>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Make Payment:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="paymentType" className="block text-gray-700 text-sm font-bold mb-2">
                Payment Type
              </label>
              <select
                id="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-Select-</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="paymentNote" className="block text-gray-700 text-sm font-bold mb-2">
              Payment Note
            </label>
            <textarea
              id="paymentNote"
              value={paymentNote}
              onChange={(e) => setPaymentNote(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="account" className="block text-gray-700 text-sm font-bold mb-2">
                Account
              </label>
              <select
                id="account"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-None-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPurchase;
