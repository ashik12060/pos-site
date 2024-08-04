import React from 'react';
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLanguage, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-2 lg:p-2 ">
      <button onClick={toggleSidebar} className="text-2xl">&#9776;</button>
      <div className="text-xl">
        <img className='w-20' src={logo} alt='logo' />
      </div>
      <div className="flex items-center space-x-6">
        <button className="px-3 py-1 rounded "><FontAwesomeIcon className='pe-1' icon={faLanguage} />English</button>
        <button className=" px-3 py-1 rounded"><FontAwesomeIcon className='pe-1 ' icon={faSquarePlus} />POS</button>
        <button className=" px-3 py-1 rounded"><FontAwesomeIcon className='pe-1 text-2xl' icon={faCircleUser} />Salman</button>
      </div>
    </header>
  );
};

export default Header;

