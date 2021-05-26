import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../redux/index'
import { bindActionCreators } from '../lib/index'
import actions from '../redux/actions/counter1'

const bindActions = bindActionCreators(actions, store.dispatch)

class Counter extends Component {
  state = {number: store.getState().counter1.number}
  componentDidMount() {
    // 订阅
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().counter1.number})
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
        <button onClick={bindActions.minus}>-</button>
        <button onClick={bindActions.add}>+</button>
      </div>
    );
  }
}
 
export default connect((state) => ({
  ...state.counter1
}))(Counter);