import classes from "./styles/cardsStyle.module.css";

import { Card } from "../Card";

export function Cards({cardsData}) {
  return (
    <div className={classes.cards}>
      {cardsData.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            url={card.image}
            name={card.name}
            isCardLike={card.isLike}
          />
        );
      })}
    </div>
  );
}
