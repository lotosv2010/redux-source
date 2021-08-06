import React, { useEffect, useState } from 'react';
import store from '../redux/index'

function Counter() {
  const [state, setState] = useState({number: store.getState().number})
  const add = () => {
    store.dispatch({type: 'INCREMENT', payload: 5})
  }
  const minus = () => {
    store.dispatch({type: 'DECREMENT'})
  }
  useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
      setState({number: store.getState().number})
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <h2>function component</h2>
      <p>redux:{state.number}</p>
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
    </div>
  )
}

 
export default Counter