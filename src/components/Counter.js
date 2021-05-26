import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../redux/index'

class Counter extends Component {
  state = {number: store.getState().number}
  add = () => {
    store.dispatch({type: 'INCREMENT'})
  }
  minus = () => {
    store.dispatch({type: 'DECREMENT'})
  }
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
        <button onClick={this.minus}>-</button>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
 
export default connect((state) => ({
  ...state
}))(Counter);