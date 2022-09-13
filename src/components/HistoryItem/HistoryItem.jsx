import { Link } from "react-router-dom";
import classes from "./style/historyItem.module.css";

export function HistoryItem({ history }) {
  return (
    <li className={classes.historyItem}>
      <Link className={classes.historyItem__link} to={`/search/${history}`}>
        <span className={classes.historyItem__text}>
          перейти к поиску по запросу:
        </span>
        {history}
      </Link>
    </li>
  );
}
