import React from "react";
import { Filter, Footer, Navbar, ProductList } from "../../components";

const Category = () => {
  return (
    <>
      <Navbar />

      {/* Category Banner Section */}
      <section className="flex flex-col md:flex-row justify-between gap-8 items-center px-6 md:px-12 lg:px-20 py-12 ">
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            alt="Category"
            className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            Category Name
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Category Description goes here. Inspire customers with benefits of
            these plants.
          </p>
          <p className="text-green-700 font-medium">
            Number of Products: <span className="font-bold">10</span>
          </p>
        </div>
      </section>

      <hr />
      <div className="px-6 md:px-12 lg:px-20 py-8">
        {/* <Filter /> */}
        <ProductList />
      </div>

      <Footer />
    </>
  );
};

export default Category;
