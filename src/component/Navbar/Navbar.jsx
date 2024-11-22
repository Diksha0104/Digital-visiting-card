import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">DIGITAL VISITING CARD</div>
      <ul className="navbar-links">
        <li className="nav-li">Home</li>
        <li className="nav-li">About</li>
        <li className="nav-li">Services</li>
        <li className="nav-li">Features</li>
        <li className="nav-li">Pricing</li>
        <li className="nav-li">Demo Videos</li>
        <li className="nav-li">Contact</li>
        <button className="login-btn">Login</button>
      </ul>
    </nav>
  );
};

export default Navbar;
