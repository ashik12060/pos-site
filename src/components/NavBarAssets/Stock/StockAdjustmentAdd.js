import React, { useState } from "react";

function StockAdjustmentAdd() {
  const [warehouse, setWarehouse] = useState("");
  const [date, setDate] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const [showNewItems, setShowNewItems] = useState(false);
  const [supplierName, setSupplierName] = useState("");


  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      warehouse,
      date,
      referenceNo,
      itemName,
      quantity,
      note,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Adjustment</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="warehouse" className="block text-gray-700 text-sm font-bold mb-2">
              Warehouse *
            </label>
            <select
              id="warehouse"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
            >
              <option value="">Select Warehouse</option>
              <option value="Botiyaghata">Botiyaghata</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Date *
            </label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="referenceNo" className="block text-gray-700 text-sm font-bold mb-2">
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
            onClick={() => setShowNewItems(true)}
            className="bg-blue-500 text-white px-4 ms-1 text-xl  rounded font-bold focus:outline-none "
          >
            +
          </button>

          {showNewItems && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white rounded-lg w-4/5 p-4 max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">New Item</h2>
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
                        Item Name*
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
                        htmlFor="country"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Brand
                      </label>
                      <select
                        id="brand"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      
                      >
                        <option value="">-Select-</option>
                        <option value="msi">MSI</option>
                        <option value="toshiba">Toshiba</option>
                        <option value="samsung">Samsung</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="country"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Categories
                      </label>
                      <select
                        id="categories"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      
                      >
                        <option value="">-Select-</option>
                        <option value="electric">Electric</option>
                        <option value="router">Router</option>
                        <option value="camera">Camera</option>
                      </select>
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="country"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Unit
                      </label>
                      <select
                        id="unit"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">-Select-</option>
                        <option value="kg">Kg</option>
                        <option value="box">Box</option>
                        <option value="bag">Bag</option>
                      </select>
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="supplierName"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        HSN
                      </label>
                      <input
                        type="text"
                        id="hsn"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="supplierName"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        SKU
                      </label>
                      <input
                        type="text"
                        id="sku"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="supplierName"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Alart Quality
                      </label>
                      <input
                        type="alertQuality"
                        id="sku"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="supplierName"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Seller Point
                      </label>
                      <input
                        type="text"
                        id="sellerPoint"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="supplierName"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Bar Code
                      </label>
                      <input
                        type="text"
                        id="barCode"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <br />

                    <hr />

                    <div className="col-span-1">
                      <label
                        htmlFor="discount type"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Discount Type
                      </label>
                      <select
                        id="discountType"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">-Select-</option>
                        <option value="percentage">percentage%</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="Discount"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Discount
                      </label>
                      <input
                        type="number"
                        id="discount"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <br />

                    <div className="col-span-1">
                      <label
                        htmlFor="price"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Price*
                      </label>
                      <input
                        required
                        type="number"
                        id="price"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="tax"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Tax*
                      </label>
                      <select
                        id="discountType"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">-Select-</option>
                        <option value="none">None</option>
                        <option value="vat">Vat</option>
                      </select>
                    </div>

                    <div className="col-span-1">
                      <label
                        htmlFor="purchasePrice"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Purchase Price*
                      </label>
                      <input
                        required
                        type="number"
                        id="purchasePrice"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      
                      >
                        <option value="">-Select-</option>
                        <option value="India">India</option>
                       
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
                       
                      >
                        <option value="">-Select-</option>
                      
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
                       
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                      onClick={() => setShowNewItems(false)}
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
        </div>



        </div>
        <div className="mb-4">
          <label htmlFor="note" className="block text-gray-700 text-sm font-bold mb-2">
            Note
          </label>
          <textarea
            id="note"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus-shadow-outline"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default StockAdjustmentAdd;