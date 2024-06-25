// src/App.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any fields are empty
    for (let key in formData) {
      if (!formData[key]) {
        alert('Please fill all fields.');
        return;
      }
    }
    // If all fields are filled, navigate to /thankPage
    console.log('Form Data Submitted:', formData);
    navigate('/thankPage');
  };

  return (
    <div className="rounded-xl flex items-center justify-center bg-gray-100 relative z-[5]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#00ca55]">Payment Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-[#16a254]" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="cardExpiry">
                Expiry Date
              </label>
              <input
                type="text"
                id="cardExpiry"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="cardCVC">
                CVC
              </label>
              <input
                type="text"
                id="cardCVC"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="123"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="name">
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="123 Main St"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="City"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="State"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-[#00ca55]" htmlFor="zip">
              Zip Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Zip Code"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00ca55] text-white py-2 rounded hover:bg-[#16a254] transition duration-200"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
