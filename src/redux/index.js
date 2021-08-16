import {createStore, applyMiddleware} from '../lib/redux';
import reduces from './reduces';
import reduxLogger from '../lib/redux-logger';
import reduxThunk from '../lib/redux-thunk';
import reduxPromise from '../lib/redux-promise';

// const store = createStore(reduces)

const store = applyMiddleware(reduxPromise, reduxThunk, reduxLogger)(createStore)(reduces);

store.subscribe(() => {
  console.log(store.getState())
})
export default store