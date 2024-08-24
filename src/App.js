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
import UserAdmin from "./components/NavBarAssets/UserAdmin";
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
import NotFound from "./components/NotFound/NotFound";
import Test from "./components/Test";
import StockAdjustmentAdd from "./components/NavBarAssets/Stock/StockAdjustmentAdd";
import StockAdjustmentDetails from "./components/NavBarAssets/Stock/StockAdjustmentDetails";
import StockUpdate from "./components/NavBarAssets/Stock/StockUpdate";
import EditExpenses from "./components/NavBarAssets/Expenses/EditExpenses";
import AddExpenses from "./components/NavBarAssets/Expenses/AddExpenses";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoverOpen, setHoverOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarHover = (hovering) => {
    setHoverOpen(hovering);
  };

  return (
    <Router>
      <div className="flex overflow-hidden min-h-screen custom-height">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onHover={handleSidebarHover}
        />
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ${
            isSidebarOpen || hoverOpen ? "ml-52" : "ml-16"
          }`}
        >
          <Header
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            hoverOpen={hoverOpen}
          />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/new-purchase" element={<NewPurchase />} />
              <Route path="/purchase-list" element={<PurchaseList />} />

              <Route path="/stock" element={<Stock />} />
              <Route path="/stock/add" element={<StockAdjustmentAdd />} />
              <Route path="/stock-adjustment/details" element={<StockAdjustmentDetails />} />
              <Route path="/stock-adjustment/update" element={<StockUpdate/>} />

              <Route path="/expense-list" element={<ExpenseList />} />
              <Route path="/category-list" element={<CategoryList />} />
              <Route path="/category-list" element={<CategoryList />} />
              <Route path="/expense-list/add" element={<AddExpenses />} />
              <Route path="/expense-list/update" element={<EditExpenses />} />


              <Route path="/total-report" element={<TotalReport />} />
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
              <Route path="/test" element={<Test />} />




              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer className="mt-auto" />
        </div>
      </div>
    </Router>
  );
}

export default App;
