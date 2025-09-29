import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ plant }) => {
  const discountedPrice =
    plant.discount > 0
      ? (plant.price - plant.price * (plant.discount / 100)).toFixed(2)
      : plant.price.toFixed(2);

  return (
    <Link to={`/plants/${plant.id}`}>
      <div className="flex flex-col items-center justify-between text-center gap-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition h-[400px]">
        {/* IMAGE */}
        <img
          src={plant.imageUrl || plant.image} 
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

          <div className="text-sm text-gray-500">
            ⭐ {plant.rating ?? 0} | {plant.stock ?? 0} in stock
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
