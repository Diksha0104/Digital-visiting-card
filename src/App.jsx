import React, { useEffect } from 'react';
import './App.css';
import NavBar from './component/Navbar/Navbar.jsx';
import Banner from './component/Banner/Banner.jsx';
import Aboutus from './component/AboutUs/Aboutus.jsx';
import Service from './component/Service/Service.jsx';
import Feature from './component/Feature/Feature.jsx';
import Pricing from './component/Pricing/Pricing.jsx';
import Demo_video from './component/Demo_video/demo.jsx';
import Contact from './component/Contact/Contact.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {

  useEffect(() => {
    // Intersection Observer to add 'show' class when a section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class when the section is visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    // Select all the sections that need the animation
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });

    // Clean up the observer on component unmount
    return () => {
      if (sections) {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <>
      <div className='navbar'><NavBar /></div>
      <div id='home' className='banner'><Banner /></div>
      <div id='aboutus' className='aboutus section'><Aboutus /></div>
      <div id='service' className='service section'><Service /></div>       
      <div id='feature' className='feature section'><Feature /></div>
      <div id='pricing' className='pricing section'><Pricing /></div>
      <div id='demo' className='demo section'><Demo_video /></div>
      <div id='contact' className='contact section'><Contact/></div>
      <div className='footer'><Footer/></div>
    </>
  );
}

export default App;
