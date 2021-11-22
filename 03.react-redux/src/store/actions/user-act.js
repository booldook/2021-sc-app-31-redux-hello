/* 
1. action은 동기(sync)다.
2. action은 객체여야 한다.
3. dispatch()는 action을 reducer에 전달하는 행위.
4. 미들웨어에서 action을 가공해야 한다. <- redux-thunk, redux-saga
5. 비동기액션은 function으로 만들어서 미들웨어에서 실행한다.
*/
import axios from 'axios';

let userURL = 'https://jsonplaceholder.typicode.com/users?username=';

const logIn = (payload) => {
  return async (dispatch, getState) => {
    try {
      console.log('=======');
      userURL += payload.username;
      const { data } = await axios.get(userURL);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

const logOut = (payload) => {
  return {
    type: 'LOG_OUT',
    payload, //
  };
};

export { logIn, logOut };
