import {createStore} from '../lib';
import reducer from './reducers'

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})
export default store