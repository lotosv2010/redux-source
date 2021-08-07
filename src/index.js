
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import Counter from './components/Counter'
import store from './redux/index'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>,
  document.getElementById('root')
);
