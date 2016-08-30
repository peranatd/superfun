import React, { Component } from 'react';
import Flash from './Flash';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Super Fun!</h2>
          <h4>...and to another session of learning new words</h4>
        </div>
        <Flash />
      </div>
    );
  }
}

export default App;
