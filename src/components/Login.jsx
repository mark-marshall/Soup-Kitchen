import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>
          Email: <input />
        </div>
        <div>
          Password: <input />
        </div>
        <button>Log In</button>
      </div>
    );
  }
}

export default Login;