import { createSlice } from "@reduxjs/toolkit";
import {toggleObjectField} from "../../utils";

const initialState = {
  loggedIn: false,

  userData: {
    username: '',
    password: '',
    favorites: {},
    history: {}
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      state.loggedIn = true;
    },

    toggleFavorites: (state, action) => {
      toggleObjectField(state.userData.favorites, action.payload)
    },
  },
});

export const { toggleFavorites, setUser } =
  userSlice.actions;

export const selectUser = (state) => state.user.userData;
export const selectLoggedIn = (state) => state.user.loggedIn;

export const selectFavorites = (state) => Object.keys(state.user.userData.favorites);


export default userSlice.reducer;
