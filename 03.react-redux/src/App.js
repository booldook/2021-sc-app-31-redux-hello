import { useCallback } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './store/actions/user-act';

function App() {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(logIn({ username: 'Delphine' }));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={onLogin} style={{ color: 'white' }}>
          {user.isLogIn.toString()}
        </div>
      </header>
    </div>
  );
}

export default App;
