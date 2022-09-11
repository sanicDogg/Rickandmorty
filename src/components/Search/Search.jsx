import { useState } from "react";
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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleSearchFieldVisible = () => {
    setSearchFieldVisible(!isVisibleSearchField);
  };

  const search = (newValue) => {
    setSearchValue(newValue);
    setSearchFieldVisible(true);
    setSearchFieldVisible(newValue !== "");
  };

  const {
    data = [],
    isError,
    isLoading,
    isSuccess,
  } = useGetCharacterByNameQuery(searchValue);

  const onKeyPress = (event) => {
    if (event.key === "Enter" && searchValue !== "") {
      toggleSearchFieldVisible();
      dispatch(addToHistory(searchValue));
      navigate(`/search/${searchValue}`);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.container}>
      <DebounceInput
        inputRef={(input) => input && input.focus()}
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
          {data.results
            .filter((card, index) => index < 5)
            .map((card) => (
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
