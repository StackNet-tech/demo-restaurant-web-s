import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Footer2 from './Component/Footer2';
import Hero from './Component/Hero';
import {Menu} from './Component/Menu';
import Foods from './Component/Foods';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './Component/About';
import Facilities from './Component/Facilities';
import Events from './Component/Events';
import Service from './Component/Service';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Menu/>
      <Foods/>
      <Facilities/>
      <Events/>
      <Service/>
      <About/>
      <Footer2 />
      
    </div>
  );
}

export default App;
