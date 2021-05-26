import React, { useEffect, useState } from 'react';
import store from '../redux/index'
import { bindActionCreators } from '../lib/index'
import actions from '../redux/actions/counter2'

const bindActions = bindActionCreators(actions, store.dispatch)

function Counter() {
  const [state, setState] = useState({number: store.getState().counter2.number})

  useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
      setState({number: store.getState().counter2.number})
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <h2>function component</h2>
      <p>redux:{state.number}</p>
      <button onClick={bindActions.mul}>*</button>
      <button onClick={bindActions.div}>/</button>
    </div>
  )
}

 
export default Counter