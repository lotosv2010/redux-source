/**
 * 把 action 创建者和 dispatch 方法绑定到一起
 * @param {action创建者} actionCreator 
 * @param {派发方法} dispatch 
 * @returns 
 */
function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator.apply(this, args))
  }
}

function bindActionCreators(actionCreators, dispatch) {
  if(typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }
  const boundActionCreators = {}
  for (const key in actionCreators) {
    if (Object.hasOwnProperty.call(actionCreators, key)) {
      const actionCreator = actionCreators[key];
      if(typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
      }
    }
  }
  return boundActionCreators
}

export default bindActionCreators