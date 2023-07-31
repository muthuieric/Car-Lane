import React from 'react';
import carImage from '../images/Shmes-Zenvo-TSR-S.avif';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 bg-purple-500 z-10">
        <div className="text-white font-bold text-2xl">CarLane</div>
        <ul className="flex space-x-4 text-white text-xl font-medium">
          <li className="hover:bg-purple-600 px-4 py-2 rounded">Home</li>
          <li className="hover:bg-purple-600 px-4 py-2 rounded">Cars</li>
          <li className="hover:bg-purple-600 px-4 py-2 rounded">Services</li>
        </ul>
      </nav>

      <div className="w-full h-screen">
        <img className="w-full h-full object-cover fixed inset-0" src={carImage} alt="Car" />
      </div>
      
      {/* Hero Content */}
      <div className="fixed bottom-0 left-0 w-full px-8 py-12 bg-purple-500 bg-opacity-75">
        <h1 className="text-4xl text-white font-bold mb-4">Find Your Dream Car</h1>
        <p className="text-white text-lg mb-8">
          Discover the perfect car that suits your lifestyle and budget.
        </p>
        <button className="bg-white text-purple-500 px-6 py-3 rounded-lg text-lg font-semibold">
          Explore Cars
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
