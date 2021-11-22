import { combineReducers } from 'redux';
import user from './user-reducer';
import post from './post-reducer';
const reducer = combineReducers({ user, post });

export default reducer;
