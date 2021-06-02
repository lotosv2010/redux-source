import React, { useEffect, useState } from 'react';
import {useStore, useDispatch} from '../react-redux'
import actions from '../redux/actions/counter2'

function Counter() {
  const store = useStore()
  const dispatch = useDispatch()

  const [state, setState] = useState({number: store.getState().counter2.number})

  useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
      setState({number: store.getState().counter2.number})
    })
    return unsubscribe
  }, [store])

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(actions.mul())
    }, 2000);
  })
  return (
    <div>
      <h2>middleware component</h2>
      <p>redux:{state.number}</p>
      <button onClick={() => dispatch((dispatch) => {
        setTimeout(() => {
          dispatch(actions.mul())
        }, 1000);
      })}>*(thunk)</button>
      <button onClick={() => dispatch(promise)}>*(promise)</button>
      <button onClick={() => dispatch(actions.div())}>/</button>
    </div>
  )
}

 
export default Counter