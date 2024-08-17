import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className='text-3xl'>Hello React!</h1>
      </header>
    </div>
  );
}

export default App;
