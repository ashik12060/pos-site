

import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLanguage, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToggleOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-2 lg:p-2">
      <button onClick={toggleSidebar} className="text-2xl">&#9776;</button>
      <div className="text-xl">
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div className="flex items-center space-x-6 relative">
        <button className="px-3 py-1 rounded">
          <FontAwesomeIcon className="pe-1" icon={faLanguage} /> English
        </button>
        <Link to="/pos" className="px-3 py-1 rounded">
          <FontAwesomeIcon className="pe-1" icon={faSquarePlus} /> POS
        </Link>
        <button onClick={toggleDropdown} className="px-3 py-1 rounded">
          <FontAwesomeIcon className="pe-1 text-2xl" icon={faCircleUser} /> Salman
        </button>

        {isToggleOpen && (
          <div
            ref={dropdownRef}
            className="origin-top-right absolute top-8 right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            <div className="px-4 py-3 border-b bg-blue-800 ">
              <div className='flex justify-center'>
              <FontAwesomeIcon className="pe-1 text-5xl text-white text-center " icon={faCircleUser} />
              </div>
              <p className="text-l text-white mt-2 text-center">Salman Khan</p> 
              <p className="text-sm text-white text-center">s<i>alman@example.com</i></p> 
              <p className="text-sm font-bold text-white text-center">Role: Store Admin</p> 
            </div>
            <div className='flex justify-evenly'>
              <Link
                to='/user/edit'
                className="block  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
               
                Profile
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
