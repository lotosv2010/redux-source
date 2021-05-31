import React from 'react'
import Context from '../components/Context'
function useReduxContext() {
  const context = React.useContext(Context)
  return context
}
export default useReduxContext