import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import AppHeader from './components/AppHeader';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';
import VolunteerOpps from './components/VolunteerOpps';
import AppFooter from './components/AppFooter';
import { getUserAsync } from '../src/state/actionCreators';

class App extends Component {
  componentDidMount() {
    const userID = localStorage.getItem('id');
    if (userID) {
      this.props.getUserAsync(userID);
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <AppHeader />} />

        <Route
          exact path="/"
          render={() =>
            !this.props.user ? (
              <Redirect to="/credentials" />
            ) : this.props.user.role !== 'volunteer' ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/volunteer" />
            )
          }
        />

        <Route
          path="/credentials"
          render={() =>
            !this.props.user ? (
              <Credentials />
            ) : this.props.user.role !== 'volunteer' ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/volunteer" />
            )
          }
        />

        <Route
          path="/dashboard"
          render={() =>
            this.props.user ? <Dashboard /> : <Redirect to="/credentials" />
          }
        />

        <Route
          path="/volunteer"
          render={() =>
            this.props.user ? <VolunteerOpps /> : <Redirect to="/credentials" />
          }
        />

        <Route path="/" render={() => <AppFooter />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
