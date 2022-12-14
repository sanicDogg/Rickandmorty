import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { toggleObjectField } from "../../utils";

const initialState = {
  loggedIn: false,

  userData: {
    username: "",
    password: "",
    favorites: {},
    history: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    init: (state) => state,

    setUser: (state, action) => {
      state.userData = action.payload;
      state.loggedIn = true;
    },

    logout: () => initialState,

    toggleFavorites: (state, action) => {
      toggleObjectField(state.userData.favorites, action.payload);
    },
    addToHistory: (state, action) => {
      state.userData.history.push(action.payload);
    },
  },
});

export const { toggleFavorites, setUser, logout, addToHistory, init } =
  userSlice.actions;

export const selectUser = (state) => state.user.userData;

export const selectLoggedIn = (state) => state.user.loggedIn;

export const selectFavoritesObj = (state) => state.user.userData.favorites;

export const selectFavorites = createSelector(
  selectFavoritesObj,
  (favoritesObj) => Object.keys(favoritesObj)
);

export const selectHistory = (state) => state.user.userData.history;

export default userSlice.reducer;
