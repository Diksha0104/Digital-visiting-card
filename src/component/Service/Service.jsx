import React from "react";
import "./service.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">SERVICES</h2>
      <p className="services-description">
        Our digital business card platform makes designing a card simple, convenient, and reliable.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🌐</div> {/* Replace with appropriate icon */}
          <h3 className="service-title">Digital Visiting Card</h3>
          <p className="service-text">
            Still using old boring visiting cards? Now it's time to change. Use our Online Visiting Card service and GO DIGITAL.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">📄</div> {/* Replace with appropriate icon */}
          <h3 className="service-title">Website Design / Development</h3>
          <p className="service-text">
            Design your own Business/Professional website in a Simple and Easy way.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">📈</div> {/* Replace with appropriate icon */}
          <h3 className="service-title">Digital Marketing</h3>
          <p className="service-text">
            Advertise online and expand your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
