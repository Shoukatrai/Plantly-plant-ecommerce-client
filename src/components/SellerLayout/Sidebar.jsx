import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/seller_dashboard" },
    { name: "Orders", path: "/seller_orders" },
    { name: "Products", path: "/seller_products" },
    { name: "Settings", path: "/seller_settings" },
  ];

  return (
    <aside
      className={`fixed z-30 inset-y-0 left-0 w-64 bg-white shadow-lg transform 
        ${sidebarOpen ? "translate-x-0 " : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      {/* Top Bar with Close Button */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Plantly</h1>
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setSidebarOpen(false)}
        >
          <RxCross1 size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded-lg font-medium transition-colors
                ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-600 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
