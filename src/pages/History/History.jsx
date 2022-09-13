import { useSelector } from "react-redux";

import { selectHistory, selectHistoryVisibility } from "../../features";
import { HistoryItem } from "../../components";

import classes from "./styles/history.module.css";

export function History() {
  const history = useSelector(selectHistory);

  const isHistory = useSelector(selectHistoryVisibility);

  return (
    <div className={classes.history}>
      <h2 className={classes.history__header}>
        История поиска {isHistory ? "" : "пуста"}
      </h2>
      <ul>
        {history.map((historyItem, index) => (
          <HistoryItem key={index} history={historyItem} />
        ))}
      </ul>
    </div>
  );
}
