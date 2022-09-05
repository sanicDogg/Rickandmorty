import { setUser, toggleFavorites } from "../../user";

export const LSMiddleware = (store) => (next) => (action) => {

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (setUser.match(action)) {
    const newUser = action.payload;

    if (!users.hasOwnProperty(newUser.username)) {
      users[newUser.username] = newUser;
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("authed", JSON.stringify(newUser));
  }

  if (toggleFavorites.match(action)) {
    const authedUser = users[store.getState().user.userData.username];
    let favorites = authedUser.favorites || {};

    favorites[action.payload] = true;
    localStorage.setItem("users", JSON.stringify(users));
  }

  next(action);
};
