import ReactReduxContext from './Context';
import Subscription from '../utils/Subscription';

function Provider({store = {}, children}) {
  const subscription = new Subscription(store);
  const value = {store, subscription}

  return <ReactReduxContext.Provider value={value}>
    {children}
  </ReactReduxContext.Provider>
}
export default Provider;