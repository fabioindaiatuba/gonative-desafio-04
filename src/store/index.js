import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import sagas from './sagas';
import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products', 'categories'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
export const store = createAppropriateStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
sagaMiddleware.run(sagas);
