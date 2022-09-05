export function getLoggedUser() {
  const nameOfAuthedUser = localStorage.authed ? JSON.parse(localStorage.authed) : "";

  if (nameOfAuthedUser) {
    const users = JSON.parse(localStorage.users);
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
