import classes from "./styles/cardsStyle.module.css";

import { Card } from "../Card/Card";

export function Cards({ cardsData }) {
  const cards = cardsData;

  return (
    <div className={classes.cards}>
      {cards.map((id) => {
        return <Card key={id} id={id} />;
      })}
    </div>
  );
}
