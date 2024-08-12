import React, { useState } from "react";

function SMTP() {
  const [smtpStatus, setSmtpStatus] = useState("Enable");
  const [smtpHost, setSmtpHost] = useState("");
  const [smtpPort, setSmtpPort] = useState("");
  const [smtpUser, setSmtpUser] = useState("admin@example.com");
  const [smtpPassword, setSmtpPassword] = useState("");

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Updating SMTP settings...");
    console.log(
      `SMTP Status: ${smtpStatus}, SMTP Host: ${smtpHost}, SMTP Port: ${smtpPort}, SMTP User: ${smtpUser}, SMTP Password: ${smtpPassword}`
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-lg md:max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">SMTP Settings</h1>
        <div className="mb-4">
          <label htmlFor="smtpStatus" className="block text-gray-700 text-sm font-bold mb-2">
            SMTP Status:
          </label>
          <select
            id="smtpStatus"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={smtpStatus}
            onChange={(e) => setSmtpStatus(e.target.value)}
          >
            <option value="Enable">Enable</option>
            <option value="Disable">Disable</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="smtpHost" className="block text-gray-700 text-sm font-bold mb-2">
            SMTP Host:
          </label>
          <input
            type="text"
            id="smtpHost"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={smtpHost}
            onChange={(e) => setSmtpHost(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="smtpPort" className="block text-gray-700 text-sm font-bold mb-2">
            SMTP Port:
          </label>
          <input
            type="number"
            id="smtpPort"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={smtpPort}
            onChange={(e) => setSmtpPort(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="smtpUser" className="block text-gray-700 text-sm font-bold mb-2">
            SMTP User:
          </label>
          <input
            type="email"
            id="smtpUser"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={smtpUser}
            onChange={(e) => setSmtpUser(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="smtpPassword" className="block text-gray-700 text-sm font-bold mb-2">
            SMTP Password:
          </label>
          <input
            type="password"
            id="smtpPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={smtpPassword}
            onChange={(e) => setSmtpPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mr-2"
          >
            Update
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 ml-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SMTP;
