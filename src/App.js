import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Footer2 from './Component/Footer2';
import Hero from './Component/Hero';
import {Menu} from './Component/Menu';
import Foods from './Component/Foods';

import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './Component/About';



function App() {
  return (
    <div className="App">
      <NavBar className="absolute top-0 left-0 w-full z-10"/>
      <Hero/>
      <Menu/>
      <Foods/>
      <About />
      <Footer2 />
      
    </div>
  );
}

export default App;
