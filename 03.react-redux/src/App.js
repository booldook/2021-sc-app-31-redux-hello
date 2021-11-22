import { useCallback } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './store/actions/user-act';

function App() {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onLogIn = () => {
    console.log('Login');
    dispatch(logIn('Delphine'));
  };

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header" style={{ color: 'white' }}>
        <div>
          {user.isLogIn && user.username
            ? user.username + ' 로그인 되었습니다.'
            : '로그인 하세요.'}
        </div>
        <div>
          <div onClick={onLogIn}>로그인</div>
          <div onClick={onLogOut}>로그아웃</div>
        </div>
      </header>
    </div>
  );
}

export default App;
