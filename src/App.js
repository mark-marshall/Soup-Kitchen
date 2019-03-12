import React, { Component } from 'react';

import './App.css';
import AppHeader from './components/AppHeader';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';
import VolunteerOpps from './components/VolunteerOpps';
import AppFooter from './components/AppFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Credentials />
        <Dashboard />
        <VolunteerOpps />
        <AppFooter />
      </div>
    );
  }
}

export default App;
