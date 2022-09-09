import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout, selectLoggedIn, selectUser } from "../../features";
import classes from "./styles/headerStyle.module.css";

const Guest = () => (
  <>
    <Link to="/signin">Войти</Link>
    <Link to="/signup">Регистрация</Link>
  </>
);

export function Header() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  const LoggedIn = ({userName}) => (
    <>
      <div className={classes.greeting}>Привет, {userName}!</div>
      <Link to="/favorites">Избранное</Link>
      <Link to="/history">История</Link>
      <button onClick={handleLogout}>Выйти</button>
    </>
  );

  return (
    <header>
      <Link to="/" className={classes.logo}>Rick and Morty</Link>
      <nav className={classes.menu}>
        {isLoggedIn ? <LoggedIn userName={user.username}/> : <Guest/>}
      </nav>
    </header>
  );
}
