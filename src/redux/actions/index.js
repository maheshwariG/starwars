import axios from 'axios';
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SEARCH_PLANET,
    SEARCH_PLANET_SUCCESS,
    SEARCH_PLANET_FAILURE,
    UPDATE_PROGRESS
  } from '../constants';

export const updateProgress = (data) => {
    return {
        type: UPDATE_PROGRESS,
        data
    }
}
export const loginInitiate = (data) => {
    return {
        type: LOGIN,
        data
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

export const loginFailure = (data) => {
    return {
        type: LOGIN_FAILURE,
        data
    }
}

export const searchInitiate = (text) => {
    return {
        type: SEARCH_PLANET,
        text
    }
}

export const searchSuccess = (data) => {
    return {
        type: SEARCH_PLANET_SUCCESS,
        data
    }
}

export const searchFailure = (data) => {
    return {
        type: SEARCH_PLANET_FAILURE,
        data
    }
}
