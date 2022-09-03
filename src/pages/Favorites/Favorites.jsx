import { useSelector } from "react-redux";
import { selectFavorites } from "../../features";
import { Cards } from "../../components";

export function Favorites() {
  const cards = useSelector(selectFavorites);

  return (
    <div>
      <Cards cardsData={cards} />
    </div>
  );
}
