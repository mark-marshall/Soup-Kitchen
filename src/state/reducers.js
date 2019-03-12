import * as types from '../consts/actionTypeConsts';

export function error(error = null, action) {
  switch (action.type) {
    case types.ERROR_FETCHING_TOKEN:
      return action.payload;
    case types.ERROR_FETCHING_ITEMS:
      return action.payload;
    case types.ERROR_ADDING_ITEM:
      return action.payload;
    case types.ERROR_DELETING_ITEM:
      return action.payload;
    case types.ERROR_UPDATING_ITEM:
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
    case types.DELETING_ITEM:
      return true;
    case types.ITEM_DELETED:
      return false;
    case types.UPDATING_ITEM:
      return true;
    case types.ITEM_UPDATED:
      return false;
    default:
      return loading;
  }
}

export function items(items = [], action) {
  switch (action.type) {
    case types.PUSH_ITEMS:
      return action.payload;
    case types.FILTER_ITEMS:
      return items.filter(item => item.categoryID === action.payload);
    default:
      return items;
  }
}
