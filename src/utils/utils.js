export function getLoggedUser() {
  const nameOfAuthedUser = localStorage.getItem("authed") ? JSON.parse(localStorage.getItem("authed")) : "";

  if (nameOfAuthedUser) {
    const users = JSON.parse(localStorage.getItem("users"));
    return users[nameOfAuthedUser];
  }

  return nameOfAuthedUser;
}

export function toggleObjectField(object, property) {
  if (object.hasOwnProperty(property)) {
    delete object[property];
  } else {
    object[property] = true;
  }
}

export function isUsernameExists(username) {
  const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

  return users.hasOwnProperty(username);
}

export function authenticate(username, password) {
  if (!isUsernameExists(username)) return false;
  const user = JSON.parse(localStorage.getItem("users"))[username];

  if (username === user.username && password === user.password) {
    return user;
  }
}

export const LOGIN_FORM = "LOGIN_FORM";
export const REGISTER_FORM = "REGISTER_FORM";