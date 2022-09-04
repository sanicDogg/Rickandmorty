import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardsId: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  favorites: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    addId: (state, action) => {
      for (let i = 0; i < action.payload; i++) {
        const lastId = state.cardsId[state.cardsId.length - 1];
        state.cardsId.push(lastId + 1);
      }
    },

    clearFavorites: (state) => {
      state.favorites = {};
    },

    changeFavorites: (state, action) => {
      state.favorites = action.payload;
    },

    toggleFavorites: (state, action) => {
      if (state.favorites.hasOwnProperty(action.payload)) {
        delete state.favorites[action.payload];
      } else {
        state.favorites[action.payload] = true;
      }
    },
  },
});

export const { toggleFavorites, addId, clearFavorites, changeFavorites } =
  cardsSlice.actions;

export const selectCards = (state) => state.cards.cardsId;

export const selectFavorites = (state) => Object.keys(state.cards.favorites);

export default cardsSlice.reducer;
