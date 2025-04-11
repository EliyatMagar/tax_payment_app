import React, { useState } from "react";

const TaxCalculator = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [taxRate] = useState(0.02); // Tax rate of 2% (can be adjusted)
  const [calculatedTax, setCalculatedTax] = useState(null);

  const handleInputChange = (e) => {
    setPropertyValue(e.target.value);
  };

  const handleCalculateTax = () => {
    if (!propertyValue || isNaN(propertyValue) || propertyValue <= 0) {
      alert("Please enter a valid property value.");
      return;
    }
    const tax = parseFloat(propertyValue) * taxRate;
    setCalculatedTax(tax.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Tax Calculator</h2>
        
        <div className="mb-4">
          <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700">
            Property Value ($)
          </label>
          <input
            type="number"
            id="propertyValue"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter property value"
            value={propertyValue}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleCalculateTax}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Calculate Tax
        </button>

        {calculatedTax !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-medium">Calculated Tax:</h3>
            <p className="text-2xl font-bold text-blue-600">${calculatedTax}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxCalculator;
