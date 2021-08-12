import ReactReduxContext from './Context';

function Provider({store = {}, children}) {
  console.log(store, children)
  return <ReactReduxContext.Provider value={{store}}>
    {children}
  </ReactReduxContext.Provider>
}
export default Provider;