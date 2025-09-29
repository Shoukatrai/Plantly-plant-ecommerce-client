import React, { useEffect, useState } from "react";
import { Filter, Footer, Navbar, ProductList } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const params = useParams();
  const catId = params.id;
  console.log("catId", catId);
  const [catData, setCatData] = useState({});
  const getCategory = async () => {
    try {
      const cat = await axios.get(
        `http://localhost:5000/api/category/${catId}`
      );
      console.log("cat", cat.data);
      setCatData(cat.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row justify-between gap-8 items-center px-6 md:px-12 lg:px-20 py-12 ">
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={catData?.imageUrl}
            alt="Category"
            className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            {catData?.name}
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            {catData?.description}
          </p>
          <p className="text-green-700 font-medium">
            Number of Products:{" "}
            <span className="font-bold">
              {" "}
              {catData?.products?.length || 0}{" "}
            </span>
          </p>
        </div>
      </section>

      <hr />
      <div className="px-6 md:px-12 lg:px-20 py-8">
        {/* <Filter /> */}
        <ProductList products = {catData?.products}/>
      </div>

      <Footer />
    </>
  );
};

export default Category;
