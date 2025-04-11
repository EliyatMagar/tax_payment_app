import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
        <div className="space-x-6 text-sm">
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/privacy" className="hover:text-gray-400 transition">Privacy</a>
          <a href="/terms" className="hover:text-gray-400 transition">Terms</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
