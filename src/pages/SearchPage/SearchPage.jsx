import { useParams } from "react-router";
import { useGetCharacterByNameQuery } from "../../features/api/apiSlice";
import { Search, SearchResult } from "../../components";
import classes from "./styles/searchPageStyles.module.css";
import { useState, useEffect } from "react";

export function SearchPage() {
  const { searchValue } = useParams();

  const [cards, setCards] = useState([]);

  const { data = [], isLoading } = useGetCharacterByNameQuery(searchValue);

  useEffect(() => {
    if (data.results) {
      setCards(data.results);
    }
  }, [data]);

  return (
    <main className={classes.searchPage}>
      <Search />
      <div className={classes.searchPage__resultContainer}>
        {cards.map((card) => (
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
    </main>
  );
}
