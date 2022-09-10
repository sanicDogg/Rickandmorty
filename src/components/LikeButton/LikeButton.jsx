import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import { selectLoggedIn } from "../../features";
import { toggleFavorites } from "../../features";

import dislike from "../../img/icons/emptyHeart.svg";
import like from "../../img/icons/fullHeart.svg";

import classes from "./styles/likeButtonStyles.module.css";

export function LikeButton({ id }) {
  const isLoggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isCardInFavorites = useSelector((state) =>
    state.user.userData.favorites.hasOwnProperty(id)
  );
  const onToggleFavorites = () => {
    if (isLoggedIn) dispatch(toggleFavorites(id));
    else navigate("/signup");
  };
  return (
    <div className={classes.likeButton}>
      <img
        onClick={onToggleFavorites}
        className={classes.likeButton__image}
        src={isCardInFavorites ? like : dislike}
        alt="like"
      />
    </div>
  );
}
LikeButton.propTypes = {
  id: PropTypes.number,
};
