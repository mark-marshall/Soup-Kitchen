import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import AppHeader from './components/AppHeader';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';
import VolunteerOpps from './components/VolunteerOpps';
import AppFooter from './components/AppFooter';
import { getUserAsync, setVolunteerLogin } from '../src/state/actionCreators';

class App extends Component {
  componentDidMount() {
    const userID = localStorage.getItem('id');
    console.log(userID);
    const userRole = localStorage.getItem('role');
    if(userID && userRole !== 'volunteer') {
      this.props.getUserAsync(userID);
    }
    if(userID && userRole === 'volunteer') {
      this.props.setVolunteerLogin();
    }
  }

  render() {
    return (
      <div className="App">
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
