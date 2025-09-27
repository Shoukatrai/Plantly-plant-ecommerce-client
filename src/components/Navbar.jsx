import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="bg-green-700 w-full text-white md:hidden p-4 flex justify-between items-center">
        <div className="text-lg font-bold">PlantShop</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="space-y-1 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <div className="h-1 w-7 bg-white"></div>
          <div className="h-1 w-7 bg-white"></div>
          <div className="h-1 w-7 bg-white"></div>
        </button>
      </div>

      {/* DESKTOP NAV */}
      <div className="bg-green-700 text-white hidden md:flex justify-between items-center p-4">
        <div className="text-lg font-bold">PlantShop</div>

        <div className="space-x-6">
          <Link to="/" className="hover:font-bold">
            Home
          </Link>
          <Link to="/shop" className="hover:font-bold">
            Shop
          </Link>
          <Link to="/about" className="hover:font-bold">
            About
          </Link>
          <Link to="/contact" className="hover:font-bold">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded"
          />
          <button className="cursor-pointer hover:text-gray-200">
            <FiSearch className="size-6" />
          </button>

          <div className="relative">
            <button className="cursor-pointer hover:text-gray-200">
              <IoIosNotificationsOutline className="size-7" />
            </button>
            <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1 rounded-full">
              10
            </span>
          </div>

          <div className="relative">
            <button className="cursor-pointer hover:text-gray-200">
              <CiShoppingCart className="size-7" />
            </button>
            <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1 rounded-full">
              10
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="flex flex-col gap-6 bg-green-700 text-white p-4 md:hidden items-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:font-bold"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="hover:font-bold"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:font-bold"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:font-bold"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:font-bold"
          >
            Cart (10)
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
