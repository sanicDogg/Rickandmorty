import classes from "./styles/cardsStyle.module.css";
import { Card } from "../Card";

export function Cards({ cardsData }) {
  return (
    <div className={classes.cards}>
      {cardsData.map((id) => {
        const propId = parseInt(id, 10);
        return <Card key={propId} id={propId} />;
      })}
    </div>
  );
}
