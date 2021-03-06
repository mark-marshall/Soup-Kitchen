import * as types from '../consts/actionTypeConsts';
import axios from '../axios/axios';

import * as urls from '../consts/apiConsts';

export const getTokenOnRegistrationAsync = user => dispatch => {
  dispatch(fetchingToken());
  axios()
    .post(urls.staffRegisterURL, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('role', JSON.parse(res.config.data).role);
      dispatch(tokenFetched());
      if (JSON.parse(res.config.data).role !== 'volunteer') {
        dispatch(fetchingUser());
        axios()
          .get(`${urls.userListURL}/${res.data.id}`)
          .then(res => {
            dispatch(pushUser(res.data.users));
            dispatch(userFetched());
          })
          .catch(err => {
            dispatch(errorFetchingUser(err.message));
          });
      }
      if (JSON.parse(res.config.data).role === 'volunteer') {
        dispatch(setVolunteerLogin());
      }
    })
    .catch(err => {
      dispatch(errorFetchingToken(err.message));
    });
};

export const getTokenOnLoginAsync = user => dispatch => {
  dispatch(fetchingToken());
  axios()
    .post(urls.staffLoginURL, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('role', JSON.parse(res.config.data).role);
      dispatch(tokenFetched());
      if (user.role !== 'volunteer') {
        dispatch(fetchingUser());
        axios()
          .get(`${urls.userListURL}/${res.data.id}`)
          .then(res => {
            dispatch(pushUser(res.data.users));
            dispatch(userFetched());
          })
          .catch(err => {
            dispatch(errorFetchingUser(err.message));
          });
      }
      if (user.role === 'volunteer') {
        dispatch(setVolunteerLogin());
      }
    })
    .catch(err => {
      dispatch(errorFetchingToken(err.message));
    });
};

export const getItemsAsync = () => dispatch => {
  dispatch(fetchingItems());
  axios()
    .get(urls.getItemsURL)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      } else {
        dispatch(pushItems(res.data.items));
        dispatch(itemsFetched());
      }
    })
    .catch(err => {
      dispatch(errorFetchingItems(err.message));
    });
};

export const addItemAsync = item => dispatch => {
  axios()
    .post(urls.getItemsURL, item)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      }
    })
    .then(() => dispatch(getItemsAsync()))
    .catch(err => {
      dispatch(errorAddingItem(err.message));
    });
};

export const deleteItemAsync = id => dispatch => {
  axios()
    .delete(`${urls.getItemsURL}/${id}`)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      }
    })
    .then(() => dispatch(getItemsAsync()))
    .catch(err => {
      dispatch(errorDeletingItem(err.message));
    });
};

export const updateItemAsync = item => dispatch => {
  axios()
    .put(`${urls.getItemsURL}/${item.id}`, item)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(() => logout());
        localStorage.clear();
      }
    })
    .then(() => dispatch(getItemsAsync()))
    .catch(err => {
      dispatch(errorUpdatingItem(err.message));
    });
};

export const filterItemsAsync = categoryID => dispatch => {
  if (categoryID === 0) {
    dispatch(fetchingItems());
    axios()
      .get(urls.getItemsURL)
      .then(res => {
        if (res.data.message === 'jwt expired') {
          dispatch(logout);
          localStorage.clear();
        } else {
          dispatch(pushItems(res.data.items));
          dispatch(itemsFetched());
        }
      })
      .catch(err => {
        dispatch(errorFetchingItems(err.message));
      });
  } else {
    dispatch(fetchingItems());
    axios()
      .get(urls.getItemsURL)
      .then(res => {
        if (res.data.message === 'jwt expired') {
          dispatch(logout);
          localStorage.clear();
        } else {
          dispatch(pushItems(res.data.items));
          dispatch(filterItems(categoryID));
          dispatch(itemsFetched());
        }
      })
      .catch(err => {
        dispatch(errorFetchingItems(err.message));
      });
  }
};

export const searchItemsAsync = keyword => dispatch => {
  dispatch(fetchingItems());
  axios()
    .get(urls.getItemsURL)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      } else {
        dispatch(pushItems(res.data.items));
        dispatch(searchItems(keyword));
        dispatch(itemsFetched());
      }
    })
    .catch(err => {
      dispatch(errorFetchingItems(err.message));
    });
};

export const clearSearchAsync = () => dispatch => {
  dispatch(fetchingItems());
  axios()
    .get(urls.getItemsURL)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      } else {
        dispatch(pushItems(res.data.items));
        dispatch(itemsFetched());
      }
    })
    .catch(err => {
      dispatch(errorFetchingItems(err.message));
    });
};

export const getUsersAsync = () => dispatch => {
  dispatch(fetchingUsers());
  axios()
    .get(urls.userListURL)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      } else {
        dispatch(pushUsers(res.data.users));
        dispatch(usersFetched());
      }
    })
    .catch(err => {
      dispatch(errorFetchingUsers(err.message));
    });
};

export const getUserAsync = id => dispatch => {
  dispatch(fetchingUser());
  axios()
    .get(`${urls.userListURL}/${id}`)
    .then(res => {
      if (res.data.message === 'jwt expired') {
        dispatch(logout);
        localStorage.clear();
      } else {
        dispatch(pushUser(res.data.users));
        dispatch(userFetched());
      }
    })
    .catch(err => {
      dispatch(errorFetchingUser(err.message));
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

export function errorAddingItem(error) {
  return {
    type: types.ERROR_ADDING_ITEM,
    payload: error,
  };
}

export function errorDeletingItem(error) {
  return {
    type: types.ERROR_DELETING_ITEM,
    payload: error,
  };
}

export function errorUpdatingItem(error) {
  return {
    type: types.ERROR_UPDATING_ITEM,
    payload: error,
  };
}

export function filterItems(categoryID) {
  return {
    type: types.FILTER_ITEMS,
    payload: categoryID,
  };
}

export function searchItems(keyword) {
  return {
    type: types.SEARCH_ITEMS,
    payload: keyword,
  };
}

export function fetchingUsers() {
  return {
    type: types.FETCHING_USERS,
  };
}

export function usersFetched() {
  return {
    type: types.USERS_FETCHED,
  };
}

export function pushUsers(staff) {
  return {
    type: types.PUSH_USERS,
    payload: staff,
  };
}

export function errorFetchingUsers(error) {
  return {
    type: types.ERROR_FETCHING_USERS,
    payload: error,
  };
}

export function fetchingUser() {
  return {
    type: types.FETCHING_USER,
  };
}

export function userFetched() {
  return {
    type: types.USER_FETCHED,
  };
}

export function pushUser(user) {
  return {
    type: types.PUSH_USER,
    payload: user,
  };
}

export function errorFetchingUser(error) {
  return {
    type: types.ERROR_FETCHING_USER,
    payload: error,
  };
}

export function setVolunteerLogin() {
  return {
    type: types.SET_VOLUNTEER_LOGIN,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
