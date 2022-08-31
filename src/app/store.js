import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./midlewares/logger/logger";
import cardsSlice from "./reducers/cards/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
  middleware: [logger],
});
