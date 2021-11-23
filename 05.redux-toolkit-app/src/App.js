import { useCallback } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  logIn,
  logOut,
  getUser,
  getUserData,
  getAddress,
} from './store/reducers/user-slice';

function App() {
  const { isLogOn } = useSelector(getUser);
  const userData = useSelector(getUserData);
  const userAddress = useSelector(getAddress);
  const dispatch = useDispatch();

  const onLogIn = () => {
    dispatch(logIn('Delphine'));
  };

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {isLogOn ? userData.username + ' 로그인 되었습니다.' : '로그인 하세요.'}
        </div>
        <div>{userAddress}</div>
        <div>
          <div onClick={onLogIn}>로그인</div>
          <div onClick={onLogOut}>로그아웃</div>
        </div>
      </header>
    </div>
  );
}

export default App;
