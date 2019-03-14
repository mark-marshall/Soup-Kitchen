import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PT from 'prop-types';

import AppHeader from './components/AppHeader';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';
import VolunteerOpps from './components/VolunteerOpps';
import AppFooter from './components/AppFooter';
import { getUserAsync, setVolunteerLogin, logout } from '../src/state/actionCreators';

class App extends Component {
  componentDidMount() {
    const userID = localStorage.getItem('id');
    const userRole = localStorage.getItem('role');
    if (userID && userRole !== 'volunteer') {
      this.props.getUserAsync(userID);
    }
    if (userID && userRole === 'volunteer') {
      this.props.setVolunteerLogin();
    }
  }

  componentDidUpdate() {
    if(!this.props.user && !this.props.volunteer){
      this.props.logout();
    }
  }

  render() {
    return (
      <div>
        <Route path="/" render={routeProps => <AppHeader {...routeProps} />} />
        <Route
          exact
          path="/"
          render={() =>
            !this.props.user.id && !this.props.volunteer ? (
              <Redirect to="/credentials" />
            ) : this.props.user.id ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/volunteer" />
            )
          }
        />
        <Route
          path="/credentials"
          render={routeProps =>
            !this.props.user.id && !this.props.volunteer ? (
              <Credentials {...routeProps} />
            ) : this.props.user.id ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/volunteer" />
            )
          }
        />
        <Route
          path="/dashboard"
          render={routeProps =>
            this.props.user.id ? (
              <Dashboard {...routeProps} />
            ) : this.props.volunteer ? (
              <Redirect to="/volunteer" />
            ) : (
              <Redirect to="/credentials" />
            )
          }
        />
        <Route
          path="/volunteer"
          render={routeProps =>
            this.props.volunteer ? (
              <VolunteerOpps {...routeProps} />
            ) : this.props.user.id ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/credentials" />
            )
          }
        />
        <Route path="/" render={routeProps => <AppFooter {...routeProps} />} />
      </div>
    );
  }
}

App.propTypes = {
  user: PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  }),
  volunteer: PT.bool.isRequired,
  getUserAsync: PT.func.isRequired,
  setVolunteerLogin: PT.func.isRequired,
  logout: PT.func.isRequired,
}

function mapStateToProps(state) {
  return {
    user: state.user,
    volunteer: state.isVolunteer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserAsync,
      setVolunteerLogin,
      logout,
    },
    dispatch,
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
