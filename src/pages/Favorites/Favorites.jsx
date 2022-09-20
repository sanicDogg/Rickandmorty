import { useSelector } from "react-redux";

import { Cards } from "../../components";

import { selectFavorites } from "../../features";

export function Favorites() {
  const cards = useSelector(selectFavorites);

  return (
    <div>
      <Cards cardsData={cards} />
    </div>
  );
}
