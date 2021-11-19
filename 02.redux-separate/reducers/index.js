const { combineReducers } = require('redux');
const user = require('./user-reducer');
const post = require('./post-reducer');

module.exports = combineReducers({ user, post });
