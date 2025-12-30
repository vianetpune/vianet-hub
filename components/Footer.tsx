import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>VIANET</h3>
          <p>Your Premier Distribution Hub for Technology & Bespoke Corporate Gifting</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#communities">Communities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Links</h4>
          <ul>
            <li><a href="https://bit.ly/4chu430" target="_blank" rel="noopener noreferrer">Catalogues</a></li>
            <li><a href="https://chat.whatsapp.com/HoQoFtCugjs84rhsr8US26" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} VIANET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
