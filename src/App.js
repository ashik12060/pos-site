import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col w-full">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
         
        </main>
      </div>
    </div>
  );
}

export default App;
