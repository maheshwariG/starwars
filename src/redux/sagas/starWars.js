import { call, put, takeLatest,all } from 'redux-saga/effects';
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

import {
  loginInitiate,
  loginSuccess,
  loginFailure,
  updateProgress,
  searchSuccess,
  searchFailure
} from '../actions/index';
const checkLoginStatus = (username) => axios.get('https://swapi.co/api/people', {
  params: {
      search: username
  }
}).then(function(response) {
      return response.data;
  })
  .catch(function(error) {
    return null;
  });

const getSearchPlanetData = (text) => axios.get('https://swapi.co/api/planets', {
  params: {
      search: text
  }
}).then(function(response) {
      return response.data;
  })
  .catch(function(error) {
    return null;
  });

export function* loginRequest (dataLogin) {
      let { username, password } = dataLogin.data;
      yield put(updateProgress({ isSpinner: true, text: 'Logging in...' }));
      const resData=yield call(checkLoginStatus,username);
          let alertText = 'Username or password is incorrect';
              if (resData && resData.results && resData.results.length > 0) {
                  let user = resData.results[0];
                  if (user.name === username && user.birth_year === password) {
                    return yield put(loginSuccess({ success: true, message: 'Login Successful' }));
                  }
              }
              return yield put(loginFailure({ success: false, showAlert: true, alertText }));

}

export function* searchPlanet ({text}) {
     yield put(updateProgress({ isSpinner: true, text: 'Searching...' }));
     const data=yield call(getSearchPlanetData,text);

    if (data && data.results && data.results.length > 0) {
      return yield put(searchSuccess({ success: true, results: data.results }));
    }
    else {
      return yield put(searchFailure({ success: false, message: 'No data found' }));
    }

}

export default function* watchAllSagas() {
  yield all([
    yield takeLatest(LOGIN, loginRequest),
    yield takeLatest(SEARCH_PLANET, searchPlanet)
  ]);
}
