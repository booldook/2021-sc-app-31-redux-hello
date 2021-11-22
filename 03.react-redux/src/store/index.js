/* 
1. state, reducer 를 모은다.
2. Middleware 적용
3. store 객체를 만들어 낸다.

- redux의 compose()는 순서를 지정할 수 있다.
- applyMiddleware()는 미들웨어를 만들어 준다.
*/

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import state from './states';
import reducer from './reducers';

// Middleware
/* const myMiddleware = (store) => {
    store.getState
  return (next) => {
    next(err)
    return (action) => {
    }
  }
} */
const myMiddleware = (store) => (next) => (action) => {
  try {
    console.log('미들웨어가 action 가공을 함. ');
    next(action);
  } catch (err) {
    next(err);
  }
};

/* const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    console.log('==== thunk ====');
    return action(store.dispatch, store.getState);
  }
  next(action);
}; */

// process.env.NODE_ENV === 'development';
// const enhancer = composeWithDevTools(applyMiddleware(myMiddleware))
// process.env.NODE_ENV === 'production';
// const enhancer = compose(applyMiddleware(myMiddleware));

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(thunk, myMiddleware))
    : composeWithDevTools(applyMiddleware(thunk, myMiddleware));

const store = createStore(reducer, state, enhancer);
export default store;
