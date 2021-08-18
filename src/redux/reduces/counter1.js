import {INCREMENT, DECREMENT} from '../types';
import {handleActions} from '../../lib/redux-actions';
const initialState = {number: 0}

export default handleActions({
  [INCREMENT]: (state, {payload}) => ({number:state.number + (payload || 1)}),
  [DECREMENT]: (state, {payload}) => ({number:state.number - (payload || 1)})
}, initialState);