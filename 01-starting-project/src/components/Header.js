import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { userActions } from '../store/userSlice';
const Header = () => {

  const dispatch = useDispatch()
  const logoutUserHandler = () => {
    dispatch(userActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutUserHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
