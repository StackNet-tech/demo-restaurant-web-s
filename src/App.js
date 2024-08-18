import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Footer2 from './Component/Footer2';
import Hero from './Component/Hero';
import {Menu} from './Component/Menu';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Menu/>
      <Footer2 />
      
    </div>
  );
}

export default App;
