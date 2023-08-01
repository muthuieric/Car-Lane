import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-md px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-purple-500">About CarLane</h1>
        <p className="text-black text-lg">
          At CarLane, we believe that finding your dream car should be an exciting and hassle-free experience.
          Our mission is to revolutionize the car-buying process by providing a comprehensive online platform
          where users can explore and discover the perfect car that suits their lifestyle and budget.
        </p>
      </div>

      <div className="mt-8 max-w-md px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-purple-500">Reach Us</h1>
        <p className="text-black text-lg">Email: carlane@gmail.com</p>
        <p className="text-black text-lg">Phone: +254768378476</p>
        <p className="text-black text-lg">Location: Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default About;
