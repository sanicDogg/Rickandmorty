import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./styles/cardButtonStyles.module.css";

export function CardButton({ text, id }) {
  return (
    <Link className={classes.card__link} to={`/character/${id}`}>
      <button className={classes.cardButton}>{text}</button>
    </Link>
  );
}

CardButton.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
};
