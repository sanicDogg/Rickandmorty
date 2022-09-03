import { Cards, Search } from "../../components";
import { useGetAllCharactersQuery } from "../../features/api/apiSlice";
import {useSelector} from "react-redux";
import {selectCards} from "../../features";

export function Home() {
  const {data = []} = useGetAllCharactersQuery(13);
  const cards = useSelector(selectCards);

  return (
    <main>
      <Search />
      <Cards cardsData={cards || data.results || data} />
    </main>
  );
}