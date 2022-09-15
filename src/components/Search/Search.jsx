import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DebounceInput } from "react-debounce-input";

import { useGetCharacterByNameQuery } from "../../features/api/apiSlice";
import { addToHistory } from "../../features";
import { SearchItem } from "./SearchItem";

import { ThemeContext } from "../../app/themeContext";
import { chooseThemeClass } from "../../utils";

import classes from "./styles/searchStyle.module.css";

export function Search() {
  const { theme } = useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState("");

  const [isVisibleSearchField, setSearchFieldVisible] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const hideSearchField = () => {
    setSearchFieldVisible(false);
  };

  const search = (newValue) => {
    setSearchValue(newValue);
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
      hideSearchField();
      dispatch(addToHistory(searchValue));
      navigate(`/search/${searchValue}`);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      className={`${chooseThemeClass(theme, classes.searchDark)} ${
        classes.container
      }`}
    >
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
          {data.results
            .filter((card, index) => index < 5)
            .map((card) => (
              <SearchItem
                theme={theme}
                key={card.id}
                id={card.id}
                name={card.name}
                hideleSearchFieldVisible={hideSearchField}
              />
            ))}
        </nav>
      )}
    </div>
  );
}
