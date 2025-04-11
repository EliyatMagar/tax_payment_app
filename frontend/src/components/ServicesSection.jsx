import React from 'react';
import Card from './Cards';
import realstate from '../assets/real-state.jpg';
import taxCalculator from '../assets/tax_calculator.png';
import dashboard from '../assets/dashboard.webp';

const ServicesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card 
          title="Real Estate Listings" 
          description="Browse through our wide selection of properties available for sale or rent."
          imageUrl={realstate} 
          link="/properties"
        />
        <Card 
          title="Tax Calculator" 
          description="Calculate your property tax quickly and easily with our tool."
          imageUrl={taxCalculator} 
          link="/tax-calculator"
        />
        <Card 
          title="Customer Dashboard" 
          description="Manage your properties and transactions all in one place."
          imageUrl={dashboard} 
          link="/dashboard"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
