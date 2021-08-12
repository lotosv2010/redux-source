import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import store from '../redux/index';
import {bindAdd, bindMinus, bindMul, bindDiv, bindActions, add, minus, mul, div} from '../redux/actions'

const {dispatch} = store;

function Counter(props) {
  const {counter1: {number}, counter2: {number: number2}} = props;
  const [state, setState] = useState({number: store.getState().counter1.number});
  const [state2, setState2] = useState({number: store.getState().counter2.number})
  useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
      setState({number: store.getState().counter1.number});
      setState2({number: store.getState().counter2.number})
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <h2>function component</h2>
      <hr />
      <p>redux(counter1):{state.number}</p>
      <p>react-redux(counter1):{number}</p>
      <hr />
      <p>redux(counter2):{state2.number}</p>
      <p>react-redux(counter2):{number2}</p>
      <hr />
      <p>
        <span>dispatch:</span>
        <button onClick={() => dispatch(minus())}>-(counter1)</button>
        <button onClick={() => dispatch(add(5))}>+(counter1)</button>
        <button onClick={() => dispatch(mul(5))}>*(counter2)</button>
        <button onClick={() => dispatch(div(5))}>/(counter2)</button>
      </p>
      <p>
        <span>单个绑定:</span>
        <button onClick={bindMinus}>-(counter1)</button>
        <button onClick={() => bindAdd(2)}>+(counter1)</button>||
        <button onClick={() => bindMul(2)}>*(counter2)</button>
        <button onClick={() => bindDiv(2)}>/(counter2)</button>
      </p>
      <p>
        <span>多个绑定:</span>
        <button onClick={bindActions.minus}>-(counter1)</button>
        <button onClick={() => bindActions.add(3)}>+(counter1)</button>||
        <button onClick={() => bindActions.mul(3)}>*(counter2)</button>
        <button onClick={() => bindActions.div(3)}>/(counter2)</button>
      </p>
      <p>
        <span>react-redux:</span>
        <button onClick={props.minus}>-(counter1)</button>
        <button onClick={() => props.add(3)}>+(counter1)</button>||
        <button onClick={() => props.mul(3)}>*(counter2)</button>
        <button onClick={() => props.div(3)}>/(counter2)</button>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = () => {
  return bindActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);