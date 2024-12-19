import React, { useState } from 'react';
import banner5 from '../icons/banner5.png';
import logos from '../icons/logos.png';

const Tdl = () => {
  const categories = [
    "Tally Users",
    "Vehicle Finance Company",
    "Specially for Traders",
    "Specially for TOTO Reseller",
    "Transport Business",
    "Trader",
    "Wholeseller",
    "Retailer",
    "Specially for Vehicle Reseller",
  ];

  const products = [
    { title: "Whatsapp Module", description: "With the help of this Add-on you can print previous outstanding balance in an invoice.", category: ["Tally Users"] },
    { title: "Excel to Tally Import", description: "This Add-on allows user to print Signature Image instead of manual signature in Invoice.", category: ["Tally Users"] },
    { title: "Company Seal and Signature in Print", description: "Recreating masters already available in MS Excel is a time-consuming job. With our add-on “Import Masters from Excel”, u...", category: ["Tally Users"] },
    { title: "Multi Document Attach", description: "Supports entry of double discounts on sold items.", category: ["Trader", "Wholeseller"] },
    { title: "google", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
    { title: "Transport Module(Basic)", description: "Transport management module for businesses.", category: ["Transport Business"] },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.length
    ? products.filter((product) => product.category.some((cat) => selectedCategories.includes(cat)))
    : products;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logos} alt="TallyShop Logo" className="h-20" />
          <input
            type="text"
            placeholder="Search add-on"
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            <button className="text-2xl">🛒</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex gap-6 mt-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Top Developers</p>
            <ul className="mt-2 space-y-2">
              {categories.map((category) => (
                <li key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="category"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="text-gray-600">{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1">
          {/* Banner */}
          <div className="bg-blue-100 rounded-lg flex items-fill justify-center mb-6">
            <img src={banner5} alt="TallyPrime Banner" className="w-full h-full" />
          </div>

          {/* Product Tabs */}
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md transition focus:outline-none border border-blue-700">Silver</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none border border-blue-700">Gold</button>
          </div>

          {/* Best Selling Products */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Best Selling</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-blue-700">{product.title}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="flex justify-end space-x-4 mt-4">
                    <button className="text-black border-2 rounded-xl transition transform duration-300 hover:bg-blue-300 border-blue-700 px-4 py-2">Buy Now</button>
                    <button className="text-black border-2 transition transform duration-300 hover:bg-blue-300 rounded-xl border-blue-700 px-4 py-2">Manual</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tdl;