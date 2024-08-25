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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Asia/Dhaka">Asia/Dhaka</option>
        
      </select>
    </div>
    <div>
      <label htmlFor="language" className="block text-gray-700 font-bold mb-2">
        Language*
      </label>
      <select
        id="language"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="English">English</option>
      </select>
    </div>
    <div>
      <label htmlFor="dateFormat" className="block text-gray-700 font-bold mb-2">
        Date Format*
      </label>
      <input
        type="text"
        id="dateFormat"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-bold mb-2">
        Enable Round Off?
      </label>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
      />
    </div>
    <div>
      <label htmlFor="timeFormat" className="block text-gray-700 font-bold mb-2">
        Time Format*
      </label>
      <select
        id="timeFormat"
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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Saudi Arabian Riyal SAR (-SR)">
          Saudi Arabian Riyal SAR (-SR)
        </option>
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
  return <div className="container mx-auto p-4">
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold mb-4">Invoice Settings</h2>

    <div className="mb-4">
      <label htmlFor="defaultSalesDiscount" className="block text-gray-700 font-bold mb-2">
        Default Sales Discount (%)
      </label>
      <input
        type="number"
        id="defaultSalesDiscount"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="showPaidAmountAndChangeReturn"
          className="form-checkbox h-5 w-5 text-gray-600"
        />
        <label
          htmlFor="showPaidAmountAndChangeReturn"
          className="ml-2 text-gray-700"
        >
          Show Paid Amount and Change Return (in POS)
        </label>
      </div>
    </div>

    <div className="mb-4">
      <label
        htmlFor="salesInvoiceFormats"
        className="block text-gray-700 font-bold mb-2"
      >
        Sales Invoice Formats*
      </label>
      <select
        id="salesInvoiceFormats"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Default">Default</option>
      </select>
    </div>

    <div className="mb-4">
      <label
        htmlFor="posInvoiceFormats"
        className="block text-gray-700 font-bold mb-2"
      >
        POS Invoice Formats*
      </label>
      <select
        id="posInvoiceFormats"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Default">Default</option>
      </select>
    </div>

    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="showMRPColumn"
          className="form-checkbox h-5 w-5 text-gray-600"
        />
        <label htmlFor="showMRPColumn" className="ml-2 text-gray-700">
          Show MRP Column on POS Invoice
        </label>
      </div>
    </div>

    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="showPreviousBalance"
          className="form-checkbox h-5 w-5 text-gray-600"
        />
        <label
          htmlFor="showPreviousBalance"
          className="ml-2 text-gray-700"
        >
          Show Previous Balance on Invoice
        </label>
      </div>
    </div>

    <div className="mb-4">
      <label
        htmlFor="numberToWordsFormat"
        className="block text-gray-700 font-bold mb-2"
      >
        Number to Words Format*
      </label>
      <select
        id="numberToWordsFormat"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="Default">Default</option>
      </select>
    </div>

    <div className="mb-4">
      <label
        htmlFor="salesInvoiceFooterText"
        className="block text-gray-700 font-bold mb-2"
      >
        Sales Invoice Footer Text
      </label>
      <textarea
        id="salesInvoiceFooterText"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="invoiceTermsAndConditions"
        className="block text-gray-700 font-bold mb-2"
      >
        Invoice Terms and Conditions
      </label>
      <div className="flex items-center">
        <div className="mr-4">
          <input
            type="radio"
            id="showOnInvoice"
            className="form-radio h-5 w-5 text-gray-600"
          />
          <label htmlFor="showOnInvoice" className="ml-2 text-gray-700">
            Show on Invoice
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="hideOnInvoice"
            className="form-radio h-5 w-5 text-gray-600"
            
          />
          <label htmlFor="hideOnInvoice" className="ml-2 text-gray-700">
            Hide on Invoice
          </label>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <div className="mr-4">
          <input
            type="radio"
            id="showOnPOSInvoice"
            className="form-radio h-5 w-5 text-gray-600"
          />
          <label htmlFor="showOnPOSInvoice" className="ml-2 text-gray-700">
            Show on POS Invoice
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="hideOnPOSInvoice"
            className="form-radio h-5 w-5 text-gray-600"
          />
          <label htmlFor="hideOnPOSInvoice" className="ml-2 text-gray-700">
            Hide on POS Invoice
          </label>
        </div>
      </div>
      <textarea
        id="invoiceTermsAndConditions"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
    </div>

    <div className="flex justify-end">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Update
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
        type="button"
      >
        Close
      </button>
    </div>
  </div>
</div>
}

function PrefixesContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h1 className="text-3xl font-bold mb-4">Prefixes</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category*
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="item" className="block text-sm font-medium text-gray-700">
            Item*
          </label>
          <input
            type="text"
            name="item"
            id="item"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
            Supplier*
          </label>
          <input
            type="text"
            name="supplier"
            id="supplier"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="purchase" className="block text-sm font-medium text-gray-700">
            Purchase*
          </label>
          <input
            type="text"
            name="purchase"
            id="purchase"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="purchaseReturn" className="block text-sm font-medium text-gray-700">
            Purchase Return*
          </label>
          <input
            type="text"
            name="purchaseReturn"
            id="purchaseReturn"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
            Customer*
          </label>
          <input
            type="text"
            name="customer"
            id="customer"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto">
            Update
          </button>
          <button type="button" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 w-full sm:w-auto">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}




export default Store;
