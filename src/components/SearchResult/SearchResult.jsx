import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import { LikeButton } from "../LikeButton";
import classes from "./styles/searchResult.module.css";

const CardButton = lazy(() => import("../Card/cardButton/CardButton"));

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
        <Suspense fallback={<div>...загрузка</div>}>
          <CardButton text="подробнее" id={id} />
        </Suspense>
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
