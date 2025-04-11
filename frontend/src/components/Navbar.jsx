import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Import your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle the mobile menu close when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Text Layout */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-auto" // Logo size remains the same
          />
          <div className="hidden md:block text-white">
            <p>Government of Nepal</p>
            <p>Ministry of Finance</p>
            <h1 className="text-lg">Department of Revenue</h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/properties" className="hover:text-gray-300 transition">Properties</Link>
          <Link to="/tax-calculator" className="hover:text-gray-300 transition">Tax Calculator</Link>
          <Link to="/dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
          <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
          <Link to="/register" className="hover:text-gray-300 transition">Register</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M18.36 6.64a1 1 0 010 1.41L13.41 13l4.95 4.95a1 1 0 01-1.41 1.41L12 14.41l-4.95 4.95a1 1 0 01-1.41-1.41L10.59 13 5.64 8.05a1 1 0 011.41-1.41L12 11.59l4.95-4.95a1 1 0 011.41 0z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with White Background */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 px-4 pb-4 space-y-4 text-sm font-medium bg-white text-gray-900 z-40">
          <Link to="/" className="block hover:text-gray-500 transition" onClick={handleLinkClick}>Home</Link>
          <Link to="/properties" className="block hover:text-gray-500 transition" onClick={handleLinkClick}>Properties</Link>
          <Link to="/tax-calculator" className="block hover:text-gray-500 transition" onClick={handleLinkClick}>Tax Calculator</Link>
          <Link to="/dashboard" className="block hover:text-gray-500 transition" onClick={handleLinkClick}>Dashboard</Link>
          <Link to="/login" className="block hover:text-gray-500 transition" onClick={handleLinkClick}>Login</Link>
          <Link to="/register" className="block hover:text-gray-500 transition" onClick={handleLinkClick}>Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
