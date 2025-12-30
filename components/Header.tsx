import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="navbar">
        <div className="logo">
          <h1>VIANET</h1>
          <p className="subtitle">Tech & Gifting Distribution Hub</p>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#communities">Communities</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="hero-section">
        <h2>Welcome to VIANET Hub</h2>
        <p>Your Premier Distribution Hub for Technology & Bespoke Corporate Gifting</p>
      </div>
    </div>
  );
};

export default Header;
