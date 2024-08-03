import React from 'react';
import logo from "../../assets/logo.png"

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-4 ">
      <button onClick={toggleSidebar} className="text-2xl">&#9776;</button>
      <div className="text-xl">
        <img className='w-20' src={logo} alt='logo' />
      </div>
      <div className="flex items-center space-x-6">
        <button className="bg-blue-700 px-3 py-1 rounded">English</button>
        <button className="bg-blue-700 px-3 py-1 rounded">POS</button>
        <button className="bg-blue-700 px-3 py-1 rounded">Salman</button>
      </div>
    </header>
  );
};

export default Header;

