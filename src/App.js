import React, { Component } from 'react';

import './App.css';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Soup Kitchen</h1>
        <Credentials />
        <Dashboard />
      </div>
    );
  }
}

export default App;
