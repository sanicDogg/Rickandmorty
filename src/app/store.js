import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import userSlice from "../features/user/userSlice";
import {LSMiddleware} from "../features/midlewares/localStorage/LSMiddleware";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(LSMiddleware),
});