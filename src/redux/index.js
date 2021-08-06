import {createStore} from 'redux';
function counter (state= {number: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {number:state.number + 1}
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