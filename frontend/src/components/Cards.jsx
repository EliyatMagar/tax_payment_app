import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Card Image */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover"
      />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Button/Link */}
        <Link to={link} className="text-blue-600 hover:underline font-medium">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
