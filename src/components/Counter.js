import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import store from '../redux/index';
import {bindActionCreators} from '../lib/redux';

const {dispatch} = store;

// ActionCreators 是一个用来创建Action的函数
const add = (payload) => {
  return {type: 'INCREMENT', payload}
}
const minus = () => {
  return {type: 'DECREMENT'}
}

// todo:单个绑定
const bindAdd = bindActionCreators(add, dispatch);
const bindMinus = bindActionCreators(minus, dispatch);

// todo:多个绑定
const bindActions = bindActionCreators({add, minus}, dispatch);

function Counter(props) {
  const {number} = props;
  const [state, setState] = useState({number: store.getState().number})
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
      <p>react-redux:{number}</p>
      <p>
        <span>dispatch:</span>
        <button onClick={() => dispatch(minus())}>-</button>
        <button onClick={() => dispatch(add(5))}>+</button>
      </p>
      <p>
        <span>单个绑定:</span>
        <button onClick={bindMinus}>-</button>
        <button onClick={() => bindAdd(2)}>+</button>
      </p>
      <p>
        <span>多个绑定:</span>
        <button onClick={bindActions.minus}>-</button>
        <button onClick={() => bindActions.add(3)}>+</button>
      </p>
    </div>
  )
}

export default connect((state) => ({
  ...state
}))(Counter);