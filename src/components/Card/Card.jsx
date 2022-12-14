import { lazy, Suspense, useContext } from "react";
import PropTypes from "prop-types";

import { LikeButton } from "../LikeButton";
import { useGetCharacterQuery } from "../../features/api/apiSlice";
import { ThemeContext } from "../../app/themeContext";

import { chooseThemeClass } from "../../utils";

import classes from "./styles/cardStyle.module.css";

const CardButton = lazy(() => import("./cardButton/CardButton.jsx"));

export function Card({ id, isDescButtonVisible = true }) {
  const { theme } = useContext(ThemeContext);

  const { data = {}, isLoading } = useGetCharacterQuery(id);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      className={`${chooseThemeClass(theme, classes.darkCard)} ${classes.card}`}
    >
      <img className={classes.card__img} src={data.image} alt={data.name} />
      {isDescButtonVisible && (
        <div className={classes.card__button}>
          <Suspense fallback={<div>...загрузка</div>}>
            <CardButton text="подробнее" id={id} />
          </Suspense>
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
  isDescButtonVisible: PropTypes.bool,
};
