const logIn = (payload) => {
  return {
    type: 'LOG_IN',
    payload, // userid
  };
};

const logOut = (payload) => {
  return {
    type: 'LOG_OUT',
    payload, //
  };
};

const userAction = { logIn, logOut };
export default userAction;
