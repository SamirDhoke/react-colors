import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import persistedReducer from './root-reducer';

export const store = createStore(persistedReducer, applyMiddleware( logger ));

export default persistStore(store);