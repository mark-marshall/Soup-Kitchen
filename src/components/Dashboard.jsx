import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Pantry from './Pantry';
import ShoppingList from './ShoppingList';
import Staff from './Staff';
import { getItemsAsync } from '../state/actionCreators';

class Dashboard extends Component {
componentDidMount(){
this.props.getItemsAsync();
}


  render() {
    return (
      <div>
        <Pantry items={this.props.items}/>
        <ShoppingList />
        <Staff />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getItemsAsync,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
