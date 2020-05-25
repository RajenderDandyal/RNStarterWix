import AsyncStorage from '@react-native-community/async-storage';
import array from './array';
import thunk from 'redux-thunk';
import promise from './promise';
import * as reducers from '../reducers';
import whitelist from './whitelist';
import {logger} from 'redux-logger';
import {persistStore, persistReducer, autoRehydrate} from 'redux-persist';
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {goToAuth, goHome} from '../config/navigation';

import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

export const storeObj = {};
export function setup() {
  const isDev = global.isDebuggingInChrome || __DEV__;
  const middleware = [
    //autoRehydrate(),
    applyMiddleware(...[thunk, promiseMiddleware, promise, array, logger]),
  ];
  if (isDev) {
    middleware.push(applyMiddleware(logger));
  }
  const reducer = combineReducers(reducers);

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(
    persistedReducer,
    {},
    __DEV__ ? composeWithDevTools(...middleware) : compose(...middleware),
  );
  if (global.isDebuggingInChrome) {
    window.store = store;
  }
  let persistor = persistStore(store, null, () => {
    console.log('persistStore');
    goToAuth();
  });
  storeObj.store = store;
  return {store, persistor};
}
export const persistor = setup().persistor;
export default setup().store;
