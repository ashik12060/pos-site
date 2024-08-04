// Dashboard.js
import { faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxOpen,
  faBriefcase,
  faCartFlatbedSuitcase,
  faCartShopping,
  faMoneyCheckDollar,
  faStore,
  faTruckField,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl">Dashboard</h2>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-green-500 rounded-md p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">0-SR</div>
              <div className="text-sm">PURCHASE DUE</div>
            </div>
            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl" icon={faBoxOpen} />
            </div>
          </div>
          <div className="bg-purple-500 rounded-md p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">0-SR</div>
              <div className="text-sm">SALES DUE</div>
            </div>

            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl" icon={faStore} />
            </div>
          </div>
          <div className="bg-blue-500 rounded-md p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">0-SR</div>
              <div className="text-sm">SALES</div>
            </div>

            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl" icon={faFile} />
            </div>
          </div>
          <div className="bg-red-500 rounded-md p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">0-SR</div>
              <div className="text-sm">EXPENSE</div>
            </div>
            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl" icon={faMoneyCheckDollar} />
            </div>
          </div>

          <div className="bg-teal-600 rounded-md p-4 flex justify-around ">
            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl text-white" icon={faUsers} />
            </div>
            <div className="flex items-center text-white flex-col gap-4">
              <div className="font-bold text-2xl">13</div>
              <div className="text-sm font-bold">CUSTOMERS</div>
            </div>
          </div>

          <div className="bg-teal-600  flex justify-around rounded-md p-4">
            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl text-white" icon={faTruckField} />
            </div>

            <div className="flex  items-center flex-col text-white gap-4">
              <div className="font-bold text-2xl">9</div>
              <div className="text-sm font-bold">SUPPLIERS</div>
            </div>
          </div>

       

          <div className="bg-teal-600  flex justify-around rounded-md p-4">
            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl text-white" icon={faBriefcase} />
            </div>

            <div className="flex  items-center flex-col text-white gap-4">
              <div className="font-bold text-2xl">0</div>
              <div className="text-sm font-bold">PURCHASES</div>
            </div>
          </div>

          <div className="bg-teal-600  flex justify-around rounded-md p-4">
            <div className="flex justify-center mt-4">
              <FontAwesomeIcon className="text-6xl text-white" icon={faCartShopping} />
            </div>

            <div className="flex  items-center flex-col text-white gap-4">
              <div className="font-bold text-2xl">0</div>
              <div className="text-sm font-bold">INVOICES</div>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
