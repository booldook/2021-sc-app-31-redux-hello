import { produce } from 'immer';

const init = {
  isLogIn: false,
  username: '',
  data: {},
};

const userReducer = (prevState = init, { type, payload }) => {
  return produce(prevState, (draft) => {
    switch (type) {
      case 'LOG_ON':
        draft.isLogIn = true;
        draft.username = payload.username;
        draft.data = payload;
        break;
      case 'LOG_OUT':
        draft.isLogIn = false;
        draft.username = '';
        draft.data = {};
        break;
      default:
        return prevState;
    }
  });
};

export default userReducer;
