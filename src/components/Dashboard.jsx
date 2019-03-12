import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Pantry from './Pantry';
import ShoppingList from './ShoppingList';
import Staff from './Staff';
import {
  getItemsAsync,
  addItemAsync,
  deleteItemAsync,
  updateItemAsync,
  filterItemsAsync,
  unfilterItemsAsync,
} from '../state/actionCreators';

class Dashboard extends Component {
  state = {
    addItem: {
      name: '',
      amount: '',
      unit: '',
      categoryID: '',
    },
    editItem: {
        id: '',
        name: '',
        amount: '',
        unit: '',
        categoryID: '',
    },
    currentlySelected: '',
    currentlyFiltered: '',
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
    };
    this.props.addItemAsync(itemParse);
    this.resetValues();
  };

  fireDeleteItem = id => {
    this.props.deleteItemAsync(id);
  };

  resetEditValues = () => {
    this.setState({
      editItem: {
        id: '',
        name: '',
        amount: '',
        unit: '',
        categoryID: '',
      },
    });
  };

  currentlySelectedSet = item => {
    this.setState({
      editItem: {
        id: item.id,
        name: item.name,
        amount: item.amount,
        unit: item.unit,
        categoryID: item.categoryID,
      },
    });
  };

  editValuesSet = event => {
    this.setState({
      editItem: {
        ...this.state.editItem,
        [event.target.name]: event.target.value,
      },
    });
  };

  fireUpdateItem = item => {
    const itemParse = {
      id: parseInt(item.id),
      name: item.name,
      amount: parseInt(item.amount),
      unit: item.unit,
      categoryID: parseInt(item.categoryID),
    };
    this.props.updateItemAsync(itemParse);
    this.resetEditValues();
  }

  currentlyFilteredReset = () => {
    this.setState({
      currentlyFiltered: '',
    })
  }

  currentlyFilteredSet = event => {
    this.setState({
      currentlyFiltered: event.target.value,
    })
  }

  fireItemFilter = categoryID => {
    const categoryIDParse = parseInt(categoryID);
    this.props.filterItemsAsync(categoryIDParse);
    this.currentlyFilteredReset();
  }

  fireItemFilterClear = () => {
    this.props.unfilterItemsAsync();
    this.currentlyFilteredReset();
  }


  render() {
    return (
      <div>
        <Pantry
          items={this.props.items}
          itemsValuesSet={this.itemsValuesSet}
          addItem={this.state.addItem}
          fireAddItem={this.fireAddItem}
          fireDeleteItem={this.fireDeleteItem}
          currentlySelectedSet={this.currentlySelectedSet}
          editItem={this.state.editItem}
          editValuesSet={this.editValuesSet}
          resetEditValues={this.resetEditValues}
          fireUpdateItem={this.fireUpdateItem}
          fireItemFilter={this.fireItemFilter}
          currentlyFiltered={this.state.currentlyFiltered}
          currentlyFilteredSet={this.currentlyFilteredSet}
          fireItemFilterClear={this.fireItemFilterClear}
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
      deleteItemAsync,
      updateItemAsync,
      filterItemsAsync,
      unfilterItemsAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
