import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 justify-between px-6 md:px-12 lg:px-20 py-10">
      {/* TEXT */}
      <div className="flex flex-col gap-4 mb-6 md:mb-0 w-full md:w-1/2 text-center md:text-left">
        {/* <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Welcome to <span className="text-green-700">Plant Haven</span>
        </h1> */}
        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Buy <span className="text-green-700">Indoor & Outdoor Plants</span>{" "}
          Online at Plantly
        </h1>
        {/* <p className="font-light text-gray-600 text-base sm:text-lg">
          Discover a world of greenery and transform your space with our
          exquisite collection of plants.
        </p> */}
        <p className="font-light text-gray-600 text-base sm:text-lg">
          Transform your home, office, or garden with{" "}
          <strong>
            fresh indoor plants, outdoor greenery, herbs, and air-purifying
            plants
          </strong>
          . Shop online at Plantly and enjoy fast, safe delivery nationwide.
        </p>
        <button className="cursor-pointer mx-auto md:mx-0 bg-green-700 px-6 py-3 rounded-lg text-white font-medium hover:bg-green-800 transition">
          Shop Now
        </button>
      </div>

      {/* IMAGE */}
      <div className="flex w-full md:w-1/2">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="rounded-lg object-cover w-full max-h-[500px]"
        />
      </div>
    </section>
  );
};

export default Hero;
