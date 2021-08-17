import handleAction from './handleAction';

function handleActions(actions, defaultState) {
  return function(state = defaultState, action) {
    const reducer = handleAction(action.type, actions[action.type], defaultState);
    if(reducer) return reducer(state, action)
    return state;
  }
}
export default handleActions;
