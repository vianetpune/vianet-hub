import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-section py-40 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to VIANET Hub</h1>
      <p className="text-xl text-gray-300 mb-8">India's Premier Distribution Hub for Technology & Corporate Gifting</p>
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded">Explore Communities</button>
    </div>
  );
};

export default Hero;
