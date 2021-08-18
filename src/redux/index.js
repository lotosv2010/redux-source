import {createStore, applyMiddleware} from '../lib/redux';
import reduces from './reduces';
import reduxLogger from '../lib/redux-logger';
import reduxThunk from '../lib/redux-thunk';
import reduxPromise from '../lib/redux-promise';
import {persistStore, persistReducer} from '../lib/redux-persist';
import storage from '../lib/redux-persist/lib/storage';

// const store = createStore(reduces)

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['counter1'],
  blacklist: ['counter2']
}

const persistedReducer = persistReducer(persistConfig, reduces);
const store = applyMiddleware(reduxPromise, reduxThunk, reduxLogger)(createStore)(persistedReducer);
const persistor = persistStore(store); 

store.subscribe(() => {
  console.log(store.getState());
})

export {
  store,
  persistor
}