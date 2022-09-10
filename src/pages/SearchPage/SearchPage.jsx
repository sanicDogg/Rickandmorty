import { useParams } from "react-router";

import { useGetCharacterByNameQuery } from "../../features/api/apiSlice";
import { Search, SearchResult } from "../../components";

import classes from "./styles/searchPageStyles.module.css";

export function SearchPage() {
  const { searchValue } = useParams();

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetCharacterByNameQuery(searchValue);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <main className={classes.searchPage}>
      <Search />
      {isSuccess && (
        <div className={classes.searchPage__resultContainer}>
          {data.results.map((card) => (
            <SearchResult
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              location={card.location.name}
              isLoading={isLoading}
            />
          ))}
        </div>
      )}
      {isError && (
        <div className={classes.searchPage__resultContainer}>
          <p className={classes.searchPage__errorMessage}>
            по данному запросу ничего не найденно
          </p>
        </div>
      )}
    </main>
  );
}
