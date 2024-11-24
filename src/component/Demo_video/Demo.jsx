import React from "react";
import "./demo.css";
import LaunchIcon from '@mui/icons-material/Launch';

const DemoVideos = () => {
  return (
    <div className="demo-videos-container">
      <h2 className="demo-title">DEMO VIDEOS</h2>
      <div className="demo-divider"></div>
      <h3 className="demo-subtitle">Digital Business Card Creation Demo Videos</h3>
      
      <div className="demo-content">
        <div className="video-section">
          <iframe
            className="demo-video"
            src="https://www.youtube.com/embed/VIDEO_ID" // Replace VIDEO_ID with the actual video ID
            title="Digital Business Card Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="reference-links">
          <h4>External Reference Links</h4>
          <ul>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link1" target="_blank" rel="noopener noreferrer">VINOTH COMPUTER</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link2" target="_blank" rel="noopener noreferrer">ATLAS REAL ESTATE</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link3" target="_blank" rel="noopener noreferrer">SIVA DIGITAL</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link4" target="_blank" rel="noopener noreferrer">AISS GRAND NETWORKS INC</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link5" target="_blank" rel="noopener noreferrer">LIC OF INDIA</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link6" target="_blank" rel="noopener noreferrer">AR TRADERS</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link7" target="_blank" rel="noopener noreferrer">AV EXPORTS</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link8" target="_blank" rel="noopener noreferrer">SERVICE ENTERPRISE</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link9" target="_blank" rel="noopener noreferrer">MSD SNACKS</a></li>
            <li><LaunchIcon style={{fontSize:"18px"}}/><a href="#link10" target="_blank" rel="noopener noreferrer">CLEAN 4 YOU</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DemoVideos;
