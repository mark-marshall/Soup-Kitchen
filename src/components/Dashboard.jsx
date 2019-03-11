import React, { Component } from 'react';

import Pantry from './Pantry';
import ShoppingList from './ShoppingList';
import Staff from './Staff';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Pantry />
        <ShoppingList />
        <Staff />
      </div>
    );
  }
}

export default Dashboard;
