// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to Our Website</h1>
      <p className="text-lg text-gray-700 mb-8">Explore our policies and terms:</p>
      <div className="space-y-4">
        <Link to="/terms-and-conditions" className="text-blue-500 hover:underline text-lg">
          Terms and Conditions
        </Link>
        <Link to="/privacy-policy" className="text-blue-500 hover:underline text-lg">
          Privacy Policy
        </Link>
        <Link to="/terms-of-use" className="text-blue-500 hover:underline text-lg">
          Terms of Use (TDL)
        </Link>
      </div>
    </div>
  );
};

export default HomePage;