import React from "react";
import "./navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">DIGITAL VISITING CARD</div>
      <ul className="navbar-links">
        <li className="nav-li" onClick={() => scrollToSection('home')}>Home</li>
        <li className="nav-li" onClick={() => scrollToSection('aboutus')}>About</li>
        <li className="nav-li" onClick={() => scrollToSection('service')}>Services</li>
        <li className="nav-li" onClick={() => scrollToSection('feature')}>Features</li>
        <li className="nav-li" onClick={() => scrollToSection('pricing')}>Pricing</li>
        <li className="nav-li" onClick={() => scrollToSection('demo')}>Demo Videos</li>
        <li className="nav-li" onClick={() => scrollToSection('contact')}>Contact</li>
        <button className="login-btn">Login</button>
      </ul>
    </nav>
  );
};

export default Navbar;
