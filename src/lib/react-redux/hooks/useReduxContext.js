import {useContext} from 'react';
import ReactReduxContext from '../components/Context';
function useReduxContext() {
  const context = useContext(ReactReduxContext);
  return context;
}
export default useReduxContext;