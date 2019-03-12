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
        <Route path="/" render={routeProps => <AppHeader {...routeProps}/>} />

        <Route
          exact path="/"
          render={() =>
            !this.props.user.id ? (
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
          render={routeProps =>
            !this.props.user.id ? (
              <Credentials {...routeProps}/>
            ) : this.props.user.role !== 'volunteer' ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/volunteer" />
            )
          }
        />

        <Route
          path="/dashboard"
          render={routeProps =>
            this.props.user.id ? <Dashboard {...routeProps}/> : <Redirect to="/credentials" />
          }
        />

        <Route
          path="/volunteer"
          render={routeProps =>
            this.props.user.id ? <VolunteerOpps {...routeProps}/> : <Redirect to="/credentials" />
          }
        />

        <Route path="/" render={routeProps => <AppFooter {...routeProps}/>} />
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
