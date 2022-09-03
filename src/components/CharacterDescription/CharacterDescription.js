import { useSelector } from "react-redux";
import classes from "./styles/characterDescription.module.css";

export function CharacterDescription({ id }) {
  const card = useSelector((state) => state.cards.cards[id]);

  return (
    <div className={classes.description}>
      <h1 className={`${classes.description__text}`}>{`name: ${card.name}`}</h1>
      <p
        className={`${classes.description__text}`}
      >{`status: ${card.status}`}</p>
      <p
        className={`${classes.description__text}`}
      >{`species: ${card.species}`}</p>
    </div>
  );
}
