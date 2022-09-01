import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      id: "asdafacac",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/231/300/300",
      isLike: false,
    },
    {
      id: "asafafasfafafs",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/232/300/300",
      isLike: false,
    },
    {
      id: "asdadadsad",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/233/300/300",
      isLike: false,
    },
    {
      id: "asdasdadsad",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/234/300/300",
      isLike: false,
    },
    {
      id: "asdadafasdfafasss",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/235/300/300",
      isLike: false,
    },
    {
      id: "sdasdq1w1e3esdww2w2d",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/236/300/300",
      isLike: false,
    },
    {
      id: "asdadasfasfsafafasf",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "asdasdasfafasfasxxasdf",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/238/300/300",
      isLike: false,
    },
  ],
  favorites: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    toggleFavorites: (state, action) => {
      if (state.favorites.find((card) => card.id === action.payload.id)) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (card) => card.id !== action.payload.id
          ),
          cards: state.cards.map((card) => {
            return card.id === action.payload.id
              ? { ...card, isLike: !card.isLike }
              : card;
          }),
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        cards: state.cards.map((card) => {
          return card.id === action.payload.id
            ? { ...card, isLike: !card.isLike }
            : card;
        }),
      };
    },
  },
});

export const { toggleFavorites } = cardsSlice.actions;

export const selectCards = (state) => state.cards.cards;

export const selectFavorites = (state) => state.cards.favorites;

export default cardsSlice.reducer;
