// import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Map from "./Map"
import Actions from "./Actions"
import Variables from "./Variables"
import Portfolio from "./Portfolio"

import Header from './Header';

// use prime react or material ui 

function App() {

  return (
    <div>
      <Header/>

      <header>
        <table>
          <tr>
            <th>TOTAL PORTFOLIO VALUE:$103,000</th>
            <th>ACTIVE TRADES VALUE: $3,000</th>
            <th>PORTFOLIO VALUE: $100,000</th>
          </tr>
        </table>
      </header>

      <Router>
        <nav>
          <ul>
            <li> <Link to="/actions"> Actions</Link> </li>
            <li> <Link to="/map">Map</Link> </li>
            <li> <Link to="/portfolio">Portfolio</Link> </li>
            <li> <Link to="/variables">Variables</Link> </li>

          </ul>
        </nav>
        <Routes>
          <Route path="/actions" element={<Actions />} />
          <Route path="/map" element={<Map />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/" element={<Actions />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
