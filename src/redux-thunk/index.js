const reduxThunk = (middlewareAPI) => (next) => (action) => {
  const {getState, dispatch} = middlewareAPI
  if(typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}
export default reduxThunk