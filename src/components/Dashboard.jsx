import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import DashboardHeader from './DashboardHeader';
import Pantry from './Pantry';
import Staff from './Staff';
import {
  getItemsAsync,
  addItemAsync,
  deleteItemAsync,
  updateItemAsync,
  filterItemsAsync,
  searchItemsAsync,
  clearSearchAsync,
  getUsersAsync,
  logout,
} from '../state/actionCreators';
import soupStyles from '../styles/styles';

const DashboardWrapper = styled.div`

nav {
  margin: ${soupStyles.margin.appLevel};
  width: ${soupStyles.width.subComponentLevel};
  display: ${soupStyles.display.default};
  align-items: ${soupStyles.display.alignDefault};
  justify-content: ${soupStyles.display.justifyDefault};
  padding: ${soupStyles.padding.navs};
  border-top-right-radius: ${soupStyles.border.radiusStandard};
  border-top-left-radius: ${soupStyles.border.radiusStandard};
}

a {
  color: ${soupStyles.color.default};
  text-decoration: ${soupStyles.text.decorationStandard};
  font-size: ${soupStyles.fontSize.large};
}

.active {
  color: ${soupStyles.color.secondary};
}
`;

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
        categoryID: '',
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

  addItemValidation = item => {
    if (!item.name || !item.amount || !item.categoryID) {
      return alert('Please fill in all fields 🌾');
    } else return true;
  };

  fireAddItem = item => {
    const itemParse = {
      name: item.name,
      amount: parseInt(item.amount),
      unit: item.unit,
      categoryID: parseInt(item.categoryID),
    };
    if (this.addItemValidation(item)) {
      this.props.addItemAsync(itemParse);
      this.resetValues();
    }
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

  updateItemValidation = item => {
    if (!item.name || !item.amount || !item.categoryID) {
      return alert('Please fill in all fields 🌾');
    } else return true;
  };

  fireUpdateItem = item => {
    const itemParse = {
      id: parseInt(item.id),
      name: item.name,
      amount: parseInt(item.amount),
      unit: item.unit,
      categoryID: parseInt(item.categoryID),
    };
    if (this.updateItemValidation(item)) {
      this.props.updateItemAsync(itemParse);
      this.resetEditValues();
    }
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

  fireItemFilter = event => {
    const categoryIDParse = parseInt(event.target.value);
    this.props.filterItemsAsync(categoryIDParse);
    this.currentlyFilteredReset();
  }

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

  fireSearchItems = event => {
    this.currentlySearchedValuesSet(event);
    const keyword = event.target.value;
    this.props.searchItemsAsync(keyword);
  }

  fireLogout = () => {
    this.props.logout();
    localStorage.clear();
  };

  render() {
    if (this.props.error) {
      return <div>We're in a soup here: {this.props.error}</div>;
    } else 
    {
      return (
        <DashboardWrapper>
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
            <NavLink exact to="/dashboard/">Pantry</NavLink>
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
                currentlySearched={this.state.currentlySearched}
                fireSearchItems={this.fireSearchItems}
              />
            )}
          />
          <Route
            path="/dashboard/team"
            render={routeProps => (
              <Staff {...routeProps} users={this.props.users} />
            )}
          />
        </DashboardWrapper>
      );
    }
  }
}

Dashboard.propTypes = {
  items: PT.arrayOf(PT.shape({
    id: PT.number,
    name: PT.string,
    amount: PT.number,
    unit: PT.string,
    imageURL: PT.string,
  })),
  users: PT.arrayOf(PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  })),
  user: PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  }),
  error: PT.string,
  getItemsAsync: PT.func.isRequired,
  addItemAsync: PT.func.isRequired,
  deleteItemAsync: PT.func.isRequired,
  updateItemAsync: PT.func.isRequired,
  filterItemsAsync: PT.func.isRequired,
  searchItemsAsync: PT.func.isRequired,
  clearSearchAsync: PT.func.isRequired,
  getUsersAsync: PT.func.isRequired,
  logout: PT.func.isRequired,
}

function mapStateToProps(state) {
  return {
    items: state.items,
    users: state.users,
    user: state.user,
    error: state.error,
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
