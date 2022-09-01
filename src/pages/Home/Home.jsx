import { Cards, Search } from "../../components";
import { selectCards } from "../../app/reducers/cards/cardsSlice";
import { useSelector } from "react-redux";

export function Home() {
  const cards = useSelector(selectCards);
  return (
    <main>
      <Search />
      <Cards cardsData={cards} />
    </main>
  );
}
