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
      <NavBar/>
      <Hero/>
      <Menu/>
      <Foods/>
      <About />
      <Footer2 />
      
    </div>
  );
}

export default App;
