import React from "react";
import ProductCard from "./Cards/ProductCard";

// Example product data (replace with API/props later)
const products = [
  {
    id: 1,
    name: "Indoor Plant",
    description: "Perfect for your living room.",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Outdoor Plant",
    description: "Bring life to your garden.",
    price: 40.0,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Herb Plant",
    description: "Freshen up your cooking.",
    price: 15.5,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Herb Plant",
    description: "Freshen up your cooking.",
    price: 15.5,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
];

const ProductList = () => {
  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No products available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} plant={product} />
      ))}
    </div>
  );
};

export default ProductList;
