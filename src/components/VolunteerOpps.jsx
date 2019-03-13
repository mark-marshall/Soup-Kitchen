import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VolunteerHeader from './VolunteerHeader';
import soupKitchens from '../data/soupKitchens';
import SoupKitchenList from './SoupKitchenList';
import { logout } from '../state/actionCreators';

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
  };

  render() {
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    } else if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <VolunteerHeader />
          <button onClick={this.fireLogout}>Log out</button>
          <SoupKitchenList kitchens={this.state.kitchens} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    errr: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VolunteerOpps);
