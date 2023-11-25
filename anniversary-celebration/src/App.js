// src/App.js
import React from 'react';
import Banner from './components/Banner';
import ImageRow from './components/ImageRow';
import VideoRow from './components/VideoRow';

import './App.css'; // Add a main stylesheet if needed


const App = () => {
  return (
    <div className="app">
      <Banner />
      <ImageRow isLargeRow />
      <VideoRow isLargeRow />
    </div>
  );
};

export default App;
