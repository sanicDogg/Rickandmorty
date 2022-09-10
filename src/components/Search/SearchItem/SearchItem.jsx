import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToHistory } from "../../../features";
import { CardButton } from "../../Card/cardButton";

import classes from "./styles/searchItemStyles.module.css";

export function SearchItem({ id, name, toggleSearchFieldVisible }) {
  const dispatch = useDispatch();

  const onToggleSearchFieldVisible = () => {
    toggleSearchFieldVisible();
  };
  const onAddToHistory = () => {
    dispatch(addToHistory(name));
  };

  return (
    <div className={classes.searchItem}>
      <Link
        onClick={() => {
          onAddToHistory();
          onToggleSearchFieldVisible();
        }}
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
  id: PropTypes.number,
  name: PropTypes.string,
};
