import React, { useState } from 'react';
import axios from 'axios';

const PropertyAddForm = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState('');

  const handleAddFeature = () => {
    setFeatures([...features, newFeature]);
    setNewFeature('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const propertyData = {
      name,
      value,
      taxAmount,
      features,  // Send features with property
    };

    try {
      await axios.post('http://localhost:5000/api/properties/add', propertyData);
      alert('Property added successfully!');
      setName('');
      setValue('');
      setTaxAmount('');
      setFeatures([]);
    } catch (err) {
      console.error(err);
      alert('Error adding property');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Property Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tax Amount</label>
          <input
            type="number"
            value={taxAmount}
            onChange={(e) => setTaxAmount(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Features</label>
          <input
            type="text"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            type="button"
            onClick={handleAddFeature}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Feature
          </button>
          <div className="mt-2">
            {features.length > 0 && (
              <ul className="list-disc pl-5">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default PropertyAddForm;
