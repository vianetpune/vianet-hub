import React from 'react';

const ContactSection: React.FC = () => {
  const addressUrl = 'https://maps.google.com/?q=1st+floor,+124/125+Ashoka+Pavillion,+Ambedkar+Road,+Pune+411001';
  
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-card address">
          <h3>📍 Office Address</h3>
          <p>1st Floor</p>
          <p>124/125 Ashoka Pavillion</p>
          <p>Ambedkar Road</p>
          <p>Pune 411001</p>
          <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="map-link">
            View on Google Maps
          </a>
        </div>
        <div className="contact-card phone">
          <h3>📞 Phone</h3>
          <p>Available on WhatsApp and direct calls</p>
          <p>Business Hours: 9:00 AM - 6:00 PM</p>
        </div>
        <div className="contact-card email">
          <h3>📧 Email</h3>
          <p>Contact us through our WhatsApp channels</p>
          <p>Quick response guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
