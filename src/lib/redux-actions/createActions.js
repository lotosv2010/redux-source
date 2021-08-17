import createAction from './createAction'; 
function createActions(actions) {
  const newActions = {}
  const types = Object.keys(actions);
  for (const type of types) {
    newActions[type.toLowerCase()] = createAction(type, actions[type]);
  }
  return newActions;
}
export default createActions;