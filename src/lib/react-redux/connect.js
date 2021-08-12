import ReactReduxContext from './components/Context';
import {bindActionCreators} from '../redux';
import { useContext, useReducer, useEffect } from 'react';

export default function createContext(mapStateToProps, mapDispatchToProps) {
  /**
   * 1.从context中获取store
   * 传递3中种属性
   *  1.透传属性
   *  2.mapStateToProps(state)
   *  3.mapDispatchToProps(dispatch)
   */
  return function connect(WrappedComponent) {
    return function (props) {
      const {store}  = useContext(ReactReduxContext);
      const {getState, dispatch, subscribe} = store;
      const preState = getState();
      const stateProps = mapStateToProps(preState);
      let dispatchProps;
      if(typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch);
      } else if(typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      } else {
        dispatchProps = {dispatch}
      }

      // todo:订阅
      const [, forceUpdate] = useReducer(x => x + 1, 0); // 技巧
      useEffect(() => subscribe(forceUpdate), [subscribe]);
      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
    }
  }
}