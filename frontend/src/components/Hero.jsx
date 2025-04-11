import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/logo.svg"; // Import your background image

const Hero = () => {
  return (
    <section
      className="relative text-white py-24 px-4 mt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",  // Ensures the image covers the entire section
        backgroundPosition: "center",  // Centers the background image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Empowering Citizens to Manage Their Tax Payments
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Make tax payments simpler and faster. Stay up-to-date with your tax status and contribute to the nation’s progress!
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/tax-payment"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Pay Your Tax
          </Link>
          <Link
            to="/register"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
