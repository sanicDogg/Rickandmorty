import PropTypes from "prop-types";

import { CardButton } from "./cardButton";
import { LikeButton } from "../LikeButton";
import { useGetCharacterQuery } from "../../features/api/apiSlice";

import classes from "./styles/cardStyle.module.css";

export function Card({ id, isButtonVisible = true }) {
  const { data = {}, isLoading } = useGetCharacterQuery(id);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={data.image} alt={data.name} />
      {isButtonVisible && (
        <div className={classes.card__button}>
          <CardButton text="подробнее" id={id} />
        </div>
      )}
      <div className={classes.card__like}>
        <LikeButton id={id} />
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  isButtonVisible: PropTypes.bool,
};
