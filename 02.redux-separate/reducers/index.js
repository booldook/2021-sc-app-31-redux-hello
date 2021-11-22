const { combineReducers } = require('redux');
const user = require('./user-reducer');
const post = require('./post-reducer');
const reducer = combineReducers({ user, post });

module.exports = reducer;
