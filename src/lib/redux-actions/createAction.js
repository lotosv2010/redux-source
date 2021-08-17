/**
 * 创建action
 * @param {*} type 
 * @param {*} payloadCreator 
 * @param {*} metaCreator 
 */
function createAction(type, payloadCreator, metaCreator) {
  return function(...args) {
    const action = {type}
    if(payloadCreator && typeof payloadCreator === 'function') {
      action.payload = payloadCreator.apply(null, args)
    }
    return action
  }
}
export default createAction;