import * as types from './actionTypes';
import axios from 'axios';

const staffRegisterURL = 'https://soup-kitchen-backend.herokuapp.com/api/staff/register';
const staffLoginURL = 'https://soup-kitchen-backend.herokuapp.com/api/staff/login';
// const getItemsURL = 'https://soup-kitchen-backend.herokuapp.com/api/items';

export const getTokenOnRegistrationAsync = user => dispatch => {
    dispatch(fetchingToken());
    axios
    .post(staffRegisterURL, user)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch(tokenFetched());
    })
    .catch(err => {
        console.log(err);
        dispatch(errorFetchingToken(err.message));
    })
}

export const getTokenOnLoginAsync = user => dispatch => {
    dispatch(fetchingToken());
    axios
    .post(staffLoginURL, user)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch(tokenFetched());
    })
    .catch(err => {
        dispatch(errorFetchingToken(err.message));
    })
}

export function fetchingToken() {
    return {
        type: types.FETCHING_TOKEN,
    }
}

export function tokenFetched() {
    return {
        type: types.TOKEN_FETCHED,
    }
}

export function errorFetchingToken(error) {
    return {
        type: types.ERROR_FETCHING_TOKEN,
        payload: error,
    }
}