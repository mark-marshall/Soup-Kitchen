import React, { Component } from 'react';

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  };

  userValuesSet = event => {
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
        <h3>Login</h3>
        <div>
          Email:{' '}
          <input
            name="email"
            value={this.state.user.email}
            onChange={this.userValuesSet}
          />
        </div>
        <div>
          Password:{' '}
          <input
            name="password"
            value={this.state.user.password}
            onChange={this.userValuesSet}
          />
        </div>
        <button>Log In</button>
      </div>
    );
  }
}

export default Login;
