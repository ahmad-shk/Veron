// src/App.js

import React from 'react';
import '../App.css'

function ThankPage() {
  return (
    <div className=" flex flex-col items-center justify-center bg-transparent">
      <div className="bg-transparent p-8 rounded shadow-md text-center">
        <h1 className='text-3xl font-bold mb-4 text-white'>Your Order Has Been Placed</h1>
        <h1 className="text-3xl font-bold mb-4 text-white">Thank You for Your Purchase!</h1>
        <div className="text-6xl mb-4 animate-bounce">
          ❤️
        </div>
        <p className="text-white">We appreciate your business and hope you enjoy your purchase.</p>
      </div>
    </div>
  );
}

export default ThankPage;
