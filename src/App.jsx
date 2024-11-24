import './App.css';
import NavBar from './component/Navbar/Navbar.jsx';
import Banner from './component/Banner/Banner.jsx';
import Aboutus from './component/AboutUs/Aboutus.jsx';
import Service from './component/Service/Service.jsx';
import Feature from './component/Feature/Feature.jsx';
import Pricing from './component/Pricing/Pricing.jsx';
import Demo_video from './component/Demo_video/demo.jsx';
function App() {
  

  return (
    <>
      <div className='navbar'><NavBar /></div>
      <div id='home' className='banner'><Banner /></div>
      <div id='aboutus' className='aboutus'><Aboutus /></div>
      <div id='service' className='service'><Service /></div>       
      <div id='feature' className='feature'><Feature /></div>
      <div id='pricing' className='pricing'><Pricing /></div>
      <div id='demo' className='demo'><Demo_video /></div>
      <div id='contact' className='contact'>Contact Section</div> {/* Add the contact section if needed */}
    </>
  );
}

export default App;
