import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Dashboard = () => {
  return (
    <>
 
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="/properties" className="hover:underline">
              Properties
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/tax-calculator" className="hover:underline">
              Tax Calculator
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/property/add" className="hover:underline">
              Property Add
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/payment/:propertyId" className="hover:underline">
              Payments
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/login" className="hover:underline">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total Properties</h2>
            <p className="text-3xl font-bold text-blue-600">150</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total Taxes Collected</h2>
            <p className="text-3xl font-bold text-blue-600">$50,000</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Pending Payments</h2>
            <p className="text-3xl font-bold text-blue-600">30</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
