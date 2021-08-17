
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './lib/react-redux'
import './index.css';
import Counter from './components/Counter'
import {persistor, store} from './redux/index'
import {PersistGate} from './lib/redux-persist/integration/react'
import {Map, fromJS, is, List} from 'immutable';

// Map
const m1 = Map({name: 'immutable'});
const m2 = m1.set('name', 'immutable-js');
const m3 = m2.set('age', 10);
const m4 = m3.update('age', x => x + 1);
const m5 = m4.merge({home: 'shanghai'});
console.log(m1, m2, m3, m4, m5);
console.log(m5.toJS());
console.log(m5.toJSON());
console.log(m5.toObject());

const m6 = Map({name: 'immutable'});
console.log('is(m1, m6):', is(m1, m6));

const f = fromJS({user: {name: 'test', age: 10}});
const f1 = f.setIn(['user', 'age'], 15);
const f2 = f1.updateIn(['user', 'age'], x => x + 1);
const f3 = f2.mergeIn(['user'], {home: 'shanghai'});
console.log(f, f1, f2, f3);

// List
const l1 = fromJS([1,2,3]);
const l2 = List(l1);
console.log('l2.size:', l2.size);
console.log(l1, l2);
const l3 = l2.push(4);
console.log(l3);
const l4 = l3.pop();
console.log(l4);
const l5 = l4.update(2, x => x * 2);
console.log(l5);
const l6 = l5.concat([7,8,9])
console.log(l6);
const l7 = l6.map(x => x * 2);
console.log(l7);
const l8 = l7.filter(x => x > 4);
console.log(l8);
console.log(l8.get(1));
console.log(l8.includes(18));
console.log(l8.toJS());
console.log(l8.toJSON());
console.log(l8.toArray());

// TODO:优势
// 降低复杂度
const obj1 = fromJS({user: {name: 'test', age: 8}, 'k': 'v'});
const obj2 = obj1.setIn(['user', 'name'], 'immutable-test');
console.log('降低复杂度', obj1, obj2)

// 节省内存
const p1 = fromJS({
  name: 'test',
  home: {
    name: 'shanghai'
  }
});
const p2 = p1.set('name', 'immutable-test');
console.log(p1, p2)
console.log(p1.get('home'), p2.get('home'));
console.log(p1.get('home') === p2.get('home'));

// 方便回溯

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Counter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
