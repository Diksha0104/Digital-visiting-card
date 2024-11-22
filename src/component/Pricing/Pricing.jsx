import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">PRICING</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>One Business Card endless possibilities</h3>
          <p className="price">1000 INR</p>
          <p>( For Lifetime )</p>
          <p className="offer">Offer Valid till 30-Sep-2020</p>
          <button className="pricing-button">Create Business Card</button>
          <ul>
            <li className="pricing-li">Share cards with everyone</li>
            <li className="pricing-li">Update card Unlimited times</li>
            <li className="pricing-li">Profile Photo / Company Logo</li>
            <li className="pricing-li">Name & Contact Number</li>
            <li className="pricing-li">Social Media Links</li>
            <li className="pricing-li">Whatsapp Chat without saving</li>
            <li className="pricing-li">Email Instantly</li>
            <li className="pricing-li">Call Now in a Touch</li>
            <li className="pricing-li">Website in a Click</li>
            <li className="pricing-li">Google Map Link</li>
            <li className="pricing-li">Payment Section</li>
            <li className="pricing-li">Your Products / Services</li>
            <li className="pricing-li">Photos in Gallery</li>
            <li className="pricing-li">Youtube Video Gallery</li>
            <li className="pricing-li">Product with images</li>
            <li className="pricing-li">Contact Form Included</li>
            <li className="pricing-li">QR Code Generation</li>
          </ul>
        </div>
        
        <div className="pricing-card">
          <h3>Digital Business Cards for Corporates</h3>
          <p className="price">CONTACT US for Pricing</p>
          <p>( For Lifetime )</p>
          <p className="offer">Offer Valid till 30-Sep-2020</p>
          <button className="pricing-button">Contact Us</button>
          <ul>
            <li className="pricing-li">Volume based pricing</li>
            <li className="pricing-li">Admin board for Unlimited Edits</li>
            <li className="pricing-li">Top priority email support</li>
            <li className="pricing-li">Manage all your employees cards</li>
            <li className="pricing-li">Customized Design</li>
            <li className="pricing-li">24/7 Chat Support</li>
          </ul>
        </div>
        
        <div className="pricing-card">
          <h3>Affiliate Program - Earn as Much You Can</h3>
          <p className="price">Unlimited Income</p>
          <p>( For Lifetime )</p>
          <p className="offer">Offer Valid till 30-Sep-2020</p>
          <button className="pricing-button">Contact Us</button>
          <ul>
            <li>20% of every referral and for life</li>
          </ul>
        </div>
        
        <div className="pricing-card">
          <h3>Franchise Partners Program</h3>
          <p className="price">2500 INR</p>
          <p>( For Lifetime )</p>
          <p className="offer">Offer Valid till 30-Sep-2020</p>
          <button className="pricing-button">Create As a Franchise</button>
          <ul>
            <li className="pricing-li">Create Unlimited Cards</li>
            <li className="pricing-li">Login and Edit cards from Desktop</li>
            <li className="pricing-li">Earn 50% Profit for every card</li>
            <li className="pricing-li">Life Long free edits</li>
            <li className="pricing-li">Top priority email support</li>
            <li className="pricing-li">24/7 Chat Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
