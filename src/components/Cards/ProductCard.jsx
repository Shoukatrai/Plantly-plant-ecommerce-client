import React from "react";

const ProductCard = ({ plant }) => {
  // calculate discounted price
  const discountedPrice =
    plant.discount > 0
      ? (plant.price - plant.price * (plant.discount / 100)).toFixed(2)
      : plant.price.toFixed(2);

  return (
    <div className="flex flex-col items-center justify-between text-center gap-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition h-[450px]">
      {/* IMAGE */}
      <img
        src={plant.imageUrl}
        alt={plant.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* TEXT */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-lg">{plant.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {plant.description}
        </p>

        {/* Price */}
        <div className="text-green-700 font-medium">
          {plant.discount > 0 && (
            <span className="text-gray-500 line-through mr-2">
              ${plant.price.toFixed(2)}
            </span>
          )}
          ${discountedPrice}
        </div>

        {/* Rating + Stock */}
        <div className="text-sm text-gray-500">
          ⭐ {plant.rating} | {plant.inStock} in stock
        </div>
      </div>

      {/* CTA */}
      <button className="cursor-pointer mx-auto md:mx-0 bg-green-700 px-6 py-2.5 rounded-full mb-3 text-white font-medium hover:bg-green-800 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
