const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
/**
 * promise action 有两种写法
 * action 本身是一个 promise
 * action 是一个不同对象，但是他的 payload 属性是一个 promise
 */
const reduxPromise = (middlewareAPI) => (next) => (action) => {
  const {dispatch} = middlewareAPI
  // console.log('dispatch === next', dispatch === next)
  // 如果action自己是promise
  if(isPromise(action)) {
    // return action.then(result => dispatch(result))
    // 如果自己是promise只能处理成功，不能不处理失败
    return action.then(dispatch)
  }
  // 或者action.payload是promise
  return isPromise(action.payload)
    ? action.payload.then(result => dispatch({...action, payload: result}))
      .catch(error => {
        dispatch({...action, payload: error, error: true})
        return Promise.reject(error)
      })
    : next(action)
}

export default reduxPromise