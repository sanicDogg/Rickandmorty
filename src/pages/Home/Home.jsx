import { Cards, Search } from "../../components";
import { selectCards } from "../../features";
import { useSelector } from "react-redux";

export function Home() {
  const cards = useSelector(selectCards);
  return (
    <div>
      <Search />
      <Cards cardsData={cards} />
    </div>
  );
}
