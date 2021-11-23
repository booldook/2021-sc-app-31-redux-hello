import { produce } from 'immer';
const init = [];

const postReducer = (prevState = init, { type, payload }) => {
  return produce(prevState, (draft) => {
    switch (type) {
      case 'ADD_POST':
        draft = [...prevState, payload];
        break;
      case 'REMOVE_POST':
        draft = prevState.filter((v) => v.id !== payload);
        break;
      default:
        return prevState;
    }
  });
};

export default postReducer;
