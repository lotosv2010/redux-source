import actionTypes from '../action-types'
export default function counter (state= {number: 0}, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {number:state.number + 1}
    case actionTypes.DECREMENT:
      return {number:state.number - 1}
    default:
      return state
  }
}
