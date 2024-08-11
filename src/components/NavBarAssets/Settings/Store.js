import React, { useState } from 'react';

function Store() {
  const [activeTab, setActiveTab] = useState('Store');

  const renderContent = () => {
    switch (activeTab) {
      case 'Store':
        return <StoreContent />;
      case 'System':
        return <SystemContent />;
      case 'Sales':
        return <SalesContent />;
      case 'Prefixes':
        return <PrefixesContent />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="border-b border-gray-200 mb-4">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
          {['Store', 'System', 'Sales', 'Prefixes'].map((tab) => (
            <li key={tab} className="mr-2">
              <button
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-gray-600 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {renderContent()}
    </div>
  );
}

function StoreContent() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Store Code*</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="ST0002"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Store Name*</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="المتجر الأنيق"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Mobile</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="0182052085209"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="abc@def.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="000000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">GST Number</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="000000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Tax Number</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="000000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">PAN Number</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Store Website</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Bank Details</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Country</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="Saudi Arabia"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">State</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="Mehajil"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Postcode</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Address</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
            defaultValue="Al-Ammari"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Store Logo</label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <img src="your-image-url.jpg" alt="Store Logo" className="w-full h-auto rounded" />
        </div>
      </div>
      <div className="flex justify-end col-span-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">
          Close
        </button>
      </div>
    </div>
  );
}

// Placeholder components for System, Sales, and Prefixes
function SystemContent() {
  return <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Settings</h1>
  <form onSubmit="" className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="timezone" className="block text-gray-700 font-bold mb-2">
        Timezone*
      </label>
      <select
        id="timezone"
        // value={timezone}
        // onChange={handleTimezoneChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Asia/Dhaka">Asia/Dhaka</option>
        {/* Add more timezones here */}
      </select>
    </div>
    <div>
      <label htmlFor="language" className="block text-gray-700 font-bold mb-2">
        Language*
      </label>
      <select
        id="language"
        // value={language}
        // onChange={handleLanguageChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="English">English</option>
        {/* Add more languages here */}
      </select>
    </div>
    <div>
      <label htmlFor="dateFormat" className="block text-gray-700 font-bold mb-2">
        Date Format*
      </label>
      <input
        type="text"
        id="dateFormat"
        // value={dateFormat}
        // onChange={handleDateFormatChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-bold mb-2">
        Enable Round Off?
      </label>
      <input
        type="checkbox"
        // checked={enableRoundOff}
        // onChange={handleEnableRoundOffChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
    </div>
    <div>
      <label htmlFor="timeFormat" className="block text-gray-700 font-bold mb-2">
        Time Format*
      </label>
      <select
        id="timeFormat"
        // value={timeFormat}
        // onChange={handleTimeFormatChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="12 Hours">12 Hours</option>
        <option value="24 Hours">24 Hours</option>
      </select>
    </div>
    <div></div>
    <div>
      <label htmlFor="currency" className="block text-gray-700 font-bold mb-2">
        Currency*
      </label>
      <select
        id="currency"
        // value={currency}
        // onChange={handleCurrencyChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Saudi Arabian Riyal SAR (-SR)">
          Saudi Arabian Riyal SAR (-SR)
        </option>
        {/* Add more currencies here */}
      </select>
    </div>
    <div></div>
    <div>
      <label
        htmlFor="currencySymbolPlacement"
        className="block text-gray-700 font-bold mb-2"
      >
        Currency Symbol Placement*
      </label>
      <select
        id="currencySymbolPlacement"
        // value={currencySymbolPlacement}
        // onChange={handleCurrencySymbolPlacementChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="After Amount">After Amount</option>
        <option value="Before Amount">Before Amount</option>
      </select>
    </div>
    <div></div>
    <div>
      <label htmlFor="decimals" className="block text-gray-700 font-bold mb-2">
        Decimals*
      </label>
      <input
        type="number"
        id="decimals"
        // value={decimals}
        // onChange={handleDecimalsChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div></div>
    <div>
      <label
        htmlFor="decimalsForQuantity"
        className="block text-gray-700 font-bold mb-2"
      >
        Decimals for Quantity*
      </label>
      <input
        type="number"
        id="decimalsForQuantity"
        // value={decimalsForQuantity}
        // onChange={handleDecimalsForQuantityChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div></div>
    <div className="col-span-2 flex justify-end">
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
      >
        Update
      </button>
      <button
        type="button"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline ml-2"
      >
        Close
      </button>
    </div>
  </form>
</div>
}

function SalesContent() {
  return <div>Sales Content</div>;
}

function PrefixesContent() {
  return <div>Prefixes Content</div>;
}

export default Store;
