import { useSelector } from "react-redux";
import { selectFavorites, selectLoggedIn } from "../../features";
import { Cards } from "../../components";
import { Navigate } from "react-router";

export function Favorites() {
  const isLoggedIn = useSelector(selectLoggedIn);
  const cards = useSelector(selectFavorites);

  return (
    isLoggedIn ?
      <div>
        <Cards cardsData={cards}/>
      </div> :
      <Navigate to={"/signup"}/>
  );
}
