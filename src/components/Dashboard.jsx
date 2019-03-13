import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink, withRouter } from 'react-router-dom';

import DashboardHeader from './DashboardHeader';
import Pantry from './Pantry';
import Staff from './Staff';
import {
  getItemsAsync,
  addItemAsync,
  deleteItemAsync,
  updateItemAsync,
  filterItemsAsync,
  unfilterItemsAsync,
  searchItemsAsync,
  clearSearchAsync,
  getUsersAsync,
  logout,
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
    currentlySearched: '',
  };

  componentDidMount() {
    this.props.getItemsAsync();
    this.props.getUsersAsync();
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
  };

  currentlyFilteredReset = () => {
    this.setState({
      currentlyFiltered: '',
    });
  };

  currentlyFilteredSet = event => {
    this.setState({
      currentlyFiltered: event.target.value,
    });
  };

  fireItemFilter = categoryID => {
    const categoryIDParse = parseInt(categoryID);
    this.props.filterItemsAsync(categoryIDParse);
    this.currentlyFilteredReset();
  };

  fireItemFilterClear = () => {
    this.props.unfilterItemsAsync();
    this.currentlyFilteredReset();
  };

  currentlySearchedReset = () => {
    this.setState({
      currentlySearched: '',
    });
  };

  currentlySearchedValuesSet = event => {
    this.setState({
      currentlySearched: event.target.value,
    });
  };

  fireSearchItems = keyword => {
    this.props.searchItemsAsync(keyword);
    this.currentlySearchedReset();
  };

  fireItemSearchClear = () => {
    this.props.clearSearchAsync();
    this.currentlySearchedReset();
  };

  fireLogout = () => {
    this.props.logout();
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <Route
          path="/dashboard/"
          render={routeProps => (
            <DashboardHeader
              {...routeProps}
              user={this.props.user}
              fireLogout={this.fireLogout}
            />
          )}
        />
        <nav>
          <NavLink to="/dashboard/">Pantry</NavLink>
          <NavLink to="/dashboard/team">Team</NavLink>
        </nav>
        <Route
          exact
          path="/dashboard/"
          render={routeProps => (
            <Pantry
              {...routeProps}
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
              currentlySearched={this.state.currentlySearched}
              currentlySearchedValuesSet={this.currentlySearchedValuesSet}
              fireSearchItems={this.fireSearchItems}
              fireItemSearchClear={this.fireItemSearchClear}
            />
          )}
        />
        <Route
          path="/dashboard/team"
          render={routeProps => (
            <Staff {...routeProps} users={this.props.users} />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    users: state.users,
    user: state.user,
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
      searchItemsAsync,
      clearSearchAsync,
      getUsersAsync,
      logout,
    },
    dispatch,
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);
