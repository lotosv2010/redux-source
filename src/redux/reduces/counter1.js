import {INCREMENT, DECREMENT} from '../types';
import {handleActions} from 'redux-actions';
// import {add, minus} from '../actions'
const initialState = {number: 0}

// handleAction(add, (state, {payload}) => {
//   return {number:state.number + (payload || 1)}
// }, initialState)

// handleAction(minus, (state, {payload}) => {
//   return {number:state.number + (payload || 1)}
// }, initialState)

// export default function counter (state= {number: 0}, {type, payload}) {
//   switch (type) {
//     case INCREMENT:
//       return {number:state.number + (payload || 1)}
//     case DECREMENT:
//       return {number:state.number - 1}
//     default:
//       return state
//   }
// }

export default handleActions({
  [INCREMENT]: (state, {payload}) => ({number:state.number + (payload || 1)}),
  [DECREMENT]: (state, {payload}) => ({number:state.number - (payload || 1)})
}, initialState);