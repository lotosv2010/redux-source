import {useReducer, useRef, useLayoutEffect} from 'react'
import useReduxContext from './useReduxContext'

// 默认是比较两个对象相等，是比较它们的引用地址
const equalityFn = (a, b) => a===b

const useSelectorWithStore = (selector, equalityFn, store, contextSub) => {
  const [, forceRender] = useReducer(s=> s + 1, 0)
  const lastSelector = useRef() // 上一个选择器函数
  const lastStoreState = useRef() // 上一个仓库状态
  const lastSelectedState = useRef() // 上一个选中的状态

  const storeState = store.getState() // 获取仓库中的总状态 {counter1, counter2}
  let selectedState = selector(storeState) // 获取选中的状态

  // 如果选择器变了，或者仓库状态变化了
  if(selector !== lastSelector.current || storeState !== lastStoreState.current) {
    selectedState = selector(storeState) // 重新映射的
  } else { // 总状态没变，映射函数也没有变，直接用上一个映射出来的状态就可以
    selectedState = lastSelectedState.current
  }
  useLayoutEffect(() => {
    lastSelector.current = selector
    lastStoreState.current = storeState
    lastSelectedState.current = selectedState
  })

  useLayoutEffect(() => {
    function checkForUpdates() {
      const newSelectedState = lastSelector.current(store.getState())
      if(equalityFn(newSelectedState, lastSelectedState.current)) {
        return
      }
      lastSelectedState.current = newSelectedState
      forceRender()
    }
    checkForUpdates()
    // contextSub.onStateChange = checkForUpdates
    contextSub.subscribe(checkForUpdates)
  }, [contextSub, equalityFn, selectedState, store])
  return selectedState
}

function useSelector(selector) {
  const {store, subscription: contextSub} = useReduxContext() // 获取仓库
  const selectedState = useSelectorWithStore(selector, equalityFn, store, contextSub)
  return selectedState
}
export default useSelector