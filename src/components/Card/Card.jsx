import classes from "./styles/cardStyle.module.css";
import dislike from "../../img/icons/emptyHeart.svg";
import like from "../../img/icons/fullHeart.svg";
import PropTypes from "prop-types";
import { toggleFavorites } from "../../app/reducers/cards/cardsSlice";
import { useDispatch } from "react-redux";

export function Card({ url, name, id, isCardLike }) {
  const dispatch = useDispatch();

  const toggleFavoritesClickHandler = () => {
    dispatch(
      toggleFavorites({
        id,
        name,
        url,
        isLike: true,
      })
    );
  };

  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={url} alt={name} />
      <button className={classes.card__button}>Подробнее</button>
      <img
        onClick={toggleFavoritesClickHandler}
        className={classes.card__like}
        src={isCardLike ? like : dislike}
        alt="like"
      />
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  isCardLike: PropTypes.bool,
};
