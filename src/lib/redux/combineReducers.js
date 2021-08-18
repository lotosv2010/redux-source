function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  //  过滤不是函数的属性
  for (const key of reducerKeys) {
    if(typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  return (state={}, action) => {
    // 此次派发动作是否引起了状态的更新
    let hasChanged = false;
    const nextState = {};
    for (const key in finalReducers) {
      // finalReducers[key] 处理函数
      // state[key] 老的状态
      nextState[key] = finalReducers[key](state[key], action); // 获取新的状态
      // 判断是否由分状态发生变化，为了性能优化
      // 如果状态没有变化就用老的状态，这样状态不变，可能不需要重新渲染
      hasChanged = hasChanged || nextState[key] !== state[key]
    }
    hasChanged = hasChanged || Object.keys(finalReducers).length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }
}
export default combineReducers