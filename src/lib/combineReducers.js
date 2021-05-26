function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  //  过滤不是函数的属性
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if(typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducerKeys = Object.keys(finalReducers)

  // 返回一个新的 reducer
  return function combination(state={}, action) {
    let hasChanged = false
    const nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]; // counter1
      const reducer = finalReducers[key] // counter1的处理函数
      const previousStateForKey = state[key] // 获取老的 counter1 的状态
      const nextStateForKey = reducer(previousStateForKey, action) // 获取新的状态
      nextState[key] = nextStateForKey
      // 判断是否由分状态发生变化，为了性能优化
      // 如果状态没有变化就用老的状态，这样状态不变，可能不需要重新渲染
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }
}
export default combineReducers