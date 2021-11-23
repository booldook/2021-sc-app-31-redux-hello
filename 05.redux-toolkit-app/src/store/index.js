import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user-slice';

const myMiddleware = () => (next) => (action) => {
  console.log('==== My Middleware ====');
  next(action);
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (def) => def().concat(myMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
