import {combineReducers} from '../../lib/redux';
import counter1 from './counter1';
import counter2 from './counter2';

const reduces = {
  counter1,
  counter2
}

const combinedReducers = combineReducers(reduces);
export default combinedReducers;