
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './lib/react-redux'
import './index.css';
import Counter from './components/Counter'
import {persistor, store} from './redux/index'
import {PersistGate} from './lib/redux-persist/integration/react'

// 方便回溯

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Counter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
