import React from "react";

const CartCard = ({ product, onIncrease, onDecrease, onRemove }) => {
  if (!product) return null;

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200">
      {/* IMAGE */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-green-700 font-medium">${product.price}</p>

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="min-w-[30px] text-center">{product.quantity}</span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={onRemove}
        className="text-red-500 hover:underline text-sm ml-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
