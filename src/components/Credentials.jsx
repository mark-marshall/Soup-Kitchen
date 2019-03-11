import React, { Component } from 'react';

import Register from './Register';
import Login from './Login';

class Credentials extends Component {
  render() {
    return (
      <div>
        <h2>Credentials</h2>
        <Register />
        <Login />
      </div>
    );
  }
}

export default Credentials;
