import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {
    1: {
      id: 1,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/231/300/300",
    },
    2: {
      id: 2,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",

      url: "https://picsum.photos/id/232/300/300",
    },
    3: {
      id: 3,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/233/300/300",
    },
    4: {
      id: 4,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/234/300/300",
    },
    5: {
      id: 5,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/235/300/300",
    },
    6: {
      id: 6,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/236/300/300",
    },
    7: {
      id: 7,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/237/300/300",
    },
    8: {
      id: 8,
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/238/300/300",
    },
  },
  cardsId: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ],
  favorites: new Set([]),
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    toggleFavorites: (state, action) => {
      if (state.favorites.has(action.payload)) {
        state.favorites.delete(action.payload);
      } else {
        state.favorites.add(action.payload);
      }
    },
  },
});

export const { toggleFavorites } = cardsSlice.actions;

export const selectCards = (state) => state.cards.cardsId;

export const selectFavorites = (state) => [...state.cards.favorites.values()];

export default cardsSlice.reducer;
