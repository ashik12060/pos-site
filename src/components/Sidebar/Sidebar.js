import React from 'react';
import { HomeIcon, ShoppingBagIcon, ArchiveBoxIcon, CreditCardIcon, DocumentChartBarIcon, Cog8ToothIcon, UserCircleIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-blue-800 text-white transition-all duration-300 transform ${isOpen ? 'w-52' : 'w-16'} overflow-hidden`}>
      <nav className="flex flex-col items-center p-4">
       
      
        <div className="flex flex-col items-center mt-28">
          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <HomeIcon className="h-6 w-6 mr-4" />
                <span>Dashboard</span>
              </>
            ) : (
              <HomeIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <ShoppingBagIcon className="h-6 w-6 mr-4" />
                <span>Purchase</span>
              </>
            ) : (
              <ShoppingBagIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <ArchiveBoxIcon className="h-6 w-6 mr-4" />
                <span>Stock</span>
              </>
            ) : (
              <ArchiveBoxIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <CreditCardIcon className="h-6 w-6 mr-4" />
                <span>Expenses</span>
              </>
            ) : (
              <CreditCardIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <DocumentChartBarIcon className="h-6 w-6 mr-4" />
                <span>Total Report</span>
              </>
            ) : (
              <DocumentChartBarIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <Cog8ToothIcon className="h-6 w-6 mr-4" />
                <span>Setting</span>
              </>
            ) : (
              <Cog8ToothIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <UserCircleIcon className="h-6 w-6 mr-4" />
                <span>User/Admin</span>
              </>
            ) : (
              <UserCircleIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <PhoneIcon className="h-6 w-6 mr-4" />
                <span>Contacts</span>
              </>
            ) : (
              <PhoneIcon className="h-6 w-6" />
            )}
          </a>

          <a
            href="#"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
                <ClockIcon className="h-6 w-6 mr-4" />
                <span>Attendance</span>
              </>
            ) : (
              <ClockIcon className="h-6 w-6" />
            )}
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;