import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    description: "Perfect for your living room or office.",
    count: 12,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Outdoor Plants",
    description: "Bring life to your garden.",
    count: 8,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Herbs",
    description: "Freshen up your cooking.",
    count: 10,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Air Purifying",
    description: "Breathe better indoors.",
    count: 9,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
];

const Category = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center gap-4 rounded-xl shadow-md hover:shadow-lg transition bg-gray-100 overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover"
            />

            {/* TEXT */}
            <div className="py-5 flex flex-col gap-2 px-3">
              <h3 className="font-semibold text-lg">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
              <span className="text-green-700 font-medium">
                {category.count} Plants
              </span>
            </div>

            {/* BUTTON */}
            <Link
              to={`/categories/${category.id}`}
              className="mb-4 underline text-green-700 font-medium hover:text-green-800 transition"
            >
              View Plants
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
