import React, { Component } from 'react';

import Register from './Register';
import Login from './Login';

class Credentials extends Component {
  state = {
    registerUser: {
      name: '',
      surname: '',
      email: '',
      password: '',
      role: '',
    },
    loginUser: {
      name: '',
      surname: '',
      email: '',
      password: '',
      role: '',
    },
  };

  registerValuesSet = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  loginValuesSet = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>Credentials</h2>
        <Register
          registerUser={this.state.registerUser}
          registerValuesSet={this.registerValuesSet}
        />
        <Login
          loginUser={this.state.loginUser}
          loginValuesSet={this.loginValuesSet}
        />
      </div>
    );
  }
}

export default Credentials;
