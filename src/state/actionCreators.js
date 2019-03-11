import * as types from './actionTypes';
import axios from '../axios/axios';

const staffRegisterURL =
  'https://soup-kitchen-backend.herokuapp.com/api/staff/register';
const staffLoginURL =
  'https://soup-kitchen-backend.herokuapp.com/api/staff/login';
const getItemsURL = 'https://soup-kitchen-backend.herokuapp.com/api/items';

export const getTokenOnRegistrationAsync = user => dispatch => {
  dispatch(fetchingToken());
  axios()
    .post(staffRegisterURL, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch(tokenFetched());
    })
    .catch(err => {
      dispatch(errorFetchingToken(err.message));
    });
};

export const getTokenOnLoginAsync = user => dispatch => {
  dispatch(fetchingToken());
  axios()
    .post(staffLoginURL, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch(tokenFetched());
    })
    .catch(err => {
      dispatch(errorFetchingToken(err.message));
    });
};

export const getItemsAsync = () => dispatch => {
  dispatch(fetchingItems());
  axios()
    .get(getItemsURL)
    .then(res => {
      dispatch(pushItems(res.data.items));
      dispatch(itemsFetched());
    })
    .catch(err => {
      dispatch(errorFetchingItems(err.message));
    });
};

export const addItemAsync = item => dispatch => {
  dispatch(addingItem());
  axios()
    .post(getItemsURL, item)
    .then(res => {
      console.log(res.data.items);
      dispatch(addItem(res.data.items));
      dispatch(itemAdded());
    })
    .catch(err => {
      console.log(err.message);
      dispatch(errorAddingItem(err.message));
    });
};

export function fetchingToken() {
  return {
    type: types.FETCHING_TOKEN,
  };
}

export function tokenFetched() {
  return {
    type: types.TOKEN_FETCHED,
  };
}

export function errorFetchingToken(error) {
  return {
    type: types.ERROR_FETCHING_TOKEN,
    payload: error,
  };
}

export function fetchingItems() {
  return {
    type: types.FETCHING_ITEMS,
  };
}

export function itemsFetched() {
  return {
    type: types.ITEMS_FETCHED,
  };
}

export function pushItems(items) {
  return {
    type: types.PUSH_ITEMS,
    payload: items,
  };
}

export function errorFetchingItems(error) {
  return {
    type: types.ERROR_FETCHING_ITEMS,
    payload: error,
  };
}

export function addingItem() {
  return {
    type: types.ADDING_ITEM,
  }
}

export function itemAdded() {
  return {
    type: types.ITEM_ADDED,
  }
}

export function addItem(items) {
  return {
    type: types.ADD_ITEM,
    payload: items,
  };
}

export function errorAddingItem(error) {
  return {
    type: types.ERROR_ADDING_ITEM,
    payload: error,
  };
}
