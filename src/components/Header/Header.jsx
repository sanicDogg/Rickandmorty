import classes from "./styles/headerStyle.module.css";
import { Link } from "react-router-dom";

const LoggedIn = ({userName}) => (
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
  const isLoggedIn = true;
  const user = "Ваня";

  return (
    <header>
      <Link to="/" className={classes.logo}>Rick and Morty</Link>
      <nav className={classes.menu}>
        {isLoggedIn ? <LoggedIn userName={user}/> : <Guest />}
      </nav>
    </header>
  );
}
