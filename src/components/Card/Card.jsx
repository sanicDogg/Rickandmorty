import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes, { bool } from "prop-types";

import { toggleFavorites } from "../../features";

import dislike from "../../img/icons/emptyHeart.svg";
import like from "../../img/icons/fullHeart.svg";

import classes from "./styles/cardStyle.module.css";

export function Card({ id, isButtonVisible = true }) {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.cards.cards[id]);

  const isCardInFavorites = useSelector((state) =>
    state.cards.favorites.has(id)
  );

  const onToggleFavorites = () => {
    dispatch(toggleFavorites(id));
  };

  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={card.url} alt={card.name} />
      {isButtonVisible && (
        <Link className={classes.card__link} to={`/character/${id}`}>
          <button className={classes.card__button}>Подробнее</button>
        </Link>
      )}
      <img
        onClick={onToggleFavorites}
        className={classes.card__like}
        src={isCardInFavorites ? like : dislike}
        alt="like"
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  isButtonVisible: bool,
};
