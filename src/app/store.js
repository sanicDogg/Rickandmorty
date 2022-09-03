import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { logger } from "../features/midlewares/logger/logger";
import cardsSlice from "../features/cards/cardsSlice";

enableMapSet();

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
  middleware: [logger],
});
