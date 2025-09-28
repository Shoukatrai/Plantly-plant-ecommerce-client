import React from "react";
import { Link } from "react-router-dom";

const featuredPlants = [
  {
    id: 1,
    name: "Indoor Plant",
    description: "Perfect for your living room or office.",
    inStock: 12,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    price: 25.99,
    discount: 10, // percentage
  },
  {
    id: 2,
    name: "Succulent",
    description: "Low-maintenance beauty for any desk.",
    inStock: 5,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    rating: 4.2,
    price: 15.49,
    discount: 0,
  },
  {
    id: 3,
    name: "Herb Plant",
    description: "Freshen up your cooking with live herbs.",
    inStock: 20,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    price: 12.99,
    discount: 5,
  },
  {
    id: 4,
    name: "Cactus",
    description: "A desert charm that thrives indoors.",
    inStock: 7,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    rating: 4.1,
    price: 18.99,
    discount: 15,
  },
];

const Featured = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Featured Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredPlants.map((plant) => {
          const discountedPrice =
            plant.discount > 0
              ? (plant.price - (plant.price * plant.discount) / 100).toFixed(2)
              : plant.price;

          return (
              <div key={plant.id} className="flex flex-col items-center justify-between text-center gap-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition h-[450px]">
                {/* IMAGE */}
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                {/* TEXT */}
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{plant.name}</h3>
                  <p className="text-gray-600 text-sm overflow-hidden">{plant.description}</p>

                  <div className="text-green-700 font-medium">
                    {plant.discount > 0 && (
                      <span className="text-gray-500 line-through mr-2">
                        ${plant.price}
                      </span>
                    )}
                    ${discountedPrice}
                  </div>

                  <div className="text-sm text-gray-500">
                    ⭐ {plant.rating} | {plant.inStock} in stock
                  </div>
                </div>
                <button className="cursor-pointer mx-auto md:mx-0 bg-green-700 px-6 py-2.5 rounded-4xl mb-3 text-white font-medium hover:bg-green-800 transition">Add to Cart</button>
              </div>
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
