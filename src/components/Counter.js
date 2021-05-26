import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../redux/index'
import { bindActionCreators } from '../lib/index'

// ActionCreators 是一个用来创建Action的函数
function add() {
  return {type: 'INCREMENT'}
}
function minus() {
  return {type: 'DECREMENT'}
}

// todo:单个绑定
// const bindAdd = bindActionCreators(add, store.dispatch)
// const bindMinus = bindActionCreators(minus, store.dispatch)

// todo: 多个绑定
const actions = {add, minus}
const bindActions = bindActionCreators(actions, store.dispatch)
console.log(bindActions)
class Counter extends Component {
  state = {number: store.getState().number}
  componentDidMount() {
    // 订阅
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().number})
    })
  }
  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe()
  }
  render() { 
    return (
      <div>
        <h2>class component</h2>
        <p>redux:{this.state.number}</p>
        <p>react-redux:{this.props.number}</p>
        {/* <button onClick={bindMinus}>-</button>
        <button onClick={bindAdd}>+</button> */}
        <button onClick={bindActions.minus}>-</button>
        <button onClick={bindActions.add}>+</button>
      </div>
    );
  }
}
 
export default connect((state) => ({
  ...state
}))(Counter);