import {combineReducers} from '../../lib';
import counter1 from './counter1'
import counter2 from './counter2'

const reducers = {
  counter1,
  counter2
}
// todo:合并之后会把两个reducer合并成一个reducer，状态也会合并，
// todo:合并之后的状态为：{counter1: {number: 0}, counter2: {number: 1}}
const combinedReducers = combineReducers(reducers)
export default combinedReducers