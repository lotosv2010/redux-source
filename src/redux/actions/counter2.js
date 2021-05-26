import actionTypes from '../action-types'
const actionCreators = {
  mul() {
    return {type: actionTypes.MULTIPLY}
  },
  div() {
    return {type: actionTypes.DIVIDE}
  }
}
export default actionCreators