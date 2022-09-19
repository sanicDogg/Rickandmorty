import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToHistory } from "../../../features";
import { chooseThemeClass } from "../../../utils";
// import { CardButton } from "../../Card/cardButton";

import classes from "./styles/searchItemStyles.module.css";
import { lazy, Suspense } from "react";

const CardButton = lazy(() => import("../../Card/cardButton/CardButton"));

export function SearchItem({ theme, id, name, hideSearchField }) {
  const dispatch = useDispatch();

  const onLinkClick = () => {
    dispatch(addToHistory(name));
    console.log(name);
    hideSearchField();
  };

  return (
    <div
      className={`${chooseThemeClass(theme, classes.searchItem_dark)} ${
        classes.searchItem
      }`}
    >
      <Link
        onClick={onLinkClick}
        to={`/search/${name}`}
        className={classes.searchItem__name}
      >
        {name}
      </Link>
      <div>
        <Suspense fallback={<div>...загрузка</div>}>
          <CardButton text="узнать больше" id={id} />
        </Suspense>
      </div>
    </div>
  );
}
SearchItem.propTypes = {
  theme: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  hideSearchField: PropTypes.bool,
};
