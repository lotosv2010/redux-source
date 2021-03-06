import React, { useEffect, useState } from 'react';
import {connect, useStore, useDispatch, useReduxContext, useSelector} from '../lib/react-redux';
import {createSelector} from '../lib/reselect';
import {bindAdd, bindMinus, bindMul, bindDiv, bindActions, add, minus, mul, div} from '../redux/actions'

function Counter(props) {
  const store = useStore();
  const dispatch = useDispatch();
  const context = useReduxContext();
  // console.log(context);
  const counter = useSelector(state => state.counter2);

  const {counter1: {number}, counter2: {number: number2}} = props;

  const [state, setState] = useState({number: context.store.getState().counter1.number});
  const [state2, setState2] = useState({number: context.store.getState().counter2.number});

  useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
      setState({number: store.getState().counter1.number});
      setState2({number: store.getState().counter2.number})
    })
    return unsubscribe
  }, [store])

  return (
    <div>
      <h2>function component: {props.branchName}</h2>
      <hr />
      <p>redux(counter1):{state.number}</p>
      <p>react-redux(counter1):{number}</p>
      <hr />
      <p>redux(counter2):{state2.number}</p>
      <p>react-redux(counter2):{number2}</p>
      <hr />
      <p>react-redux hook(counter2):{counter.number}</p>
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
        <button onClick={() => bindMinus(1)}>-(counter1)</button>
        <button onClick={() => bindAdd(2)}>+(counter1)</button>||
        <button onClick={() => bindMul(2)}>*(counter2)</button>
        <button onClick={() => bindDiv(2)}>/(counter2)</button>
      </p>
      <p>
        <span>多个绑定:</span>
        <button onClick={() => bindActions.minus(1)}>-(counter1)</button>
        <button onClick={() => bindActions.add(3)}>+(counter1)</button>||
        <button onClick={() => bindActions.mul(3)}>*(counter2)</button>
        <button onClick={() => bindActions.div(3)}>/(counter2)</button>
      </p>
      <p>
        <span>react-redux:</span>
        <button onClick={() => props.minus(1)}>-(counter1)</button>
        <button onClick={() => props.add(3)}>+(counter1)</button>||
        <button onClick={() => props.mul(3)}>*(counter2)</button>
        <button onClick={() => props.div(3)}>/(counter2)</button>
      </p>
      <p>
        <span>redux-thunk:</span>
        <button onClick={() => dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(minus(1))
          }, 1000)
        })}>-(counter1)</button>
        <button onClick={() => dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(add(1))
          }, 1000)
        })}>+(counter1)</button>||
        <button onClick={() => dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(mul(2))
          }, 1000)
        })}>*(counter2)</button>
        <button onClick={() => dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(div(2))
          }, 1000)
        })}>/(counter2)</button>
      </p>
      <p>
        <span>redux-promise:</span>
        <button onClick={() => dispatch(new Promise((resolve) => {
          setTimeout(() => {
            resolve(minus(1))
          }, 2000);
        }))}>-(counter1)</button>
        <button onClick={() => dispatch(new Promise((resolve) => {
          setTimeout(() => {
            resolve(add(1))
          }, 2000);
        }))}>+(counter1)</button>||
        <button onClick={() => dispatch(new Promise((resolve) => {
          setTimeout(() => {
            resolve(mul(2))
          }, 2000);
        }))}>*(counter2)</button>
        <button onClick={() => dispatch(new Promise((resolve) => {
          setTimeout(() => {
            resolve(div(2))
          }, 2000);
        }))}>/(counter2)</button>
      </p>
    </div>
  )
}

// stateSelector 和 createSelector 中可以对 state 做过滤或逻辑处理
// 本案例是在原来的state的基础上新增了一个name属性
const stateSelector = state => ({...state, branchName: 'reselect demo'});
const getStateSelector = createSelector(stateSelector, state => state);

// const mapStateToProps = (state) => {
//   return state
// }

const mapStateToProps = (state) => getStateSelector(state)

const mapDispatchToProps = () => {
  return bindActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);