import React from "react";
import "./feature.css"; // Import the CSS file for styling
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';
import EditIcon from '@mui/icons-material/Edit';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContactMailIcon from '@mui/icons-material/ContactMail';
const Features = () => {
  const features = [
    { icon: <CallIcon style={{fontSize:"50px"}} />, title: "One Click Call" },
    { icon: <WhatsAppIcon style={{fontSize:"50px"}}/>, title: "One Click WhatsApp" },
    { icon: <EmailIcon style={{fontSize:"50px"}}/>, title: "One Click Email" },
    { icon: <LocationOnIcon style={{fontSize:"50px"}}/>, title: "One Click Navigate" },
    { icon: <LanguageIcon style={{fontSize:"50px"}}/>, title: "Website & Social Links" },
    { icon: <LinkIcon style={{fontSize:"50px"}}/>, title: "Share Unlimited" },
    { icon: <EditIcon style={{fontSize:"50px"}}/>, title: "Easy To Update" },
    { icon: <PhotoLibraryIcon style={{fontSize:"50px"}}/>, title: "Photo Gallery" },
    { icon: <YouTubeIcon style={{fontSize:"50px"}}/>, title: "YouTube Video Gallery" },
    { icon: <ContactMailIcon style={{fontSize:"50px"}}/>, title: "Enquiry Form" },
  ];

  return (
    <div className="features-container">
      <h2 className="features-title">FEATURES</h2>
      <div className="feature-divider"></div>
      <p className="features-description">
        One Business Card, Endless Possibilities
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
