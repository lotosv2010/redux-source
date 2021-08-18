import { MULTIPLY, DIVIDE } from '../types'

const mul = (payload) => {
  return {type: MULTIPLY, payload}
}
const div = (payload) => {
  return {type: DIVIDE, payload}
}

const actionCreators = {
  mul,
  div
}

export default actionCreators;