import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/NavBarAssets/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Purchase from "./components/NavBarAssets/Purchase";
import Attendance from "./components/NavBarAssets/Attendance";
import Expenses from "./components/NavBarAssets/Expenses";
import Stock from "./components/NavBarAssets/Stock";
import TotalReport from "./components/NavBarAssets/TotalReport";
import Setting from "./components/NavBarAssets/Setting";
import UserAdmin from "./components/NavBarAssets/UserAdmin";
import Contacts from "./components/NavBarAssets/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex overflow-hidden min-h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-52" : "ml-16"
          }`}
        >
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/total-report" element={<TotalReport />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/user-admin" element={<UserAdmin />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/attendance" element={<Attendance />} />
            </Routes>
          </main>
         
          <Footer className="mt-auto" />
         
        </div>
      </div>
    </Router>
  );
}

export default App;
