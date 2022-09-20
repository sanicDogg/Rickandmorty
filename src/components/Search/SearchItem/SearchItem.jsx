import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { chooseThemeClass } from "../../../utils";

import CardButton from "../../Card/cardButton/CardButton";

import classes from "./styles/searchItemStyles.module.css";

export function SearchItem({ theme, id, name, linkClickHandler }) {

  return (
    <div className={`${chooseThemeClass(theme, classes.searchItem_dark)} ${classes.searchItem}`}>
      <Link
        onClick={linkClickHandler}
        to={`/search/${name}`}
        className={classes.searchItem__name}
      >
        {name}
      </Link>
      <div>
        <CardButton text="узнать больше" id={id} />
      </div>
    </div>
  );
}
SearchItem.propTypes = {
  theme: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  hideSearchField: PropTypes.func
};
