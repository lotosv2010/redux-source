import actionTypes from '../action-types'
const actionCreators = {
  add() {
    return {type: actionTypes.INCREMENT}
  },
  minus() {
    return {type: actionTypes.DECREMENT}
  }
}
export default actionCreators