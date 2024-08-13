import React from "react";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Pos = () => {
  const products = [
    {
      id: 1,
      name: "SANDISK 32GB USB 2.0 FLAS",
      price: "2.80 - SR",
      qty: 0,
      image: "image-url-1",
    },
    {
      id: 2,
      name: "IMATION 64GB FLASH DRIVE",
      price: "3.90 - SR",
      qty: 0,
      image: "image-url-2",
    },
    {
      id: 3,
      name: "SANDISK FLASH DRIVE USB C",
      price: "5.00 - SR",
      qty: 0,
      image: "image-url-3",
    },

    {
      id: 4,
      name: "SANDISK FLASH DRIVE USB C",
      price: "5.00 - SR",
      qty: 0,
      image: "image-url-3",
    },

    {
      id: 5,
      name: "SANDISK FLASH DRIVE USB C",
      price: "5.00 - SR",
      qty: 0,
      image: "image-url-3",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Cash Point</div>
        <nav className="flex space-x-4">
          <Link to="/sales-list" className="hover:underline">
            Sales List
          </Link>
          <Link to="/customers-list" className="hover:underline">
            Customers List
          </Link>
          <a href="#" className="hover:underline">
            Items List
          </a>
          <a href="#" className="hover:underline">
            New Invoice
          </a>
          <a href="#" className="hover:underline">
            Hold List
          </a>
          <a href="#" className="hover:underline">
            Dashboard
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <span>Salman</span>
          <img src={img} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      <main className="p-4 flex-grow space-y-4 bg-white border-solid">
        <div className="flex space-x-4">
          <div className="flex space-x-2 items-center">
            <label htmlFor="branch" className="mr-2">
              Branch:
            </label>
            <select
              id="branch"
              className="border-solid border-2 border-gray-300 p-2"
            >
              <option value="1">Botiyagata</option>
            </select>
          </div>
          <div className="flex space-x-2 items-center">
            <label htmlFor="customer" className="mr-2">
              Customer:
            </label>
            <select
              id="customer"
              className="border-solid border-2 border-gray-300 p-2"
            >
              <option value="1">CU/02/0001-Walk-in customer</option>
            </select>
          </div>
          <div className="flex-grow">
            <input
              type="text"
              className="border-solid border-2 border-gray-300 w-full p-2"
              placeholder="Item name/Barcode/Itemcode"
            />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded">
            Add Item
          </button>
        </div>
        <div className="text-red-600">Previous Due: 0.00</div>

        <div className="border-solid border-2 border-gray-300">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Item Name</th>
                <th className="border p-2">Stock</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Discount(-SR)</th>
                <th className="border p-2">Tax</th>
                <th className="border p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Item 1</td>
                <td className="border p-2">10</td>
                <td className="border p-2">1</td>
                <td className="border p-2">100.00</td>
                <td className="border p-2">0.00</td>
                <td className="border p-2">5%</td>
                <td className="border p-2">105.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="w-1/4 p-2 border border-gray-300 rounded">
            <img src={img} alt="Product" className="w-full h-24 object-cover" />
            <div className="text-center mt-2">Product Name</div>
            <div className="text-center text-green-600">100.00 - SR</div>
            <div className="text-center text-red-600">Qty: 10</div>
          </div>
        </div>

        <footer className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="send-message" className="form-checkbox" />
          <label htmlFor="send-message" className="text-sm">
            Send Message to Customer
          </label>
        </div>
        <div className="flex space-x-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded">
            Hold
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Multiple
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Cash
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Pay All
          </button>
        </div>
      </footer>
      </main>

      <div className="p-4 bg-white mt-4">
        <div className="flex space-x-2 mb-4">
          <select className="border border-gray-300 p-2 rounded">
            <option>-All Categories-</option>
            <option value="electronics">Electronics</option>
            <option value="home-appliances">Home Appliances</option>
            <option value="clothing">Clothing</option>
            <option value="toys">Toys</option>
            <option value="books">Books</option>
            <option value="beauty">Beauty</option>
          </select>
          <select className="border border-gray-300 p-2 rounded">
            <option>-All Brands-</option>
            <option value="samsung">Samsung</option>
            <option value="sony">Sony</option>
            <option value="apple">Apple</option>
            <option value="lg">LG</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
          </select>
          <button className="border border-gray-300 p-2 rounded">⟳</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded p-2"
            >
              <div className="flex justify-between">
                <span className="text-xs bg-gray-200 rounded p-1">
                  Qty: {product.qty}
                </span>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-24 object-cover my-2"
              />
              <div className="text-center text-gray-700 font-bold">
                {product.name}
              </div>
              <div className="text-center text-green-600 font-semibold">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Pos;
