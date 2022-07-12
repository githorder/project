import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { user } from '../Pages/SignUp/reducers';
import { app } from '../reducers';
import { collection } from '../Pages/Personal/reducers';

const middlewares = [thunkMiddleware, logger];

const rootReducer = combineReducers({
  user,
  app,
  collection,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
