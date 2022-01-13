// import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Map from "./Map"
import Actions from "./Actions"
import Variable from "./Variable"
import Portfolio from "./Portfolio"

import Header from './Header';
import MyRouter from './MyRouter';

// use prime react or material ui 

function App() {

  return (
    <div>      
      <MyRouter />
    </div>
  );
}

export default App;
