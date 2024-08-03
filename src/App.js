import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-52' : 'ml-16'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
        </main>
      </div>
    </div>
  );
}

export default App;

