import './App.css'
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
      <div className='navbar'><NavBar/></div>
      <div className='banner'><Banner/></div>
      <div className='aboutus'><Aboutus/></div>
      <div className=' service'><Service/></div>       
      <div className='feature'><Feature/></div>
      <div className='pricing'><Pricing/></div>
      <div className='demo'><Demo_video/></div>
    </>
  )
}

export default App
