import React, { Component } from 'react';

import soupKitchens from '../data/soupKitchens';
import SoupKitchenList from './SoupKitchenList';

class VolunteerOpps extends Component {
  state = {
    kitchens: [],
  };
  componentDidMount() {
    this.setState({
      kitchens: soupKitchens,
    });
  }
  render() {
    return (
      <div>
        <h1>VolunteerOpps</h1>
        <SoupKitchenList kitchens={this.state.kitchens}/>
      </div>
    );
  }
}

export default VolunteerOpps;
