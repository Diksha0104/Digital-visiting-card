import React from "react";
import "./aboutus.css"; // Import the CSS file for styling
import DoneAllIcon from '@mui/icons-material/DoneAll';
const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">ABOUT US</h2>
      <div className="about-divider"></div>
      <h3 className="about-subtitle">Freedom From Boring Printed Business Cards</h3>
      <p className="about-description">
        Design your digital visiting card in 2 minutes - it's easy, elegant, and
        affordable. E-Visit Card is always in your pocket, never tears, and
        never runs out. Your Digital Visiting Card can be easily updated with
        our user-friendly dashboard, so you won't need to re-print a business
        card again.
      </p>
      <ul className="about-list">
        <li><DoneAllIcon style ={{color:"blue", fontSize:"20px", marginRight:"10px"}}/>Design your digital visiting card in 2 minutes</li>
        <li><DoneAllIcon style ={{color:"blue", fontSize:"20px", marginRight:"10px"}}/>Digital Visiting Card is accessible anytime from anywhere</li>
        <li><DoneAllIcon style ={{color:"blue", fontSize:"20px", marginRight:"10px"}}/>Through a variety of channels</li>
      </ul>
    </div>
  );
};

export default AboutUs;
