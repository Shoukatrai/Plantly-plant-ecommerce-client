import React from "react";
import { CartCard } from "../components";

const Cart = ({ onClose, isOpen, cartItems = [] }) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-3/4 md:w-1/3 lg:w-1/4 bg-green-50 shadow-lg border-l border-green-200 flex flex-col z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-green-200 flex justify-between items-center bg-green-100">
        <h1 className="font-semibold text-green-800">
          Cart Items ({cartItems.length})
        </h1>
        <button
          onClick={onClose}
          className="text-sm text-red-600 hover:underline cursor-pointer"
        >
          Close
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg shadow-sm border bg-white"
            >
              <CartCard plant={item} />
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-sm">Your cart is empty.</p>
        )}
      </div>
    </aside>
  );
};

export default Cart;
