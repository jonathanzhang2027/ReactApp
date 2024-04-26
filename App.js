// src/App.js
import React from 'react';
import './App.css';
import BodyModel from './components/BodyModel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SimBiotic: 3D Educational Model</h1>
        <BodyModel />
      </header>
    </div>
  );
}

export default App;
