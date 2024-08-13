import React, { useState } from 'react';

function Test() {
  const [supplierName, setSupplierName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [openingBalance, setOpeningBalance] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted with data:', {
      supplierName,
      mobile,
      email,
      phone,
      gstNumber,
      taxNumber,
      openingBalance,
      country,
      state,
      city,
      postcode,
      address,
    });
  };

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-md">
      <h2 className="text-white text-2xl font-bold text-center mb-4">
        New Supplier
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <label htmlFor="supplierName" className="block text-gray-700 font-bold mb-2">
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
            <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
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
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
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
              value={openingBalance}
              onChange={(e) => setOpeningBalance(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">-Select-</option>
              <option value="India">India</option>
              {/* Add more countries here */}
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
              State
            </label>
            <select
              id="state"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">-Select-</option>
              {/* Add more states here */}
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mr-2"
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
  );
}

export default Test;