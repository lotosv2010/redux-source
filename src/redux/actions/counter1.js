import { INCREMENT, DECREMENT } from '../types';
import {createActions} from 'redux-actions';

// const add = createAction(INCREMENT, (payload) => payload);
// const minus = createAction(DECREMENT)

// const add = (payload) => {
//   return {type: INCREMENT, payload}
// }
// const minus = () => {
//   return {type: DECREMENT}
// }

// const actionCreators = {
//   add,
//   minus
// }

export default createActions({
  [INCREMENT]: (payload) => (payload),
  [DECREMENT]: (payload) => (payload)
});