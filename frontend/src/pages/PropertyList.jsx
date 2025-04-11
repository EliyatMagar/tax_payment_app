import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all properties from the backend API
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties'); // Update with your actual backend API URL
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load properties');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={property.imageUrl || 'default-image-url.jpg'}  // Update with property image URL if available
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{property.name}</h3>
              <p className="text-gray-600">Value: ${property.value}</p>
              <p className="text-gray-600">Tax Amount: ${property.taxAmount}</p>
              <Link
                to={`/payment/${property._id}`} // Link to the payment page for this specific property
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700"
              >
                Make Payment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
