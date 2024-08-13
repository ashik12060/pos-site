import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function NewPurchase() {
  const [warehouse, setWarehouse] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [otherCharges, setOtherCharges] = useState("");
  const [discountOnAll, setDiscountOnAll] = useState("");
  const [note, setNote] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentNote, setPaymentNote] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", {
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

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        quantity: "",
        purchasePrice: "",
        discount: "",
        taxAmount: "",
        unitCost: "",
        totalAmount: "",
      },
    ]);
  };

  return (
    <div className="container mx-auto p-4 bg-white p-2">
      <h1 className="text-2xl font-bold mb-4">Invoice</h1>
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-2 py-2 rounded font-bold focus:outline-none "
        >
          Add New Supplier <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="warehouse"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="supplierName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="referenceNo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="purchaseDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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

        {/* Modal  */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center  w-100">
            <div className="bg-white rounded-lg w-1/2 p-4">
              <h2 className="text-xl font-bold mb-4">Add New Supplier</h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label
                      htmlFor="supplierName"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Supplier Name*
                    </label>
                    <input
                      type="text"
                      id="supplierName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={supplierName}
                      onChange={(e) => setSupplierName(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="mobile"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={mobile}
                      // onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={phone}
                      // onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="gstNumber"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      GST Number
                    </label>
                    <input
                      type="text"
                      id="gstNumber"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={gstNumber}
                      // onChange={(e) => setGstNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="taxNumber"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      TAX Number
                    </label>
                    <input
                      type="text"
                      id="taxNumber"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={taxNumber}
                      // onChange={(e) => setTaxNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="openingBalance"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Opening Balance
                    </label>
                    <input
                      type="number"
                      id="openingBalance"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={openingBalance}
                      // onChange={(e) => setOpeningBalance(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="country"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={country}
                      // onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">-Select-</option>
                      <option value="India">India</option>
                      {/* Add more countries here */}
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="state"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={state}
                      // onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">-Select-</option>
                      {/* Add more states here */}
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="city"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={city}
                      // onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="postcode"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Postcode
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={postcode}
                      // onChange={(e) => setPostcode(e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="address"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // value={address}
                      // onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* end */}

        <hr className="mt-5 border-1 border-gray-400" />
        <div className="flex flex-col md:flex-row my-5">
          <hr className="" />
          <div className="flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Item name/Barcode/Itemcode"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button
            // onClick={handleAddItem}
            className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-md"
          >
            +
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white text-left font-bold">
              <th className="px-4 py-2">Item Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Purchase Price(-SR)</th>
              <th className="px-4 py-2">Discount(-SR)</th>
              <th className="px-4 py-2">Tax Amount</th>
              <th className="px-4 py-2">Unit Cost</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={item.itemName}
                    // onChange={(e) => handleInputChange(index, 'itemName', e.target.value)}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.quantity}
                    // onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.purchasePrice}
                    // onChange={(e) => handleInputChange(index, 'purchasePrice', e.target.value)}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.discount}
                    // onChange={(e) => handleInputChange(index, 'discount', e.target.value)}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.taxAmount}
                    // onChange={(e) => handleInputChange(index, 'taxAmount', e.target.value)}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.unitCost}
                    // onChange={(e) => handleInputChange(index, 'unitCost', e.target.value)}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">{item.totalAmount}</td>
                <td className="px-4 py-2">
                  {/* Add action buttons for each item */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <div>
            <p className="font-bold mb-2">Total Quantities: 10</p>
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <label htmlFor="otherCharges" className="font-bold">
                  Other Charges:
                </label>
                <input
                  type="number"
                  id="otherCharges"
                  value={otherCharges}
                  // onChange={(e) => setOtherCharges(e.target.value)}
                  className="w-24 px-2 py-1 border rounded-md"
                />
              </div>
              <div className="flex justify-between mb-2">
                <label htmlFor="discountOnAll" className="font-bold">
                  Discount on All:
                </label>
                <input
                  type="number"
                  id="discountOnAll"
                  value={discountOnAll}
                  // onChange={(e) => setDiscountOnAll(e.target.value)}
                  className="w-24 px-2 py-1 border rounded-md"
                />
              </div>
              <div className="flex justify-between mb-2">
                <label htmlFor="note" className="font-bold">
                  Note:
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-2 py-1 border rounded-md"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mb-2">Subtotal: 200 SR</p>
            <p className="font-bold mb-2">Other Charges: SR</p>
            <p className="font-bold mb-2">Discount on All: SR</p>
            <p className="font-bold text-lg">Grand Total: 25 SR</p>
          </div>
        </div>
        <hr className="my-5 border-1 border-gray-400" />

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">
            Previous Payments Information:
          </h2>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Make Payment:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
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
              <label
                htmlFor="paymentType"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Payment Type
              </label>
              <select
                id="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                <option value="cash">Cash</option>
                <option value="mobile banking">Mobile Banking </option>
                <option value="bank">Bank</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="paymentNote"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
              <label
                htmlFor="account"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Account
              </label>
              <select
                id="account"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-None-</option>
                <option value="bkash">Bkash</option>
                <option value="nagad">Nagad</option>
                <option value="bank_transfer">Bank Transfer</option>
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
