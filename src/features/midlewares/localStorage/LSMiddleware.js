import { getLoggedUser, toggleObjectField } from "../../../utils";
import {
  init,
  logout,
  setUser,
  toggleFavorites,
  addToHistory,
} from "../../user";

export const LSMiddleware = (store) => (next) => (action) => {
  switch (true) {
    case init.match(action): {
      const loggedUser = getLoggedUser();

      if (loggedUser) {
        store.dispatch(setUser(loggedUser));
      }

      return next(action);
    }
    case logout.match(action): {
      localStorage.setItem("authed", "");

      return next(action);
    }
    case setUser.match(action): {
      const users = JSON.parse(localStorage.getItem("users")) || {};

      const newUser = action.payload;

      if (!users.hasOwnProperty(newUser.username)) {
        users[newUser.username] = newUser;
      }

      localStorage.setItem("users", JSON.stringify(users));

      localStorage.setItem("authed", JSON.stringify(newUser.username));
      return next(action);
    }
    case addToHistory.match(action): {
      const users = JSON.parse(localStorage.getItem("users"));
      const authedUser = users[store.getState().user.userData.username];

      authedUser.history.push(action.payload);

      localStorage.setItem("users", JSON.stringify(users));
      return next(action);
    }
    case toggleFavorites.match(action): {
      const users = JSON.parse(localStorage.getItem("users"));
      const authedUser = users[store.getState().user.userData.username];

      let favorites = authedUser.favorites;

      toggleObjectField(favorites, action.payload);

      localStorage.setItem("users", JSON.stringify(users));
      return next(action);
    }

    default:
      return next(action);
  }
};
