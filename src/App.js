import React, { Component } from 'react';

import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Login />
        <Dashboard />
      </div>
    );
  }
}

export default App;
