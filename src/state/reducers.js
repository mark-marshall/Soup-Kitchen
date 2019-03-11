import * as types from './actionTypes';

export function error(error = null, action) {
  switch (action.type) {
    case types.ERROR_FETCHING_TOKEN:
      return action.payload;
    case types.ERROR_FETCHING_ITEMS:
      return action.payload;
    case types.ERROR_ADDING_ITEM:
      return action.payload;
    default:
      return error;
  }
}

export function loading(loading = false, action) {
  switch (action.type) {
    case types.FETCHING_TOKEN:
      return true;
    case types.TOKEN_FETCHED:
      return false;
    case types.FETCHING_ITEMS:
      return true;
    case types.ITEMS_FETCHED:
      return false;
    case types.ADDING_ITEM:
      return true;
    case types.ITEM_ADDED:
      return false;
    default:
      return loading;
  }
}

export function items(items = [], action) {
  switch (action.type) {
    case types.PUSH_ITEMS:
      return action.payload;
    case types.ADD_ITEM:
      return action.payload;
    default:
      return items;
  }
}
