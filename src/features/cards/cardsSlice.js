import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {
    asdafacac: {
      id: "asdafacac",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/231/300/300",
    },
    asafafasfafafs: {
      id: "asafafasfafafs",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",

      url: "https://picsum.photos/id/232/300/300",
    },
    asdadadsad: {
      id: "asdadadsad",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/233/300/300",
    },
    asdasdadsad: {
      id: "asdasdadsad",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/234/300/300",
    },
    asdadafasdfafasss: {
      id: "asdadafasdfafasss",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/235/300/300",
    },
    sdasdq1w1e3esdww2w2d: {
      id: "sdasdq1w1e3esdww2w2d",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/236/300/300",
    },
    asdadasfasfsafafasf: {
      id: "asdadasfasfsafafasf",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/237/300/300",
    },
    asdasdasfafasfasxxasdf: {
      id: "asdasdasfafasfasxxasdf",
      name: "mr. Meeseeks",
      status: "Alive",
      species: "Humanoid",
      url: "https://picsum.photos/id/238/300/300",
    },
  },
  cardsId: [
    "asdafacac",
    "asafafasfafafs",
    "asdadadsad",
    "asdasdadsad",
    "asdadafasdfafasss",
    "sdasdq1w1e3esdww2w2d",
    "asdadasfasfsafafasf",
    "asdasdasfafasfasxxasdf",
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
