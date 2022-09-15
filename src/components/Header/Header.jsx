import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout, selectLoggedIn, selectUser } from "../../features";
import { ThemeContext } from "../../app/themeContext";
import { chooseThemeClass } from "../../utils";

import classes from "./styles/headerStyle.module.css";

const Guest = () => (
  <>
    <Link to="/signin">Войти</Link>
    <Link to="/signup">Регистрация</Link>
  </>
);

export function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const LoggedIn = ({ userName }) => (
    <>
      <div className={classes.greeting}>Привет, {userName}!</div>
      <Link to="/favorites">Избранное</Link>
      <Link to="/history">История</Link>
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </>
  );

  return (
    <header
      className={chooseThemeClass(
        theme,
        classes.headerDark,
        classes.headerLight
      )}
    >
      <Link to="/" className={classes.logo}>
        Rick and Morty
      </Link>
      <nav className={classes.menu}>
        {isLoggedIn ? <LoggedIn userName={user.username} /> : <Guest />}
      </nav>
      <button
        className={classes.themeButton}
        onClick={changeTheme}
        type="button"
      >
        <div></div>
      </button>
    </header>
  );
}
