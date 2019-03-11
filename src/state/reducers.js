import * as types from './actionTypes';

export function error(error = null, action) {
  switch (action.type) {
    case types.ERROR_FETCHING_TOKEN:
      return action.payload;
    default:
      return error;
  }
}

export function fetchingToken(fetchingStatus = false, action) {
  switch (action.type) {
    case types.FETCHING_TOKEN:
      return true;
    case types.TOKEN_FETCHED:
      return false;
    default:
      return fetchingStatus;
  }
}
