import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Pantry from './Pantry';
import ShoppingList from './ShoppingList';
import Staff from './Staff';
import { getItemsAsync, addItemAsync } from '../state/actionCreators';

class Dashboard extends Component {
  state = {
    addItem: {
      name: '',
      amount: '',
      unit: '',
      categoryID: '',
    },
  };

  componentDidMount() {
    this.props.getItemsAsync();
  }

  resetValues = () => {
    this.setState({
      addItem: {
        name: '',
        amount: '',
        unit: '',
        category: '',
      },
    });
  };

  itemsValuesSet = event => {
    this.setState({
      addItem: {
        ...this.state.addItem,
        [event.target.name]: event.target.value,
      },
    });
  };

  fireAddItem = item => {
    const itemParse = {
    name: item.name,
    amount: parseInt(item.amount),
    unit: item.unit,
    categoryID: parseInt(item.categoryID),
    }
    console.log(itemParse);
    this.props.addItemAsync(itemParse);
    this.resetValues();
  };

  render() {
    return (
      <div>
        <Pantry
          items={this.props.items}
          itemsValuesSet={this.itemsValuesSet}
          addItem={this.state.addItem}
          fireAddItem={this.fireAddItem}
        />
        <ShoppingList />
        <Staff />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getItemsAsync,
      addItemAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
