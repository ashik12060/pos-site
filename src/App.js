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
import Stock from "./components/NavBarAssets/Stock/Stock";
import TotalReport from "./components/NavBarAssets/TotalReport";
import Setting from "./components/NavBarAssets/Setting";
import UserAdmin from "./components/NavBarAssets/UserAdmin";
import Contacts from "./components/NavBarAssets/Contacts/AddCustomer";
import Footer from "./components/Footer/Footer";
import NewPurchase from "./components/NavBarAssets/NewPurchase";
import PurchaseList from "./components/NavBarAssets/PurchaseList";
import ExpenseList from "./components/NavBarAssets/Expenses/ExpenseList";
import CategoryList from "./components/NavBarAssets/Expenses/CategoryList";
import AddCustomer from "./components/NavBarAssets/Contacts/AddCustomer";
import CustomersList from "./components/NavBarAssets/Contacts/CustomersList";
import ProfitLossReport from "./components/NavBarAssets/TotalReport/ProfitLossReport";
import SalesReport from "./components/NavBarAssets/TotalReport/SalesReport";
import Store from "./components/NavBarAssets/Settings/Store";
import ChangePassword from "./components/NavBarAssets/Settings/ChangePassword";
import SMTP from "./components/NavBarAssets/Settings/SMTP";
import Pos from "./components/Pos/Pos";
import SalesList from "./components/Pos/SalesList";

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
              <Route path="/new-purchase" element={<NewPurchase />} />
              <Route path="/purchase-list" element={<PurchaseList />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/expense-list" element={<ExpenseList />} />
              <Route path="/category-list" element={<CategoryList />} />
              <Route path="/total-report" element={<TotalReport />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/user-admin" element={<UserAdmin />} />
              <Route path="/add-customer" element={<AddCustomer />} />
              <Route path="/customers-list" element={<CustomersList />} />
              <Route path="/profit-loss-report" element={<ProfitLossReport />} />
              <Route path="/sales-report"element={<SalesReport />} />
              <Route path="/store"element={<Store />} />
              <Route path="/change-password"element={<ChangePassword />} />
              <Route path="/smtp"element={<SMTP />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/pos" element={<Pos />} />
              <Route path="/sales-list" element={<SalesList />} />
            </Routes>
          </main>
         
          <Footer className="mt-auto" />
         
        </div>
      </div>
    </Router>
  );
}

export default App;
