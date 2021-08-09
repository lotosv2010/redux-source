import { INCREMENT, DECREMENT } from '../types'

const add = (payload) => {
  return {type: INCREMENT, payload}
}
const minus = () => {
  return {type: DECREMENT}
}

const actionCreators = {
  add,
  minus
}

export default actionCreators;