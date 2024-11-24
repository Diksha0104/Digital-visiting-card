import React from "react";
import "./contact.css"; // You can style it accordingly

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">CONTACT US</h2>
      <div className="contact-us-content">
        {/* Left Side - Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" placeholder="Enter Your Mobile Number" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter Your Message"></textarea>
            </div>

            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <h3>Location:</h3>
            <p>Digital Visiting Card Online<br />Vinoth Computer Centre, Near Tana Office, Ayothiyapattinam, Salem - 636103, Tamilnadu.</p>
          </div>

          <div className="info-item">
            <h3>Email:</h3>
            <p>digitalvcardonline@gmail.com</p>
          </div>

          <div className="info-item">
            <h3>Call:</h3>
            <p>+91 8754399898</p>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#facebook">FB</a>
            <a href="#twitter">TW</a>
            <a href="#linkedin">LI</a>
            <a href="#youtube">YT</a>
            <a href="#instagram">IG</a>
          </div>

          <div className="policies">
            <a href="#terms">Terms & Condition</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
