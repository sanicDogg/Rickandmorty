import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { CardButton } from "./cardButton";
import { useGetCharacterQuery } from "../../features/api/apiSlice";
import { selectLoggedIn, toggleFavorites } from "../../features";

import dislike from "../../img/icons/emptyHeart.svg";
import like from "../../img/icons/fullHeart.svg";
import classes from "./styles/cardStyle.module.css";

export function Card({ id, isButtonVisible = true }) {
  const dispatch = useDispatch();

  const { data = {}, isLoading } = useGetCharacterQuery(id);

  const isCardInFavorites = useSelector((state) =>
    state.user.userData.favorites.hasOwnProperty(id)
  );

  const isLoggedIn = useSelector(selectLoggedIn);
  const navigate = useNavigate();

  const onToggleFavorites = () => {
    if (isLoggedIn) dispatch(toggleFavorites(id));
    else navigate("/signup");
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={data.image} alt={data.name} />
      {isButtonVisible && (
        <div className={classes.card__button}>
          <CardButton text="подробнее" id={id} />
        </div>
      )}
      <img
        onClick={onToggleFavorites}
        className={classes.card__like}
        src={isCardInFavorites ? like : dislike}
        alt="like"
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  isButtonVisible: PropTypes.bool,
};
