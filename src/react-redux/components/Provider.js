import React from 'react';
import Context from './Context'
import Subscription from '../utils/Subscription'

function Provider ({store, children}) {
  const subscription = new Subscription(store)
  const value = {store, subscription}
  return <Context.Provider value={value}>
    {children}
  </Context.Provider>
}
export default Provider