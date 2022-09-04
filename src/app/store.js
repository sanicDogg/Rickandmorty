import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { logger } from "../features/midlewares/logger/logger";
import cardsSlice from "../features/cards/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(logger),
});
