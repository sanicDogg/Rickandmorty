import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectLoggedIn, selectUser } from "../../features";

import classes from "./styles/headerStyle.module.css";

const LoggedIn = ({ userName }) => (
  <>
    <div className={classes.greeting}>Привет, {userName}!</div>
    <Link to="/favorites">Избранное</Link>
    <Link to="/history">История</Link>
    <Link to="/logout">Выйти</Link>
  </>
);

const Guest = () => (
  <>
    <Link to="/signin">Войти</Link>
    <Link to="/signup">Регистрация</Link>
  </>
);

export function Header() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <header>
      <Link to="/" className={classes.logo}>
        Rick and Morty
      </Link>
      <nav className={classes.menu}>
        {isLoggedIn ? <LoggedIn userName={user.username} /> : <Guest />}
      </nav>
    </header>
  );
}
