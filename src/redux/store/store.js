import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import starWars from '../sagas/starWars';
const sagaMiddleware = createSagaMiddleware()
var store = createStore(
    combineReducers(reducer),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(starWars)
store.subscribe(() => {
  console.log(store.getState().appStatus);
});

export default store;
