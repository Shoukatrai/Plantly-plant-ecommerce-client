import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllCat = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/category/all-categories"
      );
      console.log("categories", res.data);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    getAllCat();
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Shop by Category
      </h2>

      {loading ? (
        <p className="text-center">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center gap-4 rounded-xl shadow-md hover:shadow-lg transition bg-gray-100 overflow-hidden"
            >
              {/* IMAGE (dummy fallback if none from backend) */}
              <img
                src={
                  category.imageUrl ||
                  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
                }
                alt={category.name}
                className="w-full h-32 object-cover"
              />

              {/* TEXT */}
              <div className="py-5 flex flex-col gap-2 px-3">
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-gray-600 text-sm">
                  {category.description || "No description available"}
                </p>
                <span className="text-green-700 font-medium">
                  {category.products?.length || 0} Plants
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
      )}
    </section>
  );
};

export default Category;
