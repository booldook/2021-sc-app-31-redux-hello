import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import state from './states';
import reducer from './reducers';

/* const myMiddleware = (store) => {
  return (next) => {
    return (action) => {
    }
  }
} */

// Middleware
const myMiddleware = (store) => (next) => (action) => {
  console.log('미들웨어가 action 가공을 함. ');
  next(action);
};

// process.env.NODE_ENV === 'development';
// const enhancer = composeWithDevTools(applyMiddleware(myMiddleware))
// process.env.NODE_ENV === 'production';
// const enhancer = compose(applyMiddleware(myMiddleware));

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(myMiddleware))
    : composeWithDevTools(applyMiddleware(myMiddleware));

const store = createStore(reducer, state, enhancer);
export default store;
