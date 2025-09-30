import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { BASE_URL, toastAlert } from "../../utils";
import { apiEndPoints } from "../../constant/apiEndPoints";
import axios from "axios";
import Cookies from "js-cookie";
const SinglePlant = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const fetchPlant = async () => {
    try {
      const api = `${BASE_URL}${apiEndPoints.getSinglePlant}/${id}`;
      const res = await axios.get(api);
      setPlant(res.data);
    } catch (err) {
      console.error("Error fetching plant:", err);
    }
  };
  useEffect(() => {
    fetchPlant();
  }, [id]);

  const addToCart = async (plantId, quantity) => {
    try {
      console.log(plantId, quantity);
      const obj = {
        plantId,
        quantity,
      };
      const api = `${BASE_URL}${apiEndPoints.addToCart}`;
      const response = await axios.post(api, obj, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      console.log("response", response);
      toastAlert({
        type: "success",
        message: "Added to Cart!",
      });
    } catch (error) {
      console.log(error.message);
      toastAlert({
        type: "error",
        message: error.message,
      });
    }
  };

  if (!plant) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row justify-between gap-8 items-center px-6 md:px-12 lg:px-20 py-12">
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            {plant.name}
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            {plant.description || "No description available."}
          </p>
          <p className="text-green-700 font-medium">
            Price: <span className="font-bold">${plant.price.toFixed(2)}</span>
          </p>
          <p className="text-green-700 font-medium">
            Stock:{" "}
            <span className="font-bold">
              {plant.stock > 0 ? plant.stock : "Out of Stock"}
            </span>
          </p>

          <div className="flex  flex-col md:flex-row items-center gap-4 text-center">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="font-bold">{quantity}</span>

            <button
              onClick={() =>
                setQuantity((q) =>
                  plant?.stock && q < plant.stock ? q + 1 : q
                )
              }
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <button
              className="w-fit bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-700 transition cursor-pointer"
              onClick={() => console.log("Order Now", plant.id, quantity)}
            >
              Order Now
            </button>
            <button
              className="border-none text-green-700 hover:underline cursor-pointer"
              onClick={() => addToCart(plant?.id, quantity)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SinglePlant;
