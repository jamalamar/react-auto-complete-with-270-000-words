import React, { Component } from 'react';
import './App.css';
import Autocomplete from './autocomplete.js';
import words from 'an-array-of-english-words'

const App = () => {
  return (
    <div className="App">
    <h1>Choose from 270,000 words!</h1>
      <Autocomplete
        options={words}
      />
    </div>
  );
};

export default App;
