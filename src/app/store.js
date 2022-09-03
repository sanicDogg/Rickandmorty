import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { enableMapSet } from "immer";
import cardsSlice from "../features/cards/cardsSlice";

enableMapSet();

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
