import React, { Component } from 'react';

import Register from './Register';
import Log from './Log';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Register />
        <Log />
      </div>
    );
  }
}

export default Login;
