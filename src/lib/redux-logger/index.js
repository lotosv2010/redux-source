/**
 * todo 中间件应用
 * 真正的中间件写法都是固定的，如下
 * const middleware = (middlewareAPI) => (next) => (action) => {}
 * @param {{getSate, dispatch}} middlewareAPI 
 * @param {中间件是可以写多个，可以嵌套} next
 * @param {动作 dispatch(action)} action
 * @returns 
 */
function logger(middlewareAPI) {
  const {getState} = middlewareAPI;
  return function(next) {
    return function(action) {
      console.log('老状态', getState());
      next(action);
      console.log('新状态', getState());
    }
  }
}
export default logger;