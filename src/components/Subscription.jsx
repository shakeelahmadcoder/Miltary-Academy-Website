import React from "react";
import image from "../assets/2.jpg";

const Subscription = () => {
  return (
    <div className="relative h-64 sm:h-48">
      <img src={image} className="w-full h-full object-cover" alt="Subscription Background" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
        <div className="px-4 sm:px-6 md:px-14 mx-auto flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
            Let’s Stay in Touch!
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 rounded-md md:rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-orange-500 w-full md:w-auto px-6 py-2 rounded-md md:rounded-r-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
