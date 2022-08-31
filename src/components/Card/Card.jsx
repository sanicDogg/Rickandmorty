import classes from "./styles/cardStyle.module.css";
import dislike from "../../img/icons/emptyHeart.svg";
import like from "../../img/icons/fullHeart.svg";
import PropTypes from "prop-types";

export function Card({ url, name, id, isCardLike }) {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={url} alt={name} />
      <button className={classes.card__button}>Подробнее</button>
      <img
        data-url={url}
        data-id={id}
        data-name={name}
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
