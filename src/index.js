import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './react-redux'
import './index.css';
import Counter from './components/Counter'
import FunCounter from './components/FunCounter'
import HooksCounter from './components/HooksCounter'
import MiddlewareCounter from './components/MiddlewareCounter'
import store from './redux/index'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
      <FunCounter />
      <HooksCounter />
      <MiddlewareCounter />
    </div>
  </Provider>,
  document.getElementById('root')
);
