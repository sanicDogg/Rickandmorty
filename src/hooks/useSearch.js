import { useState } from "react";

export function useSearch() {
  const [searchValue, setSearchValue] = useState();
  const [isVisibleSearchField, setSearchFieldVisible] = useState(false);

  const hideSearchField = () => {
    setSearchFieldVisible(false);
  };

  const search = (newValue) => {
    setSearchValue(newValue);
    setSearchFieldVisible(newValue !== "");
  };

  return { hideSearchField, search, isVisibleSearchField, searchValue }
}