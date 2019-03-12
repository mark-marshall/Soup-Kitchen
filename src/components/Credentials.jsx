import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import {
  getTokenOnRegistrationAsync,
  getTokenOnLoginAsync,
} from '../state/actionCreators';

class Credentials extends Component {
  state = {
    registerUser: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: '',
    },
    loginUser: {
      email: '',
      password: '',
    },
  };

  resetValues = () => {
    this.setState({
      registerUser: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: '',
      },
      loginUser: {
        email: '',
        password: '',
      },
    });
  };

  registerValuesSet = event => {
    this.setState({
      registerUser: {
        ...this.state.registerUser,
        [event.target.name]: event.target.value,
      },
    });
  };

  fireRegistration = user => {
    this.props.getTokenOnRegistrationAsync(user);
    this.resetValues();
  };

  loginValuesSet = event => {
    this.setState({
      loginUser: {
        ...this.state.loginUser,
        [event.target.name]: event.target.value,
      },
    });
  };

  fireLogin = user => {
    this.props.getTokenOnLoginAsync(user);
    this.resetValues();
  };

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/credentials/">Login</NavLink>
          <NavLink to="/credentials/register">Register</NavLink>
        </nav>
        <Route
          exact
          path="/credentials/"
          render={routeProps => (
            <Login
              {...routeProps}
              loginUser={this.state.loginUser}
              loginValuesSet={this.loginValuesSet}
              fireLogin={this.fireLogin}
            />
          )}
        />
        <Route
          path="/credentials/register"
          render={routeProps => (
            <Register
              {...routeProps}
              registerUser={this.state.registerUser}
              registerValuesSet={this.registerValuesSet}
              fireRegistration={this.fireRegistration}
            />
          )}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTokenOnRegistrationAsync,
      getTokenOnLoginAsync,
    },
    dispatch,
  );
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Credentials),
);
