
import cloneDeep from "lodash/cloneDeep";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../features";
import { authenticate, isUsernameExists, LOGIN_FORM, REGISTER_FORM } from "../utils";

const handleRegisterSubmit = (username, password, currUser) => {
  if (isUsernameExists(username)) {
    alert("Логин уже занят. Придумайте другой");
    return;
  }

  const userCopy = cloneDeep(currUser);

  userCopy.username = username;
  userCopy.password = password;

  return userCopy;
};

const handleLoginSubmit = (username, password) => {
  if (!isUsernameExists(username)) {
    alert(
      "Пользователь с таким логином не найден. Попробуйте другой или зарегистрируйтесь"
    );
    return;
  }
  const authenticatedUser = authenticate(username, password);
  if (!authenticatedUser) alert("Неверная пара логин/пароль");
  return authenticatedUser || null;
};

export function useAuthForm(type) {
  const [currUser, setCurrUser] = useState(useSelector(selectUser));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleUsernameType = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordType = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      const errorText = username ? `Поле "Пароль" обязательно для заполнения` :
        password ? `Поле "Логин" обязательно для заполнения` : null;
      alert(errorText || "Поля обязательны для заполнения");
      return;
    }
    const user = type === LOGIN_FORM
      ? handleLoginSubmit(username, password)
      : type === REGISTER_FORM
        ? handleRegisterSubmit(username, password, currUser)
        : null;
    if (user === null) return;
    dispatch(setUser(user));
    setCurrUser(user);
  }

  return  {
    handleUsernameType, handlePasswordType, handleSubmit
  }
}