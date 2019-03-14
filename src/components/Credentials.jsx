import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import Register from './Register';
import Login from './Login';
import {
  getTokenOnRegistrationAsync,
  getTokenOnLoginAsync,
} from '../state/actionCreators';
import soupStyles from '../styles/styles';

const CredentialsWrapper = styled.div`
  height: ${soupStyles.height.componentLevel};
  padding: ${soupStyles.padding.largeContainer};
  display: ${soupStyles.display.default};
  flex-direction: ${soupStyles.display.directionSecondary};
  align-items: ${soupStyles.display.alignDefault};
  justify-content: ${soupStyles.display.alignDefault};
  background-color: ${soupStyles.color.primary};

  nav {
    background-color: ${lighten(0.1, soupStyles.color.primary)}
    width: ${soupStyles.width.subComponentLevel};
    display: ${soupStyles.display.default};
    align-items: ${soupStyles.display.alignDefault};
    justify-content: ${soupStyles.display.justifyDefault};
    padding: ${soupStyles.padding.navs};
    border-top-right-radius: ${soupStyles.border.radiusStandard};
    border-top-left-radius: ${soupStyles.border.radiusStandard};
  }

  a {
    color: ${soupStyles.color.default};
    text-decoration: ${soupStyles.text.decorationStandard};
    font-size: ${soupStyles.fontSize.large};
  }

  .active {
    color: ${soupStyles.color.secondary};
  }
`;

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
      role: '',
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
        role: '',
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

  registerValidation = user => {
    if (
      !user.firstname ||
      !user.lastname ||
      !user.email ||
      !user.password ||
      !user.role
    ) {
      return alert('Please fill in all fields 🌾');
    } else if (!user.email.includes('@') || !user.email.includes('.')) {
      return alert('Please enter a valid email ✅');
    } else return true;
  };

  fireRegistration = user => {
    if (this.registerValidation(user)) {
      this.props.getTokenOnRegistrationAsync(user);
      this.resetValues();
    }
  };

  loginValuesSet = event => {
    this.setState({
      loginUser: {
        ...this.state.loginUser,
        [event.target.name]: event.target.value,
      },
    });
  };

  loginValidation = user => {
    if (!user.email || !user.password || !user.role) {
      return alert('Please fill in all fields 🌾');
    } else return true;
  };

  fireLogin = user => {
    if (this.loginValidation(user)) {
      this.props.getTokenOnLoginAsync(user);
      this.resetValues();
    }
  };

  render() {
    if (this.props.error) {
      return <div>We're in a soup here: {this.props.error}</div>;
    } else if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <CredentialsWrapper>
          <nav>
            <div>
            <NavLink exact to="/credentials/">
              Login
            </NavLink>
            </div>
            <div>
            <NavLink to="/credentials/register">Register</NavLink>
            </div>
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
        </CredentialsWrapper>
      );
    }
  }
}

Credentials.propTypes = {
  loading: PT.bool.isRequired,
  error: PT.string,
  getTokenOnRegistrationAsync: PT.func.isRequired,
  getTokenOnLoginAsync: PT.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    error: state.error,
  };
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
    mapStateToProps,
    mapDispatchToProps,
  )(Credentials),
);
