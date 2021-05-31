import React, { useEffect, useState } from 'react';
import {useStore, useDispatch} from '../react-redux'
import { bindActionCreators } from '../lib/index'
import actions from '../redux/actions/counter2'

function Counter() {
  const store = useStore()
  const dispatch = useDispatch()
  const bindActions = bindActionCreators(actions, store.dispatch)

  const [state, setState] = useState({number: store.getState().counter2.number})

  useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
      setState({number: store.getState().counter2.number})
    })
    return unsubscribe
  }, [store])

  return (
    <div>
      <h2>hooks component</h2>
      <p>redux:{state.number}</p>
      <button onClick={bindActions.mul}>*</button>
      <button onClick={() => dispatch(actions.div())}>/</button>
    </div>
  )
}

 
export default Counter