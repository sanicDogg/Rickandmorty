import classes from "./styles/headerStyle.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={classes.header}>
      <Link to="/">Главная</Link>
      <Link to="favorites">Избранное</Link>
    </div>
  );
}
