import { Cards } from "../../components";
import { selectFavorites } from "../../app/reducers/cards/cardsSlice";
import { useSelector } from "react-redux";

export function Favorites() {
  const cards = useSelector(selectFavorites);
  return (
    <main>
      <Cards cardsData={cards} />
    </main>
  );
}
