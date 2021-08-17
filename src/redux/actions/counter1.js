import { INCREMENT, DECREMENT } from '../types';
import {createActions} from '../../lib/redux-actions';

export default createActions({
  [INCREMENT]: (payload) => (payload),
  [DECREMENT]: (payload) => (payload)
});