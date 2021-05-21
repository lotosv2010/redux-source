import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../redux/index'

class Counter extends Component {
  add = () => {
    store.dispatch({type: 'INCREMENT'})
  }
  minus = () => {
    store.dispatch({type: 'DECREMENT'})
  }
  render() { 
    return (
      <div>
        <p>{this.props.state}</p>
        <button onClick={this.minus}>-</button>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
 
export default connect((state) => ({
  state
}))(Counter);