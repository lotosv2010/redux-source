import actionCreators1 from './counter1';
import actionCreators2 from './counter2';
import store from '../index';
import {bindActionCreators} from '../../lib/redux';


const {dispatch} = store;
export const {add, minus} = actionCreators1;
export const {mul, div} = actionCreators2;

// todo:单个绑定
export const bindAdd = bindActionCreators(add, dispatch);
export const bindMinus = bindActionCreators(minus, dispatch);
export const bindMul = bindActionCreators(mul, dispatch);
export const bindDiv = bindActionCreators(div, dispatch);

// todo:多个绑定
export const bindActions = bindActionCreators({add, minus, mul, div}, dispatch);
