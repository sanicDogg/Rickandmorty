import classes from "./styles/headerStyle.module.css";
import { Link } from "react-router-dom";

export function Header() {
  const isLoggedIn = true;
  const user = "Ваня";

  const LoggedIn = () => (
    <>
      <div className={classes.greeting}>Привет, {user}!</div>
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

  return (
    <header>
      <Link to="/" className={classes.logo}>Rick and Morty</Link>
      <nav className={classes.menu}>
        {isLoggedIn ? LoggedIn() : Guest()}
      </nav>
    </header>
  );
}
