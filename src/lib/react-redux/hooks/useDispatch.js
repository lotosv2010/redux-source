import {useContext} from 'react';
import ReactReduxContext from '../components/Context';
function useDispatch() {
  const {store} = useContext(ReactReduxContext);
  const {dispatch} = store;
  return dispatch
}
export default useDispatch;
