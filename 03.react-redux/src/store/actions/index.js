const userAct = require('./user-act');
const postAct = require('./post-act');

module.exports = { ...userAct, ...postAct };
