import { DIVIDE, MULTIPLY } from '../types';

export default function counter (state= {number: 1}, {type, payload}) {
  switch (type) {
    case MULTIPLY:
      return {number:state.number * (payload || 1)}
    case DIVIDE:
      return {number:state.number / (payload || 2)}
    default:
      return state
  }
}