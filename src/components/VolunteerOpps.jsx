import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import soupKitchens from '../data/soupKitchens';
import SoupKitchenList from './SoupKitchenList';
import {
  logout,
} from '../state/actionCreators';

class VolunteerOpps extends Component {
  state = {
    kitchens: [],
  };
  componentDidMount() {
    this.setState({
      kitchens: soupKitchens,
    });
  }

  fireLogout = () => {
    this.props.logout();
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <h1>Check out our list of soup kitchens</h1>
        <button onClick={this.fireLogout}>Log out</button>
        <SoupKitchenList kitchens={this.state.kitchens}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(VolunteerOpps);
