
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './lib/react-redux'
import './index.css';
import Counter from './components/Counter'
import {persistor, store} from './redux/index'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Counter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
