import * as types from '../consts/actionTypeConsts';
import axios from '../axios/axios';

const staffRegisterURL =
  'https://soup-kitchen-backend.herokuapp.com/api/staff/register';
const staffLoginURL =
  'https://soup-kitchen-backend.herokuapp.com/api/staff/login';
const getItemsURL = 'https://soup-kitchen-backend.herokuapp.com/api/items';
const userListURL = 'https://soup-kitchen-backend.herokuapp.com/api/staff';

export const getTokenOnRegistrationAsync = user => dispatch => {
  dispatch(fetchingToken());
  axios()
    .post(staffRegisterURL, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('role', JSON.parse(res.config.data).role);
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
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('role', JSON.parse(res.config.data).role);
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
    .then(() => {
      dispatch(itemAdded());
    })
    .then(
      axios()
        .get(getItemsURL)
        .then(res => {
          dispatch(pushItems(res.data.items));
          dispatch(itemsFetched());
        })
        .catch(err => {
          dispatch(errorFetchingItems(err.message));
        }),
    )
    .catch(err => {
      dispatch(errorAddingItem(err.message));
    });
};

export const deleteItemAsync = id => dispatch => {
  dispatch(deletingItem());
  axios()
    .delete(`${getItemsURL}/${id}`)
    .then(() => {
      dispatch(itemDeleted);
    })
    .catch(err => {
      dispatch(errorDeletingItem(err.message));
    });
  setTimeout(function() {
    axios()
      .get(getItemsURL)
      .then(res => {
        dispatch(pushItems(res.data.items));
        dispatch(itemsFetched());
      })
      .catch(err => {
        dispatch(errorFetchingItems(err.message));
      });
  }, 200);
};

export const updateItemAsync = item => dispatch => {
  dispatch(updatingItem());
  axios()
    .put(`${getItemsURL}/${item.id}`, item)
    .then(() => {
      dispatch(itemUpdated);
    })
    .catch(err => {
      dispatch(errorUpdatingItem(err.message));
    });
  setTimeout(function() {
    axios()
      .get(getItemsURL)
      .then(res => {
        dispatch(pushItems(res.data.items));
        dispatch(itemsFetched());
      })
      .catch(err => {
        dispatch(errorFetchingItems(err.message));
      });
  }, 200);
};

export const filterItemsAsync = categoryID => dispatch => {
  dispatch(fetchingItems());
  axios()
    .get(getItemsURL)
    .then(res => {
      dispatch(pushItems(res.data.items));
      dispatch(filterItems(categoryID));
      dispatch(itemsFetched());
    })
    .catch(err => {
      dispatch(errorFetchingItems(err.message));
    });
};

export const unfilterItemsAsync = () => dispatch => {
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

export const searchItemsAsync = keyword => dispatch => {
  dispatch(fetchingItems());
  axios()
    .get(getItemsURL)
    .then(res => {
      dispatch(pushItems(res.data.items));
      dispatch(searchItems(keyword));
      dispatch(itemsFetched());
    })
    .catch(err => {
      dispatch(errorFetchingItems(err.message));
    });
};

export const clearSearchAsync = () => dispatch => {
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

export const getUsersAsync = () => dispatch => {
  dispatch(fetchingUsers());
  axios()
    .get(userListURL)
    .then(res => {
      dispatch(pushUsers(res.data.users));
      dispatch(usersFetched());
    })
    .catch(err => {
      dispatch(errorFetchingUsers(err.message));
    });
};

export const getUserAsync = id => dispatch => {
  dispatch(fetchingUser());
  axios()
  .get(`${userListURL}/${id}`)
  .then(res => {
    dispatch(pushUser(res.data.users));
    dispatch(userFetched());
  })
  .catch(err => {
    dispatch(errorFetchingUser(err.message));
  })
}

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
  };
}

export function itemAdded() {
  return {
    type: types.ITEM_ADDED,
  };
}

export function errorAddingItem(error) {
  return {
    type: types.ERROR_ADDING_ITEM,
    payload: error,
  };
}

export function deletingItem() {
  return {
    type: types.DELETING_ITEM,
  };
}

export function itemDeleted() {
  return {
    type: types.ITEM_DELETED,
  };
}

export function errorDeletingItem(error) {
  return {
    type: types.ERROR_DELETING_ITEM,
    payload: error,
  };
}

export function updatingItem() {
  return {
    type: types.UPDATING_ITEM,
  };
}

export function itemUpdated() {
  return {
    type: types.ITEM_UPDATED,
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
  }
}

export function pushUser(user) {
  return {
    type: types.PUSH_USER,
    payload: user,
  }
}

export function errorFetchingUser(error) {
  return {
    type: types.ERROR_FETCHING_USER,
    payload: error,
  }
}

export function setVolunteerLogin() {
  return {
    type: types.SET_VOLUNTEER_LOGIN,
  }
}
