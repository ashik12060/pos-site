import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed top-0 left-0 w-64 bg-blue-800 text-white h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <nav className="flex flex-col p-4">
        <button onClick={toggleSidebar} className="self-end text-2xl mb-4">&times;</button>
        <a href="#" className="py-2">Dashboard</a>
        <a href="#" className="py-2">Users</a>
        <a href="#" className="py-2">Sales</a>
        <a href="#" className="py-2">Contacts</a>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
