import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware, logger];

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
