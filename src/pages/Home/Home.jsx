import { Cards, Search } from "../../components";
import { useGetAllCharactersQuery } from "../../features/api/apiSlice";

export function Home() {
  const {data = []} = useGetAllCharactersQuery(13);

  return (
    <main>
      <Search />
      <Cards cardsData={data.results || data} />
    </main>
  );
}
