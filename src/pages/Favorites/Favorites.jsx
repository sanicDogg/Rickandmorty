import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { selectFavorites, selectLoggedIn } from "../../features";

import { Cards } from "../../components";

export function Favorites() {
  const isLoggedIn = useSelector(selectLoggedIn);
  const cards = useSelector(selectFavorites);

  return isLoggedIn ? (
    <div>
      <Cards cardsData={cards} />
    </div>
  ) : (
    <Navigate to={"/signup"} />
  );
}
