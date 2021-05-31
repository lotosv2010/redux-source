import React from 'react'
import Context from '../components/Context'
function useStore() {
  const {store} = React.useContext(Context)
  return store
}
export default useStore