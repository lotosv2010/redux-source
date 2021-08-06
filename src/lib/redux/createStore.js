import ActionTypes from './actionTypes';
/**
 * 永远只有一个仓库，状态也只有一个
 * @param {*} reduce 
 * @param {*} preloadedState 
 * @returns 
 */
export default function createStore(reduce, preloadedState) {
  const currentReduce = reduce; // 当前的reduce
  let currentState = preloadedState; // 当前状态
  const currentListeners = []; // 订阅池

  // 派发动作，修改state
  const dispatch = (action) => {
    currentState = currentReduce(currentState, action);
    currentListeners.forEach(listener => listener())
    return action
  }

  // 获取当前的state
  const getState= () => {
    return currentState;
  }

  // 订阅
  const subscribe = (listener) => {
    currentListeners.push(listener)
    return function unsubscribe() {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    }
  }
  dispatch({type: ActionTypes.INIT})

  return {
    dispatch,
    getState,
    subscribe
  }
}