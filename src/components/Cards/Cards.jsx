import classes from "./styles/cardsStyle.module.css";
import { Card } from "../Card";

export function Cards({cardsData}) {
  return (
    <div className={classes.cards}>
      {cardsData.map((id) => {
        return <Card key={id} id={id}/>;
      })}
    </div>
  );
}
