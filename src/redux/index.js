import {createStore} from '../lib/redux';

function counter (state= {number: 0}, {type, payload}) {
  switch (type) {
    case 'INCREMENT':
      return {number:state.number + (payload || 1)}
    case 'DECREMENT':
      return {number:state.number - 1}
    default:
      return state
  }
}

const store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
})
export default store