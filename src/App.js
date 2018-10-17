import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <h1 className="App-header">TRENDING GIFFS</h1>
        </div>
        <div>
          <Homepage />
        </div>
      </div>
    );
  }
}

export default App;
