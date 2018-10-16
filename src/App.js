import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <h2>Welcome to Trending Giffs</h2>
        </div>
        <div>
          <Homepage />
        </div>
      </div>
    );
  }
}

export default App;

// my key = Q8Pm82z06A50nknC7mFIAUf5w6bsUuaA

// JS
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Q8Pm82z06A50nknC7mFIAUf5w6bsUuaA&limit=30");
// xhr.done(function(response) { console.log("success got data", response); });
