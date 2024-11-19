import React, { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CreateAccount from './components/Login/CreateAccount';
import Login from './components/Login/Login';
import Attendance from './components/NavBarAssets/Attendance';
import AddCustomer from './components/NavBarAssets/Contacts/AddCustomer';
import CustomersList from './components/NavBarAssets/Contacts/CustomersList';
import Dashboard from './components/NavBarAssets/Dashboard';
import AddExpenses from './components/NavBarAssets/Expenses/AddExpenses';
import CategoryAdd from './components/NavBarAssets/Expenses/CategoryAdd';
import CategoryList from './components/NavBarAssets/Expenses/CategoryList';
import CategoryUpdate from './components/NavBarAssets/Expenses/CategoryUpdate';
import EditExpenses from './components/NavBarAssets/Expenses/EditExpenses';
import ExpenseList from './components/NavBarAssets/Expenses/ExpenseList';
import NewPurchase from './components/NavBarAssets/NewPurchase';
import Purchase from './components/NavBarAssets/Purchase';
import PurchaseList from './components/NavBarAssets/PurchaseList';
import ChangePassword from './components/NavBarAssets/Settings/ChangePassword';
import SMTP from './components/NavBarAssets/Settings/SMTP';
import Store from './components/NavBarAssets/Settings/Store';
import Stock from './components/NavBarAssets/Stock/Stock';
import StockAdjustmentAdd from './components/NavBarAssets/Stock/StockAdjustmentAdd';
import StockAdjustmentDetails from './components/NavBarAssets/Stock/StockAdjustmentDetails';
import StockUpdate from './components/NavBarAssets/Stock/StockUpdate';
import TotalReport from './components/NavBarAssets/TotalReport';
import ProfitLossReport from './components/NavBarAssets/TotalReport/ProfitLossReport';
import SalesReport from './components/NavBarAssets/TotalReport/SalesReport';
import UserAdd from './components/NavBarAssets/UserAdmin/UserAdd';
import UserAdmin from './components/NavBarAssets/UserAdmin/UserAdmin';
import UserEdit from './components/NavBarAssets/UserAdmin/UserEdit';
import NotFound from './components/NotFound/NotFound';
import Pos from './components/Pos/Pos';
import SalesList from './components/Pos/SalesList';
import Sidebar from './components/Sidebar/Sidebar';
import Test from './components/Test';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoverOpen, setHoverOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarHover = hovering => {
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
            isSidebarOpen || hoverOpen ? 'ml-52' : 'ml-16'
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
              <Route path="/login" element={<Login />} />
              <Route path="/createAccount" element={<CreateAccount />} />

              <Route path="/stock" element={<Stock />} />
              <Route path="/stock/add" element={<StockAdjustmentAdd />} />
              <Route
                path="/stock-adjustment/details"
                element={<StockAdjustmentDetails />}
              />
              <Route
                path="/stock-adjustment/update"
                element={<StockUpdate />}
              />

              <Route path="/expense-list" element={<ExpenseList />} />
              <Route path="/category-list" element={<CategoryList />} />
              <Route path="/category-list" element={<CategoryList />} />
              <Route path="/expense-list/add" element={<AddExpenses />} />
              <Route path="/expense-list/update" element={<EditExpenses />} />
              <Route path="/expense-category/add" element={<CategoryAdd />} />
              <Route
                path="/expense-category/update"
                element={<CategoryUpdate />}
              />

              <Route path="/total-report" element={<TotalReport />} />

              <Route path="/user-admin" element={<UserAdmin />} />
              <Route path="/user/edit" element={<UserEdit />} />
              <Route path="/user/add" element={<UserAdd />} />

              <Route path="/add-customer" element={<AddCustomer />} />
              <Route path="/customers-list" element={<CustomersList />} />

              <Route
                path="/profit-loss-report"
                element={<ProfitLossReport />}
              />
              <Route path="/sales-report" element={<SalesReport />} />
              <Route path="/store" element={<Store />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/smtp" element={<SMTP />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/pos" element={<Pos />} />
              <Route path="/sales-list" element={<SalesList />} />
              <Route path="/test" element={<Test />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer className="mt-auto" />
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
