import classes from "./styles/cardsStyle.module.css";
import { Card } from "../Card/Card";

export function Cards(cardsData) {
  const cards = cardsData.cardsData;

  return (
    <div className={classes.cards}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            url={card.url}
            name={card.name}
            isCardLike={card.isLike}
          />
        );
      })}
    </div>
  );
}
