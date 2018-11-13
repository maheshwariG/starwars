import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SEARCH_PLANET_SUCCESS,
    SEARCH_PLANET_FAILURE,
    UPDATE_PROGRESS
  } from '../constants';

const defaultState = { data: {}, isFetching: false, success: false };

export const login = (state = defaultState, action = {}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case LOGIN_FAILURE:
            state = Object.assign({}, state, action.data);
            return state;
        default:
            return state;
    }
}


export const search = (state = defaultState, action = {}) => {
    switch (action.type) {
        case SEARCH_PLANET_SUCCESS:
        case SEARCH_PLANET_FAILURE:
            state = Object.assign({}, state, action.data);
            return state;
        default:
            return state;
    }
}
