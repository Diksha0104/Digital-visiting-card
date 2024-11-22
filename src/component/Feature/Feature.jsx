import React from "react";
import "./feature.css"; // Import the CSS file for styling

const Features = () => {
  const features = [
    { icon: "📞", title: "One Click Call" },
    { icon: "💬", title: "One Click WhatsApp" },
    { icon: "✉️", title: "One Click Email" },
    { icon: "📍", title: "One Click Navigate" },
    { icon: "🌐", title: "Website & Social Links" },
    { icon: "🔗", title: "Share Unlimited" },
    { icon: "📝", title: "Easy To Update" },
    { icon: "🖼️", title: "Photo Gallery" },
    { icon: "🎥", title: "Youtube Video Gallery" },
    { icon: "💬", title: "Enquiry Form" },
  ];

  return (
    <div className="features-container">
      <h2 className="features-title">FEATURES</h2>
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
