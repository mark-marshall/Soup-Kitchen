import React, { Component } from 'react';

import './App.css';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';
import VolunteerOpps from './components/VolunteerOpps';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Soup Kitchen</h1>
        <Credentials />
        <Dashboard />
        <VolunteerOpps />
      </div>
    );
  }
}

export default App;
