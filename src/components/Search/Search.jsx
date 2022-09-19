import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DebounceInput } from "react-debounce-input";

import { useGetCharacterByNameQuery } from "../../features/api/apiSlice";
import { addToHistory, selectLoggedIn } from "../../features";
import { useSearch } from "../../hooks/useSearch";
import { SearchItem } from "./SearchItem";

import { ThemeContext } from "../../app/themeContext";
import { chooseThemeClass } from "../../utils";

import classes from "./styles/searchStyle.module.css";

export function Search() {
  const { theme } = useContext(ThemeContext);

  const { hideSearchField, search, isVisibleSearchField, searchValue } = useSearch();

  const isLoggedIn = useSelector(selectLoggedIn);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    data = [],
    isError,
    isLoading,
    isSuccess,
  } = useGetCharacterByNameQuery(searchValue);

  const hideAndPushToHistory = () => {
    hideSearchField();
    if (isLoggedIn) {
      dispatch(addToHistory(searchValue));
    }
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter" && searchValue !== "") {
      hideAndPushToHistory();
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
        debounceTimeout={200}
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
          {data
            .filter((card, index) => index < 5)
            .map((card) => (
              <SearchItem
                theme={theme}
                key={card.id}
                id={card.id}
                name={card.name}
                linkClickHandler={hideAndPushToHistory}
              />
            ))}
        </nav>
      )}
    </div>
  );
}
