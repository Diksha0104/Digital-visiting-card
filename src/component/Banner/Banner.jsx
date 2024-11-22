import React from "react";
import "./banner.css";
import hero_image from "../../images/hero-img.png"; // Correct path from component to image


const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className=" content-h1">Inspire Your Client Digitally</h1>
        <p>
          We Convert Your Normal Visiting Card into Digital Business Card. Our
          platform allows professionals to easily share their Business
          information without the need for paper business cards.
        </p>
        <div className="banner-buttons">
          <button className="btn-primary">Create Business Card</button>
          <button className="btn-secondary">Create As a Franchise</button>
        </div>
      </div>
      <div className="banner-image">
        {/* Add your banner image here */}
        <img src={hero_image} alt="Digital Cards" />
      </div>
    </section>
  );
};

export default Banner;
