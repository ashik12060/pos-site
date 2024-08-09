import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  ArchiveBoxIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isExpensesOpen, setIsExpensesOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isStockOpen, setIsStockOpen] = useState(false);

  const toggleContacts = () => {
    setIsContactsOpen(!isContactsOpen);
  };
  const toggleStock = () => {
    setIsStockOpen(!isStockOpen);
  };
  const toggleExpenses = () => {
    setIsExpensesOpen(!isExpensesOpen);
  };
  const togglePurchase = () => {
    setIsPurchaseOpen(!isPurchaseOpen);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-blue-800 text-white transition-all duration-300 transform ${
        isOpen ? "w-52" : "w-16"
      } overflow-hidden`}
    >
      <nav className="flex flex-col items-center p-4">
        <div className="flex flex-col items-center mt-28">
          <Link
            to="/dashboard"
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen ? (
              <>
                <HomeIcon className="h-6 w-6 mr-4" />
                <span>Dashboard</span>
              </>
            ) : (
              <HomeIcon className="h-6 w-6" />
            )}
          </Link>

          <div
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={togglePurchase}
          >
            {isOpen ? (
              <>
                <ShoppingBagIcon className="h-6 w-6 mr-4" />
                <span>Purchase</span>
              </>
            ) : (
              <ShoppingBagIcon className="h-6 w-6" />
            )}
            {isOpen && (
              <svg
                className="h-4 w-4 ml-auto transform rotate-90"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>

          {isPurchaseOpen && (
            <ul className="flex flex-col mt-2 w-full">
              <li
                className={`flex items-center  px-4 ${
                  isOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/new-purchase" className="flex items-center w-full">
                  <span className="ml-4">New Purchases</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/purchase-list" className="flex items-center w-full">
                  <span className="ml-4">Purchases List</span>
                </Link>
              </li>
            </ul>
          )}

          {/*  */}

          
          <Link
            to="/stock"
            className={`flex items-center py-2 ${isOpen ? 'justify-start' : 'justify-center'} w-full`}
          >
            {isOpen ? (
              <>
               <CreditCardIcon className="h-6 w-6 mr-4" />
                <span>Stock</span>
              </>
            ) : (
              <CreditCardIcon className="h-6 w-6 mr-4" />
            )}
          </Link>

          

          {/* expenses starts */}
          <div
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={toggleExpenses}
          >
            {isOpen ? (
              <>
                <CreditCardIcon className="h-6 w-6 mr-4" />
                <span>Expenses</span>
              </>
            ) : (
              <CreditCardIcon className="h-6 w-6" />
            )}
            {isOpen && (
              <svg
                className="h-4 w-4 ml-auto transform rotate-90"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>

          {isExpensesOpen && (
            <ul className="flex flex-col mt-2 w-full">
              <li
                className={`flex items-center  px-4 ${
                  isOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/contacts" className="flex items-center w-full">
                  <span className="ml-4">Expenses list</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/contacts" className="flex items-center w-full">
                  <span className="ml-4">Category list</span>
                </Link>
              </li>
            </ul>
          )}
          {/* expenses ended */}

          <Link
            to="/total-report"
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen ? (
              <>
                <DocumentChartBarIcon className="h-6 w-6 mr-4" />
                <span>Total Report</span>
              </>
            ) : (
              <DocumentChartBarIcon className="h-6 w-6" />
            )}
          </Link>
          <Link
            to="/setting"
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen ? (
              <>
                <Cog8ToothIcon className="h-6 w-6 mr-4" />
                <span>Setting</span>
              </>
            ) : (
              <Cog8ToothIcon className="h-6 w-6" />
            )}
          </Link>
          <Link
            to="/user-admin"
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen ? (
              <>
                <UserCircleIcon className="h-6 w-6 mr-4" />
                <span>User/Admin</span>
              </>
            ) : (
              <UserCircleIcon className="h-6 w-6" />
            )}
          </Link>

          {/* Contacts Dropdown */}
          <div
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={toggleContacts}
          >
            {isOpen ? (
              <>
                <PhoneIcon className="h-6 w-6 mr-4" />
                <span>Contacts</span>
              </>
            ) : (
              <PhoneIcon className="h-6 w-6" />
            )}
            {isOpen && (
              <svg
                className="h-4 w-4 ml-auto transform rotate-90"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>

          {isContactsOpen && (
            <ul className="flex flex-col mt-2 w-full">
              <li
                className={`flex items-center  px-4 ${
                  isOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/contacts" className="flex items-center w-full">
                  <span className="ml-4">Contacts</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/contacts" className="flex items-center w-full">
                  <span className="ml-4">Contacts</span>
                </Link>
              </li>
            </ul>
          )}

          {/* End of Contacts Dropdown */}

          <Link
            to="/attendance"
            className={`flex items-center py-2 ${
              isOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen ? (
              <>
                <ClockIcon className="h-6 w-6 mr-4" />
                <span>Attendance</span>
              </>
            ) : (
              <ClockIcon className="h-6 w-6" />
            )}
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
