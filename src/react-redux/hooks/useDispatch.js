import React from 'react'
import Context from '../components/Context'
function useDispatch() {
  const {store} = React.useContext(Context)
  const {dispatch} = store
  return dispatch
}
export default useDispatch