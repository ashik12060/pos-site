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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faMessage, faPaste, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faList, faLock, faStore } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar, onHover }) => {
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isExpensesOpen, setIsExpensesOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isProfitLossOpen, setIsProfitLossOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isStockOpen, setIsStockOpen] = useState(false);
  const [isGoalOpen, setIsGoalOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);

  const toggleGoal = () => {
    setIsGoalOpen(!isGoalOpen);
  };

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
  const toggleProfitLoss = () => {
    setIsProfitLossOpen(!isProfitLossOpen);
  };
  const toggleSetting = () => {
    setIsSettingOpen(!isSettingOpen);
  };

  const handleMouseEnter = () => {
    setHoverOpen(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setHoverOpen(false);
    onHover(false);
  };

  return (
    <aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 left-0 h-screen pb-96 bg-blue-800 text-white transition-all duration-300 transform ${
        isOpen || hoverOpen ? "w-52" : "w-16"
      }  overflow-auto scrollbar-hide`}
    >
      <nav className="flex flex-col items-center pb-96 p-4 text-sm">
        <div className="flex flex-col items-center mt-28">
          <Link
            to="/dashboard"
            className={`flex items-center py-2 ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen || hoverOpen ? (
              <>
                <HomeIcon className="h-6 w-6 mr-4" />
                <span>Dashboard</span>
              </>
            ) : (
              <HomeIcon className="h-6 w-6" />
            )}
          </Link>

          <div
            className={`flex items-center py-2  ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={togglePurchase}
          >
            {isOpen || hoverOpen ? (
              <>
                <ShoppingBagIcon className="h-6 w-6  mr-4" />
                <span>Purchase</span>
              </>
            ) : (
              <ShoppingBagIcon className="h-6 w-6" />
            )}
            {isOpen || hoverOpen && (
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
            <ul className="flex flex-col mt-2 w-full bg-gray-500">
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/new-purchase" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faSquarePlus} />New Purchases</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/purchase-list" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faList} />Purchases List</span>
                </Link>
              </li>
            </ul>
          )}

          {/* stock start */}
          <Link
            to="/stock"
            className={`flex items-center py-2  ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen || hoverOpen ? (
              <>
               <ArchiveBoxIcon className="h-6 w-6 mr-4" />
                <span>Stock</span>
              </>
            ) : (
              <ArchiveBoxIcon className="h-6 w-6 " />
            )}
          </Link>
          

          <div
            className={`flex items-center py-2 ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={toggleExpenses}
          >
            {isOpen || hoverOpen ? (
              <>
                <CreditCardIcon className="h-6 w-6 mr-4" />
                <span>Expenses</span>
              </>
            ) : (
              <CreditCardIcon className="h-6 w-6" />
            )}
            {isOpen || hoverOpen && (
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
            <ul className="flex flex-col mt-2 w-full bg-gray-500">
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/expense-list" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faList} />Expense List</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/category-list" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faList} />Category List</span>
                </Link>
              </li>
            </ul>
          )}

          <div
            className={`flex items-center py-2 ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={toggleProfitLoss}
          >
            {isOpen || hoverOpen ? (
              <>
                <DocumentChartBarIcon className="h-6 w-6 mr-4" />
                <span>Reports</span>
              </>
            ) : (
              <DocumentChartBarIcon className="h-6 w-6" />
            )}
            {isOpen || hoverOpen && (
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

          {isProfitLossOpen && (
            <ul className="flex flex-col mt-2 w-full bg-gray-500">
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/profit-loss-report" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faPaste} />Profit & Loss</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/sales-report" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faPaste} />Sales Report</span>
                </Link>
              </li>
            </ul>
          )}

          {/* user/admin starts */}
          <Link
            to="/user-admin"
            className={`flex items-center py-2 ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full`}
          >
            {isOpen || hoverOpen ? (
              <>
                <UserCircleIcon className="h-6 w-6 mr-4" />
                <span>User/Admin</span>
              </>
            ) : (
              <UserCircleIcon className="h-6 w-6" />
            )}
          </Link>
          {/* user/admin ends */}

          {/* contacts start */}
          <Link
            
            className={`flex items-center py-2 ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full`}
            onClick={toggleContacts}
          >
            {isOpen || hoverOpen ? (
              <>
                <PhoneIcon className="h-6 w-6 mr-4" />
                <span>Contacts</span>
              </>
            ) : (
              <PhoneIcon className="h-6 w-6" />
            )}
            {isOpen || hoverOpen && (
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
          </Link>

          {isContactsOpen && (
            <ul className="flex flex-col mt-2 w-full bg-gray-500">
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/add-customer" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faSquarePlus} />Add Customer</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/customers-list" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faList} />Customers List</span>
                </Link>
              </li>
              
            </ul>
          )}

          {/* contacts end */}



          <div
            className={`flex items-center py-2 ${
              isOpen || hoverOpen ? "justify-start" : "justify-center"
            } w-full cursor-pointer`}
            onClick={toggleSetting}
          >
            {isOpen || hoverOpen ? (
              <>
                <Cog8ToothIcon className="h-6 w-6 mr-4" />
                <span>Setting</span>
              </>
            ) : (
              <Cog8ToothIcon className="h-6 w-6" />
            )}
            {isOpen || hoverOpen && (
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

          {isSettingOpen && (
            <ul className="flex flex-col mt-2 w-full bg-gray-500">
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/store" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="pe-2" icon={faStore} />Store</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/change-password" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon icon={faLock} className="me-2" />Change Password</span>
                </Link>
              </li>
              <li
                className={`flex items-center  px-4 ${
                  isOpen || hoverOpen ? "justify-start" : "justify-center"
                } w-full`}
              >
                <Link to="/smtp" className="flex items-center w-full">
                  <span className=""><FontAwesomeIcon className="me-2" icon={faMessage} />SMTP</span>
                </Link>
              </li>
            </ul>
          )}

          
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
