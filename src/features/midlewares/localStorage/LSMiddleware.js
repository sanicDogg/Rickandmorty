import { logout, setUser, toggleFavorites } from "../../user";
import { toggleObjectField } from "../../../utils";

export const LSMiddleware = (store) => (next) => (action) => {

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (setUser.match(action)) {
    const newUser = action.payload;

    if (!users.hasOwnProperty(newUser.username)) {
      users[newUser.username] = newUser;
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("authed", JSON.stringify(newUser.username));
  }

  else if (toggleFavorites.match(action)) {
    const authedUser = users[store.getState().user.userData.username];
    let favorites = authedUser.favorites || {};

    toggleObjectField(favorites, action.payload);

    localStorage.setItem("users", JSON.stringify(users));
  }

  else if (logout.match(action)) {
    localStorage.setItem("authed", "");
  }

  next(action);
};
