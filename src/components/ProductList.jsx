import React from "react";
import ProductCard from "./Cards/ProductCard";
import { Link } from "react-router-dom";

// Example product data (replace with API/props later)

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="text-gray-600">No products available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0, 4).map(
        (
          product 
        ) => (
          <ProductCard key={product.id} plant={product} />
        )
      )}
    </div>
  );
};

export default ProductList;
