import { getLoggedUser, toggleObjectField } from "../../../utils";
import { init, logout, setUser, toggleFavorites } from "../../user";

export const LSMiddleware = (store) => (next) => (action) => {
  if (logout.match(action)) {
    localStorage.setItem("authed", "");
    return next(action);
  }
  else if (init.match(action)){
    const loggedUser = getLoggedUser();
    if (loggedUser) {
      store.dispatch(setUser(loggedUser));
    }
    return next(action);
  }

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

  return next(action);
};
