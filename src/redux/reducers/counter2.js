import actionTypes from '../action-types'
export default function counter (state= {number: 1}, action) {
  switch (action.type) {
    case actionTypes.MULTIPLY:
      return {number:state.number * 2}
    case actionTypes.DIVIDE:
      return {number:state.number / 2 }
    default:
      return state
  }
}
