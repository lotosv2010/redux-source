function handleAction(type, reducer, defaultState) {
  return function(state = defaultState, action) {
    if(action.type === type && typeof reducer === 'function') {
      return reducer(state, action);
    }
    return state;
  }
}
export default handleAction;