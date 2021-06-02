import {createStore, applyMiddleware} from '../lib';
import reducer from './reducers'
import reduxPromise from '../redux-promise'
import reduxThunk from '../redux-thunk'
import reduxLogger from '../redux-logger'


// const store = createStore(reducer)

const store = applyMiddleware(reduxPromise, reduxThunk, reduxLogger)(createStore)(reducer)
// todo 上面这句等价下面三句
// const storeEnhancer = applyMiddleware(logger) // 返回一个 store 的增强器
// const storeEnhancerStoreCreator = storeEnhancer(createStore) // store 的创建者，加强版的 createStore
// const store = storeEnhancerStoreCreator(reducer)

store.subscribe(() => {
  // console.log(store.getState())
})
export default store