import React, { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const AppHeader = ({ setSidebarOpen, sidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 bg-green-700 text-white border-b border-green-800 px-4 shadow-sm">
      {/* Sidebar Toggle Button */}
      <button
        className="lg:hidden p-2 rounded-md cursor-pointer hover:bg-green-600"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Title / Logo */}
      <Link to={"/seller_dashboard"}>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </Link>

      {/* User Menu */}
      <div className="flex items-center space-x-3 relative">
        <span className="hidden sm:block font-medium">Shoukat</span>

        {/* Avatar Button */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
          aria-label="User Menu"
        >
          <FiUser size={20} />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-40 bg-white text-black rounded shadow-lg animate-fadeIn">
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              Profile
            </Link>
            <Link
              to="/orders"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              Orders
            </Link>
            <button
              onClick={() => {
                Cookies.remove("token");
                window.location.reload();
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
