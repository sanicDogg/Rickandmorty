import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DebounceInput } from "react-debounce-input";

import { useGetCharacterByNameQuery } from "../../features/api/apiSlice";
import { addToHistory } from "../../features";
import { SearchItem } from "./SearchItem";

import classes from "./styles/searchStyle.module.css";

export function Search() {
  const [searchValue, setSearchValue] = useState("");

  const [isVisibleSearchField, setSearchFieldVisible] = useState(false);

  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleSearchFieldVisible = () => {
    setSearchFieldVisible(!setSearchFieldVisible);
  };

  const search = (newValue) => {
    setSearchValue(newValue);
    setSearchFieldVisible(true);
    if (newValue === "") {
      setSearchFieldVisible(false);
    }
  };

  const {
    data = [],
    isError,
    isLoading,
    isSuccess,
  } = useGetCharacterByNameQuery(searchValue);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleSearchFieldVisible();
      dispatch(addToHistory(searchValue));
      if (isSuccess) {
        navigate(`/search/${searchValue}`);
      }
    }
  };
  useEffect(() => {
    if (data.results) {
      const result = data.results.filter((card, index) => index < 5);
      setCards(result);
    }
  }, [data]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.container}>
      <DebounceInput
        onKeyDown={onKeyPress}
        minLength={2}
        debounceTimeout={500}
        placeholder="Панель поиска"
        className={classes.search}
        onChange={(event) => search(event.target.value)}
      />
      {isError && (
        <nav className={classes.searchResults}>
          <p className={classes.searchResults__errorMessage}>
            по данному запросу ничего не найдено
          </p>
        </nav>
      )}
      {isSuccess && isVisibleSearchField && (
        <nav className={classes.searchResults}>
          {cards.map((card) => (
            <SearchItem
              key={card.id}
              id={card.id}
              name={card.name}
              toggleSearchFieldVisible={toggleSearchFieldVisible}
            />
          ))}
        </nav>
      )}
    </div>
  );
}
