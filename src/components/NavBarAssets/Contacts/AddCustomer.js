import React, { useState } from 'react';

const AddCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [creditLimit, setCreditLimit] = useState('');
  const [mobile, setMobile] = useState('');
  const [phone, setPhone] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [previousDue, setPreviousDue] = useState('');
  const [attachment, setAttachment] = useState(null);

  const [addressDetails, setAddressDetails] = useState({
    country: "",
    city: "",
    address: "",
    state: "",
    postcode: "",
    locationLink: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    country: "",
    city: "",
    address: "",
    state: "",
    postcode: "",
    locationLink: "",
  });

  const [copyAddress, setCopyAddress] = useState(false);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails({ ...addressDetails, [name]: value });
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleCopyAddress = () => {
    setCopyAddress(!copyAddress);
    if (copyAddress) {
      setShippingAddress(addressDetails);
    } else {
      setShippingAddress({
        country: "",
        city: "",
        address: "",
        state: "",
        postcode: "",
        locationLink: "",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      customerName,
      email,
      gstNumber,
      creditLimit,
      mobile,
      phone,
      taxNumber,
      previousDue,
      attachment,
    });
  };

  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Add/Edit Customer</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name*
            </label>
            <input
              type="text"
              id="customerName"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">
              GST Number
            </label>
            <input
              type="text"
              id="gstNumber"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="taxNumber" className="block text-sm font-medium text-gray-700">
              TAX Number
            </label>
            <input
              type="text"
              id="taxNumber"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="creditLimit" className="block text-sm font-medium text-gray-700">
              Credit Limit
            </label>
            <input
              type="number"
              id="creditLimit"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={creditLimit}
              onChange={(e) => setCreditLimit(e.target.value)}
            />
            <p className="text-sm text-gray-500">-1 for No Limit</p>
          </div>
          <div>
            <label htmlFor="previousDue" className="block text-sm font-medium text-gray-700">
              Previous Due
            </label>
            <input
              type="number"
              id="previousDue"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={previousDue}
              onChange={(e) => setPreviousDue(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
              Attachment
            </label>
            <input
              type="file"
              id="attachment"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFileChange}
            />
            {attachment && (
              <p className="text-sm text-gray-500 mt-2">
                {attachment.name} ({(attachment.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full md:w-auto px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>

      <div className="container mx-auto p-4 md:p-8">
      <form>
        <h2 className="text-2xl font-bold mb-4">Address Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="block mb-2 text-gray-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={addressDetails.country}
              onChange={handleAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="state" className="block mb-2 text-gray-700">
              State
            </label>
            <select
              id="state"
              name="state"
              value={addressDetails.state}
              onChange={handleAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select State</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="city" className="block mb-2 text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={addressDetails.city}
              onChange={handleAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="postcode" className="block mb-2 text-gray-700">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={addressDetails.postcode}
              onChange={handleAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="address" className="block mb-2 text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={addressDetails.address}
            onChange={handleAddressChange}
            className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="locationLink" className="block mb-2 text-gray-700">
            Location Link
          </label>
          <input
            type="text"
            id="locationLink"
            name="locationLink"
            value={addressDetails.locationLink}
            onChange={handleAddressChange}
            className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Shipping Address</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="copyAddress"
            name="copyAddress"
            checked={copyAddress}
            onChange={handleCopyAddress}
            className="mr-2"
          />
          <label htmlFor="copyAddress" className="text-gray-700">
            Copy Address?
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="shippingCountry" className="block mb-2 text-gray-700">
              Country
            </label>
            <select
              id="shippingCountry"
              name="country"
              value={shippingAddress.country}
              onChange={handleShippingAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="shippingState" className="block mb-2 text-gray-700">
              State
            </label>
            <select
              id="shippingState"
              name="state"
              value={shippingAddress.state}
              onChange={handleShippingAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select State</option>
             
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="shippingCity" className="block mb-2 text-gray-700">
              City
            </label>
            <input
              type="text"
              id="shippingCity"
              name="city"
              value={shippingAddress.city}
              onChange={handleShippingAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="shippingPostcode"
              className="block mb-2 text-gray-700"
            >
              Postcode
            </label>
            <input
              type="text"
              id="shippingPostcode"
              name="postcode"
              value={shippingAddress.postcode}
              onChange={handleShippingAddressChange}
              className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="shippingAddress" className="block mb-2 text-gray-700">
            Address
          </label>
          <textarea
            id="shippingAddress"
            name="address"
            value={shippingAddress.address}
            onChange={handleShippingAddressChange}
            className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="shippingLocationLink"
            className="block mb-2 text-gray-700"
          >
            Location Link
          </label>
          <input
            type="text"
            id="shippingLocationLink"
            name="locationLink"
            value={shippingAddress.locationLink}
            onChange={handleShippingAddressChange}
            className="w-full max-w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex justify-end mt-8">
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


    </div>
  );
};

export default AddCustomer;
