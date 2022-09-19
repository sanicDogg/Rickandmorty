import PropTypes from "prop-types";
import CardButton from "../Card/cardButton/CardButton";
import { LikeButton } from "../LikeButton";
import classes from "./styles/searchResult.module.css";

export function SearchResult({ image, name, isLoading, id, location }) {
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.searchResult}>
      <img src={image} alt={name} className={classes.searchResult__img}></img>
      <p className={classes.searchResult__desc}>{`name: ${name}`}</p>
      <p className={classes.searchResult__desc}>{`location: ${location}`}</p>
      <div className={classes.searchResult__likeButton}>
        <LikeButton id={id} />
      </div>
      <div className={classes.searchResult__button}>
        <CardButton text="подробнее" id={id} />
      </div>
    </div>
  );
}
SearchResult.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  isLoading: PropTypes.bool,
};
