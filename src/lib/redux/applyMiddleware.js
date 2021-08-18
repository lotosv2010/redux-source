import compose from './compose';

function applyMiddleware(...middlewares) {
  return function storeEnhancer(createStore) {
    return function storeEnhancerStoreCreator(reducer) {
      const store = createStore(reducer);
      const {getState, dispatch} = store;
      let newDispatch;
      const middlewareAPI = {getState, dispatch: action => newDispatch(action)}
      const chain = middlewares.map(middleware => middleware(middlewareAPI));
      // newDispatch = middleware(middlewareAPI)(dispatch)
      // todo 难点
      newDispatch = compose(...chain)(dispatch);
      return {
        ...store,
        dispatch: newDispatch
      }
    }
  }
}

export default applyMiddleware;