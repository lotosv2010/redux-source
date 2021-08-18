import {useContext} from 'react';
import ReactReduxContext from '../components/Context';
function useStore () {
  const {store} = useContext(ReactReduxContext);
  return store;
}
export default useStore;