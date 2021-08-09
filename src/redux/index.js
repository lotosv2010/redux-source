import {createStore} from '../lib/redux';
import reduces from './reduces';

const store = createStore(reduces)

store.subscribe(() => {
  console.log(store.getState())
})
export default store